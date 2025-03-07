// // // app/apps/scoorly/exams/[category]/page.js
// // "use client"

// // import { useState } from 'react'
// // import Link from 'next/link'
// // import { 
// //   Search, 
// //   ChevronLeft,
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

// // // Map for category information
// // const categoryInfo = {
// //   ems: {
// //     name: 'Emergency Medical Services',
// //     description: 'Certification exams for EMS professionals',
// //     icon: <Flame className="h-6 w-6 text-orange-500" />,
// //     color: 'bg-orange-50 dark:bg-orange-950/30',
// //     border: 'border-orange-200 dark:border-orange-800',
// //     textColor: 'text-orange-600 dark:text-orange-400'
// //   },
// //   nursing: {
// //     name: 'Nursing',
// //     description: 'Certification exams for nursing professionals',
// //     icon: <Stethoscope className="h-6 w-6 text-blue-500" />,
// //     color: 'bg-blue-50 dark:bg-blue-950/30',
// //     border: 'border-blue-200 dark:border-blue-800',
// //     textColor: 'text-blue-600 dark:text-blue-400'
// //   },
// //   emergency: {
// //     name: 'Emergency Certification',
// //     description: 'Emergency and trauma care certifications',
// //     icon: <Shield className="h-6 w-6 text-red-500" />,
// //     color: 'bg-red-50 dark:bg-red-950/30',
// //     border: 'border-red-200 dark:border-red-800',
// //     textColor: 'text-red-600 dark:text-red-400'
// //   },
// //   specialty: {
// //     name: 'Specialty Certifications',
// //     description: 'Specialized healthcare certifications',
// //     icon: <Book className="h-6 w-6 text-purple-500" />,
// //     color: 'bg-purple-50 dark:bg-purple-950/30',
// //     border: 'border-purple-200 dark:border-purple-800',
// //     textColor: 'text-purple-600 dark:text-purple-400'
// //   }
// // }

