// app/apps/scoorly/layout.js
import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import ClientWrapper from "@/components/ClientWrapper";
import ClientLayout from "@/components/LayoutClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = getSEOTags({
  title: 'Scoorly - Test Prep Platform',
});

export default function ScoorlyLayout({ children }) {
  return (
    <div className="scoorly-layout">
      <ClientLayout>
        <ClientWrapper />
        <Header />
        <main>{children}</main>
        <Footer />
      </ClientLayout>
    </div>
  );
}