import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

/**
 * PageHeader - Consistent page header with back navigation
 * 
 * Features:
 * - Back button with configurable link
 * - Title and optional subtitle/description
 * - Optional icon display
 * - Color theme support
 *
 * @param {Object} props
 * @param {string} props.title - Page title
 * @param {string} props.description - Optional description text
 * @param {string} props.backLink - URL to navigate to when back button clicked
 * @param {string} props.backText - Text to show next to back arrow
 * @param {JSX.Element} props.icon - Optional icon to display
 * @param {string} props.backgroundColor - Background color CSS class
 * @param {string} props.borderColor - Border color CSS class
 * @param {string} props.textColor - Text color CSS class for subtitle
 * @returns {JSX.Element}
 */
export default function PageHeader({
  title,
  description,
  backLink,
  backText = "Back",
  icon,
  backgroundColor = "bg-slate-50 dark:bg-slate-900",
  borderColor = "border-slate-200 dark:border-slate-700",
  textColor = "text-slate-600 dark:text-slate-400"
}) {
  return (
    <div className={`${backgroundColor} py-8 border-b ${borderColor}`}>
      <div className="max-w-5xl mx-auto px-4">
        {backLink && (
          <div className="mb-6">
            <Link 
              href={backLink} 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              {backText}
            </Link>
          </div>
        )}
        
        <div className="flex items-center mb-4">
          {icon && (
            <div className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-sm mr-4">
              {icon}
            </div>
          )}
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
              {title}
            </h1>
            {description && (
              <p className={textColor}>
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}