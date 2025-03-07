"use client"

import { X } from 'lucide-react';

export default function QuestionSidebar({
  questions,
  currentQuestionIndex,
  userAnswers,
  flaggedQuestions,
  goToQuestion,
  isVisible,
  onToggleSidebar
}) {
  return (
    <aside className={`fixed inset-0 z-20 transform ${isVisible ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 w-72 overflow-y-auto lg:block`}>
      <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
        <h2 className="font-semibold text-slate-900 dark:text-white">Questions</h2>
        <button 
          onClick={onToggleSidebar}
          className="p-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 lg:hidden"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="p-4 grid grid-cols-5 gap-2">
        {questions.map((_, index) => (
          <button
            key={index}
            className={`h-10 w-10 flex items-center justify-center rounded-lg font-medium 
              ${currentQuestionIndex === index ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300' : 
                userAnswers[index] !== null ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300' : 
                'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'}
              ${flaggedQuestions.includes(index) ? 'ring-2 ring-orange-400 dark:ring-orange-500' : ''}
            `}
            onClick={() => goToQuestion(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      
      <div className="p-4 border-t border-slate-200 dark:border-slate-700">
        <div className="flex items-center mb-4">
          <div className="h-4 w-4 bg-blue-100 dark:bg-blue-900 rounded mr-2"></div>
          <span className="text-sm text-slate-600 dark:text-slate-400">Current Question</span>
        </div>
        <div className="flex items-center mb-4">
          <div className="h-4 w-4 bg-green-100 dark:bg-green-900 rounded mr-2"></div>
          <span className="text-sm text-slate-600 dark:text-slate-400">Answered</span>
        </div>
        <div className="flex items-center">
          <div className="h-4 w-4 bg-slate-100 dark:bg-slate-700 rounded ring-2 ring-orange-400 dark:ring-orange-500 mr-2"></div>
          <span className="text-sm text-slate-600 dark:text-slate-400">Flagged</span>
        </div>
      </div>
    </aside>
  );
}