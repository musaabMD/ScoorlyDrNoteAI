// app/apps/scoorly/layout.js
import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import ClientWrapper from "@/components/ClientLayoutWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = getSEOTags({
  title: 'Scoorly - Test Prep Platform',
  // Add other metadata
});

export default function ScoorlyLayout({ children }) {
  return (
    <>
      <ClientWrapper />
      <div data-theme={config.colors.theme}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}