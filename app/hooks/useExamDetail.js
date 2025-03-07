// // app/hooks/useExamDetail.js
// "use client"

// import { useState, useEffect } from 'react';
// import { createClient } from '@supabase/supabase-js';
// import { 
//   Stethoscope, 
//   Heart, 
//   Brain, 
//   Pill,
//   Eye, 
//   Bone, 
//   Baby, 
//   Shield, 
//   Activity, 
//   Clock, 
//   Flame, 
//   Ambulance, 
//   HeartPulse, 
//   Book, 
//   Thermometer, 
//   Syringe, 
//   Clipboard,
//   Zap,
//   Hospital,
//   UserCheck,
//   HelpCircle
// } from 'lucide-react';

// // Simple icon mapping based on string keys from database
// const iconMap = {
//   'stethoscope': <Stethoscope className="h-6 w-6 text-blue-500" />,
//   'heart': <Heart className="h-6 w-6 text-red-500" />,
//   'brain': <Brain className="h-6 w-6 text-purple-500" />,
//   'pill': <Pill className="h-6 w-6 text-green-500" />,
//   'eye': <Eye className="h-6 w-6 text-indigo-500" />,
//   'bone': <Bone className="h-6 w-6 text-orange-500" />,
//   'baby': <Baby className="h-6 w-6 text-pink-500" />,
//   'shield': <Shield className="h-6 w-6 text-red-500" />,
//   'flame': <Flame className="h-6 w-6 text-orange-500" />,
//   'ambulance': <Ambulance className="h-6 w-6 text-blue-500" />,
//   'heartpulse': <HeartPulse className="h-6 w-6 text-pink-500" />,
//   'activity': <Activity className="h-6 w-6 text-indigo-500" />,
//   'clipboard': <Clipboard className="h-6 w-6 text-teal-500" />,
//   'zap': <Zap className="h-6 w-6 text-yellow-500" />,
//   'book': <Book className="h-6 w-6 text-emerald-500" />,
//   'hospital': <Hospital className="h-6 w-6 text-green-500" />,
//   'thermometer': <Thermometer className="h-6 w-6 text-red-400" />,
//   'syringe': <Syringe className="h-6 w-6 text-purple-500" />,
//   'usercheck': <UserCheck className="h-6 w-6 text-blue-500" />,
//   'default': <HelpCircle className="h-6 w-6 text-slate-500" />
// };

// // Color mapping
// const colorThemes = {
//   'blue': {
//     bg: "bg-blue-50 dark:bg-blue-950/30",
//     border: "border-blue-200 dark:border-blue-800",
//     text: "text-blue-600 dark:text-blue-400",
//     accent: "bg-blue-500"
//   },
//   'green': {
//     bg: "bg-green-50 dark:bg-green-950/30",
//     border: "border-green-200 dark:border-green-800",
//     text: "text-green-600 dark:text-green-400",
//     accent: "bg-green-500"
//   },
//   'red': {
//     bg: "bg-red-50 dark:bg-red-950/30",
//     border: "border-red-200 dark:border-red-800",
//     text: "text-red-600 dark:text-red-400",
//     accent: "bg-red-500"
//   },
//   'orange': {
//     bg: "bg-orange-50 dark:bg-orange-950/30",
//     border: "border-orange-200 dark:border-orange-800",
//     text: "text-orange-600 dark:text-orange-400",
//     accent: "bg-orange-500"
//   },
//   'purple': {
//     bg: "bg-purple-50 dark:bg-purple-950/30",
//     border: "border-purple-200 dark:border-purple-800",
//     text: "text-purple-600 dark:text-purple-400",
//     accent: "bg-purple-500"
//   },
//   'default': {
//     bg: "bg-slate-50 dark:bg-slate-800",
//     border: "border-slate-200 dark:border-slate-700",
//     text: "text-slate-600 dark:text-slate-400",
//     accent: "bg-slate-500"
//   }
// };

// export default function useExamDetail(categoryParam, examIdParam) {
//   const [exam, setExam] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   useEffect(() => {
//     async function fetchExamData() {
//       try {
//         setLoading(true);
//         console.log('Fetching exam:', categoryParam, examIdParam);
        
//         // Create Supabase client directly
//         const supabase = createClient(
//           process.env.NEXT_PUBLIC_SUPABASE_URL,
//           process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
//         );
        
