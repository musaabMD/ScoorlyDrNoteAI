// // // app/apps/scoorly/page.js
// // import { Suspense } from 'react';
// // import Hero from '@/components/Hero';
// // import Footer from '@/components/Footer';

// // export default function ScoorlyHomePage() {
// //   return (
// //     <Suspense fallback={<div>Loading...</div>}>
// //       <main>
// //         <Hero
// //           title="Scoorly"
// //           subtitle="Test prep made simple"
// //         />
// //         <Footer />
// //       </main>
// //     </Suspense>
// //   );
// // }
// // app/apps/scoorly/page.js
// "use client"

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import {
//   Award,
//   Search,
//   CheckCircle,
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
//   Book,
//   Hospital,
//   Star,
//   BarChart,
//   TrendingUp,
//   Clock,
//   CheckSquare,
//   Lock,
//   X,
//   ArrowRight
// } from 'lucide-react'

// export default function HomePage() {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [expandedCategories, setExpandedCategories] = useState({})
//   const [showPromo, setShowPromo] = useState(true)
//   const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 })
  
//   // Timer for special offer
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (timeLeft.seconds > 0) {
//         setTimeLeft({ ...timeLeft, seconds: timeLeft.seconds - 1 });
//       } else if (timeLeft.minutes > 0) {
//         setTimeLeft({ ...timeLeft, minutes: timeLeft.minutes - 1, seconds: 59 });
//       } else if (timeLeft.hours > 0) {
//         setTimeLeft({ ...timeLeft, hours: timeLeft.hours - 1, minutes: 59, seconds: 59 });
//       }
//     }, 1000);
    
//     return () => clearTimeout(timer);
//   }, [timeLeft]);

//   // Toggle category expansion
//   const toggleCategory = (categoryId) => {
//     setExpandedCategories(prev => ({
//       ...prev,
//       [categoryId]: !prev[categoryId]
//     }))
//   }

//   // Exam categories with their sub-exams
//   const examCategories = [
//     {
//       id: 'ems',
//       name: 'Emergency Medical Services',
//       description: 'Certification exams for EMS professionals',
//       icon: <Flame className="h-6 w-6 text-orange-500" />,
//       color: 'bg-orange-50 dark:bg-orange-950/30',
//       border: 'border-orange-200 dark:border-orange-800',
//       gradient: 'from-orange-50 to-white dark:from-orange-950/30 dark:to-transparent',
//       exams: [
//         {
//           id: "firefighter",
//           name: "Firefighter I & II",
//           questions: 1000,
//           icon: <Flame className="h-5 w-5 text-orange-500" />,
//           description: "Comprehensive firefighter certification exam",
//           premium: false
//         },
//         {
//           id: "ibsc-ccp",
//           name: "IBSC CCP-C®",
//           questions: 400,
//           icon: <Ambulance className="h-5 w-5 text-blue-500" />,
//           description: "Critical Care Paramedic Certification",
//           premium: true
//         },
//         {
//           id: "nremt-aemt",
//           name: "NREMT® AEMT",
//           questions: 900,
//           icon: <HeartPulse className="h-5 w-5 text-purple-500" />,
//           description: "Advanced Emergency Medical Technician",
//           premium: true
//         },
//         {
//           id: "nremt-emt",
//           name: "NREMT® EMT",
//           questions: 1030,
//           icon: <Clipboard className="h-5 w-5 text-teal-500" />,
//           description: "Emergency Medical Technician",
//           premium: false
//         }
//       ]
//     },
//     {
//       id: 'nursing',
//       name: 'Nursing',
//       description: 'Certification exams for nursing professionals',
//       icon: <Stethoscope className="h-6 w-6 text-teal-500" />,
//       color: 'bg-teal-50 dark:bg-teal-950/30',
//       border: 'border-teal-200 dark:border-teal-800',
//       gradient: 'from-teal-50 to-white dark:from-teal-950/30 dark:to-transparent',
//       exams: [
//         {
//           id: "aanpcb-fnp",
//           name: "AANPCB® FNP",
//           questions: 1000,
//           icon: <Stethoscope className="h-5 w-5 text-green-500" />,
//           description: "Family Nurse Practitioner",
//           premium: true
//         },
//         {
//           id: "ancc-fnp",
//           name: "ANCC FNP-BC™",
//           questions: 1000,
//           icon: <Clipboard className="h-5 w-5 text-teal-500" />,
//           description: "Family Nurse Practitioner",
//           premium: false
//         }
//       ]
//     },
//     {
//       id: 'emergency',
//       name: 'Emergency Certification',
//       description: 'Emergency and trauma care certifications',
//       icon: <Shield className="h-6 w-6 text-red-500" />,
//       color: 'bg-red-50 dark:bg-red-950/30',
//       border: 'border-red-200 dark:border-red-800',
//       gradient: 'from-red-50 to-white dark:from-red-950/30 dark:to-transparent',
//       exams: [
//         {
//           id: "bcen-cen",
//           name: "BCEN CEN®",
//           questions: 1000,
//           icon: <Zap className="h-5 w-5 text-amber-500" />,
//           description: "Certified Emergency Nurse",
//           premium: true
//         }
//       ]
//     }
//   ]
  
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

//   return (
//     <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
//       {/* Special Offer Banner */}
//       {showPromo && (
//         <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3">
//           <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
//             <div className="flex items-center">
//               <Star className="h-5 w-5 text-yellow-300 mr-2" />
//               <span className="font-medium">Special Offer: 30% OFF Premium for 
//                 <span className="inline-block px-2 py-1 mx-1 bg-white/20 rounded font-bold">
//                   {timeLeft.hours.toString().padStart(2, '0')}:{timeLeft.minutes.toString().padStart(2, '0')}:{timeLeft.seconds.toString().padStart(2, '0')}
//                 </span>
//               </span>
//             </div>
//             <button 
//               onClick={() => setShowPromo(false)}
//               className="text-white opacity-70 hover:opacity-100"
//             >
//               <X className="h-5 w-5" />
//             </button>
//           </div>
//         </div>
//       )}
      
//       {/* Hero Section - With White Background */}
//       <div className="bg-white dark:bg-slate-800">
//         <div className="max-w-5xl mx-auto px-4 pt-16 pb-20 flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2 text-left md:pr-8 mb-8 md:mb-0">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white leading-tight">
//               Pass Your Medical Certification Exam on the First Try
//             </h1>
//             <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
//               92% of our users pass their exam on the first attempt. Join 50,000+ healthcare professionals who trust Scoorly.
//             </p>
            
//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link 
//                 href="/apps/scoorly/subscribe"
//                 className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors text-center flex items-center justify-center"
//               >
//                 Get Premium Access <ArrowRight className="h-4 w-4 ml-2" />
//               </Link>
//               <Link 
//                 href="/apps/scoorly/exams"
//                 className="px-6 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-white font-medium rounded-lg transition-colors text-center"
//               >
//                 Explore Free Exams
//               </Link>
//             </div>
            
//             {/* Stats */}
//             <div className="flex flex-wrap gap-6 mt-8">
//               <div className="flex items-center">
//                 <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
//                 <span className="text-slate-700 dark:text-slate-300">4,300+ Practice Questions</span>
//               </div>
//               <div className="flex items-center">
//                 <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
//                 <span className="text-slate-700 dark:text-slate-300">37 Exam Types</span>
//               </div>
//               <div className="flex items-center">
//                 <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
//                 <span className="text-slate-700 dark:text-slate-300">Money-Back Guarantee</span>
//               </div>
//             </div>
//           </div>
          
//           <div className="md:w-1/2 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-8 border border-slate-200 dark:border-slate-700">
//             <div className="text-center mb-4">
//               <Award className="h-10 w-10 text-purple-600 dark:text-purple-400 mx-auto" />
//               <h2 className="text-2xl font-bold mt-2 text-slate-900 dark:text-white">Search Exams</h2>
//             </div>
//             <div className="relative mb-6">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
//               <input 
//                 type="text" 
//                 placeholder="Find your certification exam..." 
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//             </div>
//             <div className="text-center">
//               <span className="text-sm text-slate-500 dark:text-slate-400">Popular searches:</span>
//               <div className="flex flex-wrap gap-2 mt-2 justify-center">
//                 <span className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full border border-slate-200 dark:border-slate-600">NREMT® Paramedic</span>
//                 <span className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full border border-slate-200 dark:border-slate-600">Firefighter</span>
//                 <span className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full border border-slate-200 dark:border-slate-600">FNP</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Popular Exams Section - Moved right after hero */}
//       <div className="py-12 bg-slate-50 dark:bg-slate-900">
//         <div className="max-w-5xl mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-white">
//             Popular Certification Exams
//           </h2>
          
//           <div className="space-y-6">
//             {filteredCategories.map((category) => (
//               <div 
//                 key={category.id}
//                 className={`rounded-xl overflow-hidden border ${category.border}`}
//               >
//                 {/* Category Header - Clickable */}
//                 <button 
//                   onClick={() => toggleCategory(category.id)}
//                   className={`w-full flex items-center justify-between p-5 ${category.color} text-left`}
//                 >
//                   <div className="flex items-center gap-4">
//                     <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm">
//                       {category.icon}
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-xl text-slate-900 dark:text-white">{category.name}</h3>
//                       <p className="text-sm text-slate-600 dark:text-slate-400">
//                         {category.exams.length} certification exams
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <span className="text-slate-600 dark:text-slate-400">
//                       {expandedCategories[category.id] ? 
//                         <ChevronDown className="h-5 w-5" /> : 
//                         <ChevronRight className="h-5 w-5" />
//                       }
//                     </span>
//                   </div>
//                 </button>
                
//                 {/* Expanded Content - Sub Exams */}
//                 {expandedCategories[category.id] && (
//                   <div className={`bg-gradient-to-b ${category.gradient} p-5`}>
//                     <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
//                       {category.exams.map((exam) => (
//                         <Link 
//                           href={exam.premium ? "/apps/scoorly/subscribe" : `/apps/scoorly/exams/${category.id}/${exam.id}`}
//                           key={exam.id}
//                           className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all relative group"
//                         >
//                           {exam.premium && (
//                             <div className="absolute top-3 right-3 bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 text-xs font-medium px-2 py-1 rounded-full flex items-center">
//                               <Lock className="h-3 w-3 mr-1" />
//                               Premium
//                             </div>
//                           )}
//                           <div className="flex items-center mb-3 gap-3">
//                             <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-700">
//                               {exam.icon}
//                             </div>
//                             <h4 className="font-semibold text-lg text-slate-900 dark:text-white">{exam.name}</h4>
//                           </div>
//                           <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
//                             {exam.description}
//                           </p>
//                           <div className="flex justify-between items-center">
//                             <span className="text-sm bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded-full">
//                               {exam.questions} questions
//                             </span>
//                             <span className="text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform">
//                               {exam.premium ? "Unlock" : "Start"} →
//                             </span>
//                           </div>
//                         </Link>
//                       ))}
//                     </div>
                    
//                     <div className="mt-5 text-center">
//                       <Link
//                         href={`/apps/scoorly/exams/${category.id}`}
//                         className="inline-flex items-center font-medium text-purple-600 dark:text-purple-400 hover:underline"
//                       >
//                         View all {category.name} exams
//                         <ChevronRight className="h-4 w-4 ml-1" />
//                       </Link>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
          
//           {filteredCategories.length === 0 && (
//             <div className="text-center py-12 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
//               <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">No exams found matching your search.</p>
//               <button 
//                 onClick={() => setSearchTerm("")}
//                 className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
//               >
//                 Clear Search
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
      
//       {/* Features Section */}
//       <div className="bg-white dark:bg-slate-800 py-16">
//         <div className="max-w-5xl mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Why Healthcare Professionals Choose Scoorly</h2>
//             <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
//               Our exam prep platform is designed specifically for medical professionals by industry experts
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl">
//               <div className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full inline-block mb-4">
//                 <BarChart className="h-6 w-6" />
//               </div>
//               <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Advanced Analytics</h3>
//               <p className="text-slate-600 dark:text-slate-400">
//                 Track your progress with detailed analytics to identify and improve weak areas
//               </p>
//             </div>
//             <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl">
//               <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full inline-block mb-4">
//                 <TrendingUp className="h-6 w-6" />
//               </div>
//               <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Adaptive Learning</h3>
//               <p className="text-slate-600 dark:text-slate-400">
//                 Our system adapts to your performance, focusing on areas that need improvement
//               </p>
//             </div>
//             <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl">
//               <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full inline-block mb-4">
//                 <Clock className="h-6 w-6" />
//               </div>
//               <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Time-Efficient</h3>
//               <p className="text-slate-600 dark:text-slate-400">
//                 Study smarter, not harder with focused questions and detailed explanations
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Results Section */}
//       <div className="py-16 bg-slate-50 dark:bg-slate-900">
//         <div className="max-w-5xl mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Real Results for Real Professionals</h2>
//             <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
//               Our users don't just pass their exams—they excel at them. See the difference Scoorly can make.
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-10">
//             <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
//               <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white flex items-center">
//                 <TrendingUp className="h-6 w-6 text-green-500 mr-2" />
//                 Pass Rate Improvement
//               </h3>
//               <div className="h-64 flex items-center justify-center">
//                 <div className="relative w-full max-w-xs h-64 mx-auto">
//                   {/* First Bar */}
//                   <div className="absolute bottom-0 left-5 w-24 bg-slate-200 dark:bg-slate-700 rounded-t-lg" style={{height: "58%"}}>
//                     <div className="absolute top-0 left-0 right-0 transform -translate-y-6 text-center">
//                       <span className="text-sm font-medium text-slate-500 dark:text-slate-400">National Avg</span>
//                     </div>
//                     <div className="absolute bottom-2 left-0 right-0 text-center">
//                       <span className="text-lg font-bold text-slate-700 dark:text-slate-300">58%</span>
//                     </div>
//                   </div>
                  
//                   {/* Second Bar */}
//                   <div className="absolute bottom-0 right-5 w-24 bg-green-500 rounded-t-lg" style={{height: "92%"}}>
//                     <div className="absolute top-0 left-0 right-0 transform -translate-y-6 text-center">
//                       <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Scoorly Users</span>
//                     </div>
//                     <div className="absolute bottom-2 left-0 right-0 text-center">
//                       <span className="text-lg font-bold text-white">92%</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <p className="text-center text-slate-600 dark:text-slate-400 mt-4">
//                 First-time certification pass rates for Scoorly premium users compared to national averages
//               </p>
//             </div>
            
//             <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
//               <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white flex items-center">
//                 <Clock className="h-6 w-6 text-purple-500 mr-2" />
//                 Study Time Efficiency
//               </h3>
//               <div className="h-64 flex items-center justify-center">
//                 <div className="grid grid-cols-2 gap-6 w-full max-w-xs">
//                   <div className="text-center">
//                     <div className="text-slate-900 dark:text-white text-5xl font-bold mb-2">120</div>
//                     <div className="text-slate-600 dark:text-slate-400">Hours of<br />traditional study</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-purple-600 dark:text-purple-400 text-5xl font-bold mb-2">48</div>
//                     <div className="text-slate-600 dark:text-slate-400">Hours with<br />Scoorly Premium</div>
//                   </div>
//                 </div>
//               </div>
//               <p className="text-center text-slate-600 dark:text-slate-400 mt-4">
//                 Average study time required to achieve certification, based on user surveys
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Testimonials Section */}
//       <div className="bg-white dark:bg-slate-800 py-16">
//         <div className="max-w-5xl mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 dark:text-white">
//             Success Stories
//           </h2>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl">
//               <div className="flex gap-4 mb-4">
//                 <div className="w-12 h-12 rounded-full bg-orange-200 flex items-center justify-center text-orange-600 font-bold text-lg">
//                   JS
//                 </div>
//                 <div>
//                   <div className="font-bold text-slate-900 dark:text-white">James S.</div>
//                   <div className="text-slate-500 dark:text-slate-400">NREMT® Paramedic</div>
//                 </div>
//               </div>
//               <p className="text-slate-600 dark:text-slate-300 mb-4">
//                 "After failing the paramedic exam twice, I found Scoorly. The practice questions and detailed explanations helped me identify my weak areas. I passed on my next attempt with a score of 82%!"
//               </p>
//               <div className="flex text-yellow-400">
//                 <Star className="h-5 w-5 fill-current" />
//                 <Star className="h-5 w-5 fill-current" />
//                 <Star className="h-5 w-5 fill-current" />
//                 <Star className="h-5 w-5 fill-current" />
//                 <Star className="h-5 w-5 fill-current" />
//               </div>
//             </div>
            
