// components/Footer.js
"use client";

import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import { usePathname } from "next/navigation";

// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.resend.supportEmail, the link won't be displayed.
const Footer = () => {
  const pathname = usePathname();
  
  // Determine which logo path to use based on the current path
  let logoPath = "/icon.png"; // Default from public folder
  
  if (pathname.includes('/apps/drnote')) {
    logoPath = "/drnote-icon.png"; 
  } else {
    logoPath = "/scoorly-icon.png";
  }

  return (
    <footer className="bg-base-200 border-t border-base-content/10">
      {/* Your footer content */}
      <Image
        src={logoPath}
        alt={`${config.appName} logo`}
        className="w-8 h-8"
        width={32}
        height={32}
      />
      {/* Rest of your footer */}
    </footer>
  );
};

export default Footer;