// // // Map of exam data by category
// // const examsByCategory = {
// //   ems: [
// //     {
// //       id: "firefighter",
// //       name: "Firefighter I & II",
// //       questions: 1000,
// //       icon: <Flame className="h-5 w-5 text-orange-500" />,
// //       description: "Comprehensive firefighter certification exam covering fire science, safety, and rescue operations.",
// //       difficulty: "Medium",
// //       time: "3 hours",
// //       passing: "70%"
// //     },
// //     {
// //       id: "ibsc-ccp",
// //       name: "IBSC CCP-C®",
// //       questions: 400,
// //       icon: <Ambulance className="h-5 w-5 text-blue-500" />,
// //       description: "Critical Care Paramedic Certification for advanced emergency medical care.",
// //       difficulty: "Hard",
// //       time: "2 hours",
// //       passing: "75%"
// //     },
// //     {
// //       id: "ibsc-fp",
// //       name: "IBSC FP-C®",
// //       questions: 1000,
// //       icon: <Zap className="h-5 w-5 text-yellow-500" />,
// //       description: "Flight Paramedic Certification for air medical transport specialists.",
// //       difficulty: "Hard",
// //       time: "3 hours",
// //       passing: "75%"
// //     },
// //     {
// //       id: "ibsc-tp",
// //       name: "IBSC TP-C®",
// //       questions: 400,
// //       icon: <Shield className="h-5 w-5 text-green-500" />,
// //       description: "Tactical Paramedic Certification for emergency care in high-risk environments.",
// //       difficulty: "Hard",
// //       time: "2 hours",
// //       passing: "75%"
// //     },
// //     {
// //       id: "nremt-aemt",
// //       name: "NREMT® AEMT",
// //       questions: 900,
// //       icon: <HeartPulse className="h-5 w-5 text-purple-500" />,
// //       description: "Advanced Emergency Medical Technician certification for intermediate-level care.",
// //       difficulty: "Medium",
// //       time: "2.5 hours",
// //       passing: "70%"
// //     },
// //     {
// //       id: "nremt-emr",
// //       name: "NREMT® EMR",
// //       questions: 500,
// //       icon: <Activity className="h-5 w-5 text-indigo-500" />,
// //       description: "Emergency Medical Responder certification for basic life support and care.",
// //       difficulty: "Easy",
// //       time: "1.5 hours",
// //       passing: "70%"
// //     },
// //     {
// //       id: "nremt-emt",
// //       name: "NREMT® EMT",
// //       questions: 1030,
// //       icon: <Clipboard className="h-5 w-5 text-teal-500" />,
// //       description: "Emergency Medical Technician certification for pre-hospital emergency medical care.",
// //       difficulty: "Medium",
// //       time: "2.5 hours",
// //       passing: "70%"
// //     },
// //     {
// //       id: "nremt-paramedic",
// //       name: "NREMT® Paramedic",
// //       questions: 1200,
// //       icon: <HeartPulse className="h-5 w-5 text-pink-500" />,
// //       description: "Paramedic certification for advanced life support and emergency care.",
// //       difficulty: "Hard",
// //       time: "3.5 hours",
// //       passing: "75%"
// //     },
// //   ],
// //   nursing: [
// //     {
// //       id: "aacn-ccrn-adult",
// //       name: "AACN CCRN® (Adult)",
// //       questions: 1000,
// //       icon: <UserCheck className="h-5 w-5 text-blue-500" />,
// //       description: "Critical Care Registered Nurse - Adult certification for specialized care of critically ill patients.",
// //       difficulty: "Hard",
// //       time: "3 hours",
// //       passing: "75%"
// //     },
// //     {
// //       id: "aanpcb-fnp",
// //       name: "AANPCB® FNP",
// //       questions: 1000,
// //       icon: <Stethoscope className="h-5 w-5 text-green-500" />,
// //       description: "Family Nurse Practitioner certification for primary care across the lifespan.",
// //       difficulty: "Hard",
// //       time: "3 hours",
// //       passing: "75%"
// //     },
// //     {
// //       id: "aanpcb-pmhnp",
// //       name: "AANPCB® PMHNP-C",
// //       questions: 1200,
// //       icon: <Brain className="h-5 w-5 text-violet-500" />,
// //       description: "Psychiatric Mental Health Nurse Practitioner certification for mental health assessment and treatment.",
// //       difficulty: "Hard",
// //       time: "3.5 hours", 
// //       passing: "75%"
// //     },
// //     {
// //       id: "ancc-agacnp",
// //       name: "ANCC AGACNP-BC",
// //       questions: 500,
// //       icon: <Thermometer className="h-5 w-5 text-red-400" />,
// //       description: "Adult-Gerontology Acute Care Nurse Practitioner certification for specialized acute care.",
// //       difficulty: "Hard",
// //       time: "3 hours",
// //       passing: "75%"
// //     },
// //     {
// //       id: "ancc-fnp",
// //       name: "ANCC FNP-BC™",
// //       questions: 1000,
// //       icon: <Clipboard className="h-5 w-5 text-blue-400" />,
// //       description: "Family Nurse Practitioner certification for primary healthcare across the lifespan.",
// //       difficulty: "Hard",
// //       time: "3 hours",
// //       passing: "75%"
// //     },
// //     {
// //       id: "ancc-medsurg",
// //       name: "ANCC MEDSURG-BC™",
// //       questions: 1500,
// //       icon: <Syringe className="h-5 w-5 text-teal-600" />,
// //       description: "Medical-Surgical Nursing certification for comprehensive care of adult patients.",
// //       difficulty: "Medium",
// //       time: "3.5 hours",
// //       passing: "70%"
// //     },
// //   ],
// //   emergency: [
// //     {
// //       id: "bcen-cen",
// //       name: "BCEN CEN®",
// //       questions: 1000,
// //       icon: <Zap className="h-5 w-5 text-amber-500" />,
// //       description: "Certified Emergency Nurse certification for emergency department nursing.",
// //       difficulty: "Hard",
// //       time: "3 hours",
// //       passing: "70%"
// //     },
// //     {
// //       id: "bcen-cfrn-ctrn",
// //       name: "BCEN CFRN® & CTRN®",
// //       questions: 1000,
// //       icon: <Zap className="h-5 w-5 text-blue-500" />,
// //       description: "Certified Flight/Transport Registered Nurse certification for air and ground transport nursing.",
// //       difficulty: "Hard",
// //       time: "3 hours",
// //       passing: "70%"
// //     },
// //     {
// //       id: "bcen-cpen",
// //       name: "BCEN CPEN®",
// //       questions: 500,
// //       icon: <Hospital className="h-5 w-5 text-green-500" />,
// //       description: "Certified Pediatric Emergency Nurse certification for emergency care of children.",
// //       difficulty: "Hard",
// //       time: "2.5 hours",
// //       passing: "70%"
// //     },
// //     {
// //       id: "bcen-tcrn",
// //       name: "BCEN TCRN®",
// //       questions: 500,
// //       icon: <Shield className="h-5 w-5 text-orange-600" />,
// //       description: "Trauma Certified Registered Nurse certification for specialized trauma care.",
// //       difficulty: "Hard",
// //       time: "2.5 hours",
// //       passing: "70%"
// //     },
// //   ],
// //   specialty: [
// //     {
// //       id: "cci-cfpn",
// //       name: "CCI CFPN®",
// //       questions: 437,
// //       icon: <Syringe className="h-5 w-5 text-purple-500" />,
// //       description: "Certified Foundational Perioperative Nurse certification for operating room nursing.",
// //       difficulty: "Medium",
// //       time: "2 hours",
// //       passing: "75%"
// //     },
// //     {
// //       id: "cci-cnamb",
// //       name: "CCI CNAMB®",
// //       questions: 500,
// //       icon: <Hospital className="h-5 w-5 text-teal-500" />,
// //       description: "Certified Nurse in the Ambulatory Surgery Center certification for outpatient surgical nursing.",
// //       difficulty: "Medium", 
// //       time: "2.5 hours",
// //       passing: "75%"
// //     },
// //     {
// //       id: "cci-cnor",
// //       name: "CCI CNOR®",
// //       questions: 1000,
// //       icon: <Clipboard className="h-5 w-5 text-indigo-500" />,
// //       description: "Certified Perioperative Nurse certification for comprehensive surgical nursing care.",
// //       difficulty: "Hard",
// //       time: "3 hours",
// //       passing: "75%"
// //     },
// //     {
// //       id: "msncb-cmsrn",
// //       name: "MSNCB CMSRN®",
// //       questions: 1000,
// //       icon: <PenTool className="h-5 w-5 text-cyan-500" />,
// //       description: "Certified Medical-Surgical Registered Nurse certification for general medical-surgical nursing.",
// //       difficulty: "Medium",
// //       time: "3 hours",
// //       passing: "70%"
// //     },
// //     {
// //       id: "nln-cne",
// //       name: "NLN CNE®",
// //       questions: 500,
// //       icon: <Book className="h-5 w-5 text-emerald-500" />,
// //       description: "Certified Nurse Educator certification for nursing faculty and educators.",
// //       difficulty: "Medium",
// //       time: "2.5 hours",
// //       passing: "75%"
// //     },
// //   ]
// // }

