// // // // app/apps/scoorly/exams/page.js
// // // "use client"

// // // import { useState } from 'react'
// // // import Link from 'next/link'
// // // import { 
// // //   Award, 
// // //   Search, 
// // //   ChevronDown, 
// // //   ChevronRight,
// // //   Flame, 
// // //   Ambulance, 
// // //   HeartPulse, 
// // //   Activity, 
// // //   Clipboard, 
// // //   Zap, 
// // //   Shield,
// // //   Stethoscope,
// // //   Brain,
// // //   Hospital,
// // //   UserCheck,
// // //   Book,
// // //   Thermometer,
// // //   Syringe,
// // //   PenTool
// // // } from 'lucide-react'

// // // export default function ExamsPage() {
// // //   const [searchTerm, setSearchTerm] = useState("")
// // //   const [expandedCategories, setExpandedCategories] = useState({})

// // //   // Toggle category expansion
// // //   const toggleCategory = (categoryId) => {
// // //     setExpandedCategories(prev => ({
// // //       ...prev,
// // //       [categoryId]: !prev[categoryId]
// // //     }))
// // //   }

// // //   // Exam categories with their sub-exams
// // //   const examCategories = [
// // //     {
// // //       id: 'ems',
// // //       name: 'Emergency Medical Services',
// // //       description: 'Certification exams for EMS professionals',
// // //       icon: <Flame className="h-6 w-6 text-orange-500" />,
// // //       color: 'bg-orange-50 dark:bg-orange-950/30',
// // //       border: 'border-orange-200 dark:border-orange-800',
// // //       hover: 'hover:border-orange-300 dark:hover:border-orange-700',
// // //       gradient: 'from-orange-50 to-white dark:from-orange-950/30 dark:to-transparent',
// // //       exams: [
// // //         {
// // //           id: "firefighter",
// // //           name: "Firefighter I & II",
// // //           questions: 1000,
// // //           icon: <Flame className="h-5 w-5 text-orange-500" />,
// // //           description: "Comprehensive firefighter certification exam",
// // //         },
// // //         {
// // //           id: "ibsc-ccp",
// // //           name: "IBSC CCP-C®",
// // //           questions: 400,
// // //           icon: <Ambulance className="h-5 w-5 text-blue-500" />,
// // //           description: "Critical Care Paramedic Certification",
// // //         },
// // //         {
// // //           id: "ibsc-fp",
// // //           name: "IBSC FP-C®",
// // //           questions: 1000,
// // //           icon: <Zap className="h-5 w-5 text-yellow-500" />,
// // //           description: "Flight Paramedic Certification",
// // //         },
// // //         {
// // //           id: "ibsc-tp",
// // //           name: "IBSC TP-C®",
// // //           questions: 400,
// // //           icon: <Shield className="h-5 w-5 text-green-500" />,
// // //           description: "Tactical Paramedic Certification",
// // //         },
// // //         {
// // //           id: "nremt-aemt",
// // //           name: "NREMT® AEMT",
// // //           questions: 900,
// // //           icon: <HeartPulse className="h-5 w-5 text-purple-500" />,
// // //           description: "Advanced Emergency Medical Technician",
// // //         },
// // //         {
// // //           id: "nremt-emr",
// // //           name: "NREMT® EMR",
// // //           questions: 500,
// // //           icon: <Activity className="h-5 w-5 text-indigo-500" />,
// // //           description: "Emergency Medical Responder",
// // //         },
// // //         {
// // //           id: "nremt-emt",
// // //           name: "NREMT® EMT",
// // //           questions: 1030,
// // //           icon: <Clipboard className="h-5 w-5 text-teal-500" />,
// // //           description: "Emergency Medical Technician",
// // //         },
// // //         {
// // //           id: "nremt-paramedic",
// // //           name: "NREMT® Paramedic",
// // //           questions: 1200,
// // //           icon: <HeartPulse className="h-5 w-5 text-pink-500" />,
// // //           description: "Paramedic certification",
// // //         },
// // //       ]
// // //     },
// // //     {
// // //       id: 'nursing',
// // //       name: 'Nursing',
// // //       description: 'Certification exams for nursing professionals',
// // //       icon: <Stethoscope className="h-6 w-6 text-blue-500" />,
// // //       color: 'bg-blue-50 dark:bg-blue-950/30',
// // //       border: 'border-blue-200 dark:border-blue-800',
// // //       hover: 'hover:border-blue-300 dark:hover:border-blue-700',
// // //       gradient: 'from-blue-50 to-white dark:from-blue-950/30 dark:to-transparent',
// // //       exams: [
// // //         {
// // //           id: "aacn-ccrn-adult",
// // //           name: "AACN CCRN® (Adult)",
// // //           questions: 1000,
// // //           icon: <UserCheck className="h-5 w-5 text-blue-500" />,
// // //           description: "Critical Care Registered Nurse - Adult",
// // //         },
// // //         {
// // //           id: "aanpcb-fnp",
// // //           name: "AANPCB® FNP",
// // //           questions: 1000,
// // //           icon: <Stethoscope className="h-5 w-5 text-green-500" />,
// // //           description: "Family Nurse Practitioner",
// // //         },
// // //         {
// // //           id: "aanpcb-pmhnp",
// // //           name: "AANPCB® PMHNP-C",
// // //           questions: 1200,
// // //           icon: <Brain className="h-5 w-5 text-violet-500" />,
// // //           description: "Psychiatric Mental Health Nurse Practitioner",
// // //         },
// // //         {
// // //           id: "ancc-agacnp",
// // //           name: "ANCC AGACNP-BC",
// // //           questions: 500,
// // //           icon: <Thermometer className="h-5 w-5 text-red-400" />,
// // //           description: "Adult-Gerontology Acute Care Nurse Practitioner",
// // //         },
// // //         {
// // //           id: "ancc-fnp",
// // //           name: "ANCC FNP-BC™",
// // //           questions: 1000,
// // //           icon: <Clipboard className="h-5 w-5 text-blue-400" />,
// // //           description: "Family Nurse Practitioner",
// // //         },
// // //         {
// // //           id: "ancc-medsurg",
// // //           name: "ANCC MEDSURG-BC™",
// // //           questions: 1500,
// // //           icon: <Syringe className="h-5 w-5 text-teal-600" />,
// // //           description: "Medical-Surgical Nursing",
// // //         },
// // //       ]
// // //     },
// // //     {
// // //       id: 'emergency',
// // //       name: 'Emergency Certification',
// // //       description: 'Emergency and trauma care certifications',
// // //       icon: <Shield className="h-6 w-6 text-red-500" />,
// // //       color: 'bg-red-50 dark:bg-red-950/30',
// // //       border: 'border-red-200 dark:border-red-800',
// // //       hover: 'hover:border-red-300 dark:hover:border-red-700',
// // //       gradient: 'from-red-50 to-white dark:from-red-950/30 dark:to-transparent',
// // //       exams: [
// // //         {
// // //           id: "bcen-cen",
// // //           name: "BCEN CEN®",
// // //           questions: 1000,
// // //           icon: <Zap className="h-5 w-5 text-amber-500" />,
// // //           description: "Certified Emergency Nurse",
// // //         },
// // //         {
// // //           id: "bcen-cfrn-ctrn",
// // //           name: "BCEN CFRN® & CTRN®",
// // //           questions: 1000,
// // //           icon: <Zap className="h-5 w-5 text-blue-500" />,
// // //           description: "Certified Flight/Transport Registered Nurse",
// // //         },
// // //         {
// // //           id: "bcen-cpen",
// // //           name: "BCEN CPEN®",
// // //           questions: 500,
// // //           icon: <Hospital className="h-5 w-5 text-green-500" />,
// // //           description: "Certified Pediatric Emergency Nurse",
// // //         },
// // //         {
// // //           id: "bcen-tcrn",
// // //           name: "BCEN TCRN®",
// // //           questions: 500,
// // //           icon: <Shield className="h-5 w-5 text-orange-600" />,
// // //           description: "Trauma Certified Registered Nurse",
// // //         },
// // //       ]
// // //     },
// // //     {
// // //       id: 'specialty',
// // //       name: 'Specialty Certifications',
// // //       description: 'Specialized healthcare certifications',
// // //       icon: <Book className="h-6 w-6 text-purple-500" />,
// // //       color: 'bg-purple-50 dark:bg-purple-950/30',
// // //       border: 'border-purple-200 dark:border-purple-800',
// // //       hover: 'hover:border-purple-300 dark:hover:border-purple-700',
// // //       gradient: 'from-purple-50 to-white dark:from-purple-950/30 dark:to-transparent',
// // //       exams: [
// // //         {
// // //           id: "cci-cfpn",
// // //           name: "CCI CFPN®",
// // //           questions: 437,
// // //           icon: <Syringe className="h-5 w-5 text-purple-500" />,
// // //           description: "Certified Foundational Perioperative Nurse",
// // //         },
// // //         {
// // //           id: "cci-cnamb",
// // //           name: "CCI CNAMB®",
// // //           questions: 500,
// // //           icon: <Hospital className="h-5 w-5 text-teal-500" />,
// // //           description: "Certified Nurse in the Ambulatory Surgery Center",
// // //         },
// // //         {
// // //           id: "cci-cnor",
// // //           name: "CCI CNOR®",
// // //           questions: 1000,
// // //           icon: <Clipboard className="h-5 w-5 text-indigo-500" />,
// // //           description: "Certified Perioperative Nurse",
// // //         },
// // //         {
// // //           id: "msncb-cmsrn",
// // //           name: "MSNCB CMSRN®",
// // //           questions: 1000,
// // //           icon: <PenTool className="h-5 w-5 text-cyan-500" />,
// // //           description: "Certified Medical-Surgical Registered Nurse",
// // //         },
// // //         {
// // //           id: "nln-cne",
// // //           name: "NLN CNE®",
// // //           questions: 500,
// // //           icon: <Book className="h-5 w-5 text-emerald-500" />,
// // //           description: "Certified Nurse Educator",
// // //         },
// // //       ]
// // //     }
// // //   ]

