"use client"

import { CheckCircle } from 'lucide-react';

export default function ExamTopics({ exam, colorTheme }) {
  if (!exam || !exam.topics) return null;
  
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8 border border-slate-200 dark:border-slate-700 shadow-sm">
      <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Exam Topics</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {exam.topics.map((topic, index) => (
          <div 
            key={index} 
            className="flex items-start p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
          >
            <div className={`p-1.5 rounded-full ${colorTheme.accent} mr-3 mt-0.5`}>
              <CheckCircle className="h-3.5 w-3.5 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-700 dark:text-slate-300 font-medium">{topic}</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  {/* Generate a random score between 70-100% for demo purposes */}
                  {Math.floor(Math.random() * 30) + 70}%
                </span>
              </div>
              <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500"
                  style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}