// // export default function CategoryPage({ params }) {
// //   const { category } = params
// //   const [searchTerm, setSearchTerm] = useState("")
  
// //   // Get category details or default values if not found
// //   const categoryDetails = categoryInfo[category] || {
// //     name: 'Category',
// //     description: 'Certification exams',
// //     icon: <Book className="h-6 w-6 text-gray-500" />,
// //     color: 'bg-gray-50 dark:bg-gray-800',
// //     border: 'border-gray-200 dark:border-gray-700',
// //     textColor: 'text-gray-600 dark:text-gray-400'
// //   }
  
// //   // Get exams for the category or empty array if not found
// //   const exams = examsByCategory[category] || []
  
// //   // Filter exams based on search term
// //   const filteredExams = exams.filter(exam => 
// //     exam.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
// //     exam.description.toLowerCase().includes(searchTerm.toLowerCase())
// //   )
// // }

// //   return (
// //     <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
// //       {/* Category Header */}
// //       <div className={`${categoryDetails.color} py-12 border-b ${categoryDetails.border}`}>
// //         <div className="max-w-5xl mx-auto px-4">
// //           <Link 
// //             href="/apps/scoorly/exams" 
// //             className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6"
// //           >
// //             <ChevronLeft className="h-4 w-4 mr-1" />
// //             Back to All Exams
// //           </Link>
          