// // //   // Filter categories and exams based on search term
// // //   const filteredCategories = examCategories.map(category => {
// // //     const filteredExams = category.exams.filter(exam => 
// // //       exam.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
// // //       exam.description.toLowerCase().includes(searchTerm.toLowerCase())
// // //     )
    
// // //     return {
// // //       ...category,
// // //       exams: filteredExams,
// // //       matches: filteredExams.length > 0 || category.name.toLowerCase().includes(searchTerm.toLowerCase())
// // //     }
// // //   }).filter(category => category.matches)

// // //   return (
// // //     <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
// // //       {/* Hero Section */}
// // //       <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
// // //         <div className="max-w-5xl mx-auto px-4 py-16 md:py-20 text-center">
// // //           <div className="inline-flex p-3 mb-6 bg-white/20 rounded-full">
// // //             <Award className="h-8 w-8" />
// // //           </div>
// // //           <h1 className="text-3xl md:text-5xl font-bold mb-4">Medical Certification Exams</h1>
// // //           <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
// // //             Practice with thousands of questions across medical, nursing, and emergency fields
// // //           </p>
          
// // //           {/* Search */}
// // //           <div className="relative max-w-md mx-auto">
// // //             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300 h-5 w-5" />
// // //             <input 
// // //               type="text" 
// // //               placeholder="Find your exam..." 
// // //               value={searchTerm}
// // //               onChange={(e) => setSearchTerm(e.target.value)}
// // //               className="w-full pl-10 pr-4 py-3 bg-white/10 text-white rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
// // //             />
// // //           </div>
// // //         </div>
// // //       </div>
      
