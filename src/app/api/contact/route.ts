import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'sslawoffice01@gmail.com'

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, area, message } = await req.json()

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Send notification to law office
    await resend.emails.send({
      from: 'Sangam & Sagar Website <onboarding@resend.dev>',
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `New Consultation Request — ${area || 'General'} | ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Georgia, serif; background: #0a0e1a; color: #f5f0e8; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
            .header { border-bottom: 1px solid rgba(201,168,76,0.3); padding-bottom: 24px; margin-bottom: 32px; }
            .logo { font-size: 22px; font-weight: 700; color: #c9a84c; letter-spacing: 1px; }
            .subtitle { font-size: 12px; color: rgba(245,240,232,0.5); letter-spacing: 3px; text-transform: uppercase; margin-top: 4px; }
            .badge { display: inline-block; background: rgba(201,168,76,0.15); border: 1px solid rgba(201,168,76,0.3); color: #c9a84c; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; padding: 4px 12px; border-radius: 20px; margin-bottom: 24px; }
            .field { margin-bottom: 20px; padding: 16px; background: rgba(255,255,255,0.04); border: 1px solid rgba(201,168,76,0.15); border-radius: 4px; }
            .field-label { font-size: 10px; letter-spacing: 3px; text-transform: uppercase; color: rgba(245,240,232,0.4); margin-bottom: 6px; }
            .field-value { font-size: 16px; color: #f5f0e8; }
            .message-box { padding: 20px; background: rgba(255,255,255,0.04); border: 1px solid rgba(201,168,76,0.15); border-radius: 4px; margin-top: 16px; }
            .footer { margin-top: 32px; padding-top: 24px; border-top: 1px solid rgba(201,168,76,0.15); font-size: 12px; color: rgba(245,240,232,0.3); text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">Sangam & Sagar</div>
              <div class="subtitle">Law Office LLP — New Consultation Request</div>
            </div>
            
            <div class="badge">New Client Enquiry</div>
            
            <div class="field">
              <div class="field-label">Client Name</div>
              <div class="field-value">${name}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Phone</div>
              <div class="field-value">${phone}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Email</div>
              <div class="field-value">${email}</div>
            </div>
            
            ${area ? `
            <div class="field">
              <div class="field-label">Practice Area</div>
              <div class="field-value">${area}</div>
            </div>
            ` : ''}
            
            <div class="message-box">
              <div class="field-label">Message</div>
              <div class="field-value" style="margin-top:8px; line-height:1.7;">${message.replace(/\n/g, '<br>')}</div>
            </div>
            
            <div class="footer">
              This message was sent from the Sangam & Sagar Law Office website contact form.<br>
              Reply directly to this email to reach the client.
            </div>
          </div>
        </body>
        </html>
      `,
    })

    // Send confirmation to client
    await resend.emails.send({
      from: 'Sangam & Sagar Law Office <onboarding@resend.dev>',
      to: [email],
      subject: 'Consultation Request Received — Sangam & Sagar Law Office LLP',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Georgia, serif; background: #0a0e1a; color: #f5f0e8; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
            .header { text-align: center; border-bottom: 1px solid rgba(201,168,76,0.3); padding-bottom: 28px; margin-bottom: 32px; }
            .logo { font-size: 24px; font-weight: 700; color: #c9a84c; }
            .tagline { font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: rgba(245,240,232,0.4); margin-top: 4px; }
            h2 { font-size: 28px; font-weight: 700; color: #f5f0e8; text-align: center; margin: 0 0 12px; }
            p { font-size: 16px; color: rgba(245,240,232,0.7); line-height: 1.8; }
            .highlight { color: #c9a84c; }
            .info-box { background: rgba(201,168,76,0.08); border: 1px solid rgba(201,168,76,0.2); border-radius: 4px; padding: 24px; margin: 28px 0; }
            .info-row { display: flex; margin-bottom: 12px; }
            .info-label { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: rgba(245,240,232,0.4); width: 100px; flex-shrink: 0; padding-top: 3px; }
            .info-value { color: #f5f0e8; font-size: 15px; }
            .cta { text-align: center; margin: 32px 0; }
            .cta a { display: inline-block; background: linear-gradient(135deg, #c9a84c, #e8c660); color: #0a0e1a; font-weight: 700; font-size: 13px; letter-spacing: 2px; text-transform: uppercase; padding: 14px 32px; border-radius: 3px; text-decoration: none; }
            .footer { margin-top: 32px; padding-top: 24px; border-top: 1px solid rgba(201,168,76,0.15); text-align: center; }
            .footer p { font-size: 12px; color: rgba(245,240,232,0.25); }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">Sangam & Sagar</div>
              <div class="tagline">Law Office LLP</div>
            </div>
            
            <h2>Request Received, ${name.split(' ')[0]}</h2>
            <p style="text-align:center;">Thank you for reaching out. Your consultation request has been received and our legal team will review your matter shortly.</p>
            
            <div class="info-box">
              <div class="info-row">
                <div class="info-label">Name</div>
                <div class="info-value">${name}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Phone</div>
                <div class="info-value">${phone}</div>
              </div>
              ${area ? `<div class="info-row">
                <div class="info-label">Area</div>
                <div class="info-value">${area}</div>
              </div>` : ''}
            </div>
            
            <p>We typically respond within <span class="highlight">24 hours</span>. For urgent matters, please contact us directly:</p>
            
            <div class="cta">
              <a href="https://wa.me/919336065812">Chat on WhatsApp →</a>
            </div>
            
            <p style="text-align:center; font-size:14px; color:rgba(245,240,232,0.5);">
              📞 +91 87269 68088 &nbsp;|&nbsp; ✉ sslawoffice01@gmail.com
            </p>
            
            <div class="footer">
              <p>Sangam & Sagar Law Office LLP<br>Flat 1302, A1 Tower, Gomti Nagar, Lucknow 226010</p>
              <p style="margin-top:8px;">This is an automated confirmation. Please do not reply to this email.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
