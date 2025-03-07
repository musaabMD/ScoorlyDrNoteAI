// // // // app/apps/scoorly/exams/[category]/[examId]/page.js
// // // "use client"

// // // import { useState } from 'react'
// // // import Link from 'next/link'
// // // import { 
// // //   ChevronLeft, 
// // //   Clock, 
// // //   Book, 
// // //   Award, 
// // //   CheckCircle, 
// // //   BarChart4,
// // //   FileText,
// // //   AlertCircle,
// // //   PlayCircle,
// // //   Flame, 
// // //   Ambulance, 
// // //   HeartPulse, 
// // //   Activity, 
// // //   Clipboard, 
// // //   Zap, 
// // //   Shield 
// // // } from 'lucide-react'

// // // // Map of exam data keyed by category and examId
// // // const examData = {
// // //   ems: {
// // //     "firefighter": {
// // //       id: "firefighter",
// // //       name: "Firefighter I & II",
// // //       category: "ems",
// // //       categoryName: "Emergency Medical Services",
// // //       icon: <Flame className="h-6 w-6 text-orange-500" />,
// // //       description: "Comprehensive firefighter certification exam covering fire science, safety, and rescue operations.",
// // //       duration: "3 hours",
// // //       questions: 1000,
// // //       passingScore: "70%",
// // //       attempts: "Unlimited",
// // //       difficulty: "Medium",
// // //       color: "text-orange-500",
// // //       topics: [
// // //         "Fire Behavior and Combustion",
// // //         "Building Construction",
// // //         "Fire Prevention and Public Education",
// // //         "Fire Protection Systems",
// // //         "Firefighting Tactics and Strategy",
// // //         "Rescue Operations",
// // //         "Hazardous Materials",
// // //         "Emergency Medical Care",
// // //       ],
// // //       progress: {
// // //         completed: 250,
// // //         score: 72
// // //       }
// // //     },
// // //     "ibsc-ccp": {
// // //       id: "ibsc-ccp",
// // //       name: "IBSC CCP-C®",
// // //       category: "ems",
// // //       categoryName: "Emergency Medical Services",
// // //       icon: <Ambulance className="h-6 w-6 text-blue-500" />,
// // //       description: "Critical Care Paramedic Certification for advanced emergency medical care.",
// // //       duration: "2 hours",
// // //       questions: 400,
// // //       passingScore: "75%",
// // //       attempts: "3 per year",
// // //       difficulty: "Hard",
// // //       color: "text-blue-500",
// // //       topics: [
// // //         "Airway Management",
// // //         "Ventilatory Management",
// // //         "Cardiovascular Emergencies",
// // //         "Shock & Trauma Management",
// // //         "Medical Emergencies",
// // //         "Special Considerations",
// // //         "Operations & Safety",
// // //         "Pharmacology"
// // //       ],
// // //       progress: {
// // //         completed: 120,
// // //         score: 68
// // //       }
// // //     },
// // //     "nremt-paramedic": {
// // //       id: "nremt-paramedic",
// // //       name: "NREMT® Paramedic",
// // //       category: "ems",
// // //       categoryName: "Emergency Medical Services",
// // //       icon: <HeartPulse className="h-6 w-6 text-pink-500" />,
// // //       description: "Paramedic certification for advanced life support and emergency care.",
// // //       duration: "3.5 hours",
// // //       questions: 1200,
// // //       passingScore: "75%",
// // //       attempts: "6 per year",
// // //       difficulty: "Hard",
// // //       color: "text-pink-500",
// // //       topics: [
// // //         "Airway, Respiration & Ventilation",
// // //         "Cardiology & Resuscitation",
// // //         "Trauma",
// // //         "Medical & Obstetrics/Gynecology",
// // //         "EMS Operations",
// // //         "Advanced Skills Assessment",
// // //         "Critical Thinking & Decision Making",
// // //         "Pharmacology & Medication Administration"
// // //       ],
// // //       progress: {
// // //         completed: 450,
// // //         score: 78
// // //       }
// // //     }
// // //   },
// // //   nursing: {
// // //     "aanpcb-fnp": {
// // //       id: "aanpcb-fnp",
// // //       name: "AANPCB® FNP",
// // //       category: "nursing",
// // //       categoryName: "Nursing",
// // //       icon: <Clipboard className="h-6 w-6 text-green-500" />,
// // //       description: "Family Nurse Practitioner certification for primary care across the lifespan.",
// // //       duration: "3 hours",
// // //       questions: 1000,
// // //       passingScore: "75%",
// // //       attempts: "3 per year",
// // //       difficulty: "Hard",
// // //       color: "text-green-500",
// // //       topics: [
// // //         "Assessment and Diagnosis",
// // //         "Clinical Management",
// // //         "Patient Education and Counseling",
// // //         "Professional Role",
// // //         "Managing Health Care Delivery Systems",
// // //         "Monitoring and Ensuring Quality of Health Care Practices",
// // //         "Cultural Competence",
// // //         "Research"
// // //       ],
// // //       progress: {
// // //         completed: 350,
// // //         score: 74
// // //       }
// // //     }
// // //   },
// // //   emergency: {
// // //     "bcen-cen": {
// // //       id: "bcen-cen",
// // //       name: "BCEN CEN®",
// // //       category: "emergency",
// // //       categoryName: "Emergency Certification",
// // //       icon: <Zap className="h-6 w-6 text-amber-500" />,
// // //       description: "Certified Emergency Nurse certification for emergency department nursing.",
// // //       duration: "3 hours",
// // //       questions: 1000,
// // //       passingScore: "70%",
// // //       attempts: "Unlimited",
// // //       difficulty: "Hard",
// // //       color: "text-amber-500",
// // //       topics: [
// // //         "Cardiovascular Emergencies",
// // //         "Respiratory Emergencies",
// // //         "Neurological Emergencies",
// // //         "Gastrointestinal Emergencies",
// // //         "Genitourinary/Gynecological Emergencies",
// // //         "Trauma",
// // //         "Shock",
// // //         "Environmental Emergencies"
// // //       ],
// // //       progress: {
// // //         completed: 275,
// // //         score: 71
// // //       }
// // //     }
// // //   }
// // // }

// // // // Helper function to get exam by category and examId
// // // function getExamData(category, examId) {
// // //   if (examData[category] && examData[category][examId]) {
// // //     return examData[category][examId]
// // //   }
// // //   return null
// // // }