//         // Try direct exam lookup first - this is more efficient if we find it
//         const { data: examData, error: examError } = await supabase
//           .from('exams')
//           .select('*, exam_categories(*)')
//           .or(`slug.ilike.${examIdParam},name.ilike.%${examIdParam.replace(/-/g, ' ')}%`) // Try both slug and name
//           .eq('is_active', true)
//           .maybeSingle(); // Doesn't throw if not found
        
//         if (examError) {
//           console.error('Error finding exam:', examError);
//           throw examError;
//         }
        
//         // If we didn't find the exam or it doesn't match our category
//         if (!examData || 
//             (examData.exam_categories?.slug && 
//              examData.exam_categories.slug.toLowerCase() !== categoryParam.toLowerCase())) {
          
//           console.log('Exam not found or category mismatch, trying fallback lookup');
          
//           // DEBUG: List all exams to see what's available
//           const { data: allExams } = await supabase
//             .from('exams')
//             .select('id, name, slug, category')
//             .eq('is_active', true);
            
//           console.log('Available exams:', allExams);
          
//           // DEBUG: List all categories
//           const { data: allCategories } = await supabase
//             .from('exam_categories')
//             .select('id, name, slug')
//             .eq('is_active', true);
            
//           console.log('Available categories:', allCategories);
          
//           // Fallback to direct lookup by name
//           const { data: examByName } = await supabase
//             .from('exams')
//             .select('*')
//             .ilike('name', `%${examIdParam.replace(/-/g, ' ')}%`) // Try replacing hyphens with spaces
//             .eq('is_active', true)
//             .maybeSingle();
            
//           if (examByName) {
//             console.log('Found exam by name:', examByName);
            
//             // Check if this exam's category matches our route parameter
//             if (examByName.category && 
//                 examByName.category.toLowerCase() === categoryParam.toLowerCase()) {
//               console.log('Matched exam by name and category:', examByName);
              
//               // Get the category data
//               const { data: categoryData } = await supabase
//                 .from('exam_categories')
//                 .select('*')
//                 .eq('id', examByName.category_id)
//                 .maybeSingle();
                
//               if (categoryData) {
//                 const composedExam = createExamObject(examByName, categoryData);
//                 setExam(composedExam);
//                 return; // Exit early since we found the exam
//               }
//             }
//           }
          
//           throw new Error(`Exam not found: ${examIdParam} in category: ${categoryParam}`);
//         }
        
//         // If we have the exam and it has all related data, we can build the object
//         if (examData && examData.exam_categories) {
//           const composedExam = createExamObject(examData, examData.exam_categories);
//           setExam(composedExam);
//           return; // Exit early
//         }
        
//         // Get category data if not already included in the join
//         const categoryData = examData.exam_categories || await supabase
//           .from('exam_categories')
//           .select('*')
//           .eq('id', examData.category_id)
//           .maybeSingle()
//           .then(res => res.data);
        
//         // If still no category data, try using the category string field
//         if (!categoryData && examData.category) {
//           const { data: catBySlug } = await supabase
//             .from('exam_categories')
//             .select('*')
//             .ilike('slug', examData.category) // Try matching on slug
//             .maybeSingle();
            
//           if (catBySlug) {
//             const composedExam = createExamObject(examData, catBySlug);
//             setExam(composedExam);
//             return; // Exit early
//           }
//         }
        
//         // If we got this far and still have no category data, use default values
//         const defaultCategoryData = {
//           name: categoryParam,
//           slug: categoryParam.toLowerCase(),
//           icon: 'default',
//           color: 'default'
//         };
        
//         const composedExam = createExamObject(
//           examData, 
//           categoryData || defaultCategoryData
//         );
        
//         setExam(composedExam);
        
//       } catch (err) {
//         console.error('Error in useExamDetail:', err);
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     }
    
//     fetchExamData();
//   }, [categoryParam, examIdParam]);
  
//   // Helper function to create a consistently structured exam object
//   function createExamObject(examData, categoryData) {
//     // Determine the icon (with fallbacks)
//     const examIcon = examData.icon 
//       ? (typeof examData.icon === 'string' 
//          ? iconMap[examData.icon.toLowerCase()] || iconMap.default
//          : iconMap.default)
//       : iconMap.default;
    
//     const categoryIcon = categoryData.icon 
//       ? (typeof categoryData.icon === 'string'
//          ? iconMap[categoryData.icon.toLowerCase()] || iconMap.default
//          : iconMap.default)
//       : iconMap.default;
    
//     // Determine color theme (with fallbacks)
//     const colorTheme = categoryData.color 
//       ? (typeof categoryData.color === 'string'
//          ? colorThemes[categoryData.color.toLowerCase()] || colorThemes.default
//          : colorThemes.default)
//       : colorThemes.default;
    