//             <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl">
//               <div className="flex gap-4 mb-4">
//                 <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center text-green-600 font-bold text-lg">
//                   ML
//                 </div>
//                 <div>
//                   <div className="font-bold text-slate-900 dark:text-white">Maria L.</div>
//                   <div className="text-slate-500 dark:text-slate-400">AANPCB® FNP</div>
//                 </div>
//               </div>
//               <p className="text-slate-600 dark:text-slate-300 mb-4">
//                 "The FNP exam is notoriously difficult, but Scoorly's questions were spot-on. The analytics helped me focus my studying and I walked into the exam feeling completely prepared."
//               </p>
//               <div className="flex text-yellow-400">
//                 <Star className="h-5 w-5 fill-current" />
//                 <Star className="h-5 w-5 fill-current" />
//                 <Star className="h-5 w-5 fill-current" />
//                 <Star className="h-5 w-5 fill-current" />
//                 <Star className="h-5 w-5 fill-current" />
//               </div>
//             </div>
            
//             <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl">
//               <div className="flex gap-4 mb-4">
//                 <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center text-purple-600 font-bold text-lg">
//                   RT
//                 </div>
//                 <div>
//                   <div className="font-bold text-slate-900 dark:text-white">Robert T.</div>
//                   <div className="text-slate-500 dark:text-slate-400">Firefighter I & II</div>
//                 </div>
//               </div>
//               <p className="text-slate-600 dark:text-slate-300 mb-4">
//                 "I needed a structured approach to the Firefighter certification. Scoorly's practice tests were incredibly realistic and the exam-day strategies they provided made all the difference."
//               </p>
//               <div className="flex text-yellow-400">
//                 <Star className="h-5 w-5 fill-current" />
//                 <Star className="h-5 w-5 fill-current" />
//                 <Star className="h-5 w-5 fill-current" />
//                 <Star className="h-5 w-5 fill-current" />
//                 <Star className="h-5 w-5 fill-current" />
//               </div>
//             </div>
//           </div>
          