// // // // Category color map
// // // const categoryColorMap = {
// // //   ems: {
// // //     bg: "bg-orange-50 dark:bg-orange-950/30",
// // //     border: "border-orange-200 dark:border-orange-800",
// // //     text: "text-orange-600 dark:text-orange-400",
// // //     accent: "bg-orange-500"
// // //   },
// // //   nursing: {
// // //     bg: "bg-blue-50 dark:bg-blue-950/30",
// // //     border: "border-blue-200 dark:border-blue-800",
// // //     text: "text-blue-600 dark:text-blue-400",
// // //     accent: "bg-blue-500"
// // //   },
// // //   emergency: {
// // //     bg: "bg-red-50 dark:bg-red-950/30",
// // //     border: "border-red-200 dark:border-red-800",
// // //     text: "text-red-600 dark:text-red-400",
// // //     accent: "bg-red-500"
// // //   },
// // //   specialty: {
// // //     bg: "bg-purple-50 dark:bg-purple-950/30",
// // //     border: "border-purple-200 dark:border-purple-800",
// // //     text: "text-purple-600 dark:text-purple-400",
// // //     accent: "bg-purple-500"
// // //   }
// // // }

// // // export default function ExamDetailPage({ params }) {
// // //   const { category, examId } = params
// // //   const exam = getExamData(category, examId)
  
// // //   // Get color theme for the category
// // //   const colorTheme = categoryColorMap[category] || {
// // //     bg: "bg-gray-50 dark:bg-gray-800",
// // //     border: "border-gray-200 dark:border-gray-700",
// // //     text: "text-gray-600 dark:text-gray-400",
// // //     accent: "bg-gray-500"
// // //   }
  
// // //   if (!exam) {
// // //     return (
// // //       <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
// // //         <div className="text-center max-w-md mx-auto px-4">
// // //           <AlertCircle className="h-16 w-16 text-slate-400 mx-auto mb-4" />
// // //           <h1 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Exam Not Found</h1>
// // //           <p className="text-slate-600 dark:text-slate-400 mb-6">
// // //             The exam you're looking for doesn't exist or may have been removed.
// // //           </p>
// // //           <Link 
// // //             href="/apps/scoorly/exams"
// // //             className="inline-block px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
// // //           >
// // //             Browse All Exams
// // //           </Link>
// // //         </div>
// // //       </div>
// // //     )
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
// // //       {/* Exam Header */}
// // //       <div className={`${colorTheme.bg} border-b ${colorTheme.border} py-8`}>
// // //         <div className="max-w-5xl mx-auto px-4">
// // //           <div className="mb-6">
// // //             <Link 
// // //               href={`/apps/scoorly/exams/${category}`} 
// // //               className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
// // //             >
// // //               <ChevronLeft className="h-4 w-4 mr-1" />
// // //               Back to {exam.categoryName}
// // //             </Link>
// // //           </div>
          
// // //           <div className="flex items-center mb-4">
// // //             <div className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-sm mr-4">
// // //               {exam.icon}
// // //             </div>
// // //             <div>
// // //               <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
// // //                 {exam.name}
// // //               </h1>
// // //               <p className={`${colorTheme.text}`}>
// // //                 {exam.categoryName}
// // //               </p>
// // //             </div>
// // //           </div>
          
// // //           <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
// // //             {exam.description}
// // //           </p>
// // //         </div>
// // //       </div>
      
// // //       <div className="max-w-5xl mx-auto px-4 py-8">
// // //         {/* Exam Overview */}
// // //         <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8 border border-slate-200 dark:border-slate-700 shadow-sm">
// // //           <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Exam Overview</h2>
// // //           <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
// // //             <div className="flex items-center">
// // //               <Clock className="h-5 w-5 text-blue-500 mr-3" />
// // //               <div>
// // //                 <span className="block text-slate-900 dark:text-white font-medium">{exam.duration}</span>
// // //                 <span className="text-sm text-slate-500 dark:text-slate-400">Duration</span>
// // //               </div>
// // //             </div>
// // //             <div className="flex items-center">
// // //               <Book className="h-5 w-5 text-green-500 mr-3" />
// // //               <div>
// // //                 <span className="block text-slate-900 dark:text-white font-medium">{exam.questions}</span>
// // //                 <span className="text-sm text-slate-500 dark:text-slate-400">Questions</span>
// // //               </div>
// // //             </div>
// // //             <div className="flex items-center">
// // //               <Award className="h-5 w-5 text-yellow-500 mr-3" />
// // //               <div>
// // //                 <span className="block text-slate-900 dark:text-white font-medium">{exam.passingScore}</span>
// // //                 <span className="text-sm text-slate-500 dark:text-slate-400">Passing Score</span>
// // //               </div>
// // //             </div>
// // //             <div className="flex items-center">
// // //               <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
// // //               <div>
// // //                 <span className="block text-slate-900 dark:text-white font-medium">{exam.attempts}</span>
// // //                 <span className="text-sm text-slate-500 dark:text-slate-400">Attempts</span>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
        
// // //         {/* Two Column Layout */}
// // //         <div className="grid gap-8 md:grid-cols-3">
// // //           {/* Left Column - Topics */}
// // //           <div className="md:col-span-2">
// // //             <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8 border border-slate-200 dark:border-slate-700 shadow-sm">
// // //               <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Exam Topics</h2>
// // //               <div className="grid gap-3 md:grid-cols-2">
// // //                 {exam.topics.map((topic, index) => (
// // //                   <div 
// // //                     key={index} 
// // //                     className="flex items-start p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
// // //                   >
// // //                     <div className={`p-1.5 rounded-full ${colorTheme.accent} mr-3 mt-0.5`}>
// // //                       <CheckCircle className="h-3.5 w-3.5 text-white" />
// // //                     </div>
// // //                     <span className="text-slate-700 dark:text-slate-300">{topic}</span>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
            
// // //             {/* Practice Options */}
// // //             <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
// // //               <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Practice Options</h2>
// // //               <div className="grid gap-4 sm:grid-cols-2">
// // //                 <Link 
// // //                   href={`/apps/scoorly/exams/${category}/${examId}/quiz`}
// // //                   className="flex items-center p-4 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
// // //                 >
// // //                   <PlayCircle className="h-5 w-5 mr-3" />
// // //                   <span className="font-medium">Start Full Practice Exam</span>
// // //                 </Link>
// // //                 <button className="flex items-center p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
// // //                   <FileText className="h-5 w-5 mr-3" />
// // //                   <span className="font-medium">Practice by Topic</span>
// // //                 </button>
// // //                 <button className="flex items-center p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
// // //                   <AlertCircle className="h-5 w-5 mr-3" />
// // //                   <span className="font-medium">Focus on Weak Areas</span>
// // //                 </button>
// // //                 <button className="flex items-center p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
// // //                   <BarChart4 className="h-5 w-5 mr-3" />
// // //                   <span className="font-medium">Review Past Attempts</span>
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
          
// // //           {/* Right Column - Progress */}
// // //           <div>
// // //             {/* Your Progress */}
// // //             <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8 border border-slate-200 dark:border-slate-700 shadow-sm">
// // //               <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Your Progress</h2>
              
// // //               <div className="mb-4">
// // //                 <div className="flex justify-between mb-2">
// // //                   <span className="text-slate-600 dark:text-slate-400">Completed Questions</span>
// // //                   <span className="text-slate-900 dark:text-white font-medium">{exam.progress.completed} / {exam.questions}</span>
// // //                 </div>
// // //                 <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
// // //                   <div 
// // //                     className="h-full bg-blue-500" 
// // //                     style={{ width: `${(exam.progress.completed / exam.questions) * 100}%` }}
// // //                   ></div>
// // //                 </div>
// // //               </div>
              
