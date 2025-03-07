import { Award, Search } from 'lucide-react';

/**
 * ExamHero - Hero component for the exams page with search functionality
 * 
 * Features:
 * - Title and description
 * - Search input for filtering exams
 * - Consistent styling with main hero but simplified
 * 
 * @param {Object} props
 * @param {string} props.title - Main title text
 * @param {string} props.subtitle - Subtitle/description text
 * @param {string} props.searchTerm - Current search term value
 * @param {Function} props.setSearchTerm - Function to update search term
 * @param {string} props.searchPlaceholder - Placeholder text for search input
 * @returns {JSX.Element}
 */
export default function ExamHero({
  title = "Medical Certification Exams",
  subtitle = "Practice with thousands of questions across medical, nursing, and emergency fields",
  searchTerm = "",
  setSearchTerm,
  searchPlaceholder = "Find your exam..."
}) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-20 text-center">
        <div className="inline-flex p-3 mb-6 bg-white/20 rounded-full">
          <Award className="h-8 w-8" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
          {subtitle}
        </p>
        
        {/* Search */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300 h-5 w-5" />
          <input 
            type="text" 
            placeholder={searchPlaceholder} 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white/10 text-white rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>
      </div>
    </div>
  );
}