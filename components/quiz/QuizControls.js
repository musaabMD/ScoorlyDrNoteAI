"use client"

import { ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react';

export default function QuizControls({
  currentQuestionIndex,
  totalQuestions,
  userAnswer,
  showExplanation,
  setShowExplanation,
  goToPreviousQuestion,
  goToNextQuestion,
  handleSubmitQuiz,
  allQuestionsAnswered
}) {
  return (
    <div className="flex justify-between items-center">
      <button
        onClick={goToPreviousQuestion}
        disabled={currentQuestionIndex === 0}
        className={`px-4 py-2 flex items-center rounded-lg border border-slate-300 dark:border-slate-700 ${
          currentQuestionIndex === 0
            ? 'text-slate-400 dark:text-slate-600 cursor-not-allowed'
            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
        }`}
      >
        <ChevronLeft className="h-5 w-5 mr-1" />
        Previous
      </button>
      
      <div className="flex gap-2">
        {userAnswer !== null && !showExplanation && (
          <button
            onClick={() => setShowExplanation(true)}
            className="px-4 py-2 flex items-center text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <HelpCircle className="h-5 w-5 mr-1" />
            Show Explanation
          </button>
        )}
        
        {currentQuestionIndex === totalQuestions - 1 ? (
          <button
            onClick={handleSubmitQuiz}
            disabled={!allQuestionsAnswered}
            className={`px-6 py-2 rounded-lg font-medium ${
              allQuestionsAnswered
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-600 cursor-not-allowed'
            }`}
          >
            Submit Quiz
          </button>
        ) : (
          <button
            onClick={goToNextQuestion}
            className="px-4 py-2 flex items-center text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Next
            <ChevronRight className="h-5 w-5 ml-1" />
          </button>
        )}
      </div>
    </div>
  );
}