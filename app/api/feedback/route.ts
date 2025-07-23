import { NextResponse } from 'next/server';
import logger from '../../../lib/logging';

export async function POST(req: Request) {
  try {
    const { messageId, feedback } = await req.json();

    // Log the feedback
    logger.emit({
      severityNumber: 1, // INFO
      severityText: 'INFO',
      body: 'User feedback received',
      attributes: {
        messageId,
        feedback,
      },
    });

    // You can also store this feedback in a database if needed
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error handling feedback:', error);
    return NextResponse.json({ success: false, error: 'Failed to process feedback' }, { status: 500 });
  }
}