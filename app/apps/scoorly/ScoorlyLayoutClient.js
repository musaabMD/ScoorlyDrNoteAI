"use client"

import { usePathname } from 'next/navigation';
import ClientWrapper from "@/components/ClientWrapper";
import ClientLayout from "@/components/LayoutClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ScoorlyLayoutClient({ children }) {
  const pathname = usePathname();
  const isQuizPage = pathname.includes('/quiz');

  return (
    <div className="scoorly-layout">
      <ClientLayout>
        <ClientWrapper />
        {!isQuizPage && <Header />}
        <main>{children}</main>
        <Footer />
      </ClientLayout>
    </div>
  );
}