//     // Default values for missing fields
//     const topics = ["Sample Topic 1", "Sample Topic 2", "Sample Topic 3"];
//     const progressData = { completed_questions: 250, score: 72 };
    
//     return {
//       id: examData.id,
//       name: examData.name,
//       category: categoryData.slug || categoryParam.toLowerCase(),
//       categoryName: categoryData.name || categoryParam,
//       icon: examIcon,
//       categoryIcon: categoryIcon,
//       description: examData.description || "No description available",
//       duration: "3 hours", // Default
//       questions: examData.questions_count || 1000, // Default
//       passingScore: "75%", // Default
//       attempts: "Unlimited", // Default 
//       difficulty: "Medium", // Default
//       colorTheme: colorTheme,
//       topics: topics,
//       progress: {
//         completed: progressData.completed_questions,
//         score: progressData.score
//       }
//     };
//   }
  
//   return { exam, loading, error };
// }
// app/hooks/useExamDetail.js
// Create this new hook for exam detail fetching with slug/UUID handling

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Supabase client setup
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Import your icons for the exam categories
import { 
  Flame, 
  Ambulance, 
  HeartPulse, 
  Clipboard, 
  Zap, 
  Shield,
  // Add other icons you need
} from 'lucide-react';
import React from 'react';

export default function useExamDetail(category, examId) {
  const [exam, setExam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExam = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Check if examId is a UUID format
        const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(examId);
        
        let query;
        if (isUuid) {
          // If it's a UUID, search by ID
          query = supabase
            .from('exams')
            .select('*')
            .eq('id', examId)
            .single();
        } else {
          // If not a UUID, search by slug
          query = supabase
            .from('exams')
            .select('*')
            .eq('slug', examId)
            .single();
        }
        
        const { data, error: dbError } = await query;
        
        if (dbError) {
          console.error('Database error:', dbError);
          throw new Error('Failed to fetch exam details. Please try again later.');
        }
        
        if (!data) {
          throw new Error('Exam not found');
        }
        
        // Process the exam data
        const processedExam = processExamData(data, category);
        setExam(processedExam);
      } catch (err) {
        console.error('Error in useExamDetail:', err);
        setError(err.message || 'An error occurred while fetching exam details');
      } finally {
        setLoading(false);
      }
    };
    
    if (examId) {
      fetchExam();
    }
  }, [category, examId]);

  // Helper function to process exam data and add necessary UI elements
  const processExamData = (examData, category) => {
    // Map exam data to include UI elements like icons
    let icon;
    
    // Add appropriate icon based on exam ID or category
    if (examData.slug === 'firefighter' || examData.name.includes('Firefighter')) {
      icon = <Flame className="h-6 w-6 text-orange-500" />;
    } else if (examData.slug === 'nremt-paramedic' || examData.name.includes('Paramedic')) {
      icon = <HeartPulse className="h-6 w-6 text-pink-500" />;
    } else if (examData.slug === 'ibsc-ccp' || examData.name.includes('Critical Care')) {
      icon = <Ambulance className="h-6 w-6 text-blue-500" />;
    } else if (examData.slug === 'nremt-aemt' || examData.name.includes('AEMT')) {
      icon = <HeartPulse className="h-6 w-6 text-red-500" />;
    } else if (category === 'nursing' || examData.category_id === 'nursing') {
      icon = <Clipboard className="h-6 w-6 text-green-500" />;
    } else if (category === 'emergency' || examData.category_id === 'emergency') {
      icon = <Zap className="h-6 w-6 text-yellow-500" />;
    } else {
      // Default icon
      icon = <Shield className="h-6 w-6 text-purple-500" />;
    }
    
    // Default color theme based on category
    let colorTheme;
    switch (category) {
      case 'ems':
        colorTheme = {
          bg: "bg-orange-50 dark:bg-orange-950/30",
          border: "border-orange-200 dark:border-orange-800",
          text: "text-orange-600 dark:text-orange-400",
          accent: "bg-orange-500"
        };
        break;
      case 'nursing':
        colorTheme = {
          bg: "bg-blue-50 dark:bg-blue-950/30",
          border: "border-blue-200 dark:border-blue-800",
          text: "text-blue-600 dark:text-blue-400",
          accent: "bg-blue-500"
        };
        break;
      case 'emergency':
        colorTheme = {
          bg: "bg-red-50 dark:bg-red-950/30",
          border: "border-red-200 dark:border-red-800",
          text: "text-red-600 dark:text-red-400",
          accent: "bg-red-500"
        };
        break;
      default:
        colorTheme = {
          bg: "bg-slate-50 dark:bg-slate-800",
          border: "border-slate-200 dark:border-slate-700",
          text: "text-slate-600 dark:text-slate-400",
          accent: "bg-slate-500"
        };
    }
    
    // Mock data for topics and progress if they're not available
    const defaultTopics = [
      "Airway Management",
      "Cardiac Management",
      "Trauma Assessment",
      "Medication Administration",
      "Special Patient Populations",
      "Operations",
      "Medical Emergencies",
      "Obstetrics and Gynecology"
    ];
    
    return {
      id: examData.id,
      name: examData.name,
      description: examData.description || "Comprehensive exam covering essential topics and skills.",
      slug: examData.slug,
      category: category,
      categoryName: getCategoryName(category),
      icon: icon,
      topics: examData.topics || defaultTopics,
      duration: examData.duration || "2 hours",
      questions: examData.total_questions || 100,
      passingScore: examData.passing_score || "70%",
      attempts: examData.attempts || "Unlimited",
      difficulty: examData.difficulty_level || "Medium",
      colorTheme: colorTheme,
      progress: {
        completed: examData.progress?.completed || 0,
        score: examData.progress?.score || 0
      }
    };
  };
  
  // Helper function to get category display name
  const getCategoryName = (categorySlug) => {
    switch (categorySlug) {
      case 'ems':
        return 'Emergency Medical Services';
      case 'nursing':
        return 'Nursing';
      case 'emergency':
        return 'Emergency Certification';
      case 'specialty':
        return 'Specialty Certification';
      default:
        return categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);
    }
  };

  return { exam, loading, error };
}