// // //       {/* Main Content - Expandable Categories */}
// // //       <div className="max-w-5xl mx-auto px-4 py-12">
// // //         <h2 className="text-2xl font-bold mb-8 text-center text-slate-900 dark:text-white">
// // //           Choose Your Certification Path
// // //         </h2>
        
// // //         <div className="space-y-6">
// // //           {filteredCategories.map((category) => (
// // //             <div 
// // //               key={category.id}
// // //               className={`rounded-xl overflow-hidden border ${category.border}`}
// // //             >
// // //               {/* Category Header - Clickable */}
// // //               <button 
// // //                 onClick={() => toggleCategory(category.id)}
// // //                 className={`w-full flex items-center justify-between p-5 ${category.color} text-left`}
// // //               >
// // //                 <div className="flex items-center gap-4">
// // //                   <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm">
// // //                     {category.icon}
// // //                   </div>
// // //                   <div>
// // //                     <h3 className="font-semibold text-xl text-slate-900 dark:text-white">{category.name}</h3>
// // //                     <p className="text-sm text-slate-600 dark:text-slate-400">
// // //                       {category.exams.length} certification exams
// // //                     </p>
// // //                   </div>
// // //                 </div>
// // //                 <div className="flex items-center gap-2">
// // //                   <span className="text-blue-600 dark:text-blue-400">
// // //                     {expandedCategories[category.id] ? 
// // //                       <ChevronDown className="h-5 w-5" /> : 
// // //                       <ChevronRight className="h-5 w-5" />
// // //                     }
// // //                   </span>
// // //                 </div>
// // //               </button>
              
// // //               {/* Expanded Content - Sub Exams */}
// // //               {expandedCategories[category.id] && (
// // //                 <div className={`bg-gradient-to-b ${category.gradient} p-5`}>
// // //                   <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
// // //                     {category.exams.map((exam) => (
// // //                       <Link 
// // //                         href={`/apps/scoorly/exams/${category.id}/${exam.id}`} 
// // //                         key={exam.id}
// // //                         className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all"
// // //                       >
// // //                         <div className="flex items-center mb-2 gap-2">
// // //                           <div className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-700">
// // //                             {exam.icon}
// // //                           </div>
// // //                           <h4 className="font-medium text-slate-900 dark:text-white">{exam.name}</h4>
// // //                         </div>
// // //                         <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-2">
// // //                           {exam.description}
// // //                         </p>
// // //                         <div className="flex justify-between items-center text-xs">
// // //                           <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full">
// // //                             {exam.questions} questions
// // //                           </span>
// // //                           <span className="text-blue-600 dark:text-blue-400">View →</span>
// // //                         </div>
// // //                       </Link>
// // //                     ))}
// // //                   </div>
                  
// // //                   <div className="mt-4 text-center">
// // //                     <Link
// // //                       href={`/apps/scoorly/exams/${category.id}`}
// // //                       className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
// // //                     >
// // //                       View all {category.name} exams
// // //                       <ChevronRight className="h-4 w-4 ml-1" />
// // //                     </Link>
// // //                   </div>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           ))}
// // //         </div>
        
// // //         {/* No Results State */}
// // //         {filteredCategories.length === 0 && (
// // //           <div className="text-center py-12 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
// // //             <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">No exams found matching your search.</p>
// // //             <button 
// // //               onClick={() => setSearchTerm("")}
// // //               className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
// // //             >
// // //               Clear Search
// // //             </button>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   )
// // // }
// // // app/apps/scoorly/exams/page.js
// // // app/apps/scoorly/exams/page.js
// // "use client"

// // import { useState, useEffect } from 'react'
// // import Link from 'next/link'
// // import { 
// //   Award, 
// //   Search, 
// //   ChevronDown, 
// //   ChevronRight,
// //   Flame, 
// //   Ambulance, 
// //   HeartPulse, 
// //   Activity, 
// //   Clipboard, 
// //   Zap, 
// //   Shield,
// //   Stethoscope,
// //   Brain,
// //   Hospital,
// //   UserCheck,
// //   Book,
// //   Thermometer,
// //   Syringe,
// //   PenTool
// // } from 'lucide-react'
// // import { createBrowserClient } from "@supabase/ssr"