//           <div className="mt-12 text-center">
//             <div className="inline-flex items-center justify-center gap-1 mb-6">
//               <div className="h-2 w-2 rounded-full bg-purple-600"></div>
//               <div className="h-2 w-2 rounded-full bg-purple-600"></div>
//               <div className="h-2 w-2 rounded-full bg-purple-600"></div>
//               <div className="h-2 w-2 rounded-full bg-purple-600"></div>
//             </div>
//             <p className="text-xl italic text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
//               "Since implementing Scoorly for all our EMT trainees, our first-time certification pass rate has increased from 68% to 94%."
//             </p>
//             <div className="mt-6">
//               <div className="font-bold text-slate-900 dark:text-white">Dr. Jennifer Howe</div>
//               <div className="text-slate-500 dark:text-slate-400">Director, Metropolitan EMS Training Center</div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Pricing Section - Updated */}
//       <div className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
//         <div className="max-w-5xl mx-auto px-4">
//           <div className="text-center mb-10">
//             <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Choose Your Plan</h2>
//             <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
//               Start with a free account or unlock premium features to maximize your exam success
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             {/* Free Plan - Updated */}
//             <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden h-full">
//               <div className="p-6 flex flex-col h-full">
//                 <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Free</h3>
//                 <div className="mb-4">
//                   <span className="text-3xl font-bold text-slate-900 dark:text-white">$0</span>
//                   <span className="text-slate-500 dark:text-slate-400">/month</span>
//                 </div>
//                 <p className="text-slate-600 dark:text-slate-400 mb-6">
//                   Basic access to get you started with your exam prep
//                 </p>
                
