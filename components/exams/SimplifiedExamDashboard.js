"use client"

import React from 'react';
import Link from 'next/link';
import { CheckCircle, Award, BookOpen, BarChart2 } from 'lucide-react';

export default function SimplifiedExamDashboard({ exam, colorTheme = 'blue' }) {
  if (!exam) return null;

  // Safely access progress or use defaults
  const progress = exam.progress || { completed: 0, score: 0 };
  const passingScore = parseInt(exam.passingScore) || 70;
  const isPassing = progress.score >= passingScore;

  // Generate topic scores if not provided - in a real app these would come from the backend
  const topicScores = exam.topics ? exam.topics.map(topic => ({
    name: topic,
    score: Math.floor(Math.random() * 30) + 70, // Random score 70-100%
    completed: Math.floor(Math.random() * 20) + 5, // Random completion count
    total: Math.floor(Math.random() * 30) + 25 // Random total questions
  })) : [];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden w-full">
      {/* Header with overall stats */}
      <div className={`p-6 bg-${colorTheme}-50 dark:bg-${colorTheme}-900/20 border-b border-${colorTheme}-200 dark:border-${colorTheme}-800`}>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Performance Dashboard</h2>
          
          <Link 
            href={`/apps/scoorly/exams/${exam.category}/${exam.id}/quiz`}
            className={`inline-flex items-center py-2 px-4 bg-${colorTheme}-600 hover:bg-${colorTheme}-700 text-white text-sm font-medium rounded-lg transition-colors`}
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Continue Practice
          </Link>
        </div>
        
        {/* Progress stats in a single row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
            <div className="flex items-center mb-2">
              <Award className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Overall Score</span>
            </div>
            <div className="flex items-end">
              <span className={`text-2xl font-bold ${isPassing ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'}`}>
                {progress.score}%
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-500 ml-2 mb-1">
                Passing: {passingScore}%
              </span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
            <div className="flex items-center mb-2">
              <BarChart2 className="h-5 w-5 text-blue-500 mr-2" />
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Completion</span>
            </div>
            <div className="flex items-end">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {progress.completed}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-500 ml-2 mb-1">
                of {exam.questions} questions
              </span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
            <div className="flex items-center mb-2">
              <div className="h-5 w-5 mr-2 flex items-center justify-center">
                <div className="h-2.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full">
                  <div className="h-2.5 rounded-full bg-blue-500" style={{ width: `${(progress.completed / exam.questions) * 100}%` }} />
                </div>
              </div>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Progress</span>
            </div>
            <div className="flex items-end">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {Math.round((progress.completed / exam.questions) * 100)}%
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-500 ml-2 mb-1">
                completed
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Topics table */}
      <div className="p-6">
        <h3 className="font-medium text-slate-900 dark:text-white mb-4">Subject Performance</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-500 dark:text-slate-400">Subject</th>
                <th className="text-center py-3 px-4 text-sm font-medium text-slate-500 dark:text-slate-400">Completion</th>
                <th className="text-center py-3 px-4 text-sm font-medium text-slate-500 dark:text-slate-400">Score</th>
                <th className="text-center py-3 px-4 text-sm font-medium text-slate-500 dark:text-slate-400">Status</th>
              </tr>
            </thead>
            <tbody>
              {topicScores.map((topic, index) => (
                <tr 
                  key={index} 
                  className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/50"
                >
                  <td className="py-3 px-4">
                    <div className="font-medium text-slate-900 dark:text-white">{topic.name}</div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="inline-flex items-center">
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {topic.completed}/{topic.total}
                      </span>
                      <div className="ml-2 w-16 bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                        <div 
                          className="bg-blue-500 h-1.5 rounded-full" 
                          style={{ width: `${(topic.completed/topic.total) * 100}%` }} 
                        />
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      topic.score >= passingScore ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}>
                      {topic.score}%
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <CheckCircle className={`h-5 w-5 inline-block ${topic.score >= passingScore ? 'text-green-500' : 'text-yellow-500'}`} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}