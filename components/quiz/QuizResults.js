"use client"

import Link from 'next/link';
import { CheckCircle, AlertTriangle, Home } from 'lucide-react';

export default function QuizResults({
  category,
  examId,
  score,
  resetQuiz
}) {
  // Extract values from score object
  const { percentage, correct, total } = score;
  const passingPercentage = 70;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Quiz Completed!</h2>
        <p className="text-slate-600 dark:text-slate-400">
          You've completed the exam. Here's your score:
        </p>
      </div>
      
      <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg mb-6">
        <div className="text-center">
          <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            {percentage}%
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            {correct} correct out of {total} questions
          </p>
        </div>
        
        <div className="mt-6 h-3 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
          <div
            className={`h-full ${
              percentage >= passingPercentage
                ? 'bg-green-500'
                : percentage >= 50
                  ? 'bg-yellow-500'
                  : 'bg-red-500'
            }`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        
        <div className="mt-4 flex justify-between text-sm text-slate-500 dark:text-slate-400">
          <span>0%</span>
          <span>Passing: {passingPercentage}%</span>
          <span>100%</span>
        </div>
      </div>
      
      <div className="space-y-3 mb-6">
        {percentage >= passingPercentage ? (
          <div className="flex p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg">
            <CheckCircle className="h-5 w-5 mt-0.5 mr-3" />
            <div>
              <p className="font-medium">Congratulations!</p>
              <p>You've passed the exam with a score of {percentage}%.</p>
            </div>
          </div>
        ) : (
          <div className="flex p-4 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 rounded-lg">
            <AlertTriangle className="h-5 w-5 mt-0.5 mr-3" />
            <div>
              <p className="font-medium">Not quite there yet</p>
              <p>You need {passingPercentage}% to pass. Try again after reviewing the material.</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href={`/apps/scoorly/exams/${category}/${examId}`}
          className="py-2.5 px-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 text-center"
        >
          Back to Exam
        </Link>
        <button
          onClick={resetQuiz}
          className="py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
        >
          Retake Quiz
        </button>
        <Link
          href="/apps/scoorly/exams"
          className="py-2.5 px-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 text-center flex items-center justify-center"
        >
          <Home className="h-4 w-4 mr-2" />
          Back to All Exams
        </Link>
      </div>
    </div>
  );
}