//                 <ul className="space-y-3 mb-6 flex-grow">
//                   <li className="flex items-start">
//                     <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
//                     <span className="text-slate-600 dark:text-slate-300">Access to 8 free exams</span>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
//                     <span className="text-slate-600 dark:text-slate-300">100 practice questions per month</span>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
//                     <span className="text-slate-600 dark:text-slate-300">Basic progress tracking</span>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
//                     <span className="text-slate-600 dark:text-slate-300">Access to study materials</span>
//                   </li>
//                 </ul>
                
//                 <Link
//                   href="/apps/scoorly/signup"
//                   className="w-full py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-medium rounded-lg transition-colors text-center block"
//                 >
//                   Create Free Account
//                 </Link>
//               </div>
//             </div>
            
//             {/* Premium Plan - Updated without trial reference */}
//             <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border-2 border-purple-500 dark:border-purple-600 overflow-hidden relative h-full">
//               <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 font-medium text-sm">
//                 MOST POPULAR
//               </div>
              
//               <div className="p-6 flex flex-col h-full">
//                 <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Premium</h3>
//                 <div className="mb-4">
//                   <span className="text-slate-500 dark:text-slate-400 line-through mr-2">$49.99</span>
//                   <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">$34.99</span>
//                   <span className="text-slate-500 dark:text-slate-400">/month</span>
//                 </div>
//                 <p className="text-slate-600 dark:text-slate-400 mb-6">
//                   Comprehensive access to maximize your chances of passing
//                 </p>
                
