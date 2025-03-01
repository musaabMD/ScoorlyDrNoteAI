// app/layout.js
import { Inter } from 'next/font/google';
import './globals.css'; // Make sure this exists

const font = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Loading...',
  description: 'Loading...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}