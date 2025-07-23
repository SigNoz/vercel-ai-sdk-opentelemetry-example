'use client';

import { useChat } from '@ai-sdk/react';
import { useState } from 'react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, append } = useChat();
  const [starterClicked, setStarterClicked] = useState(false);
  const [feedbackState, setFeedbackState] = useState<{ [key: string]: 'up' | 'down' | null }>({});

  const starterOptions = [
    'Tell me about product X',
    'What are some tips for using this app?',
    'How many users do you have?',
    'Where can I find help documentation?',
  ];

  const handleStarterClick = async (text: string) => {
    setStarterClicked(true);
    await append({ role: 'user', content: text });
  };

  const handleFeedback = async (messageId: string, feedback: 'up' | 'down') => {
    try {
      // Send feedback to the server
      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messageId, feedback }),
      });

      // Update feedback state
      setFeedbackState(prev => ({ ...prev, [messageId]: feedback }));

      // Send a message to the LLM based on feedback
      if (feedback === 'up') {
        await append({
          role: 'user',
          content: 'Send 3 follow up questions that I could ask that would be useful. send the questions only',
        });
      } else if (feedback === 'down') {
        await append({
          role: 'user',
          content: 'Regenerate and change your most recent response. I wasnt quite happy with that response. say nothing else except for the regenerated response',
        });
      }
    } catch (error) {
      console.error('Failed to send feedback:', error);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto px-4">
      {/* Message display */}
      {messages
        .filter(
          message =>
            message.content !==
              'Send 3 follow up questions that I could ask that would be useful. send the questions only' &&
            message.content !==
              'Regenerate and change your most recent response. I wasnt quite happy with that response. say nothing else except for the regenerated response'
        )
        .map(message => (
          <div key={message.id} className="mb-4">
            <div className="font-bold">
              {message.role === 'user' ? 'User' : 'AI'}:
            </div>
            <div className="whitespace-pre-wrap ml-2">
              {message.parts.map((part, i) => {
                if (part.type === 'text') {
                  return <div key={`${message.id}-${i}`}>{part.text}</div>;
                }
                return null;
              })}
            </div>
            {message.role === 'assistant' && (
              <div className="flex space-x-2 mt-2">
                <button
                  onClick={() => handleFeedback(message.id, 'up')}
                  className={`px-2 py-1 rounded shadow transition ${
                    feedbackState[message.id] === 'up'
                      ? 'bg-green-300 dark:bg-green-600'
                      : 'bg-green-100 dark:bg-green-800 hover:bg-green-200 dark:hover:bg-green-700'
                  }`}
                >
                  👍
                </button>
                <button
                  onClick={() => handleFeedback(message.id, 'down')}
                  className={`px-2 py-1 rounded shadow transition ${
                    feedbackState[message.id] === 'down'
                      ? 'bg-red-300 dark:bg-red-600'
                      : 'bg-red-100 dark:bg-red-800 hover:bg-red-200 dark:hover:bg-red-700'
                  }`}
                >
                  👎
                </button>
              </div>
            )}
          </div>
        ))}

      {/* Starter Options */}
      {!starterClicked && (
        <div className="mb-6 space-y-2">
          {starterOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleStarterClick(option)}
              className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full shadow hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {/* Chat input */}
      <form onSubmit={handleSubmit} className="fixed bottom-0 w-full max-w-md px-4 pb-8">
        <input
          className="w-full p-2 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl dark:bg-zinc-900"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

