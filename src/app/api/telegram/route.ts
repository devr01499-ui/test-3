import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { formType, ...formData } = data;

    const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_TOKEN || !CHAT_ID) {
      console.error('Missing Telegram configuration');
      return NextResponse.json({ success: false, error: 'Server configuration error' }, { status: 500 });
    }

    // Construct the message with better formatting
    let message = `🚀 *New Form Submission*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `📁 *Type:* ${formType || 'General'}\n\n`;
    
    for (const [key, value] of Object.entries(formData)) {
      if (value && typeof value === 'string' && value.trim() !== '') {
        // Clean up keys for display (e.g., camelCase to Title Case)
        const label = key
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, str => str.toUpperCase());
        
        message += `📍 *${label}:*\n${value}\n\n`;
      } else if (Array.isArray(value) && value.length > 0) {
        message += `📍 *${key.charAt(0).toUpperCase() + key.slice(1)}:*\n${value.join(', ')}\n\n`;
      }
    }
    
    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `🕒 *Time:* ${new Date().toLocaleString()}\n`;

    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API Response Error:', errorData);
      return NextResponse.json({ success: false, error: 'Telegram API failure' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
