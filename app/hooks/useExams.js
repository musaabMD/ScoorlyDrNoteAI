// hooks/useExams.js
import { useState, useEffect } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { 
  Flame, 
  Ambulance, 
  HeartPulse, 
  Activity, 
  Clipboard, 
  Zap, 
  Shield,
  Stethoscope,
  Brain,
  Hospital,
  UserCheck,
  Book,
  Thermometer,
  Syringe,
  PenTool,
  Award
} from 'lucide-react';

/**
 * useExams - Custom hook to fetch exam data from Supabase
 * 
 * Features:
 * - Fetches exam categories and their associated exams
 * - Maps database data to component-ready format with icons
 * - Provides loading and error states
 * - Formats the data for use with ExamCategoryCard components
 *
 * @param {Object} options - Optional configuration
 * @param {boolean} options.includeInactive - Whether to include inactive exams and categories
 * @returns {Object} { examCategories, loading, error, refetch }
 */
export default function useExams({ includeInactive = false } = {}) {
  const [examCategories, setExamCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Map icon strings from database to Lucide React components
  const iconMap = {
    'flame': <Flame className="h-5 w-5 text-orange-500" />,
    'ambulance': <Ambulance className="h-5 w-5 text-blue-500" />,
    'heartpulse': <HeartPulse className="h-5 w-5 text-purple-500" />,
    'activity': <Activity className="h-5 w-5 text-indigo-500" />,
    'clipboard': <Clipboard className="h-5 w-5 text-teal-500" />,
    'zap': <Zap className="h-5 w-5 text-yellow-500" />,
    'shield': <Shield className="h-5 w-5 text-green-500" />,
    'stethoscope': <Stethoscope className="h-6 w-6 text-blue-500" />,
    'brain': <Brain className="h-5 w-5 text-violet-500" />,
    'hospital': <Hospital className="h-5 w-5 text-teal-500" />,
    'usercheck': <UserCheck className="h-5 w-5 text-blue-500" />,
    'book': <Book className="h-6 w-6 text-purple-500" />,
    'thermometer': <Thermometer className="h-5 w-5 text-red-400" />,
    'syringe': <Syringe className="h-5 w-5 text-teal-600" />,
    'pentool': <PenTool className="h-5 w-5 text-cyan-500" />
  };

  // Map for category styling based on color names
  const categoryStyleMap = {
    'orange': {
      icon: <Flame className="h-6 w-6 text-orange-500" />,
      color: 'bg-orange-50 dark:bg-orange-950/30',
      border: 'border-orange-200 dark:border-orange-800',
      hover: 'hover:border-orange-300 dark:hover:border-orange-700',
      gradient: 'from-orange-50 to-white dark:from-orange-950/30 dark:to-transparent',
    },
    'blue': {
      icon: <Stethoscope className="h-6 w-6 text-blue-500" />,
      color: 'bg-blue-50 dark:bg-blue-950/30',
      border: 'border-blue-200 dark:border-blue-800',
      hover: 'hover:border-blue-300 dark:hover:border-blue-700',
      gradient: 'from-blue-50 to-white dark:from-blue-950/30 dark:to-transparent',
    },
    'red': {
      icon: <Shield className="h-6 w-6 text-red-500" />,
      color: 'bg-red-50 dark:bg-red-950/30',
      border: 'border-red-200 dark:border-red-800',
      hover: 'hover:border-red-300 dark:hover:border-red-700',
      gradient: 'from-red-50 to-white dark:from-red-950/30 dark:to-transparent',
    },
    'purple': {
      icon: <Book className="h-6 w-6 text-purple-500" />,
      color: 'bg-purple-50 dark:bg-purple-950/30',
      border: 'border-purple-200 dark:border-purple-800',
      hover: 'hover:border-purple-300 dark:hover:border-purple-700',
      gradient: 'from-purple-50 to-white dark:from-purple-950/30 dark:to-transparent',
    },
    // Default fallback
    'default': {
      icon: <Award className="h-6 w-6 text-slate-500" />,
      color: 'bg-slate-50 dark:bg-slate-950/30',
      border: 'border-slate-200 dark:border-slate-800',
      hover: 'hover:border-slate-300 dark:hover:border-slate-700',
      gradient: 'from-slate-50 to-white dark:from-slate-950/30 dark:to-transparent',
    }
  };

  // Helper to get icon component from icon name
  const getIconComponent = (iconName, defaultClass = "h-5 w-5 text-blue-500") => {
    if (!iconName) return <Shield className={defaultClass} />;
    
    const IconComponent = iconMap[iconName.toLowerCase()];
    if (IconComponent) return IconComponent;
    
    return <Shield className={defaultClass} />;
  };

  // Function to fetch the data
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      );
      
      // First fetch the categories
      const { data: categoriesData, error: categoriesError } = await supabase
        .from('exam_categories')
        .select('*')
        .eq('is_active', includeInactive ? undefined : true)
        .order('display_order', { ascending: true });
      
      if (categoriesError) throw categoriesError;
      
      // Then fetch all exams
      const { data: examsData, error: examsError } = await supabase
        .from('exams')
        .select('*')
        .eq('is_active', includeInactive ? undefined : true)
        .eq('is_category', false)
        .order('display_order', { ascending: true });
      
      if (examsError) throw examsError;
      
      // Define question counts for specific exams or fetch from another table
      // In a real app, this might come from the database as well
      const questionCounts = {
        'firefighter-1-2': 1000,
        'ibsc-ccp-c': 400,
        'ibsc-fp-c': 1000,
        'ibsc-tp-c': 400,
        'nremt-aemt': 900,
        'nremt-emr': 500,
        'nremt-emt': 1030,
        'nremt-paramedic': 1290,
      };
      
      // Format the data into our expected structure
      const formattedCategories = categoriesData.map(category => {
        // Find exams for this category
        const categoryExams = examsData.filter(exam => 
          exam.category_id === category.id
        );
        
        // Get styling from our map or use defaults
        const styling = categoryStyleMap[category.color] || categoryStyleMap.default;
        
        return {
          id: category.slug,
          name: category.name,
          description: category.description || `Certification exams for ${category.name} professionals`,
          icon: styling.icon,
          color: styling.color,
          border: styling.border,
          hover: styling.hover,
          gradient: styling.gradient,
          exams: categoryExams.map(exam => ({
            id: exam.slug,
            name: exam.name,
            questions: questionCounts[exam.slug] || 500, // Fallback to 500 questions
            icon: getIconComponent(exam.icon),
            description: exam.description || `${exam.name} certification exam`,
            premium: exam.is_premium || false,
          }))
        };
      });
      
      setExamCategories(formattedCategories);
    } catch (err) {
      console.error('Error fetching exam data:', err);
      setError(err.message || 'Failed to load exam data');
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, [includeInactive]);

  return {
    examCategories,
    loading,
    error,
    refetch: fetchData
  };
}