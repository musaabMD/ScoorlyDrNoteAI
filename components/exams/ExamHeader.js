"use client"

import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function ExamHeader({ exam, colorTheme }) {
  if (!exam) return null;

  return (
    <div className={`${colorTheme.bg} border-b ${colorTheme.border} py-8`}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-6">
          <Link 
            href={`/apps/scoorly/exams/${exam.category}`} 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to {exam.categoryName}
          </Link>
        </div>
        
        {/* Centered hero icon */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="p-4 rounded-full bg-white dark:bg-slate-800 shadow-sm mb-4">
            {exam.icon}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
              {exam.name}
            </h1>
            <p className={`${colorTheme.text}`}>
              {exam.categoryName}
            </p>
          </div>
        </div>
        
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-center">
          {exam.description}
        </p>
      </div>
    </div>
  );
}