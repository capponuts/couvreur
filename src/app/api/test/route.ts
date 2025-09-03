import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    message: 'API test fonctionne !',
    timestamp: new Date().toISOString(),
    env: {
      hasResendKey: !!process.env.RESEND_API_KEY,
      nodeEnv: process.env.NODE_ENV
    }
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    return NextResponse.json({ 
      message: 'POST test fonctionne !',
      receivedData: body,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json({ 
      error: 'Erreur parsing JSON',
      timestamp: new Date().toISOString()
    }, { status: 400 })
  }
}
