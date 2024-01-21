import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jose David | Full Stack Developer | Machine Learning Developer',
  description:
    'Empowering digital innovation through a fusion of Full Stack and Machine Learning expertise. Elevate your projects with seamless web development and cutting-edge machine learning solutions. Unleash the potential of technology with our versatile development skills.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