// // //               <div className="mb-4">
// // //                 <div className="flex justify-between mb-2">
// // //                   <span className="text-slate-600 dark:text-slate-400">Current Score</span>
// // //                   <span className="text-slate-900 dark:text-white font-medium">{exam.progress.score}%</span>
// // //                 </div>
// // //                 <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
// // //                   <div 
// // //                     className={`h-full ${exam.progress.score >= parseFloat(exam.passingScore) ? 'bg-green-500' : 'bg-yellow-500'}`}
// // //                     style={{ width: `${exam.progress.score}%` }}
// // //                   ></div>
// // //                 </div>
// // //                 <div className="flex justify-between mt-2 text-xs text-slate-500 dark:text-slate-400">
// // //                   <span>0%</span>
// // //                   <span>Passing: {exam.passingScore}</span>
// // //                   <span>100%</span>
// // //                 </div>
// // //               </div>
              
// // //               <div className="mt-6">
// // //                 <Link 
// // //                   href={`/apps/scoorly/exams/${category}/${examId}/quiz`}
// // //                   className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-center inline-block"
// // //                 >
// // //                   Continue Practice
// // //                 </Link>
// // //               </div>
// // //             </div>
            
// // //             {/* Additional Info */}
// // //             <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
// // //               <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Exam Stats</h2>
// // //               <div className="space-y-4">
// // //                 <div className="flex justify-between items-center">
// // //                   <span className="text-slate-600 dark:text-slate-400">Difficulty</span>
// // //                   <span className="font-medium text-slate-900 dark:text-white">{exam.difficulty}</span>
// // //                 </div>
// // //                 <div className="flex justify-between items-center">
// // //                   <span className="text-slate-600 dark:text-slate-400">Average Time</span>
// // //                   <span className="font-medium text-slate-900 dark:text-white">{exam.duration}</span>
// // //                 </div>
// // //                 <div className="flex justify-between items-center">
// // //                   <span className="text-slate-600 dark:text-slate-400">Pass Rate</span>
// // //                   <span className="font-medium text-slate-900 dark:text-white">72%</span>
// // //                 </div>
// // //                 <div className="flex justify-between items-center">
// // //                   <span className="text-slate-600 dark:text-slate-400">Last Updated</span>
// // //                   <span className="font-medium text-slate-900 dark:text-white">3 weeks ago</span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }
// // // app/apps/scoorly/exams/[category]/[examId]/page.js
// // "use client"

// // import { useState } from 'react'
// // import Link from 'next/link'
// // import { 
// //   ChevronLeft, 
// //   Clock, 
// //   Book, 
// //   Award, 
// //   CheckCircle, 
// //   BarChart4,
// //   FileText,
// //   AlertCircle,
// //   PlayCircle
// // } from 'lucide-react'
// // import useExamDetail from '@/app/hooks/useExamDetail'
// // import { colorThemes } from '@/lib/colorThemes'

// // export default function ExamDetailPage({ params }) {
// //   const { category, examId } = params
// //   const { exam, loading, error } = useExamDetail(category, examId)
  
// //   // Get color theme for the category
// //   const colorTheme = exam ? colorThemes[exam.colorTheme] || colorThemes.default : colorThemes.default
  
// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
// //         <div className="text-center">
// //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
// //           <p className="text-slate-600 dark:text-slate-400">Loading exam details...</p>
// //         </div>
// //       </div>
// //     )
// //   }
  
// //   if (error || !exam) {
// //     return (
// //       <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
// //         <div className="text-center max-w-md mx-auto px-4">
// //           <AlertCircle className="h-16 w-16 text-slate-400 mx-auto mb-4" />
// //           <h1 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Exam Not Found</h1>
// //           <p className="text-slate-600 dark:text-slate-400 mb-6">
// //             The exam you're looking for doesn't exist or may have been removed.
// //           </p>
// //           <Link 
// //             href="/apps/scoorly/exams"
// //             className="inline-block px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
// //           >
// //             Browse All Exams
// //           </Link>
// //         </div>
// //       </div>
// //     )
// //   }

// //   return (
// //     <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
// //       {/* Exam Header */}
// //       <div className={`${colorTheme.bg} border-b ${colorTheme.border} py-8`}>
// //         <div className="max-w-5xl mx-auto px-4">
// //           <div className="mb-6">
// //             <Link 
// //               href={`/apps/scoorly/exams/${category}`} 
// //               className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
// //             >
// //               <ChevronLeft className="h-4 w-4 mr-1" />
// //               Back to {exam.categoryName}
// //             </Link>
// //           </div>
          
// //           <div className="flex items-center mb-4">
// //             <div className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-sm mr-4">
// //               {exam.icon}
// //             </div>
// //             <div>
// //               <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
// //                 {exam.name}
// //               </h1>
// //               <p className={`${colorTheme.text}`}>
// //                 {exam.categoryName}
// //               </p>
// //             </div>
// //           </div>
          
// //           <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
// //             {exam.description}
// //           </p>
// //         </div>
// //       </div>
      
// //       <div className="max-w-5xl mx-auto px-4 py-8">
// //         {/* Exam Overview */}
// //         <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8 border border-slate-200 dark:border-slate-700 shadow-sm">
// //           <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Exam Overview</h2>
// //           <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
// //             <div className="flex items-center">
// //               <Clock className="h-5 w-5 text-blue-500 mr-3" />
// //               <div>
// //                 <span className="block text-slate-900 dark:text-white font-medium">{exam.duration}</span>
// //                 <span className="text-sm text-slate-500 dark:text-slate-400">Duration</span>
// //               </div>
// //             </div>
// //             <div className="flex items-center">
// //               <Book className="h-5 w-5 text-green-500 mr-3" />
// //               <div>
// //                 <span className="block text-slate-900 dark:text-white font-medium">{exam.questions}</span>
// //                 <span className="text-sm text-slate-500 dark:text-slate-400">Questions</span>
// //               </div>
// //             </div>
// //             <div className="flex items-center">
// //               <Award className="h-5 w-5 text-yellow-500 mr-3" />
// //               <div>
// //                 <span className="block text-slate-900 dark:text-white font-medium">{exam.passingScore}</span>
// //                 <span className="text-sm text-slate-500 dark:text-slate-400">Passing Score</span>
// //               </div>
// //             </div>
// //             <div className="flex items-center">
// //               <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
// //               <div>
// //                 <span className="block text-slate-900 dark:text-white font-medium">{exam.attempts}</span>
// //                 <span className="text-sm text-slate-500 dark:text-slate-400">Attempts</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
        
