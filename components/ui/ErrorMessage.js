"use client"

import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

export default function ErrorMessage({ 
  title = "Error", 
  message = "An error occurred. Please try again later.", 
  linkText = "Go Back", 
  linkHref = "/"
}) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <AlertCircle className="h-16 w-16 text-slate-400 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{title}</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          {message}
        </p>
        <Link 
          href={linkHref}
          className="inline-block px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
}