// // // Map icon strings to components
// // const iconMap = {
// //   'flame': <Flame className="h-5 w-5 text-orange-500" />,
// //   'ambulance': <Ambulance className="h-5 w-5 text-blue-500" />,
// //   'heartpulse': <HeartPulse className="h-5 w-5 text-purple-500" />,
// //   'activity': <Activity className="h-5 w-5 text-indigo-500" />,
// //   'clipboard': <Clipboard className="h-5 w-5 text-teal-500" />,
// //   'zap': <Zap className="h-5 w-5 text-yellow-500" />,
// //   'shield': <Shield className="h-5 w-5 text-green-500" />,
// //   'stethoscope': <Stethoscope className="h-6 w-6 text-blue-500" />,
// //   'brain': <Brain className="h-5 w-5 text-violet-500" />,
// //   'hospital': <Hospital className="h-5 w-5 text-teal-500" />,
// //   'usercheck': <UserCheck className="h-5 w-5 text-blue-500" />,
// //   'book': <Book className="h-6 w-6 text-purple-500" />,
// //   'thermometer': <Thermometer className="h-5 w-5 text-red-400" />,
// //   'syringe': <Syringe className="h-5 w-5 text-teal-600" />,
// //   'pentool': <PenTool className="h-5 w-5 text-cyan-500" />
// // }

// // // Map for category styling based on color names
// // const categoryStyleMap = {
// //   'orange': {
// //     icon: <Flame className="h-6 w-6 text-orange-500" />,
// //     color: 'bg-orange-50 dark:bg-orange-950/30',
// //     border: 'border-orange-200 dark:border-orange-800',
// //     hover: 'hover:border-orange-300 dark:hover:border-orange-700',
// //     gradient: 'from-orange-50 to-white dark:from-orange-950/30 dark:to-transparent',
// //   },
// //   'blue': {
// //     icon: <Stethoscope className="h-6 w-6 text-blue-500" />,
// //     color: 'bg-blue-50 dark:bg-blue-950/30',
// //     border: 'border-blue-200 dark:border-blue-800',
// //     hover: 'hover:border-blue-300 dark:hover:border-blue-700',
// //     gradient: 'from-blue-50 to-white dark:from-blue-950/30 dark:to-transparent',
// //   },
// //   'red': {
// //     icon: <Shield className="h-6 w-6 text-red-500" />,
// //     color: 'bg-red-50 dark:bg-red-950/30',
// //     border: 'border-red-200 dark:border-red-800',
// //     hover: 'hover:border-red-300 dark:hover:border-red-700',
// //     gradient: 'from-red-50 to-white dark:from-red-950/30 dark:to-transparent',
// //   },
// //   'purple': {
// //     icon: <Book className="h-6 w-6 text-purple-500" />,
// //     color: 'bg-purple-50 dark:bg-purple-950/30',
// //     border: 'border-purple-200 dark:border-purple-800',
// //     hover: 'hover:border-purple-300 dark:hover:border-purple-700',
// //     gradient: 'from-purple-50 to-white dark:from-purple-950/30 dark:to-transparent',
// //   },
// //   // Default fallback if color is not in our map
// //   'default': {
// //     icon: <Award className="h-6 w-6 text-slate-500" />,
// //     color: 'bg-slate-50 dark:bg-slate-950/30',
// //     border: 'border-slate-200 dark:border-slate-800',
// //     hover: 'hover:border-slate-300 dark:hover:border-slate-700',
// //     gradient: 'from-slate-50 to-white dark:from-slate-950/30 dark:to-transparent',
// //   }
// // }

// // // Helper to get default icon when none is specified
// // const getIconComponent = (iconName, defaultClass = "h-5 w-5 text-blue-500") => {
// //   if (!iconName) return <Shield className={defaultClass} />;
  
// //   const IconComponent = iconMap[iconName.toLowerCase()];
// //   if (IconComponent) return IconComponent;
  
// //   return <Shield className={defaultClass} />;
// // }

// // export default function ExamsPage() {
// //   const [searchTerm, setSearchTerm] = useState("")
// //   const [expandedCategories, setExpandedCategories] = useState({})
// //   const [examCategories, setExamCategories] = useState([])
// //   const [loading, setLoading] = useState(true)
// //   const [error, setError] = useState(null)

// //   useEffect(() => {
// //     async function fetchData() {
// //       try {
// //         setLoading(true)
        
// //         const supabase = createBrowserClient(
// //           process.env.NEXT_PUBLIC_SUPABASE_URL,
// //           process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// //         )
        
// //         // First fetch the categories
// //         const { data: categoriesData, error: categoriesError } = await supabase
// //           .from('exam_categories')
// //           .select('*')
// //           .eq('is_active', true)
// //           .order('display_order', { ascending: true })
        
// //         if (categoriesError) throw categoriesError
        
// //         // Then fetch all exams
// //         const { data: examsData, error: examsError } = await supabase
// //           .from('exams')
// //           .select('*')
// //           .eq('is_active', true)
// //           .eq('is_category', false)
// //           .order('display_order', { ascending: true })
        