// //         {/* Two Column Layout */}
// //         <div className="grid gap-8 md:grid-cols-3">
// //           {/* Left Column - Topics */}
// //           <div className="md:col-span-2">
// //             <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8 border border-slate-200 dark:border-slate-700 shadow-sm">
// //               <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Exam Topics</h2>
// //               <div className="grid gap-3 md:grid-cols-2">
// //                 {exam.topics.map((topic, index) => (
// //                   <div 
// //                     key={index} 
// //                     className="flex items-start p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
// //                   >
// //                     <div className={`p-1.5 rounded-full ${colorTheme.accent} mr-3 mt-0.5`}>
// //                       <CheckCircle className="h-3.5 w-3.5 text-white" />
// //                     </div>
// //                     <span className="text-slate-700 dark:text-slate-300">{topic}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
            
// //             {/* Practice Options */}
// //             <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
// //               <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Practice Options</h2>
// //               <div className="grid gap-4 sm:grid-cols-2">
// //                 <Link 
// //                   href={`/apps/scoorly/exams/${category}/${examId}/quiz`}
// //                   className="flex items-center p-4 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
// //                 >
// //                   <PlayCircle className="h-5 w-5 mr-3" />
// //                   <span className="font-medium">Start Full Practice Exam</span>
// //                 </Link>
// //                 <button className="flex items-center p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
// //                   <FileText className="h-5 w-5 mr-3" />
// //                   <span className="font-medium">Practice by Topic</span>
// //                 </button>
// //                 <button className="flex items-center p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
// //                   <AlertCircle className="h-5 w-5 mr-3" />
// //                   <span className="font-medium">Focus on Weak Areas</span>
// //                 </button>
// //                 <button className="flex items-center p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
// //                   <BarChart4 className="h-5 w-5 mr-3" />
// //                   <span className="font-medium">Review Past Attempts</span>
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
          
// //           {/* Right Column - Progress */}
// //           <div>
// //             {/* Your Progress */}
// //             <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8 border border-slate-200 dark:border-slate-700 shadow-sm">
// //               <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Your Progress</h2>
              
// //               <div className="mb-4">
// //                 <div className="flex justify-between mb-2">
// //                   <span className="text-slate-600 dark:text-slate-400">Completed Questions</span>
// //                   <span className="text-slate-900 dark:text-white font-medium">{exam.progress.completed} / {exam.questions}</span>
// //                 </div>
// //                 <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
// //                   <div 
// //                     className="h-full bg-blue-500" 
// //                     style={{ width: `${(exam.progress.completed / exam.questions) * 100}%` }}
// //                   ></div>
// //                 </div>
// //               </div>
              
// //               <div className="mb-4">
// //                 <div className="flex justify-between mb-2">
// //                   <span className="text-slate-600 dark:text-slate-400">Current Score</span>
// //                   <span className="text-slate-900 dark:text-white font-medium">{exam.progress.score}%</span>
// //                 </div>
// //                 <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
// //                   <div 
// //                     className={`h-full ${exam.progress.score >= parseFloat(exam.passingScore) ? 'bg-green-500' : 'bg-yellow-500'}`}
// //                     style={{ width: `${exam.progress.score}%` }}
// //                   ></div>
// //                 </div>
// //                 <div className="flex justify-between mt-2 text-xs text-slate-500 dark:text-slate-400">
// //                   <span>0%</span>
// //                   <span>Passing: {exam.passingScore}</span>
// //                   <span>100%</span>
// //                 </div>
// //               </div>
              
// //               <div className="mt-6">
// //                 <Link 
// //                   href={`/apps/scoorly/exams/${category}/${examId}/quiz`}
// //                   className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-center inline-block"
// //                 >
// //                   Continue Practice
// //                 </Link>
// //               </div>
// //             </div>
            
// //             {/* Additional Info */}
// //             <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
// //               <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Exam Stats</h2>
// //               <div className="space-y-4">
// //                 <div className="flex justify-between items-center">
// //                   <span className="text-slate-600 dark:text-slate-400">Difficulty</span>
// //                   <span className="font-medium text-slate-900 dark:text-white">{exam.difficulty}</span>
// //                 </div>
// //                 <div className="flex justify-between items-center">
// //                   <span className="text-slate-600 dark:text-slate-400">Average Time</span>
// //                   <span className="font-medium text-slate-900 dark:text-white">{exam.duration}</span>
// //                 </div>
// //                 <div className="flex justify-between items-center">
// //                   <span className="text-slate-600 dark:text-slate-400">Pass Rate</span>
// //                   <span className="font-medium text-slate-900 dark:text-white">72%</span>
// //                 </div>
// //                 <div className="flex justify-between items-center">
// //                   <span className="text-slate-600 dark:text-slate-400">Last Updated</span>
// //                   <span className="font-medium text-slate-900 dark:text-white">3 weeks ago</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }
// // app/apps/scoorly/exams/[category]/[examId]/page.js
// // app/apps/scoorly/exams/[category]/[examId]/page.js

// // "use client"

// // import { useState } from 'react'
// // import Link from 'next/link'
// // import { 
// //   ChevronLeft, 
// //   Clock, 
// //   Book, 
// //   Award, 
// //   CheckCircle, 
// //   BarChart4,
// //   FileText,
// //   AlertCircle,
// //   PlayCircle
// // } from 'lucide-react'
// // import useExamDetail from '@/app/hooks/useExamDetail'

// // export default function ExamDetailPage({ params }) {
// //   const { category, examId } = params
// //   console.log('Exam detail page params:', category, examId);
  
// //   // Use our enhanced hook
// //   const { exam, loading, error } = useExamDetail(category, examId)
  
// //   // Show loading state
// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
// //         <div className="text-center">
// //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
// //           <p className="text-slate-600 dark:text-slate-400">Loading exam details...</p>
// //         </div>
// //       </div>
// //     )
// //   }
  
// //   // Show error state - Exam Not Found with specific error message if available
// //   if (error || !exam) {
// //     return (
// //       <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
// //         <div className="text-center max-w-md mx-auto px-4">
// //           <AlertCircle className="h-16 w-16 text-slate-400 mx-auto mb-4" />
// //           <h1 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Exam Not Found</h1>
// //           <p className="text-slate-600 dark:text-slate-400 mb-6">
// //             {error?.message || "The exam you're looking for doesn't exist or may have been removed."}
// //           </p>
// //           <Link 
// //             href="/apps/scoorly/exams"
// //             className="inline-block px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
// //           >
// //             Browse All Exams
// //           </Link>
// //         </div>
// //       </div>
// //     )
// //   }

// //   // Default color theme fallback if needed
// //   const colorTheme = exam.colorTheme || {
// //     bg: "bg-slate-50 dark:bg-slate-800",
// //     border: "border-slate-200 dark:border-slate-700",
// //     text: "text-slate-600 dark:text-slate-400",
// //     accent: "bg-slate-500"
// //   };

// //   return (
// //     <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
// //       {/* Exam Header */}
// //       <div className={`${colorTheme.bg} border-b ${colorTheme.border} py-8`}>
// //         <div className="max-w-5xl mx-auto px-4">
// //           <div className="mb-6">
// //             <Link 
// //               href={`/apps/scoorly/exams/${category}`} 
// //               className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
// //             >
// //               <ChevronLeft className="h-4 w-4 mr-1" />
// //               Back to {exam.categoryName}
// //             </Link>
// //           </div>
          
