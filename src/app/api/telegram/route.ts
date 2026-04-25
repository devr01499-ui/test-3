import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { formType, ...formData } = data;

    // Use environment variables or fallback to provided credentials to ensure it "always works"
    const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8687398510:AAFRpw9NjP4D5dB3cWP68bfQe7ZsCbro9yk';
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID || '1564118457';

    // Construct the message with HTML formatting (more robust against special characters like underscores)
    let message = `<b>🚀 New Form Submission</b>\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `<b>📁 Type:</b> ${formType || 'General'}\n\n`;
    
    for (const [key, value] of Object.entries(formData)) {
      if (value && (typeof value === 'string' || typeof value === 'number')) {
        const strValue = String(value).trim();
        if (strValue !== '') {
          // Clean up keys for display
          const label = key
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, str => str.toUpperCase());
          
          // Escape HTML special characters in user input
          const escapedValue = strValue
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
          
          message += `<b>📍 ${label}:</b>\n${escapedValue}\n\n`;
        }
      } else if (Array.isArray(value) && value.length > 0) {
        const label = key.charAt(0).toUpperCase() + key.slice(1);
        message += `<b>📍 ${label}:</b>\n${value.join(', ')}\n\n`;
      }
    }
    
    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `<b>🕒 Time:</b> ${new Date().toLocaleString()}\n`;

    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Telegram API Response Error:', result);
      return NextResponse.json({ success: false, error: result.description || 'Telegram API failure' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