// //         if (examsError) throw examsError
        
// //         // Define question counts for specific exams
// //         const questionCounts = {
// //           'firefighter-1-2': 1000,
// //           'ibsc-ccp-c': 400,
// //           'ibsc-fp-c': 1000,
// //           'ibsc-tp-c': 400,
// //           'nremt-aemt': 900,
// //           'nremt-emr': 500,
// //           'nremt-emt': 1030,
// //           'nremt-paramedic': 1290,
// //         }
        
// //         // Format the data into our expected structure
// //         const formattedCategories = categoriesData.map(category => {
// //           // Find exams for this category
// //           const categoryExams = examsData.filter(exam => 
// //             exam.category_id === category.id
// //           )
          
// //           // Get styling from our map or use defaults
// //           const styling = categoryStyleMap[category.color] || categoryStyleMap.default
          
// //           return {
// //             id: category.slug,
// //             name: category.name,
// //             description: category.description || `Certification exams for ${category.name} professionals`,
// //             icon: styling.icon,
// //             color: styling.color,
// //             border: styling.border,
// //             hover: styling.hover,
// //             gradient: styling.gradient,
// //             exams: categoryExams.map(exam => ({
// //               id: exam.slug,
// //               name: exam.name,
// //               questions: questionCounts[exam.slug] || 500, // Fallback to 500 questions
// //               icon: getIconComponent(exam.icon),
// //               description: exam.description || `${exam.name} certification exam`,
// //             }))
// //           }
// //         })
        
// //         setExamCategories(formattedCategories)
// //       } catch (error) {
// //         console.error('Error fetching data:', error)
// //         setError(error.message)
// //       } finally {
// //         setLoading(false)
// //       }
// //     }
    
// //     fetchData()
// //   }, [])

// //   // Toggle category expansion
// //   const toggleCategory = (categoryId) => {
// //     setExpandedCategories(prev => ({
// //       ...prev,
// //       [categoryId]: !prev[categoryId]
// //     }))
// //   }

// //   // Filter categories and exams based on search term
// //   const filteredCategories = examCategories.map(category => {
// //     const filteredExams = category.exams.filter(exam => 
// //       exam.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
// //       exam.description.toLowerCase().includes(searchTerm.toLowerCase())
// //     )
    
// //     return {
// //       ...category,
// //       exams: filteredExams,
// //       matches: filteredExams.length > 0 || category.name.toLowerCase().includes(searchTerm.toLowerCase())
// //     }
// //   }).filter(category => category.matches)

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
// //         <div className="text-center">
// //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
// //           <p className="text-slate-600 dark:text-slate-400">Loading exam categories...</p>
// //         </div>
// //       </div>
// //     )
// //   }

// //   if (error) {
// //     return (
// //       <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
// //         <div className="text-center max-w-md p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md">
// //           <Shield className="h-12 w-12 text-red-500 mx-auto mb-4" />
// //           <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Error Loading Exams</h2>
// //           <p className="text-slate-600 dark:text-slate-400 mb-4">{error}</p>
// //           <button 
// //             onClick={() => window.location.reload()}
// //             className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
// //           >
// //             Try Again
// //           </button>
// //         </div>
// //       </div>
// //     )
// //   }

// //   return (
// //     <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
// //       {/* Hero Section */}
// //       <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
// //         <div className="max-w-5xl mx-auto px-4 py-16 md:py-20 text-center">
// //           <div className="inline-flex p-3 mb-6 bg-white/20 rounded-full">
// //             <Award className="h-8 w-8" />
// //           </div>
// //           <h1 className="text-3xl md:text-5xl font-bold mb-4">Medical Certification Exams</h1>
// //           <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
// //             Practice with thousands of questions across medical, nursing, and emergency fields
// //           </p>
          
// //           {/* Search */}
// //           <div className="relative max-w-md mx-auto">
// //             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300 h-5 w-5" />
// //             <input 
// //               type="text" 
// //               placeholder="Find your exam..." 
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //               className="w-full pl-10 pr-4 py-3 bg-white/10 text-white rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
// //             />
// //           </div>
// //         </div>
// //       </div>
      
// //       {/* Main Content - Expandable Categories */}
// //       <div className="max-w-5xl mx-auto px-4 py-12">
// //         <h2 className="text-2xl font-bold mb-8 text-center text-slate-900 dark:text-white">
// //           Choose Your Certification Path
// //         </h2>
        
// //         <div className="space-y-6">
// //           {filteredCategories.map((category) => (
// //             <div 
// //               key={category.id}
// //               className={`rounded-xl overflow-hidden border ${category.border}`}
// //             >
// //               {/* Category Header - Clickable */}
// //               <button 
// //                 onClick={() => toggleCategory(category.id)}
// //                 className={`w-full flex items-center justify-between p-5 ${category.color} text-left`}
// //               >
// //                 <div className="flex items-center gap-4">
// //                   <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm">
// //                     {category.icon}
// //                   </div>
// //                   <div>
// //                     <h3 className="font-semibold text-xl text-slate-900 dark:text-white">{category.name}</h3>
// //                     <p className="text-sm text-slate-600 dark:text-slate-400">
// //                       {category.exams.length} certification exams
// //                     </p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-center gap-2">
// //                   <span className="text-blue-600 dark:text-blue-400">
// //                     {expandedCategories[category.id] ? 
// //                       <ChevronDown className="h-5 w-5" /> : 
// //                       <ChevronRight className="h-5 w-5" />
// //                     }
// //                   </span>
// //                 </div>
// //               </button>
              