//                 <ul className="space-y-3 mb-6 flex-grow">
//                   <li className="flex items-start">
//                     <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
//                     <span className="text-slate-600 dark:text-slate-300"><strong>Unlimited access</strong> to all 37 exams</span>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
//                     <span className="text-slate-600 dark:text-slate-300"><strong>4,300+</strong> practice questions</span>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
//                     <span className="text-slate-600 dark:text-slate-300"><strong>Advanced analytics</strong> with weak area detection</span>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
//                     <span className="text-slate-600 dark:text-slate-300"><strong>Personalized study plans</strong> tailored to your needs</span>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
//                     <span className="text-slate-600 dark:text-slate-300"><strong>Performance guarantees</strong> or your money back</span>
//                   </li>
//                 </ul>
                
//                 <Link
//                   href="/apps/scoorly/subscribe"
//                   className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors text-center block"
//                 >
//                   Get Premium Access Now
//                 </Link>
//                 <p className="text-xs text-center mt-2 text-slate-500 dark:text-slate-400">
//                   30-day money-back guarantee. Cancel anytime.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Final CTA - Updated with purple instead of blue */}
//       <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16 text-white">
//         <div className="max-w-3xl mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-6">Ready to Ace Your Certification?</h2>
//           <p className="text-xl text-indigo-100 mb-8">
//             Join thousands of healthcare professionals who've advanced their careers with Scoorly
//           </p>
//           <Link 
//             href="/apps/scoorly/subscribe"
//             className="px-8 py-4 bg-white text-purple-600 text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all inline-block"
//           >
//             Get Premium Access Now →
//           </Link>
//           <p className="mt-4 text-indigo-100">
//             30-day money-back guarantee. No questions asked.
//           </p>
//         </div>
//       </div>
      
