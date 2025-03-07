import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';
import SubExamCard from './SubExamCard';

/**
 * ExamCategoryCard - Expandable card displaying a category of exams
 *
 * Features:
 * - Collapsible/expandable category section
 * - Displays an icon, name, and count of exams
 * - Renders SubExamCard components when expanded
 * - Can be filtered based on search term
 *
 * @param {Object} props
 * @param {string} props.id - Category ID (used for routing)
 * @param {string} props.name - Category name
 * @param {string} props.description - Category description
 * @param {JSX.Element} props.icon - Icon component to display
 * @param {string} props.color - Background color class for the category
 * @param {string} props.border - Border color class for the category
 * @param {string} props.gradient - Gradient color class for the expanded section
 * @param {Array} props.exams - Array of exam objects for this category
 * @param {boolean} props.isExpanded - Whether the category is expanded
 * @param {Function} props.onToggle - Function to toggle expansion state
 * @returns {JSX.Element}
 */
export default function ExamCategoryCard({
  id,
  name,
  description,
  icon,
  color = 'bg-white dark:bg-slate-900',
  border = 'border-gray-100 dark:border-slate-800',
  gradient = 'from-white to-gray-50 dark:from-slate-900 dark:to-slate-950/90',
  exams = [],
  isExpanded = false,
  onToggle
}) {
  // Internal expansion state if no external control is provided
  const [internalExpanded, setInternalExpanded] = useState(false);
  // Use external expansion state if provided, otherwise use internal
  const expanded = onToggle ? isExpanded : internalExpanded;
  // Handle toggle click
  const handleToggle = () => {
    if (onToggle) {
      onToggle(id);
    } else {
      setInternalExpanded(!internalExpanded);
    }
  };

  return (
    <div className={`rounded-xl overflow-hidden border ${border} shadow-sm hover:shadow transition-all duration-200`}>
      {/* Category Header - Clickable */}
      <button
        onClick={handleToggle}
        className="w-full flex items-center justify-between p-5 bg-white dark:bg-slate-900 text-left"
        aria-expanded={expanded}
        aria-controls={`category-content-${id}`}
      >
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full shadow-sm text-blue-600 dark:text-blue-400">
            {icon}
          </div>
          <div>
            <h3 className="font-semibold text-xl text-gray-900 dark:text-white">{name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {exams.length} exams
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-full p-1">
            {expanded ?
              <ChevronDown className="h-5 w-5" /> :
              <ChevronRight className="h-5 w-5" />
            }
          </span>
        </div>
      </button>

      {/* Expanded Content - Sub Exams */}
      {expanded && (
        <div
          id={`category-content-${id}`}
          className={`bg-gradient-to-b ${gradient} p-5`}
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {exams.map((exam) => (
              <SubExamCard
                key={exam.id}
                categoryId={id}
                exam={exam}
              />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href={`/apps/scoorly/exams/${id}`}
              className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full transition-all duration-200 hover:bg-blue-100 dark:hover:bg-blue-900/30"
            >
              View all {name} exams
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}