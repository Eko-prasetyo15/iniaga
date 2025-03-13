import { NextRequest, NextResponse } from 'next/server';

const API_URL = `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/register`;

class CustomError extends Error {
  statusCode: number;
  
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    let result: any;
    const body = await req.json();
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    try {
      result = await response.json();
    } catch (jsonError) {
      throw new CustomError('Invalid JSON response from server', 502);
    }

    if (!response.ok) {
      throw new CustomError(result.message || 'Error dari API eksternal', response.status);
    }

    return NextResponse.json(result, { status: response.status });
  } catch (error: unknown) {
    let statusCode = 500;
    let errorMessage = 'Internal Server Error';

    if (error instanceof SyntaxError) {
      statusCode = 400;
      errorMessage = 'Invalid JSON format';
    } else if (error instanceof CustomError) {
      statusCode = error.statusCode;
      errorMessage = error.message;
    } else if (error instanceof Error) {
      if (error.message.includes('validation failed')) {
        statusCode = 422;
        errorMessage = 'Unprocessable Entity: ' + error.message;
      } else if (error.message.includes('Failed to fetch') || error.message.includes('network error')) {
        statusCode = 502;
        errorMessage = 'Failed to reach external API';
      }
    }

    return NextResponse.json({ message: errorMessage, error: (error as Error).message }, { status: statusCode });
  }
}