// //           <div className="flex items-center mb-4">
// //             <div className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-sm mr-4">
// //               {exam.icon}
// //             </div>
// //             <div>
// //               <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
// //                 {exam.name}
// //               </h1>
// //               <p className={`${colorTheme.text}`}>
// //                 {exam.categoryName}
// //               </p>
// //             </div>
// //           </div>
          
// //           <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
// //             {exam.description}
// //           </p>
// //         </div>
// //       </div>
      
// //       <div className="max-w-5xl mx-auto px-4 py-8">
// //         {/* Exam Overview */}
// //         <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8 border border-slate-200 dark:border-slate-700 shadow-sm">
// //           <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Exam Overview</h2>
// //           <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
// //             <div className="flex items-center">
// //               <Clock className="h-5 w-5 text-blue-500 mr-3" />
// //               <div>
// //                 <span className="block text-slate-900 dark:text-white font-medium">{exam.duration}</span>
// //                 <span className="text-sm text-slate-500 dark:text-slate-400">Duration</span>
// //               </div>
// //             </div>
// //             <div className="flex items-center">
// //               <Book className="h-5 w-5 text-green-500 mr-3" />
// //               <div>
// //                 <span className="block text-slate-900 dark:text-white font-medium">{exam.questions}</span>
// //                 <span className="text-sm text-slate-500 dark:text-slate-400">Questions</span>
// //               </div>
// //             </div>
// //             <div className="flex items-center">
// //               <Award className="h-5 w-5 text-yellow-500 mr-3" />
// //               <div>
// //                 <span className="block text-slate-900 dark:text-white font-medium">{exam.passingScore}</span>
// //                 <span className="text-sm text-slate-500 dark:text-slate-400">Passing Score</span>
// //               </div>
// //             </div>
// //             <div className="flex items-center">
// //               <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
// //               <div>
// //                 <span className="block text-slate-900 dark:text-white font-medium">{exam.attempts}</span>
// //                 <span className="text-sm text-slate-500 dark:text-slate-400">Attempts</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
        
// //         {/* Two Column Layout */}
// //         <div className="grid gap-8 md:grid-cols-3">
// //           {/* Left Column - Topics */}
// //           <div className="md:col-span-2">
// //             <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8 border border-slate-200 dark:border-slate-700 shadow-sm">
// //               <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Exam Topics</h2>
// //               <div className="grid gap-3 md:grid-cols-2">
// //                 {exam.topics && exam.topics.map((topic, index) => (
// //                   <div 
// //                     key={index} 
// //                     className="flex items-start p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
// //                   >
// //                     <div className={`p-1.5 rounded-full ${colorTheme.accent} mr-3 mt-0.5`}>
// //                       <CheckCircle className="h-3.5 w-3.5 text-white" />
// //                     </div>
// //                     <span className="text-slate-700 dark:text-slate-300">{topic}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
            
// //             {/* Practice Options */}
// //             <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
// //               <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Practice Options</h2>
// //               <div className="grid gap-4 sm:grid-cols-2">
// //                 <Link 
// //                   href={`/apps/scoorly/exams/${category}/${examId}/quiz`}
// //                   className="flex items-center p-4 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
// //                 >
// //                   <PlayCircle className="h-5 w-5 mr-3" />
// //                   <span className="font-medium">Start Full Practice Exam</span>
// //                 </Link>
// //                 <button className="flex items-center p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
// //                   <FileText className="h-5 w-5 mr-3" />
// //                   <span className="font-medium">Practice by Topic</span>
// //                 </button>
// //                 <button className="flex items-center p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
// //                   <AlertCircle className="h-5 w-5 mr-3" />
// //                   <span className="font-medium">Focus on Weak Areas</span>
// //                 </button>
// //                 <button className="flex items-center p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
// //                   <BarChart4 className="h-5 w-5 mr-3" />
// //                   <span className="font-medium">Review Past Attempts</span>
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
          
// //           {/* Right Column - Progress */}
// //           <div>
// //             {/* Your Progress */}
// //             <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8 border border-slate-200 dark:border-slate-700 shadow-sm">
// //               <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Your Progress</h2>
              
// //               <div className="mb-4">
// //                 <div className="flex justify-between mb-2">
// //                   <span className="text-slate-600 dark:text-slate-400">Completed Questions</span>
// //                   <span className="text-slate-900 dark:text-white font-medium">{exam.progress.completed} / {exam.questions}</span>
// //                 </div>
// //                 <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
// //                   <div 
// //                     className="h-full bg-blue-500" 
// //                     style={{ width: `${(exam.progress.completed / exam.questions) * 100}%` }}
// //                   ></div>
// //                 </div>
// //               </div>
              
// //               <div className="mb-4">
// //                 <div className="flex justify-between mb-2">
// //                   <span className="text-slate-600 dark:text-slate-400">Current Score</span>
// //                   <span className="text-slate-900 dark:text-white font-medium">{exam.progress.score}%</span>
// //                 </div>
// //                 <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
// //                   <div 
// //                     className={`h-full ${exam.progress.score >= parseInt(exam.passingScore) ? 'bg-green-500' : 'bg-yellow-500'}`}
// //                     style={{ width: `${exam.progress.score}%` }}
// //                   ></div>
// //                 </div>
// //                 <div className="flex justify-between mt-2 text-xs text-slate-500 dark:text-slate-400">
// //                   <span>0%</span>
// //                   <span>Passing: {exam.passingScore}</span>
// //                   <span>100%</span>
// //                 </div>
// //               </div>
              
// //               <div className="mt-6">
// //                 <Link 
// //                   href={`/apps/scoorly/exams/${category}/${examId}/quiz`}
// //                   className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-center inline-block"
// //                 >
// //                   Continue Practice
// //                 </Link>
// //               </div>
// //             </div>
            
// //             {/* Additional Info */}
// //             <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
// //               <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Exam Stats</h2>
// //               <div className="space-y-4">
// //                 <div className="flex justify-between items-center">
// //                   <span className="text-slate-600 dark:text-slate-400">Difficulty</span>
// //                   <span className="font-medium text-slate-900 dark:text-white">{exam.difficulty}</span>
// //                 </div>
// //                 <div className="flex justify-between items-center">
// //                   <span className="text-slate-600 dark:text-slate-400">Average Time</span>
// //                   <span className="font-medium text-slate-900 dark:text-white">{exam.duration}</span>
// //                 </div>
// //                 <div className="flex justify-between items-center">
// //                   <span className="text-slate-600 dark:text-slate-400">Pass Rate</span>
// //                   <span className="font-medium text-slate-900 dark:text-white">72%</span>
// //                 </div>
// //                 <div className="flex justify-between items-center">
// //                   <span className="text-slate-600 dark:text-slate-400">Last Updated</span>
// //                   <span className="font-medium text-slate-900 dark:text-white">3 weeks ago</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// "use client"

