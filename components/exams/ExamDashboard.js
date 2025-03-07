"use client"

import React from 'react';
import Link from 'next/link';
import { CheckCircle, Award, BookOpen } from 'lucide-react';

export default function ExamDashboard({ exam, colorTheme = 'blue' }) {
  if (!exam) return null;

  // Safely access progress or use defaults
  const progress = exam.progress || { completed: 0, score: 0 };
  const passingScore = parseInt(exam.passingScore) || 70;
  const isPassing = progress.score >= passingScore;

  // Generate topic scores - in a real app these would come from the backend
  const topicScores = exam.topics ? exam.topics.map(topic => ({
    name: topic,
    score: Math.floor(Math.random() * 30) + 70, // Random score 70-100%
    completed: Math.floor(Math.random() * 50) + 10 // Random completion count
  })) : [];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
      {/* Header with overall score */}
      <div className={`p-6 bg-${colorTheme}-50 dark:bg-${colorTheme}-900/20 border-b border-${colorTheme}-200 dark:border-${colorTheme}-800`}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">{exam.title || 'Exam Overview'}</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">Track your progress and performance across topics</p>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
            <Award className={`h-10 w-10 ${isPassing ? 'text-green-500' : 'text-yellow-500'}`} />
            <div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Overall Score</div>
              <div className={`text-2xl font-bold ${isPassing ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'}`}>
                {progress.score}%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="p-6 border-b border-slate-200 dark:border-slate-700">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
          <div>
            <h3 className="font-medium text-slate-900 dark:text-white">Your Progress</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Completed {progress.completed} of {exam.questions} questions
            </p>
          </div>
          
          <Link 
            href={`/apps/scoorly/exams/${exam.category}/${exam.id}/quiz`}
            className={`inline-flex items-center py-2 px-4 bg-${colorTheme}-600 hover:bg-${colorTheme}-700 text-white text-sm font-medium rounded-lg transition-colors`}
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Continue Practice
          </Link>
        </div>
        
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4 mb-1">
          <div 
            className={`h-4 rounded-full ${isPassing ? 'bg-green-500' : 'bg-yellow-500'}`}
            style={{ width: `${(progress.completed / exam.questions) * 100}%` }}
          />
        </div>
        
        <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
          <span>0%</span>
          <span>Passing: {exam.passingScore}%</span>
          <span>100%</span>
        </div>
      </div>

      {/* Topics */}
      <div className="p-6">
        <h3 className="font-medium text-slate-900 dark:text-white mb-4">Exam Topics</h3>
        
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {topicScores.map((topic, index) => (
            <div 
              key={index}
              className={`p-4 rounded-lg border border-${colorTheme}-200 dark:border-${colorTheme}-800 bg-white dark:bg-slate-800`}
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-slate-900 dark:text-white pr-2">{topic.name}</h4>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  topic.score >= passingScore ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 
                  'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                }`}>
                  {topic.score}%
                </div>
              </div>
              
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mb-1">
                <div 
                  className={`h-2 rounded-full ${
                    topic.score >= passingScore ? 'bg-green-500' : 'bg-yellow-500'
                  }`}
                  style={{ width: `${topic.score}%` }}
                />
              </div>
              
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-slate-600 dark:text-slate-400">{topic.completed} questions</span>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}