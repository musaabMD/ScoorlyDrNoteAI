// app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import config from "@/config";

const font = Inter({ subsets: ['latin'] });

export const viewport = {
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: 'Multi-Site Platform',
  description: 'Test prep platforms',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme={config.colors.theme} className={font.className}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}