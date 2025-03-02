"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ButtonSignin from "./ButtonSignin";
import config from "@/config";

const Header = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  // setIsOpen(false) when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  // Logo path determination
  const logoPath = pathname.includes('/apps/drnote') 
    ? "/drnote-icon.png"
    : "/scoorly-icon.png";

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src={logoPath}
            alt="Logo"
            width={32}
            height={32}
            priority
          />
          <span className="font-bold text-xl">
            {pathname.includes('/apps/drnote') ? 'DrNote' : 'Scoorly'}
          </span>
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/pricing" className="hover:text-blue-600">Pricing</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <ButtonSignin />
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="4" y1="18" x2="20" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden py-4 px-4 bg-gray-50">
          <nav className="flex flex-col space-y-4">
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/pricing" className="hover:text-blue-600">Pricing</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;