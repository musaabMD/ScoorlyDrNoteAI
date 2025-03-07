"use client";
import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  
  // setIsOpen(false) when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);
  
  const isdrNote = pathname.includes('/apps/drnote');
  const appName = isdrNote ? 'DrNote' : 'Scoorly';
  const logoLetter = isdrNote ? 'D' : 'S';
  
  // Base paths for each app
  const basePath = isdrNote ? '/apps/drnote' : '/apps/scoorly';
  
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={basePath} className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
            <span className="text-white font-bold text-xl">{logoLetter}</span>
          </div>
          <span className="font-bold text-xl text-gray-900">{appName}</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href={`${basePath}/about`}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            About
          </Link>
          
          {/* Always show direct pricing link regardless of app */}
          <Link
            href={`${basePath}/pricing`}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Pricing
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link
              href={`${basePath}/login`}
              className="text-gray-900 hover:text-blue-600 font-medium transition-colors"
            >
              Log in
            </Link>
            <Link
              href={`${basePath}/signup`}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Sign up free
            </Link>
            <Link
              href={`${basePath}/upgrade`}
              className="px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-lg hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              ✨ Upgrade
            </Link>
          </div>
        </nav>
        
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
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden py-4 px-4 bg-gray-50 border-t border-gray-200">
          <nav className="flex flex-col space-y-4">
            <Link
              href={`${basePath}/about`}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
            
            {/* Simple pricing link for mobile too */}
            <Link
              href={`${basePath}/pricing`}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pricing
            </Link>
            
            <div className="pt-4 border-t border-gray-200 flex flex-col space-y-4">
              <Link
                href={`${basePath}/login`}
                className="text-gray-900 hover:text-blue-600 font-medium transition-colors"
              >
                Log in
              </Link>
              <Link
                href={`${basePath}/signup`}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
              >
                Sign up free
              </Link>
              <Link
                href={`${basePath}/upgrade`}
                className="px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-lg hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-center"
              >
                ✨ Upgrade
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;