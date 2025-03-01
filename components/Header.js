// components/Header.js
"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ButtonSignin from "./ButtonSignin";
import config from "@/config";

const links = [
  { href: "/#pricing", label: "Pricing" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
];

const cta = <ButtonSignin extraStyle="btn-primary" />;

// Create a separate component for the mobile menu logic that uses searchParams
const HeaderClientPart = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  
  // setIsOpen(false) when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  return { isOpen, setIsOpen };
};

const Header = () => {
  const pathname = usePathname();
  
  // This doesn't use useSearchParams directly
  const { isOpen, setIsOpen } = HeaderClientPart();
  
  // Determine which logo path to use based on the current path
  let logoPath = "/icon.png"; // Default from public folder
  
  if (pathname.includes('/apps/drnote')) {
    logoPath = "/drnote-icon.png"; 
  } else {
    logoPath = "/scoorly-icon.png";
  }

  return (
    <header className="bg-base-200">
      {/* Rest of your header component */}
    </header>
  );
};

export default Header;