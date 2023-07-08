import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// export async function POST(request) {
//   try {
//     console.log(request);
//     const { name, phone, email, subject, message } = request.body.data;
//     console.log(name, phone, email, subject, message);

//     if (!name || !phone || !email || !subject || !message) {
//       throw new Error('Missing required fields');
//     }

//     const transporter = nodemailer.createTransport({
//       service: 'zoho',
//       host: 'smtp.zoho.in',
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.NEXT_PUBLIC_EMAIL,
//         pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
//       },
//     });

//     const mailOption = {
//       from: email,
//       to: process.env.NEXT_PUBLIC_EMAIL,
//       subject: subject,
//       html: `
//         <h3>Hello Augustine</h3>
//         <ul>
//           <li>title: ${subject}</li>
//           <li>message: ${message}</li>
//         </ul>
//       `,
//     };

//     await transporter.sendMail(mailOption);

//     return NextResponse.json(
//       { message: 'Email Sent Successfully' },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error('Error sending email:', error);

//     return NextResponse.json(
//       { message: 'Failed to Send Email' },
//       { status: 500 }
//     );
//   }
// }

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      console.log(req);
      const { name, phone, email, subject, message } = req.body;
      console.log(name, phone, email, subject, message);
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
      return NextResponse.json(
        { message: 'Email Sent Successfully' },
        { status: 200 }
      );
    } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { message: 'Failed to Send Email' },
        { status: 500 }
      );
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
