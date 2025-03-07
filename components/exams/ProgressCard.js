"use client"

import Link from 'next/link';

export default function ProgressCard({ exam }) {
  if (!exam) return null;
  
  // Safely access progress or use defaults
  const progress = exam.progress || { completed: 0, score: 0 };
  const passingScore = parseInt(exam.passingScore) || 70;
  
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8 border border-slate-200 dark:border-slate-700 shadow-sm">
      <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Your Progress</h2>
      
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-slate-600 dark:text-slate-400">Completed Questions</span>
          <span className="text-slate-900 dark:text-white font-medium">{progress.completed} / {exam.questions}</span>
        </div>
        <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500" 
            style={{ width: `${(progress.completed / exam.questions) * 100}%` }}
          ></div>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-slate-600 dark:text-slate-400">Current Score</span>
          <span className="text-slate-900 dark:text-white font-medium">{progress.score}%</span>
        </div>
        <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <div 
            className={`h-full ${progress.score >= passingScore ? 'bg-green-500' : 'bg-yellow-500'}`}
            style={{ width: `${progress.score}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2 text-xs text-slate-500 dark:text-slate-400">
          <span>0%</span>
          <span>Passing: {exam.passingScore}</span>
          <span>100%</span>
        </div>
      </div>
      
      <div className="mt-6">
        <Link 
          href={`/apps/scoorly/exams/${exam.category}/${exam.id}/quiz?mode=resume&lastQuestion=${progress.completed}`}
          className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-center inline-block"
        >
          Continue Practice
        </Link>
      </div>
    </div>
  );
}