// //               {/* Expanded Content - Sub Exams */}
// //               {expandedCategories[category.id] && (
// //                 <div className={`bg-gradient-to-b ${category.gradient} p-5`}>
// //                   <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
// //                     {category.exams.map((exam) => (
// //                       <Link 
// //                         href={`/apps/scoorly/exams/${category.id}/${exam.id}`} 
// //                         key={exam.id}
// //                         className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all"
// //                       >
// //                         <div className="flex items-center mb-2 gap-2">
// //                           <div className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-700">
// //                             {exam.icon}
// //                           </div>
// //                           <h4 className="font-medium text-slate-900 dark:text-white">{exam.name}</h4>
// //                         </div>
// //                         <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-2">
// //                           {exam.description}
// //                         </p>
// //                         <div className="flex justify-between items-center text-xs">
// //                           <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full">
// //                             {exam.questions} questions
// //                           </span>
// //                           <span className="text-blue-600 dark:text-blue-400">View →</span>
// //                         </div>
// //                       </Link>
// //                     ))}
// //                   </div>
                  
// //                   <div className="mt-4 text-center">
// //                     <Link
// //                       href={`/apps/scoorly/exams/${category.id}`}
// //                       className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
// //                     >
// //                       View all {category.name} exams
// //                       <ChevronRight className="h-4 w-4 ml-1" />
// //                     </Link>
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           ))}
// //         </div>
        