// //           <div className="flex items-center gap-4 mb-4">
// //             <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm">
// //               {categoryDetails.icon}
// //             </div>
// //             <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
// //               {categoryDetails.name}
// //             </h1>
// //           </div>
          
// //           <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
// //             {categoryDetails.description}
// //           </p>
// //         </div>
// //       </div>
      
// //       {/* Search and Filters */}
// //       <div className="max-w-5xl mx-auto px-4 py-8">
// //         <div className="w-full md:max-w-md mb-8">
// //           <div className="relative">
// //             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
// //             <input 
// //               type="text" 
// //               placeholder={`Search ${categoryDetails.name} exams...`}
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //               className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             />
// //           </div>
// //         </div>
        
// //         {/* Exam Cards Grid */}
// //         {filteredExams.length > 0 ? (
// //           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
// //             {filteredExams.map((exam) => (
// //               <Link 
// //                 href={`/apps/scoorly/exams/${category}/${exam.id}`} 
// //                 key={exam.id}
// //                 className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all"
// //               >
// //                 <div className="flex items-center mb-3 gap-3">
// //                   <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-700">
// //                     {exam.icon}
// //                   </div>
// //                   <h3 className="font-semibold text-lg text-slate-900 dark:text-white">{exam.name}</h3>
// //                 </div>
// //                 <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
// //                   {exam.description}
// //                 </p>
// //                 <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
// //                   <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-center">
// //                     <div className="font-medium text-slate-900 dark:text-white">{exam.difficulty}</div>
// //                     <div className="text-slate-500 dark:text-slate-400">Difficulty</div>
// //                   </div>
// //                   <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-center">
// //                     <div className="font-medium text-slate-900 dark:text-white">{exam.time}</div>
// //                     <div className="text-slate-500 dark:text-slate-400">Time</div>
// //                   </div>
// //                   <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-center">
// //                     <div className="font-medium text-slate-900 dark:text-white">{exam.passing}</div>
// //                     <div className="text-slate-500 dark:text-slate-400">Passing</div>
// //                   </div>
// //                 </div>
// //                 <div className="flex justify-between items-center">
// //                   <span className="text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full">
// //                     {exam.questions} questions
// //                   </span>
// //                   <span className={`${categoryDetails.textColor}`}>
// //                     View Exam →
// //                   </span>
// //                 </div>
// //               </Link>
// //             ))}
// //           </div>
// //         ) : (
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
// // app/apps/scoorly/exams/[category]/page.js
// "use client"

// import { useState } from 'react'
// import Link from 'next/link'
// import { 
//   Search, 
//   ChevronLeft,
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

