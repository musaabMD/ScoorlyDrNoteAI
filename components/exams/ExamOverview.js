"use client"

import { Clock, Book, Award, CheckCircle } from 'lucide-react';

export default function ExamOverview({ exam }) {
  if (!exam) return null;
  
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8 border border-slate-200 dark:border-slate-700 shadow-sm">
      <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Exam Overview</h2>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center">
          <Clock className="h-5 w-5 text-blue-500 mr-3" />
          <div>
            <span className="block text-slate-900 dark:text-white font-medium">{exam.duration}</span>
            <span className="text-sm text-slate-500 dark:text-slate-400">Duration</span>
          </div>
        </div>
        <div className="flex items-center">
          <Book className="h-5 w-5 text-green-500 mr-3" />
          <div>
            <span className="block text-slate-900 dark:text-white font-medium">{exam.questions}</span>
            <span className="text-sm text-slate-500 dark:text-slate-400">Questions</span>
          </div>
        </div>
        <div className="flex items-center">
          <Award className="h-5 w-5 text-yellow-500 mr-3" />
          <div>
            <span className="block text-slate-900 dark:text-white font-medium">{exam.passingScore}</span>
            <span className="text-sm text-slate-500 dark:text-slate-400">Passing Score</span>
          </div>
        </div>
        <div className="flex items-center">
          <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
          <div>
            <span className="block text-slate-900 dark:text-white font-medium">{exam.attempts}</span>
            <span className="text-sm text-slate-500 dark:text-slate-400">Attempts</span>
          </div>
        </div>
      </div>
    </div>
  );
}