// import { useState } from 'react'
// import Link from 'next/link'
// import { 
//   ChevronLeft, 
//   Clock, 
//   Book, 
//   Award, 
//   CheckCircle, 
//   BarChart4,
//   FileText,
//   AlertCircle,
//   PlayCircle,
//   BookOpen,
//   Target,
//   List,
//   PieChart
// } from 'lucide-react'
// import useExamDetail from '@/app/hooks/useExamDetail'

// export default function ExamDetailPage({ params }) {
//   const { category, examId } = params
//   console.log('Exam detail page params:', category, examId);
  
//   // Use our enhanced hook
//   const { exam, loading, error } = useExamDetail(category, examId)
  
//   // State for quiz option selection
//   const [selectedQuizOption, setSelectedQuizOption] = useState(null)
  
//   // Show loading state
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
//           <p className="text-slate-600 dark:text-slate-400">Loading exam details...</p>
//         </div>
//       </div>
//     )
//   }
  
//   // Show error state - Exam Not Found with specific error message if available
//   if (error || !exam) {
//     return (
//       <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
//         <div className="text-center max-w-md mx-auto px-4">
//           <AlertCircle className="h-16 w-16 text-slate-400 mx-auto mb-4" />
//           <h1 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Exam Not Found</h1>
//           <p className="text-slate-600 dark:text-slate-400 mb-6">
//             {error?.message || "The exam you're looking for doesn't exist or may have been removed."}
//           </p>
//           <Link 
//             href="/apps/scoorly/exams"
//             className="inline-block px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
//           >
//             Browse All Exams
//           </Link>
//         </div>
//       </div>
//     )
//   }

//   // Default color theme fallback if needed
//   const colorTheme = exam.colorTheme || {
//     bg: "bg-slate-50 dark:bg-slate-800",
//     border: "border-slate-200 dark:border-slate-700",
//     text: "text-slate-600 dark:text-slate-400",
//     accent: "bg-slate-500"
//   };

//   // Quiz options
//   const quizOptions = [
//     {
//       id: 'self-assessment',
//       title: 'Self Assessment',
//       description: 'Full exam simulation with randomized questions',
//       icon: <PlayCircle className="h-5 w-5" />,
//       color: 'blue'
//     },
//     {
//       id: 'subject-wise',
//       title: 'Subject Wise',
//       description: 'Practice specific subjects',
//       icon: <FileText className="h-5 w-5" />,
//       color: 'green'
//     },
//     {
//       id: 'topic-wise',
//       title: 'Topic Wise',
//       description: 'Focus on specific topics',
//       icon: <Target className="h-5 w-5" />,
//       color: 'purple'
//     },
//     {
//       id: 'study-mode',
//       title: 'Study Mode',
//       description: 'Learn with immediate feedback',
//       icon: <BookOpen className="h-5 w-5" />,
//       color: 'amber'
//     }
//   ];

//   // Sample subject scores data (would come from your backend)
//   const subjectScores = [
//     { name: 'Anatomy', score: 78 },
//     { name: 'Physiology', score: 92 },
//     { name: 'Biochemistry', score: 65 },
//     { name: 'Pathology', score: 83 }
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
//       {/* Exam Header */}
//       <div className={`${colorTheme.bg} border-b ${colorTheme.border} py-8`}>
//         <div className="max-w-5xl mx-auto px-4">
//           <div className="mb-6">
//             <Link 
//               href={`/apps/scoorly/exams/${category}`} 
//               className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
//             >
//               <ChevronLeft className="h-4 w-4 mr-1" />
//               Back to {exam.categoryName}
//             </Link>
//           </div>
          
//           {/* Centered hero icon */}
//           <div className="flex flex-col items-center text-center mb-6">
//             <div className="p-4 rounded-full bg-white dark:bg-slate-800 shadow-sm mb-4">
//               {exam.icon || <Book className="h-8 w-8 text-blue-500" />}
//             </div>
//             <div>
//               <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
//                 {exam.name}
//               </h1>
//               <p className={`${colorTheme.text}`}>
//                 {exam.categoryName}
//               </p>
//             </div>
//           </div>
          
//           <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-center">
//             {exam.description}
//           </p>
//         </div>
//       </div>
      
//       <div className="max-w-5xl mx-auto px-4 py-8">
//         {/* Exam Overview */}
//         <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8 border border-slate-200 dark:border-slate-700 shadow-sm">
//           <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Exam Overview</h2>
//           <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
//             <div className="flex items-center">
//               <Clock className="h-5 w-5 text-blue-500 mr-3" />
//               <div>
//                 <span className="block text-slate-900 dark:text-white font-medium">{exam.duration}</span>
//                 <span className="text-sm text-slate-500 dark:text-slate-400">Duration</span>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <Book className="h-5 w-5 text-green-500 mr-3" />
//               <div>
//                 <span className="block text-slate-900 dark:text-white font-medium">{exam.questions}</span>
//                 <span className="text-sm text-slate-500 dark:text-slate-400">Questions</span>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <Award className="h-5 w-5 text-yellow-500 mr-3" />
//               <div>
//                 <span className="block text-slate-900 dark:text-white font-medium">{exam.passingScore}</span>
//                 <span className="text-sm text-slate-500 dark:text-slate-400">Passing Score</span>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
//               <div>
//                 <span className="block text-slate-900 dark:text-white font-medium">{exam.attempts}</span>
//                 <span className="text-sm text-slate-500 dark:text-slate-400">Attempts</span>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Two Column Layout */}
//         <div className="grid gap-8 md:grid-cols-3">
//           {/* Left Column - Topics and Practice Options */}
//           <div className="md:col-span-2">
//             {/* Exam Topics with scores */}
//             <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8 border border-slate-200 dark:border-slate-700 shadow-sm">
//               <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Exam Topics</h2>
//               <div className="grid gap-4 md:grid-cols-2">
//                 {exam.topics && exam.topics.map((topic, index) => (
//                   <div 
//                     key={index} 
//                     className="flex items-start p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
//                   >
//                     <div className={`p-1.5 rounded-full ${colorTheme.accent} mr-3 mt-0.5`}>
//                       <CheckCircle className="h-3.5 w-3.5 text-white" />
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex justify-between items-center mb-2">
//                         <span className="text-slate-700 dark:text-slate-300 font-medium">{topic}</span>
//                         <span className="text-sm font-medium text-slate-900 dark:text-white">
//                           {Math.floor(Math.random() * 30) + 70}%
//                         </span>
//                       </div>
//                       <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
//                         <div 
//                           className="h-full bg-blue-500"
//                           style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             {/* Subject Score Breakdown */}
//             <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8 border border-slate-200 dark:border-slate-700 shadow-sm">
//               <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Score Per Subject</h2>
//               <div className="space-y-4">
//                 {subjectScores.map((subject, index) => (
//                   <div key={index} className="space-y-2">
//                     <div className="flex justify-between items-center">
//                       <span className="text-slate-700 dark:text-slate-300">{subject.name}</span>
//                       <span className="font-medium text-slate-900 dark:text-white">{subject.score}%</span>
//                     </div>
//                     <div className="h-2.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
//                       <div 
//                         className={`h-full ${subject.score >= parseInt(exam.passingScore) ? 'bg-green-500' : 'bg-yellow-500'}`}
//                         style={{ width: `${subject.score}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             {/* Practice Options */}
//             <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
//               <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Practice Options</h2>
              