// Then modify your app/apps/scoorly/exams/[category]/[examId]/quiz/page.js
// to use the Supabase slug lookup instead of direct ID lookup in these sections:

// In the fetchExamInfo function:
const fetchExamInfo = async () => {
  if (!examId) return;
  
  try {
    // First try to find exam by slug (string ID from URL)
    const { data, error } = await supabase
      .from('exams')
      .select('id, name, description, category_id, slug')
      .eq('slug', examId)
      .single();
      
    if (error || !data) {
      console.log('Could not find exam by slug, trying UUID:', error);
      
      // As a fallback, try to find exam by UUID if the parameter is a valid UUID
      if (examId.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)) {
        const { data: dataById, error: errorById } = await supabase
          .from('exams')
          .select('id, name, description, category_id, slug')
          .eq('id', examId)
          .single();
          
        if (errorById || !dataById) {
          throw new Error('Could not find exam with this ID');
        }
        
        if (dataById) {
          setExamInfo(dataById);
          setQuizTitle(formatQuizTitle(dataById.name, quizMode, subjectParam, topicParam));
          return;
        }
      } else {
        // Try to get mock data for development if database isn't available
        const mockExam = getMockExamData(category, examId);
        if (mockExam) {
          setExamInfo({
            id: mockExam.id || "00000000-0000-0000-0000-000000000000", // Fallback UUID
            name: mockExam.name,
            description: mockExam.description,
            category_id: category,
            slug: examId
          });
          setQuizTitle(formatQuizTitle(mockExam.name, quizMode, subjectParam, topicParam));
          return;
        }
        throw new Error('Exam not found with the given identifier');
      }
    }
    
    if (data) {
      setExamInfo(data);
      setQuizTitle(formatQuizTitle(data.name, quizMode, subjectParam, topicParam));
    }
  } catch (err) {
    console.error('Error fetching exam info:', err);
    setError('Exam not found. Please try a different exam or contact support.');
    setLoading(false);
  }
};

// Add this helper function to provide mock data during development
const getMockExamData = (category, examId) => {
  // Map of mock exams keyed by category and examId
  const mockExams = {
    ems: {
      "nremt-aemt": {
        id: "mock-aemt-uuid",
        name: "NREMT® AEMT",
        description: "Advanced Emergency Medical Technician certification exam covering essential topics and skills.",
        topics: [
          "Airway Management",
          "Cardiac Management",
          "Trauma Assessment",
          "Medication Administration",
          "Special Patient Populations",
          "Operations",
          "Medical Emergencies",
          "Obstetrics and Gynecology"
        ]
      },
      "firefighter": {
        id: "mock-firefighter-uuid",
        name: "Firefighter I & II",
        description: "Comprehensive firefighter certification exam covering fire science, safety, and rescue operations."
      },
      // Add more mock exams as needed
    }
  };
  
  return mockExams[category]?.[examId];
};