//       {/* FAQ Section */}
//       <div className="py-16 bg-white dark:bg-slate-800">
//         <div className="max-w-4xl mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 dark:text-white">
//             Frequently Asked Questions
//           </h2>
          
//           <div className="space-y-6">
//             <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
//               <button className="w-full flex justify-between items-center p-5 text-left bg-slate-50 dark:bg-slate-900">
//                 <span className="font-medium text-slate-900 dark:text-white">How up-to-date are your practice exams?</span>
//                 <ChevronDown className="h-5 w-5 text-slate-500 dark:text-slate-400" />
//               </button>
//               <div className="p-5 border-t border-slate-200 dark:border-slate-700">
//                 <p className="text-slate-600 dark:text-slate-400">
//                   Our team of certified professionals reviews and updates our question banks monthly to ensure they align with the latest certification requirements. We track changes to official exam content outlines and incorporate real user feedback to keep our materials current.
//                 </p>
//               </div>
//             </div>
            
//             <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
//               <button className="w-full flex justify-between items-center p-5 text-left bg-slate-50 dark:bg-slate-900">
//                 <span className="font-medium text-slate-900 dark:text-white">Can I cancel my premium subscription?</span>
//                 <ChevronDown className="h-5 w-5 text-slate-500 dark:text-slate-400" />
//               </button>
//               <div className="p-5 border-t border-slate-200 dark:border-slate-700">
//                 <p className="text-slate-600 dark:text-slate-400">
//                   Yes, you can cancel your subscription at any time. If you cancel after a payment, you'll continue to have access until the end of your billing period. We also offer a 30-day money-back guarantee if you're not satisfied with our premium service.
//                 </p>
//               </div>
//             </div>
            
//             <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
//               <button className="w-full flex justify-between items-center p-5 text-left bg-slate-50 dark:bg-slate-900">
//                 <span className="font-medium text-slate-900 dark:text-white">How similar are your questions to the real exams?</span>
//                 <ChevronDown className="h-5 w-5 text-slate-500 dark:text-slate-400" />
//               </button>
//               <div className="p-5 border-t border-slate-200 dark:border-slate-700">
//                 <p className="text-slate-600 dark:text-slate-400">
//                   Our questions are designed to match the style, difficulty, and content of the actual certification exams. We work with professionals who have recently passed these exams and incorporate their feedback. While we don't copy exact questions (which would violate exam integrity), our users consistently report that our practice materials effectively prepared them for their actual exams.
//                 </p>
//               </div>
//             </div>
//           </div>
          
//           <div className="mt-10 text-center">
//             <Link href="/apps/scoorly/faq" className="text-purple-600 dark:text-purple-400 hover:underline">
//               View all FAQs →
//             </Link>
//           </div>
//         </div>
//       </div>
      
//       {/* Trust Signals */}
//       <div className="py-12 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
//         <div className="max-w-5xl mx-auto px-4">
//           <div className="text-center mb-8">
//             <p className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">Trusted by institutions nationwide</p>
//           </div>
//           <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
//             <div className="text-slate-700 dark:text-slate-300 font-bold text-lg">Metropolitan Hospital</div>
//             <div className="text-slate-700 dark:text-slate-300 font-bold text-lg">EMT Academy</div>
//             <div className="text-slate-700 dark:text-slate-300 font-bold text-lg">State University</div>
//             <div className="text-slate-700 dark:text-slate-300 font-bold text-lg">First Response Inc.</div>
//             <div className="text-slate-700 dark:text-slate-300 font-bold text-lg">Medical Training Center</div>
//           </div>
//         </div>
//       </div>
      
