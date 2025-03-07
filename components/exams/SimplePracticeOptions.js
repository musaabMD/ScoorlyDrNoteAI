"use client"

import React from 'react';
import Link from 'next/link';
import { PlayCircle, BookOpen } from 'lucide-react';

export default function SimplePracticeOptions({ exam }) {
  if (!exam) return null;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
      <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Start Practicing</h2>
      
      <div className="grid gap-4 sm:grid-cols-2">
        <Link 
          href={`/apps/scoorly/exams/${exam.category}/${exam.id}/quiz?mode=study`}
          className="flex items-center p-4 rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
        >
          <div className="mr-3">
            <BookOpen className="h-5 w-5" />
          </div>
          <div className="text-left">
            <div className="font-medium">Study Mode</div>
            <div className="text-sm opacity-80">Learn with immediate feedback</div>
          </div>
        </Link>

        <Link 
          href={`/apps/scoorly/exams/${exam.category}/${exam.id}/quiz?mode=self-assessment`}
          className="flex items-center p-4 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
        >
          <div className="mr-3">
            <PlayCircle className="h-5 w-5" />
          </div>
          <div className="text-left">
            <div className="font-medium">Self Assessment</div>
            <div className="text-sm opacity-80">Full exam simulation</div>
          </div>
        </Link>
      </div>
    </div>
  );
}