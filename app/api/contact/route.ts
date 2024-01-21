import { NextApiRequest, NextApiResponse } from 'next';
import { ContactRequest } from '../../utils/definitions';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { name, phone, email, subject, message }: ContactRequest = req.body;
      if (!name || !phone || !email || !subject || !message) {
        throw new Error('Missing required fields');
      }
      const transporter = nodemailer.createTransport({
        service: 'zoho',
        host: 'smtp.zoho.in',
        port: 465,
        secure: true,
        auth: {
          user: process.env.NEXT_PUBLIC_EMAIL,
          pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
        },
      });
      const mailOption = {
        from: email,
        to: process.env.NEXT_PUBLIC_EMAIL,
        subject: subject,
        html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Notification</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
          }
          h3 {
            color: #333;
          }
          ul {
            list-style-type: none;
            padding: 0;
          }
          li {
            margin-bottom: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h3>Hello JD,</h3>
          <p>You have received a new message:</p>
          <ul>
            <li><strong>Title:</strong> ${subject}</li>
            <li><strong>Phone Number:</strong> ${phone}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Subject:</strong> ${subject}</li>
            <li><strong>Message:</strong> ${message}</li>
          </ul>
        </div>
      </body>
      </html>
            `,
      };
      await transporter.sendMail(mailOption);
      return res.status(200).json({ message: 'Email Sent Successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to Send Email' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed!' });
  }
}
