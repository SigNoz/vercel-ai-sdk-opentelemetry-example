import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import logger from '../../../lib/logging'
import { SeverityNumber } from '@opentelemetry/api-logs';
import { context, trace } from '@opentelemetry/api';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();


  const systemInstruction = {
    role: 'system',
    content: 'You are a helpful and concise assistant specialized in technical support and documentation for product X. The user will ask questions about the product, and you should provide clear and concise answers. You should make up answers based on the context of the conversation.',
  };

  const hasSystemInstruction = messages.some(
    (msg: any) => msg.role === 'system'
  );

  if (!hasSystemInstruction) {
    messages.unshift(systemInstruction);
  }

  const userMessage = messages
    .slice()
    .reverse()
    .find((msg: any) => msg.role === 'user')?.content ?? '[No user message found]';

  logger.emit({
    severityNumber: SeverityNumber.INFO,
    severityText: 'INFO',
    body: 'Received a POST request with user input',
    attributes: {
      endpoint: '/api/chat',
      userMessage, // Log the actual user message
     
    },
  });

  const specificMessages = [
    'Tell me about product X',
    'What are some tips for using this app?',
    'How many users do you have?',
    'Where can I find help documentation?',
  ];

  if (specificMessages.includes(userMessage)) {
    logger.emit({
      severityNumber: SeverityNumber.INFO,
      severityText: 'INFO',
      body: `User asked intial question: "${userMessage}"`,
      attributes: {
        endpoint: '/api/chat',
        "starterMessage" :userMessage,
      },
    });
  }

  const result = streamText({
    model: openai('gpt-4.1-nano'),
    messages,
    experimental_telemetry: { isEnabled: true },
  });

  
  logger.emit({
    severityNumber: SeverityNumber.INFO,
    severityText: 'INFO',
    body: 'Received a Response from AI',
    attributes: {
      endpoint: '/api/chat',
    },
  });

  return result.toDataStreamResponse();
}