//               {selectedQuizOption ? (
//                 <div>
//                   <div className="flex items-center mb-6">
//                     <button 
//                       onClick={() => setSelectedQuizOption(null)}
//                       className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
//                     >
//                       <ChevronLeft className="h-4 w-4 mr-1" />
//                       Back to options
//                     </button>
//                   </div>
                  
//                   {selectedQuizOption === 'self-assessment' && (
//                     <div>
//                       <h3 className="text-lg font-medium mb-4 text-slate-900 dark:text-white">Self Assessment Mode</h3>
//                       <p className="text-slate-600 dark:text-slate-400 mb-6">
//                         This mode simulates the full exam experience with randomized questions from all topics.
//                         You'll have {exam.duration} to complete all {exam.questions} questions.
//                       </p>
//                       <Link 
//                         href={`/apps/scoorly/exams/${category}/${examId}/quiz?mode=self-assessment`}
//                         className="inline-block w-full sm:w-auto py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-center"
//                       >
//                         Start Exam Simulation
//                       </Link>
//                     </div>
//                   )}
                  
//                   {selectedQuizOption === 'subject-wise' && (
//                     <div>
//                       <h3 className="text-lg font-medium mb-4 text-slate-900 dark:text-white">Subject Wise Practice</h3>
//                       <p className="text-slate-600 dark:text-slate-400 mb-6">
//                         Select a subject to focus your practice on:
//                       </p>
//                       <div className="grid gap-3 sm:grid-cols-2">
//                         {subjectScores.map((subject, index) => (
//                           <Link 
//                             key={index}
//                             href={`/apps/scoorly/exams/${category}/${examId}/quiz?mode=subject&subject=${subject.name}`}
//                             className="flex justify-between items-center p-4 rounded-lg border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
//                           >
//                             <span className="font-medium">{subject.name}</span>
//                             <span className="text-sm bg-white dark:bg-green-900 px-2 py-1 rounded-full">
//                               {subject.score}%
//                             </span>
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   )}
                  
//                   {selectedQuizOption === 'topic-wise' && (
//                     <div>
//                       <h3 className="text-lg font-medium mb-4 text-slate-900 dark:text-white">Topic Wise Practice</h3>
//                       <p className="text-slate-600 dark:text-slate-400 mb-6">
//                         Select a specific topic to practice:
//                       </p>
//                       <div className="grid gap-3 sm:grid-cols-2">
//                         {exam.topics && exam.topics.map((topic, index) => (
//                           <Link 
//                             key={index}
//                             href={`/apps/scoorly/exams/${category}/${examId}/quiz?mode=topic&topic=${topic}`}
//                             className="flex justify-between items-center p-4 rounded-lg border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
//                           >
//                             <span className="font-medium">{topic}</span>
//                             <span className="text-sm bg-white dark:bg-purple-900 px-2 py-1 rounded-full">
//                               {Math.floor(Math.random() * 30) + 70}%
//                             </span>
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   )}
                  
//                   {selectedQuizOption === 'study-mode' && (
//                     <div>
//                       <h3 className="text-lg font-medium mb-4 text-slate-900 dark:text-white">Study Mode</h3>
//                       <p className="text-slate-600 dark:text-slate-400 mb-6">
//                         In study mode, you'll receive immediate feedback after each question, with detailed explanations.
//                         This is perfect for learning rather than testing.
//                       </p>
//                       <Link 
//                         href={`/apps/scoorly/exams/${category}/${examId}/quiz?mode=study`}
//                         className="inline-block w-full sm:w-auto py-2.5 px-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors text-center"
//                       >
//                         Start Study Mode
//                       </Link>
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <div className="grid gap-4 sm:grid-cols-2">
//                   {quizOptions.map((option) => (
//                     <button 
//                       key={option.id}
//                       onClick={() => setSelectedQuizOption(option.id)}
//                       className={`flex items-center p-4 rounded-lg border border-${option.color}-200 dark:border-${option.color}-800 bg-${option.color}-50 dark:bg-${option.color}-900/20 text-${option.color}-600 dark:text-${option.color}-400 hover:bg-${option.color}-100 dark:hover:bg-${option.color}-900/30 transition-colors`}
//                     >
//                       <div className="mr-3">
//                         {option.icon}
//                       </div>
//                       <div className="text-left">
//                         <div className="font-medium">{option.title}</div>
//                         <div className="text-sm opacity-80">{option.description}</div>
//                       </div>
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
          
//           {/* Right Column - Progress and Stats */}
//           <div>
//             {/* Your Progress */}
//             <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8 border border-slate-200 dark:border-slate-700 shadow-sm">
//               <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Your Progress</h2>
              
//               <div className="mb-4">
//                 <div className="flex justify-between mb-2">
//                   <span className="text-slate-600 dark:text-slate-400">Completed Questions</span>
//                   <span className="text-slate-900 dark:text-white font-medium">{exam.progress?.completed || 0} / {exam.questions}</span>
//                 </div>
//                 <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
//                   <div 
//                     className="h-full bg-blue-500" 
//                     style={{ width: `${((exam.progress?.completed || 0) / exam.questions) * 100}%` }}
//                   ></div>
//                 </div>
//               </div>
              
//               <div className="mb-4">
//                 <div className="flex justify-between mb-2">
//                   <span className="text-slate-600 dark:text-slate-400">Current Score</span>
//                   <span className="text-slate-900 dark:text-white font-medium">{exam.progress?.score || 0}%</span>
//                 </div>
//                 <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
//                   <div 
//                     className={`h-full ${(exam.progress?.score || 0) >= parseInt(exam.passingScore) ? 'bg-green-500' : 'bg-yellow-500'}`}
//                     style={{ width: `${exam.progress?.score || 0}%` }}
//                   ></div>
//                 </div>
//                 <div className="flex justify-between mt-2 text-xs text-slate-500 dark:text-slate-400">
//                   <span>0%</span>
//                   <span>Passing: {exam.passingScore}</span>
//                   <span>100%</span>
//                 </div>
//               </div>
              
//               <div className="mt-6">
//                 <Link 
//                   href={`/apps/scoorly/exams/${category}/${examId}/quiz?resume=true`}
//                   className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-center inline-block"
//                 >
//                   Continue Practice
//                 </Link>
//               </div>
//             </div>
            