// //         {/* No Results State */}
// //         {filteredCategories.length === 0 && !loading && (
// //           <div className="text-center py-12 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
// //             <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">No exams found matching your search.</p>
// //             <button 
// //               onClick={() => setSearchTerm("")}
// //               className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
// //             >
// //               Clear Search
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   )
// // }
// // app/apps/scoorly/exams/page.js
// "use client"

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { 
//   Award, 
//   Search, 
//   ChevronDown, 
//   ChevronRight,
//   Flame, 
//   Ambulance, 
//   HeartPulse, 
//   Activity, 
//   Clipboard, 
//   Zap, 
//   Shield,
//   Stethoscope,
//   Brain,
//   Hospital,
//   UserCheck,
//   Book,
//   Thermometer,
//   Syringe,
//   PenTool
// } from 'lucide-react'
// import { createBrowserClient } from "@supabase/ssr"

// // Component for ExamCategory
// function ExamCategoryCard({ category, isExpanded, onToggle }) {
//   return (
//     <div 
//       key={category.id}
//       className={`rounded-xl overflow-hidden border ${category.border}`}
//     >
//       {/* Category Header - Clickable */}
//       <button 
//         onClick={() => onToggle(category.id)}
//         className={`w-full flex items-center justify-between p-5 ${category.color} text-left`}
//       >
//         <div className="flex items-center gap-4">
//           <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm">
//             {category.icon}
//           </div>
//           <div>
//             <h3 className="font-semibold text-xl text-slate-900 dark:text-white">{category.name}</h3>
//             <p className="text-sm text-slate-600 dark:text-slate-400">
//               {category.exams.length} certification exams
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center gap-2">
//           <span className="text-blue-600 dark:text-blue-400">
//             {isExpanded ? 
//               <ChevronDown className="h-5 w-5" /> : 
//               <ChevronRight className="h-5 w-5" />
//             }
//           </span>
//         </div>
//       </button>
      
//       {/* Expanded Content - Sub Exams */}
//       {isExpanded && (
//         <div className={`bg-gradient-to-b ${category.gradient} p-5`}>
//           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//             {category.exams.map((exam) => (
//               <Link 
//                 href={`/apps/scoorly/exams/${category.id}/${exam.id}`} 
//                 key={exam.id}
//                 className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all"
//               >
//                 <div className="flex items-center mb-2 gap-2">
//                   <div className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-700">
//                     {exam.icon}
//                   </div>
//                   <h4 className="font-medium text-slate-900 dark:text-white">{exam.name}</h4>
//                 </div>
//                 <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-2">
//                   {exam.description}
//                 </p>
//                 <div className="flex justify-between items-center text-xs">
//                   <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full">
//                     {exam.questions} questions
//                   </span>
//                   <span className="text-blue-600 dark:text-blue-400">View →</span>
//                 </div>
//               </Link>
//             ))}
//           </div>
          
//           <div className="mt-4 text-center">
//             <Link
//               href={`/apps/scoorly/exams/${category.id}`}
//               className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
//             >
//               View all {category.name} exams
//               <ChevronRight className="h-4 w-4 ml-1" />
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// // Component for ExamHero
// function ExamHero({ searchTerm, setSearchTerm }) {
//   return (
//     <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
//       <div className="max-w-5xl mx-auto px-4 py-16 md:py-20 text-center">
//         <div className="inline-flex p-3 mb-6 bg-white/20 rounded-full">
//           <Award className="h-8 w-8" />
//         </div>
//         <h1 className="text-3xl md:text-5xl font-bold mb-4">Medical Certification Exams</h1>
//         <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
//           Practice with thousands of questions across medical, nursing, and emergency fields
//         </p>
        
//         {/* Search */}
//         <div className="relative max-w-md mx-auto">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300 h-5 w-5" />
//           <input 
//             type="text" 
//             placeholder="Find your exam..." 
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full pl-10 pr-4 py-3 bg-white/10 text-white rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// // Map icon strings to components
// const iconMap = {
//   'flame': <Flame className="h-5 w-5 text-orange-500" />,
//   'ambulance': <Ambulance className="h-5 w-5 text-blue-500" />,
//   'heartpulse': <HeartPulse className="h-5 w-5 text-purple-500" />,
//   'activity': <Activity className="h-5 w-5 text-indigo-500" />,
//   'clipboard': <Clipboard className="h-5 w-5 text-teal-500" />,
//   'zap': <Zap className="h-5 w-5 text-yellow-500" />,
//   'shield': <Shield className="h-5 w-5 text-green-500" />,
//   'stethoscope': <Stethoscope className="h-6 w-6 text-blue-500" />,
//   'brain': <Brain className="h-5 w-5 text-violet-500" />,
//   'hospital': <Hospital className="h-5 w-5 text-teal-500" />,
//   'usercheck': <UserCheck className="h-5 w-5 text-blue-500" />,
//   'book': <Book className="h-6 w-6 text-purple-500" />,
//   'thermometer': <Thermometer className="h-5 w-5 text-red-400" />,
//   'syringe': <Syringe className="h-5 w-5 text-teal-600" />,
//   'pentool': <PenTool className="h-5 w-5 text-cyan-500" />
// }

// // Map for category styling based on color names
// const categoryStyleMap = {
//   'orange': {
//     icon: <Flame className="h-6 w-6 text-orange-500" />,
//     color: 'bg-orange-50 dark:bg-orange-950/30',
//     border: 'border-orange-200 dark:border-orange-800',
//     hover: 'hover:border-orange-300 dark:hover:border-orange-700',
//     gradient: 'from-orange-50 to-white dark:from-orange-950/30 dark:to-transparent',
//   },
//   'blue': {
//     icon: <Stethoscope className="h-6 w-6 text-blue-500" />,
//     color: 'bg-blue-50 dark:bg-blue-950/30',
//     border: 'border-blue-200 dark:border-blue-800',
//     hover: 'hover:border-blue-300 dark:hover:border-blue-700',
//     gradient: 'from-blue-50 to-white dark:from-blue-950/30 dark:to-transparent',
//   },
//   'red': {
//     icon: <Shield className="h-6 w-6 text-red-500" />,
//     color: 'bg-red-50 dark:bg-red-950/30',
//     border: 'border-red-200 dark:border-red-800',
//     hover: 'hover:border-red-300 dark:hover:border-red-700',
//     gradient: 'from-red-50 to-white dark:from-red-950/30 dark:to-transparent',
//   },
//   'purple': {
//     icon: <Book className="h-6 w-6 text-purple-500" />,
//     color: 'bg-purple-50 dark:bg-purple-950/30',
//     border: 'border-purple-200 dark:border-purple-800',
//     hover: 'hover:border-purple-300 dark:hover:border-purple-700',
//     gradient: 'from-purple-50 to-white dark:from-purple-950/30 dark:to-transparent',
//   },
//   // Default fallback if color is not in our map
//   'default': {
//     icon: <Award className="h-6 w-6 text-slate-500" />,
//     color: 'bg-slate-50 dark:bg-slate-950/30',
//     border: 'border-slate-200 dark:border-slate-800',
//     hover: 'hover:border-slate-300 dark:hover:border-slate-700',
//     gradient: 'from-slate-50 to-white dark:from-slate-950/30 dark:to-transparent',
//   }
// }

// // Helper to get default icon when none is specified
// const getIconComponent = (iconName, defaultClass = "h-5 w-5 text-blue-500") => {
//   if (!iconName) return <Shield className={defaultClass} />;
  
//   const IconComponent = iconMap[iconName.toLowerCase()];
//   if (IconComponent) return IconComponent;
  
//   return <Shield className={defaultClass} />;
// }

// export default function ExamsPage() {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [expandedCategories, setExpandedCategories] = useState({})
//   const [examCategories, setExamCategories] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         setLoading(true)
        
//         const supabase = createBrowserClient(
//           process.env.NEXT_PUBLIC_SUPABASE_URL,
//           process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
//         )
        
//         // First fetch the categories
//         const { data: categoriesData, error: categoriesError } = await supabase
//           .from('exam_categories')
//           .select('*')
//           .eq('is_active', true)
//           .order('display_order', { ascending: true })
        
//         if (categoriesError) throw categoriesError
        
//         // Then fetch all exams
//         const { data: examsData, error: examsError } = await supabase
//           .from('exams')
//           .select('*')
//           .eq('is_active', true)
//           .eq('is_category', false)
//           .order('display_order', { ascending: true })
        
//         if (examsError) throw examsError
        
//         // Define question counts for specific exams
//         const questionCounts = {
//           'firefighter-1-2': 1000,
//           'ibsc-ccp-c': 400,
//           'ibsc-fp-c': 1000,
//           'ibsc-tp-c': 400,
//           'nremt-aemt': 900,
//           'nremt-emr': 500,
//           'nremt-emt': 1030,
//           'nremt-paramedic': 1290,
//         }
        
//         // Format the data into our expected structure
//         const formattedCategories = categoriesData.map(category => {
//           // Find exams for this category
//           const categoryExams = examsData.filter(exam => 
//             exam.category_id === category.id
//           )
          
//           // Get styling from our map or use defaults
//           const styling = categoryStyleMap[category.color] || categoryStyleMap.default
          
//           return {
//             id: category.slug,
//             name: category.name,
//             description: category.description || `Certification exams for ${category.name} professionals`,
//             icon: styling.icon,
//             color: styling.color,
//             border: styling.border,
//             hover: styling.hover,
//             gradient: styling.gradient,
//             exams: categoryExams.map(exam => ({
//               id: exam.slug,
//               name: exam.name,
//               questions: questionCounts[exam.slug] || 500, // Fallback to 500 questions
//               icon: getIconComponent(exam.icon),
//               description: exam.description || `${exam.name} certification exam`,
//             }))
//           }
//         })
        
//         setExamCategories(formattedCategories)
//       } catch (error) {
//         console.error('Error fetching data:', error)
//         setError(error.message)
//       } finally {
//         setLoading(false)
//       }
//     }
    
//     fetchData()
//   }, [])

//   // Toggle category expansion
//   const toggleCategory = (categoryId) => {
//     setExpandedCategories(prev => ({
//       ...prev,
//       [categoryId]: !prev[categoryId]
//     }))
//   }

//   // Filter categories and exams based on search term
//   const filteredCategories = examCategories.map(category => {
//     const filteredExams = category.exams.filter(exam => 
//       exam.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//       exam.description.toLowerCase().includes(searchTerm.toLowerCase())
//     )
    
//     return {
//       ...category,
//       exams: filteredExams,
//       matches: filteredExams.length > 0 || category.name.toLowerCase().includes(searchTerm.toLowerCase())
//     }
//   }).filter(category => category.matches)

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
//           <p className="text-slate-600 dark:text-slate-400">Loading exam categories...</p>
//         </div>
//       </div>
//     )
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
//         <div className="text-center max-w-md p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md">
//           <Shield className="h-12 w-12 text-red-500 mx-auto mb-4" />
//           <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Error Loading Exams</h2>
//           <p className="text-slate-600 dark:text-slate-400 mb-4">{error}</p>
//           <button 
//             onClick={() => window.location.reload()}
//             className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
//       {/* Hero Section */}
//       <ExamHero 
//         searchTerm={searchTerm}
//         setSearchTerm={setSearchTerm}
//       />
      
//       {/* Main Content - Expandable Categories */}
//       <div className="max-w-5xl mx-auto px-4 py-12">
//         <h2 className="text-2xl font-bold mb-8 text-center text-slate-900 dark:text-white">
//           Choose Your Certification Path
//         </h2>
        
//         <div className="space-y-6">
//           {filteredCategories.map((category) => (
//             <ExamCategoryCard
//               key={category.id}
//               category={category}
//               isExpanded={expandedCategories[category.id]}
//               onToggle={toggleCategory}
//             />
//           ))}
//         </div>
        
//         {/* No Results State */}
//         {filteredCategories.length === 0 && !loading && (
//           <div className="text-center py-12 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
//             <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">No exams found matching your search.</p>
//             <button 
//               onClick={() => setSearchTerm("")}
//               className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
//             >
//               Clear Search
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }
// app/apps/scoorly/exams/page.js
"use client"

