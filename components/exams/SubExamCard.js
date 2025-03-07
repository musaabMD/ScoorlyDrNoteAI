import Link from 'next/link';
import { Lock } from 'lucide-react';

/**
 * SubExamCard - Card component for individual exam within a category
 * 
 * Features:
 * - Displays exam name, icon, description, and question count
 * - Handles premium/locked status
 * - Links to exam details or subscription page if premium
 * 
 * @param {Object} props
 * @param {string} props.categoryId - Parent category ID
 * @param {Object} props.exam - Exam data object
 * @param {string} exam.id - The exam ID
 * @param {string} exam.name - Exam name
 * @param {number} exam.questions - Number of questions in the exam
 * @param {JSX.Element} exam.icon - Icon component to display
 * @param {string} exam.description - Short description of the exam
 * @param {boolean} exam.premium - Whether this is a premium/locked exam
 * @returns {JSX.Element}
 */
export default function SubExamCard({ categoryId, exam }) {
  const { id, name, questions, icon, description, premium = false } = exam;
  
  return (
    <Link 
      href={premium ? "/apps/scoorly/subscribe" : `/apps/scoorly/exams/${categoryId}/${id}`} 
      className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all relative"
    >
      {premium && (
        <div className="absolute top-3 right-3 bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 text-xs font-medium px-2 py-1 rounded-full flex items-center">
          <Lock className="h-3 w-3 mr-1" />
          Premium
        </div>
      )}
      
      <div className="flex items-center mb-2 gap-2">
        <div className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-700">
          {icon}
        </div>
        <h4 className="font-medium text-slate-900 dark:text-white">{name}</h4>
      </div>
      
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-2">
        {description}
      </p>
      
      <div className="flex justify-between items-center text-xs">
        <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full">
          {questions} questions
        </span>
        <span className="text-blue-600 dark:text-blue-400">
          {premium ? "Unlock" : "View"} →
        </span>
      </div>
    </Link>
  );
}