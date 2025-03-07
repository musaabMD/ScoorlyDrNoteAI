// components/exams/HomeExamCategoryCard.js
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, Lock } from 'lucide-react';

export default function HomeExamCategoryCard({ category, isExpanded, onToggle }) {
  return (
    <div 
      className={`rounded-xl overflow-hidden border ${category.border}`}
    >
      {/* Category Header - Clickable */}
      <button 
        onClick={() => onToggle(category.id)}
        className={`w-full flex items-center justify-between p-5 ${category.color} text-left`}
      >
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm">
            {category.icon}
          </div>
          <div>
            <h3 className="font-semibold text-xl text-slate-900 dark:text-white">{category.name}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {category.exams.length} certification exams
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-600 dark:text-slate-400">
            {isExpanded ? 
              <ChevronDown className="h-5 w-5" /> : 
              <ChevronRight className="h-5 w-5" />
            }
          </span>
        </div>
      </button>
      
      {/* Expanded Content - Sub Exams */}
      {isExpanded && (
        <div className={`bg-gradient-to-b ${category.gradient} p-5`}>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            {category.exams.map((exam) => (
              <Link 
                href={exam.premium ? "/apps/scoorly/subscribe" : `/apps/scoorly/exams/${category.id}/${exam.id}`}
                key={exam.id}
                className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all relative group"
              >
                {exam.premium && (
                  <div className="absolute top-3 right-3 bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 text-xs font-medium px-2 py-1 rounded-full flex items-center">
                    <Lock className="h-3 w-3 mr-1" />
                    Premium
                  </div>
                )}
                <div className="flex items-center mb-3 gap-3">
                  <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-700">
                    {exam.icon}
                  </div>
                  <h4 className="font-semibold text-lg text-slate-900 dark:text-white">{exam.name}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  {exam.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded-full">
                    {exam.questions} questions
                  </span>
                  <span className="text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform">
                    {exam.premium ? "Unlock" : "Start"} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-5 text-center">
            <Link
              href={`/apps/scoorly/exams/${category.id}`}
              className="inline-flex items-center font-medium text-purple-600 dark:text-purple-400 hover:underline"
            >
              View all {category.name} exams
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}