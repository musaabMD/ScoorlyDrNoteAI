// app/apps/drnote/layout.js
import { Suspense } from 'react'
import { getSEOTags } from "@/libs/seo";
import ClientWrapper from "@/components/ClientWrapper";
import ClientLayout from "@/components/LayoutClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = getSEOTags({
  title: 'DrNote - Medical Test Prep',
});

export default function DrNoteLayout({ children }) {
  return (
    <div className="drnote-layout">
      <ClientLayout>
        <ClientWrapper />
        <Header />
        <main>{children}</main>
        <Footer />
      </ClientLayout>
    </div>
  );
}