// // Map for category information
// const categoryInfo = {
//   ems: {
//     name: 'Emergency Medical Services',
//     description: 'Certification exams for EMS professionals',
//     icon: <Flame className="h-6 w-6 text-orange-500" />,
//     color: 'bg-orange-50 dark:bg-orange-950/30',
//     border: 'border-orange-200 dark:border-orange-800',
//     textColor: 'text-orange-600 dark:text-orange-400'
//   },
//   nursing: {
//     name: 'Nursing',
//     description: 'Certification exams for nursing professionals',
//     icon: <Stethoscope className="h-6 w-6 text-blue-500" />,
//     color: 'bg-blue-50 dark:bg-blue-950/30',
//     border: 'border-blue-200 dark:border-blue-800',
//     textColor: 'text-blue-600 dark:text-blue-400'
//   },
//   emergency: {
//     name: 'Emergency Certification',
//     description: 'Emergency and trauma care certifications',
//     icon: <Shield className="h-6 w-6 text-red-500" />,
//     color: 'bg-red-50 dark:bg-red-950/30',
//     border: 'border-red-200 dark:border-red-800',
//     textColor: 'text-red-600 dark:text-red-400'
//   },
//   specialty: {
//     name: 'Specialty Certifications',
//     description: 'Specialized healthcare certifications',
//     icon: <Book className="h-6 w-6 text-purple-500" />,
//     color: 'bg-purple-50 dark:bg-purple-950/30',
//     border: 'border-purple-200 dark:border-purple-800',
//     textColor: 'text-purple-600 dark:text-purple-400'
//   }
// }

// // Map of exam data by category
// const examsByCategory = {
//   ems: [
//     {
//       id: "firefighter",
//       name: "Firefighter I & II",
//       questions: 1000,
//       icon: <Flame className="h-5 w-5 text-orange-500" />,
//       description: "Comprehensive firefighter certification exam covering fire science, safety, and rescue operations.",
//       difficulty: "Medium",
//       time: "3 hours",
//       passing: "70%"
//     },
//     // Other EMS exams...
//   ],
//   nursing: [
//     // Nursing exams...
//   ],
//   emergency: [
//     // Emergency exams...
//   ],
//   specialty: [
//     // Specialty exams...
//   ]
// }

// export default function CategoryPage({ params }) {
//   const { category } = params
//   const [searchTerm, setSearchTerm] = useState("")
  
//   // Get category details or default values if not found
//   const categoryDetails = categoryInfo[category] || {
//     name: 'Category',
//     description: 'Certification exams',
//     icon: <Book className="h-6 w-6 text-gray-500" />,
//     color: 'bg-gray-50 dark:bg-gray-800',
//     border: 'border-gray-200 dark:border-gray-700',
//     textColor: 'text-gray-600 dark:text-gray-400'
//   }
  
//   // Get exams for the category or empty array if not found
//   const exams = examsByCategory[category] || []
  
//   // Filter exams based on search term
//   const filteredExams = exams.filter(exam => 
//     exam.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//     exam.description.toLowerCase().includes(searchTerm.toLowerCase())
//   )

//   return (
//     <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
//       {/* Category Header */}
//       <div className={`${categoryDetails.color} py-12 border-b ${categoryDetails.border}`}>
//         <div className="max-w-5xl mx-auto px-4">
//           <Link 
//             href="/apps/scoorly/exams" 
//             className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6"
//           >
//             <ChevronLeft className="h-4 w-4 mr-1" />
//             Back to All Exams
//           </Link>
          
//           <div className="flex items-center gap-4 mb-4">
//             <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm">
//               {categoryDetails.icon}
//             </div>
//             <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
//               {categoryDetails.name}
//             </h1>
//           </div>
          
//           <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
//             {categoryDetails.description}
//           </p>
//         </div>
//       </div>
      
//       {/* Search and Filters */}
//       <div className="max-w-5xl mx-auto px-4 py-8">
//         <div className="w-full md:max-w-md mb-8">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
//             <input 
//               type="text" 
//               placeholder={`Search ${categoryDetails.name} exams...`}
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         </div>
        
