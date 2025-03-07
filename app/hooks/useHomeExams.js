// hooks/useHomeExams.js
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
  Book,
  Hospital,
  UserCheck,
  Thermometer,
  Syringe,
  PenTool
} from 'lucide-react';

export default function useHomeExams() {
  const [examCategories, setExamCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Map icon strings to components
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

  // Map for category styling
  const categoryStyleMap = {
    'orange': {
      icon: <Flame className="h-6 w-6 text-orange-500" />,
      color: 'bg-orange-50 dark:bg-orange-950/30',
      border: 'border-orange-200 dark:border-orange-800',
      gradient: 'from-orange-50 to-white dark:from-orange-950/30 dark:to-transparent',
    },
    'teal': {
      icon: <Stethoscope className="h-6 w-6 text-teal-500" />,
      color: 'bg-teal-50 dark:bg-teal-950/30',
      border: 'border-teal-200 dark:border-teal-800',
      gradient: 'from-teal-50 to-white dark:from-teal-950/30 dark:to-transparent',
    },
    'red': {
      icon: <Shield className="h-6 w-6 text-red-500" />,
      color: 'bg-red-50 dark:bg-red-950/30',
      border: 'border-red-200 dark:border-red-800',
      gradient: 'from-red-50 to-white dark:from-red-950/30 dark:to-transparent',
    },
    'purple': {
      icon: <Book className="h-6 w-6 text-purple-500" />,
      color: 'bg-purple-50 dark:bg-purple-950/30',
      border: 'border-purple-200 dark:border-purple-800',
      gradient: 'from-purple-50 to-white dark:from-purple-950/30 dark:to-transparent',
    }
  };

  // Helper to get icon component from name
  const getIconComponent = (iconName) => {
    if (!iconName) return <Shield className="h-5 w-5 text-blue-500" />;
    
    const IconComponent = iconMap[iconName.toLowerCase()];
    if (IconComponent) return IconComponent;
    
    return <Shield className="h-5 w-5 text-blue-500" />;
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        
        const supabase = createBrowserClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        );
        
        // Fetch categories
        const { data: categoriesData, error: categoriesError } = await supabase
          .from('exam_categories')
          .select('*')
          .eq('is_active', true)
          .order('display_order', { ascending: true })
          .limit(3); // Limiting to 3 categories for homepage
        
        if (categoriesError) throw categoriesError;
        
        // Fetch exams
        const { data: examsData, error: examsError } = await supabase
          .from('exams')
          .select('*')
          .eq('is_active', true)
          .eq('is_category', false)
          .order('display_order', { ascending: true });
        
        if (examsError) throw examsError;
        
        // Define basic question counts until they are added to the database
        const questionCounts = {
          'firefighter-1-2': 1000,
          'ibsc-ccp-c': 400,
          'nremt-aemt': 900,
          'nremt-emt': 1030,
          'aanpcb-fnp': 1000,
          'ancc-fnp': 1000,
          'bcen-cen': 1000
        };
        
        // Format the data into our expected structure
        const formattedCategories = categoriesData.map(category => {
          // Find exams for this category
          const categoryExams = examsData.filter(exam => 
            exam.category_id === category.id
          );
          
          // Get styling
          const styling = categoryStyleMap[category.color] || categoryStyleMap.orange;
          
          return {
            id: category.slug,
            name: category.name,
            description: category.description || `Certification exams for ${category.name} professionals`,
            icon: styling.icon,
            color: styling.color,
            border: styling.border,
            gradient: styling.gradient,
            exams: categoryExams.map(exam => ({
              id: exam.slug,
              name: exam.name,
              questions: questionCounts[exam.slug] || 500,
              icon: getIconComponent(exam.icon),
              description: exam.description || `${exam.name} certification exam`,
              premium: exam.is_premium || false,
            }))
          };
        });
        
        setExamCategories(formattedCategories);
      } catch (err) {
        console.error('Error fetching exam data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);

  return { examCategories, loading, error };
}