import { useState } from 'react'
import ExamHero from '@/components/heroes/ExamHero'
import ExamCategoryCard from '@/components/exams/ExamCategoryCard'
import useExams from '@/app/hooks/useExams'
import { Shield } from 'lucide-react'

export default function ExamsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedCategories, setExpandedCategories] = useState({})
  
  // Fetch exams data using our custom hook
  const { examCategories, loading, error } = useExams()

  // Toggle category expansion
  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }))
  }

  // Filter categories and exams based on search term
  const filteredCategories = examCategories.map(category => {
    const filteredExams = category.exams.filter(exam => 
      exam.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      exam.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    
    return {
      ...category,
      exams: filteredExams,
      matches: filteredExams.length > 0 || category.name.toLowerCase().includes(searchTerm.toLowerCase())
    }
  }).filter(category => category.matches)

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading exam categories...</p>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center max-w-md p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md">
          <Shield className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Error Loading Exams</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <ExamHero 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      
      {/* Main Content - Expandable Categories */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center text-slate-900 dark:text-white">
          Choose Your Certification Path
        </h2>
        
        <div className="space-y-6">
          {filteredCategories.map((category) => (
            <ExamCategoryCard
              key={category.id}
              id={category.id}
              name={category.name}
              description={category.description}
              icon={category.icon}
              color={category.color}
              border={category.border}
              gradient={category.gradient}
              exams={category.exams}
              isExpanded={expandedCategories[category.id]}
              onToggle={toggleCategory}
            />
          ))}
        </div>
        
        {/* No Results State */}
        {filteredCategories.length === 0 && !loading && (
          <div className="text-center py-12 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">No exams found matching your search.</p>
            <button 
              onClick={() => setSearchTerm("")}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  )
}