//             {/* Exam Stats - now with percentage scores */}
//             <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8 border border-slate-200 dark:border-slate-700 shadow-sm">
//               <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Exam Stats</h2>
//               <div className="space-y-4">
//                 <div className="flex justify-between items-center">
//                   <span className="text-slate-600 dark:text-slate-400">Difficulty</span>
//                   <span className="font-medium text-slate-900 dark:text-white">{exam.difficulty}</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-slate-600 dark:text-slate-400">Average Time</span>
//                   <span className="font-medium text-slate-900 dark:text-white">{exam.duration}</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-slate-600 dark:text-slate-400">Pass Rate</span>
//                   <span className="font-medium text-slate-900 dark:text-white">72%</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-slate-600 dark:text-slate-400">Last Updated</span>
//                   <span className="font-medium text-slate-900 dark:text-white">3 weeks ago</span>
//                 </div>
//               </div>
//             </div>
            
//             {/* Overall Score (out of 100%) */}
//             <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
//               <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Overall Score</h2>
//               <div className="relative pt-1 px-4">
//                 <div className="flex items-center justify-center mb-2">
//                   <div className="w-32 h-32 rounded-full border-8 border-blue-100 dark:border-blue-900 flex items-center justify-center">
//                     <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
//                       {exam.progress?.score || 0}%
//                     </span>
//                   </div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-sm font-medium text-slate-900 dark:text-white">
//                     {exam.progress?.score >= parseInt(exam.passingScore) ? 'Passing' : 'Needs Improvement'}
//                   </div>
//                   <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
//                     Based on {exam.progress?.completed || 0} completed questions
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// "use client"

// import { useState } from 'react';
// import useExamDetail from '@/app/hooks/useExamDetail';
// import ExamHeader from '@/components/exams/ExamHeader';
// import ExamOverview from '@/components/exams/ExamOverview';
// import ExamTopics from '@/components/exams/ExamTopics';
// import PracticeOptions from '@/components/exams/PracticeOptions';
// import ProgressCard from '@/components/exams/ProgressCard';
// import ExamStats from '@/components/exams/ExamStats';
// import LoadingSpinner from '@/components/ui/LoadingSpinner';
// import ErrorMessage from '@/components/ui/ErrorMessage';

// export default function ExamDetailPage({ params }) {
//   const { category, examId } = params;
  
//   // Use our custom hook to fetch exam details
//   const { exam, loading, error } = useExamDetail(category, examId);
  
//   // Handle practicing directly from this page
//   const handleStartPractice = (mode = 'self-assessment', param = null) => {
//     // In a real app, this might save the user's preference or prepare the quiz
//     console.log(`Starting practice in ${mode} mode`, param);
//     // Navigation is handled by the Link components in the PracticeOptions component
//   };
  
//   // Sample subject scores data (would come from your backend)
//   const subjectScores = [
//     { name: 'Anatomy', score: 78 },
//     { name: 'Physiology', score: 92 },
//     { name: 'Biochemistry', score: 65 },
//     { name: 'Pathology', score: 83 }
//   ];
  
//   // Show loading state
//   if (loading) {
//     return <LoadingSpinner message="Loading exam details..." />;
//   }
  
//   // Show error state
//   if (error || !exam) {
//     return <ErrorMessage 
//       title="Exam Not Found" 
//       message={error?.message || "The exam you're looking for doesn't exist or may have been removed."} 
//       linkText="Browse All Exams"
//       linkHref="/apps/scoorly/exams"
//     />;
//   }

//   // Get color theme (make sure this is being set correctly in useExamDetail.js)
//   const colorTheme = exam.colorTheme || {
//     bg: "bg-slate-50 dark:bg-slate-800",
//     border: "border-slate-200 dark:border-slate-700",
//     text: "text-slate-600 dark:text-slate-400",
//     accent: "bg-slate-500"
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
//       {/* Exam Header */}
//       <ExamHeader exam={exam} colorTheme={colorTheme} />
      
//       <div className="max-w-5xl mx-auto px-4 py-8">
//         {/* Exam Overview */}
//         <ExamOverview exam={exam} />
        
//         {/* Two Column Layout */}
//         <div className="grid gap-8 md:grid-cols-3">
//           {/* Left Column - Topics and Practice Options */}
//           <div className="md:col-span-2">
//             {/* Exam Topics */}
//             <ExamTopics exam={exam} colorTheme={colorTheme} />
            
//             {/* Practice Options */}
//             <PracticeOptions exam={exam} subjectScores={subjectScores} />
//           </div>
          
//           {/* Right Column - Progress and Stats */}
//           <div>
//             {/* Your Progress */}
//             <ProgressCard exam={exam} />
            
//             {/* Exam Stats */}
//             <ExamStats exam={exam} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client"

import { useState } from 'react';
import useExamDetail from '@/app/hooks/useExamDetail';
import ExamHeader from '@/components/exams/ExamHeader';
import SimplifiedExamDashboard from '@/components/exams/SimplifiedExamDashboard';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ErrorMessage from '@/components/ui/ErrorMessage';
import { BookOpen, PlayCircle } from 'lucide-react';
import Link from 'next/link';

export default function ExamDetailPage({ params }) {
  const { category, examId } = params;
  
  // Use our custom hook to fetch exam details
  const { exam, loading, error } = useExamDetail(category, examId);

  // Show loading state
  if (loading) {
    return <LoadingSpinner message="Loading exam details..." />;
  }

  // Show error state
  if (error || !exam) {
    return <ErrorMessage
      title="Exam Not Found"
      message={error?.message || "The exam you're looking for doesn't exist or may have been removed."}
      linkText="Browse All Exams"
      linkHref="/apps/scoorly/exams"
    />;
  }

  // Get color theme (make sure this is being set correctly in useExamDetail.js)
  const colorTheme = exam.colorTheme || {
    bg: "bg-slate-50 dark:bg-slate-800",
    border: "border-slate-200 dark:border-slate-700",
    text: "text-slate-600 dark:text-slate-400",
    accent: "bg-slate-500"
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Exam Header */}
      <ExamHeader exam={exam} colorTheme={colorTheme} />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Practice Options - Prominent Top Section */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md mb-8">
          <div className="p-6 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900/90">
            <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Start Practicing</h2>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <Link 
                href={`/apps/scoorly/exams/${exam.category}/${exam.id}/quiz?mode=study`}
                className="flex items-center p-4 rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
              >
                <div className="p-2 bg-amber-100 dark:bg-amber-900/40 rounded-full mr-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-lg">Study Mode</div>
                  <div className="text-sm opacity-90">Learn with immediate feedback after each question</div>
                </div>
              </Link>

              <Link 
                href={`/apps/scoorly/exams/${exam.category}/${exam.id}/quiz?mode=self-assessment`}
                className="flex items-center p-4 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
              >
                <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-full mr-4">
                  <PlayCircle className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-lg">Self Assessment</div>
                  <div className="text-sm opacity-90">Full exam simulation with randomized questions</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Performance Dashboard */}
        <SimplifiedExamDashboard exam={exam} colorTheme="blue" />
      </div>
    </div>
  );
}