//       {/* Footer */}
//       <footer className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 py-8">
//         <div className="max-w-5xl mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Exams</h3>
//               <ul className="space-y-2">
//                 <li><Link href="/apps/scoorly/exams/ems" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400">EMS</Link></li>
//                 <li><Link href="/apps/scoorly/exams/nursing" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400">Nursing</Link></li>
//                 <li><Link href="/apps/scoorly/exams/emergency" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400">Emergency</Link></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Company</h3>
//               <ul className="space-y-2">
//                 <li><Link href="/apps/scoorly/about" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400">About Us</Link></li>
//                 <li><Link href="/apps/scoorly/contact" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400">Contact</Link></li>
//                 <li><Link href="/apps/scoorly/careers" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400">Careers</Link></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Resources</h3>
//               <ul className="space-y-2">
//                 <li><Link href="/apps/scoorly/blog" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400">Blog</Link></li>
//                 <li><Link href="/apps/scoorly/guides" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400">Study Guides</Link></li>
//                 <li><Link href="/apps/scoorly/faq" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400">FAQs</Link></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Legal</h3>
//               <ul className="space-y-2">
//                 <li><Link href="/apps/scoorly/terms" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400">Terms</Link></li>
//                 <li><Link href="/apps/scoorly/privacy" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400">Privacy</Link></li>
//                 <li><Link href="/apps/scoorly/cookies" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400">Cookies</Link></li>
//               </ul>
//             </div>
//           </div>
//           <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700 text-center">
//             <p className="text-sm text-slate-500 dark:text-slate-400">
//               &copy; {new Date().getFullYear()} Scoorly. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// // }
// // app/apps/scoorly/page.js
// "use client"

// import { useState, useEffect } from 'react';
// import MainHero from '@/components/heroes/MainHero';
// import HomeExamCategoryCard from '@/components/exams/HomeExamCategoryCard';
// import useHomeExams from '@/app/hooks/useHomeExams';
// import { 
//   Star, 
//   X, 
//   BarChart, 
//   TrendingUp, 
//   Clock, 
//   ChevronRight,
//   Link
// } from 'lucide-react';

// export default function HomePage() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [expandedCategories, setExpandedCategories] = useState({});
//   const [showPromo, setShowPromo] = useState(true);
//   const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });
  
//   // Fetch exam categories from Supabase
//   const { examCategories, loading, error } = useHomeExams();
  
//   // Timer for special offer
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (timeLeft.seconds > 0) {
//         setTimeLeft({ ...timeLeft, seconds: timeLeft.seconds - 1 });
//       } else if (timeLeft.minutes > 0) {
//         setTimeLeft({ ...timeLeft, minutes: timeLeft.minutes - 1, seconds: 59 });
//       } else if (timeLeft.hours > 0) {
//         setTimeLeft({ ...timeLeft, hours: timeLeft.hours - 1, minutes: 59, seconds: 59 });
//       }
//     }, 1000);
    
//     return () => clearTimeout(timer);
//   }, [timeLeft]);

//   // Toggle category expansion
//   const toggleCategory = (categoryId) => {
//     setExpandedCategories(prev => ({
//       ...prev,
//       [categoryId]: !prev[categoryId]
//     }));
//   };
  
//   // Filter categories and exams based on search term
//   const filteredCategories = examCategories.map(category => {
//     const filteredExams = category.exams.filter(exam => 
//       exam.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//       exam.description.toLowerCase().includes(searchTerm.toLowerCase())
//     );
    
//     return {
//       ...category,
//       exams: filteredExams,
//       matches: filteredExams.length > 0 || category.name.toLowerCase().includes(searchTerm.toLowerCase())
//     };
//   }).filter(category => category.matches);

//   return (
//     <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
//       {/* Special Offer Banner */}
//       {showPromo && (
//         <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3">
//           <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
//             <div className="flex items-center">
//               <Star className="h-5 w-5 text-yellow-300 mr-2" />
//               <span className="font-medium">Special Offer: 30% OFF Premium for 
//                 <span className="inline-block px-2 py-1 mx-1 bg-white/20 rounded font-bold">
//                   {timeLeft.hours.toString().padStart(2, '0')}:{timeLeft.minutes.toString().padStart(2, '0')}:{timeLeft.seconds.toString().padStart(2, '0')}
//                 </span>
//               </span>
//             </div>
//             <button 
//               onClick={() => setShowPromo(false)}
//               className="text-white opacity-70 hover:opacity-100"
//             >
//               <X className="h-5 w-5" />
//             </button>
//           </div>
//         </div>
//       )}
      
//       {/* Hero Section */}
//       <MainHero 
//         searchTerm={searchTerm}
//         setSearchTerm={setSearchTerm}
//       />
      
//       {/* Popular Exams Section */}
//       <div className="py-12 bg-slate-50 dark:bg-slate-900">
//         <div className="max-w-5xl mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-white">
//             Popular Certification Exams
//           </h2>
          
//           {loading ? (
//             <div className="flex justify-center items-center py-12">
//               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
//             </div>
//           ) : error ? (
//             <div className="text-center py-8">
//               <p className="text-red-500">Failed to load exam categories. Please try again later.</p>
//             </div>
//           ) : (
//             <div className="space-y-6">
//               {filteredCategories.map((category) => (
//                 <HomeExamCategoryCard 
//                   key={category.id}
//                   category={category}
//                   isExpanded={expandedCategories[category.id]}
//                   onToggle={toggleCategory}
//                 />
//               ))}
              
//               {filteredCategories.length === 0 && (
//                 <div className="text-center py-12 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
//                   <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">No exams found matching your search.</p>
//                   <button 
//                     onClick={() => setSearchTerm("")}
//                     className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
//                   >
//                     Clear Search
//                   </button>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
      
//       {/* Features Section */}
//       <div className="bg-white dark:bg-slate-800 py-16">
//         <div className="max-w-5xl mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Why Healthcare Professionals Choose Scoorly</h2>
//             <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
//               Our exam prep platform is designed specifically for medical professionals by industry experts
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl">
//               <div className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full inline-block mb-4">
//                 <BarChart className="h-6 w-6" />
//               </div>
//               <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Advanced Analytics</h3>
//               <p className="text-slate-600 dark:text-slate-400">
//                 Track your progress with detailed analytics to identify and improve weak areas
//               </p>
//             </div>
//             <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl">
//               <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full inline-block mb-4">
//                 <TrendingUp className="h-6 w-6" />
//               </div>
//               <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Adaptive Learning</h3>
//               <p className="text-slate-600 dark:text-slate-400">
//                 Our system adapts to your performance, focusing on areas that need improvement
//               </p>
//             </div>
//             <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl">
//               <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full inline-block mb-4">
//                 <Clock className="h-6 w-6" />
//               </div>
//               <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Time-Efficient</h3>
//               <p className="text-slate-600 dark:text-slate-400">
//                 Study smarter, not harder with focused questions and detailed explanations
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Rest of the page content... */}
//       {/* You can continue to split the rest of the homepage into components as needed */}
//     </div>
//   );
// }
// app/apps/scoorly/page.js
"use client"