//         {/* Exam Cards Grid */}
//         {filteredExams.length > 0 ? (
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {filteredExams.map((exam) => (
//               <Link 
//                 href={`/apps/scoorly/exams/${category}/${exam.id}`} 
//                 key={exam.id}
//                 className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all"
//               >
//                 <div className="flex items-center mb-3 gap-3">
//                   <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-700">
//                     {exam.icon}
//                   </div>
//                   <h3 className="font-semibold text-lg text-slate-900 dark:text-white">{exam.name}</h3>
//                 </div>
//                 <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
//                   {exam.description}
//                 </p>
//                 <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
//                   <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-center">
//                     <div className="font-medium text-slate-900 dark:text-white">{exam.difficulty}</div>
//                     <div className="text-slate-500 dark:text-slate-400">Difficulty</div>
//                   </div>
//                   <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-center">
//                     <div className="font-medium text-slate-900 dark:text-white">{exam.time}</div>
//                     <div className="text-slate-500 dark:text-slate-400">Time</div>
//                   </div>
//                   <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-center">
//                     <div className="font-medium text-slate-900 dark:text-white">{exam.passing}</div>
//                     <div className="text-slate-500 dark:text-slate-400">Passing</div>
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full">
//                     {exam.questions} questions
//                   </span>
//                   <span className={`${categoryDetails.textColor}`}>
//                     View Exam →
//                   </span>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         ) : (
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
"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'
import { 
  Search, 
  ChevronLeft,
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
  Pill,
  Loader2
} from 'lucide-react'

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Map icons to their components
const getIconComponent = (iconName, className) => {
  const icons = {
    'flame': <Flame className={className} />,
    'ambulance': <Ambulance className={className} />,
    'heart-pulse': <HeartPulse className={className} />,
    'activity': <Activity className={className} />,
    'clipboard': <Clipboard className={className} />,
    'zap': <Zap className={className} />,
    'shield': <Shield className={className} />,
    'stethoscope': <Stethoscope className={className} />,
    'brain': <Brain className={className} />,
    'hospital': <Hospital className={className} />,
    'user-check': <UserCheck className={className} />,
    'book': <Book className={className} />,
    'thermometer': <Thermometer className={className} />,
    'syringe': <Syringe className={className} />,
    'pen-tool': <PenTool className={className} />,
    'pill': <Pill className={className} />
  }
  
  return icons[iconName] || <Book className={className} />
}

export default function CategoryPage({ params }) {
  const { category } = params
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryDetails, setCategoryDetails] = useState(null)
  const [exams, setExams] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  // Fetch category data from Supabase
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        setLoading(true)
        
        // Debug what is being sent to the API
        console.log('Searching for category slug:', category)
        
        // Fetch category details - using case insensitive search
        const { data: categoryData, error: categoryError } = await supabase
          .from('exam_categories')
          .select('*')
          .ilike('slug', category)
          
        if (categoryError) {
          console.error('Category fetch error:', categoryError)
          throw categoryError
        }
        
        if (!categoryData || categoryData.length === 0) {
          throw new Error(`Category "${category}" not found`)
        }
        
        // Take the first matching category
        const selectedCategory = categoryData[0]
        console.log('Found category:', selectedCategory)
        
        // Fetch exams for the category
        const { data: examData, error: examError } = await supabase
          .from('exams')
          .select('*')
          .eq('category_id', selectedCategory.id)
          .eq('is_active', true)
          .order('display_order', { ascending: true })
        
        if (examError) {
          console.error('Exams fetch error:', examError)
          throw examError
        }
        
        setCategoryDetails(selectedCategory)
        setExams(examData || [])
      } catch (error) {
        console.error('Error fetching data:', error)
        setError(error.message || 'Failed to load category data')
      } finally {
        setLoading(false)
      }
    }
    
    fetchCategoryData()
  }, [category])
  
  // Filter exams based on search term
  const filteredExams = exams.filter(exam => 
    exam.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    (exam.description && exam.description.toLowerCase().includes(searchTerm.toLowerCase()))
  )
  
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-blue-500 mx-auto mb-4" />
          <p className="text-slate-600 dark:text-slate-400">Loading category data...</p>
        </div>
      </div>
    )
  }
  
  if (error || !categoryDetails) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="p-3 bg-red-50 dark:bg-red-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Shield className="h-8 w-8 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Category Not Found
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            {error || `The category "${category}" could not be found.`}
          </p>
          <Link 
            href="/apps/scoorly/exams" 
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Back to All Exams
          </Link>
        </div>
      </div>
    )
  }
  
  // Handle color in hex format from database
  const getColorName = (hexColor) => {
    // Map of common hex colors to Tailwind color names
    const colorMap = {
      '#ff4757': 'red',
      '#2ed573': 'green',
      '#1e90ff': 'blue',
      '#ffa502': 'orange',
      '#747d8c': 'gray',
      '#70a1ff': 'indigo',
      '#7bed9f': 'emerald',
      '#5352ed': 'purple'
    }
    
    return colorMap[hexColor] || 'blue' // Default to blue if no match
  }
  
  // Prepare styles from database values
  const colorName = getColorName(categoryDetails.color)
  const colorClasses = {
    bg: `bg-${colorName}-50 dark:bg-${colorName}-950/30`,
    border: `border-${colorName}-200 dark:border-${colorName}-800`,
    text: `text-${colorName}-600 dark:text-${colorName}-400`
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Category Header */}
      <div className={`${colorClasses.bg} py-12 border-b ${colorClasses.border}`}>
        <div className="max-w-5xl mx-auto px-4">
          <Link 
            href="/apps/scoorly/exams" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to All Exams
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm">
              {getIconComponent(categoryDetails.icon, `h-6 w-6 text-${colorName}-500`)}
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              {categoryDetails.name}
            </h1>
          </div>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            {categoryDetails.description}
          </p>
        </div>
      </div>
      
      {/* Search and Filters */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="w-full md:max-w-md mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <input 
              type="text" 
              placeholder={`Search ${categoryDetails.name} exams...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        
        {/* Exam Cards Grid */}
        {filteredExams.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredExams.map((exam) => (
              <Link 
                href={`/apps/scoorly/exams/${categoryDetails.slug}/${exam.slug}`} 
                key={exam.id}
                className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all"
              >
                <div className="flex items-center mb-3 gap-3">
                  <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-700">
                    {getIconComponent(exam.icon, `h-5 w-5 text-${getColorName(exam.color || categoryDetails.color)}-500`)}
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-white">{exam.name}</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  {exam.description || "No description available."}
                </p>
                <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                  <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-center">
                    <div className="font-medium text-slate-900 dark:text-white">
                      {exam.difficulty_level === 1 ? "Easy" : 
                       exam.difficulty_level === 2 ? "Medium" : 
                       exam.difficulty_level === 3 ? "Hard" : "Varies"}
                    </div>
                    <div className="text-slate-500 dark:text-slate-400">Difficulty</div>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-center">
                    <div className="font-medium text-slate-900 dark:text-white">
                      {exam.exam_duration ? `${Math.round(exam.exam_duration / 60)} hrs` : "Varies"}
                    </div>
                    <div className="text-slate-500 dark:text-slate-400">Time</div>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-center">
                    <div className="font-medium text-slate-900 dark:text-white">
                      {exam.passing_score ? `${exam.passing_score}%` : "Varies"}
                    </div>
                    <div className="text-slate-500 dark:text-slate-400">Passing</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full">
                    {exam.question_count || "1000+"} questions
                  </span>
                  <span className={colorClasses.text}>
                    View Exam →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
              {searchTerm ? "No exams found matching your search." : "No exams available in this category yet."}
            </p>
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm("")}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Clear Search
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}