import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, jobTitle, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Check environment variables
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || gmailUser;

    if (!gmailUser || !gmailAppPassword) {
      console.error('Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables.');
      return NextResponse.json(
        { error: 'Email service is not configured. Please try again later.' },
        { status: 500 }
      );
    }

    // Create Nodemailer transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    // Compose the email
    const mailOptions = {
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `New Contact: ${name}${jobTitle ? ` — ${jobTitle}` : ''}`,
      text: [
        `Name: ${name}`,
        jobTitle ? `Job Title: ${jobTitle}` : null,
        `Email: ${email}`,
        '',
        'Message:',
        message,
      ]
        .filter(Boolean)
        .join('\n'),
      html: `
        <div style="font-family: 'Inter', -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <div style="border-bottom: 2px solid #ff442b; padding-bottom: 20px; margin-bottom: 30px;">
            <h2 style="margin: 0; color: #36454F; font-size: 24px;">New Contact Form Submission</h2>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #888; font-size: 14px; width: 120px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #36454F; font-size: 14px;">${name}</td>
            </tr>
            ${
              jobTitle
                ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #888; font-size: 14px;">Job Title</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #36454F; font-size: 14px;">${jobTitle}</td>
            </tr>`
                : ''
            }
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #888; font-size: 14px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #36454F; font-size: 14px;">
                <a href="mailto:${email}" style="color: #ff442b; text-decoration: none;">${email}</a>
              </td>
            </tr>
          </table>
          
          <div style="background: #f9f9f9; padding: 24px; border-radius: 8px; margin-bottom: 30px;">
            <h3 style="margin: 0 0 12px 0; color: #36454F; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em;">Message</h3>
            <p style="margin: 0; color: #36454F; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="text-align: center; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="margin: 0; color: #aaa; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em;">
              Sent from your Portfolio Contact Form
            </p>
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