import { useState } from 'react';
import MainHero from '@/components/heroes/MainHero';
import HomeExamCategoryCard from '@/components/exams/HomeExamCategoryCard';
import useHomeExams from '@/app/hooks/useHomeExams';
import { 
  BarChart, 
  TrendingUp, 
  Clock
} from 'lucide-react';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategories, setExpandedCategories] = useState({});
  
  // Fetch exam categories from Supabase
  const { examCategories, loading, error } = useHomeExams();

  // Toggle category expansion
  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };
  
  // Filter categories and exams based on search term
  const filteredCategories = examCategories.map(category => {
    // Keep all exams but mark matching ones
    const markedExams = category.exams.map(exam => {
      const matches = 
        exam.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        exam.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      return {
        ...exam,
        isMatch: matches && searchTerm !== ""
      };
    });
    
    // Keep all exams if no search, but only matching ones if there's a search
    const filteredExams = searchTerm 
      ? markedExams.filter(exam => exam.isMatch)
      : markedExams;
    
    return {
      ...category,
      exams: filteredExams,
      matches: filteredExams.length > 0 || category.name.toLowerCase().includes(searchTerm.toLowerCase())
    };
  }).filter(category => category.matches);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section with integrated promo banner */}
      <MainHero 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      
      {/* Popular Exams Section */}
      <div className="py-12 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center text-slate-900 dark:text-white">
            Popular Certification Exams
          </h2>
          
          {/* Search Box for Filtering Exams */}
          <div className="max-w-lg mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Filter exams by name or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-red-500">Failed to load exam categories. Please try again later.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredCategories.map((category) => (
                <HomeExamCategoryCard 
                  key={category.id}
                  category={category}
                  isExpanded={expandedCategories[category.id] || (searchTerm !== "" && category.exams.some(exam => exam.isMatch))}
                  onToggle={toggleCategory}
                  highlightSearch={searchTerm}
                />
              ))}
              
              {filteredCategories.length === 0 && (
                <div className="text-center py-12 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">No exams found matching your search.</p>
                  <button 
                    onClick={() => setSearchTerm("")}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-white dark:bg-slate-800 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Why Healthcare Professionals Choose Scoorly</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Our exam prep platform is designed specifically for medical professionals by industry experts
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full inline-block mb-4">
                <BarChart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Advanced Analytics</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Track your progress with detailed analytics to identify and improve weak areas
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full inline-block mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Adaptive Learning</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Our system adapts to your performance, focusing on areas that need improvement
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl">
              <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full inline-block mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Time-Efficient</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Study smarter, not harder with focused questions and detailed explanations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}