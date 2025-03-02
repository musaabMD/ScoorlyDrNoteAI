// // // // // // // "use client";

// // // // // // // import { useState } from "react";
// // // // // // // import Link from "next/link";
// // // // // // // import { 
// // // // // // //   ArrowLeft, 
// // // // // // //   Clock, 
// // // // // // //   Calendar, 
// // // // // // //   Users, 
// // // // // // //   Bookmark, 
// // // // // // //   CheckCircle, 
// // // // // // //   Award, 
// // // // // // //   BookOpen,
// // // // // // //   ListChecks,
// // // // // // //   FileText,
// // // // // // //   Brain,
// // // // // // //   ChevronDown,
// // // // // // //   ChevronUp,
// // // // // // //   Star
// // // // // // // } from "lucide-react";
// // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// // // // // // // import { Progress } from "@/components/ui/progress";
// // // // // // // import { Badge } from "@/components/ui/badge";

// // // // // // // // Custom color palette to match header
// // // // // // // const colors = {
// // // // // // //   primary: "#007832",
// // // // // // //   background: "#F6EFE8",
// // // // // // //   white: "#FFFFFF",
// // // // // // //   lightGreen: "#E6F4EA"
// // // // // // // };

// // // // // // // // Mock data - in a real application, fetch this based on the examId
// // // // // // // const examsDatabase = {
// // // // // // //   "usmle-step1": {
// // // // // // //     id: "usmle-step1",
// // // // // // //     title: "USMLE Step 1",
// // // // // // //     category: "Medical License",
// // // // // // //     description: "The USMLE Step 1 is the first part of the United States Medical Licensing Examination. It assesses whether medical school students or graduates understand and can apply important concepts of the basic sciences to the practice of medicine.",
// // // // // // //     longDescription: "The USMLE Step 1 exam is a crucial milestone for medical students, serving as a comprehensive assessment of basic science knowledge and its application to clinical medicine. The exam focuses on principles of basic sciences, with an emphasis on mechanisms of health, disease, and modes of therapy. Success in Step 1 is often considered a significant factor in residency program applications, making thorough preparation essential.",
// // // // // // //     questionCount: 280,
// // // // // // //     examDate: "Flexible scheduling",
// // // // // // //     averageTime: "8 hours",
// // // // // // //     popularity: "High",
// // // // // // //     difficulty: "Hard",
// // // // // // //     passingScore: 196,
// // // // // // //     nationalPassRate: "91%",
// // // // // // //     topics: [
// // // // // // //       { name: "Anatomy", percentage: 12, questionCount: 34 },
// // // // // // //       { name: "Biochemistry", percentage: 15, questionCount: 42 },
// // // // // // //       { name: "Behavioral Sciences", percentage: 10, questionCount: 28 },
// // // // // // //       { name: "Microbiology", percentage: 13, questionCount: 36 },
// // // // // // //       { name: "Immunology", percentage: 8, questionCount: 22 },
// // // // // // //       { name: "Pathology", percentage: 15, questionCount: 42 },
// // // // // // //       { name: "Pharmacology", percentage: 12, questionCount: 34 },
// // // // // // //       { name: "Physiology", percentage: 15, questionCount: 42 }
// // // // // // //     ],
// // // // // // //     features: [
// // // // // // //       "Comprehensive question bank with 3,500+ practice questions",
// // // // // // //       "Detailed explanations with visual aids",
// // // // // // //       "Performance tracking and analytics",
// // // // // // //       "Customizable practice tests",
// // // // // // //       "Spaced repetition flashcards",
// // // // // // //       "Mobile-friendly interface for studying on the go"
// // // // // // //     ],
// // // // // // //     testimonials: [
// // // // // // //       {
// // // // // // //         name: "Dr. Sarah Chen",
// // // // // // //         role: "Resident, Internal Medicine",
// // // // // // //         content: "DrNCards helped me organize my Step 1 study plan efficiently. The spaced repetition system was key to retaining all the information needed for the exam.",
// // // // // // //         rating: 5
// // // // // // //       },
// // // // // // //       {
// // // // // // //         name: "Michael Johnson",
// // // // // // //         role: "Medical Student, Year 3",
// // // // // // //         content: "The practice questions were extremely similar to the actual exam. I felt well-prepared and confident on test day.",
// // // // // // //         rating: 5
// // // // // // //       },
// // // // // // //       {
// // // // // // //         name: "Priya Patel",
// // // // // // //         role: "Medical Student, Year 2",
// // // // // // //         content: "The analytics helped me identify my weak areas quickly so I could focus my study time effectively.",
// // // // // // //         rating: 4
// // // // // // //       }
// // // // // // //     ],
// // // // // // //     faqs: [
// // // // // // //       {
// // // // // // //         question: "When should I start preparing for USMLE Step 1?",
// // // // // // //         answer: "Most medical students begin dedicated Step 1 preparation 6-8 weeks before their exam date, but building a strong foundation throughout the first two years of medical school is crucial. Our platform can be used throughout your preclinical years to reinforce concepts as you learn them."
// // // // // // //       },
// // // // // // //       {
// // // // // // //         question: "How many practice questions should I complete before taking Step 1?",
// // // // // // //         answer: "Most successful students complete between 2,000-4,000 practice questions during their preparation period. Our question bank contains over 3,500 questions, allowing for comprehensive coverage of all tested topics."
// // // // // // //       },
// // // // // // //       {
// // // // // // //         question: "Is Step 1 now pass/fail?",
// // // // // // //         answer: "Yes, as of January 26, 2022, USMLE Step 1 transitioned to a pass/fail scoring system. However, thorough preparation remains essential as the content is still challenging and forms the foundation for Step 2 CK, which continues to be numerically scored."
// // // // // // //       },
// // // // // // //       {
// // // // // // //         question: "How accurate are your practice tests compared to the real exam?",
// // // // // // //         answer: "Our practice tests are designed to closely simulate the actual exam experience in terms of difficulty, content distribution, and timing. Many students report that our questions are slightly more challenging than the real exam, which helps ensure you're well-prepared."
// // // // // // //       }
// // // // // // //     ]
// // // // // // //   },
// // // // // // //   "nclex-rn": {
// // // // // // //     id: "nclex-rn",
// // // // // // //     title: "NCLEX-RN",
// // // // // // //     category: "Nursing",
// // // // // // //     description: "The National Council Licensure Examination for Registered Nurses (NCLEX-RN) measures the competencies needed to perform safely and effectively as a newly licensed, entry-level registered nurse.",
// // // // // // //     longDescription: "The NCLEX-RN is a computer-adaptive test (CAT) that is a crucial step in obtaining licensure as a registered nurse. The exam evaluates the application of nursing knowledge, skills, and abilities essential for safe and effective entry-level nursing practice. Questions are based on client needs categories: Safe and Effective Care Environment, Health Promotion and Maintenance, Psychosocial Integrity, and Physiological Integrity.",
// // // // // // //     questionCount: "75-265 variable",
// // // // // // //     examDate: "Year-round testing",
// // // // // // //     averageTime: "6 hours (maximum)",
// // // // // // //     popularity: "Very High",
// // // // // // //     difficulty: "Medium",
// // // // // // //     passingScore: "Variable (determined by logit)",
// // // // // // //     nationalPassRate: "86.5%",
// // // // // // //     topics: [
// // // // // // //       { name: "Safety and Infection Control", percentage: 12, questionCount: 30 },
// // // // // // //       { name: "Health Promotion", percentage: 9, questionCount: 22 },
// // // // // // //       { name: "Psychosocial Integrity", percentage: 10, questionCount: 25 },
// // // // // // //       { name: "Basic Care and Comfort", percentage: 9, questionCount: 22 },
// // // // // // //       { name: "Pharmacological Therapies", percentage: 15, questionCount: 38 },
// // // // // // //       { name: "Reduction of Risk Potential", percentage: 13, questionCount: 33 },
// // // // // // //       { name: "Physiological Adaptation", percentage: 14, questionCount: 35 },
// // // // // // //       { name: "Management of Care", percentage: 18, questionCount: 45 }
// // // // // // //     ],
// // // // // // //     features: [
// // // // // // //       "Adaptive question bank that mimics NCLEX-RN testing format",
// // // // // // //       "Over 4,000 NCLEX-style practice questions",
// // // // // // //       "Detailed rationales for correct and incorrect answers",
// // // // // // //       "Performance analytics by nursing process and client needs",
// // // // // // //       "Customizable practice tests",
// // // // // // //       "Mobile app with flashcards for on-the-go studying",
// // // // // // //       "SATA (Select All That Apply) question practice"
// // // // // // //     ],
// // // // // // //     testimonials: [
// // // // // // //       {
// // // // // // //         name: "Jennifer Rodriguez, RN",
// // // // // // //         role: "New Graduate Nurse",
// // // // // // //         content: "The SATA questions were incredibly helpful. They're the most challenging on the NCLEX, and practicing them extensively helped me pass on my first attempt.",
// // // // // // //         rating: 5
// // // // // // //       },
// // // // // // //       {
// // // // // // //         name: "David Kim",
// // // // // // //         role: "Nursing Student",
// // // // // // //         content: "The adaptive testing feature helped me understand how the real NCLEX would feel. I felt much more confident going into the exam.",
// // // // // // //         rating: 5
// // // // // // //       },
// // // // // // //       {
// // // // // // //         name: "Ashley Thompson",
// // // // // // //         role: "Recent BSN Graduate",
// // // // // // //         content: "The rationales are detailed and really help you understand the nursing process behind each answer. This improved my critical thinking skills.",
// // // // // // //         rating: 4
// // // // // // //       }
// // // // // // //     ],
// // // // // // //     faqs: [
// // // // // // //       {
// // // // // // //         question: "How is the NCLEX-RN scored?",
// // // // // // //         answer: "The NCLEX-RN uses computerized adaptive testing (CAT) technology. The difficulty of questions adjusts based on your performance. To pass, you must demonstrate competency above the passing standard. The exam ends when the computer determines with 95% certainty whether you're above or below the passing standard, or when you've answered the maximum number of questions (265)."
// // // // // // //       },
// // // // // // //       {
// // // // // // //         question: "What's the minimum number of questions I'll have to answer?",
// // // // // // //         answer: "The minimum number of questions is 75. The exam will end after 75 questions if the computer has determined with 95% certainty whether you've passed or failed. However, this doesn't indicate whether you've passed or failed - many successful candidates take all 265 questions."
// // // // // // //       },
// // // // // // //       {
// // // // // // //         question: "How should I prepare in the final week before the exam?",
// // // // // // //         answer: "In the final week, focus on reviewing your notes, completing shorter practice tests, and getting adequate rest. Avoid learning new content, which can increase anxiety. Review your weakest areas and practice calming techniques for test day. Our platform provides special 'final week' focused reviews designed for this critical period."
// // // // // // //       },
// // // // // // //       {
// // // // // // //         question: "How soon can I retake the NCLEX if I don't pass?",
// // // // // // //         answer: "Most states require a 45-day waiting period between NCLEX attempts. You can retake the exam up to 8 times per year. If you don't pass, our platform provides a personalized remediation plan based on your performance analysis."
// // // // // // //       }
// // // // // // //     ]
// // // // // // //   },
// // // // // // //   // Add other exams as needed
// // // // // // // };

// // // // // // // const ExamDetailPage = ({ params }) => {
// // // // // // //   const { examid } = params;
// // // // // // //   const [activeTab, setActiveTab] = useState("overview");
// // // // // // //   const [openFaqIndex, setOpenFaqIndex] = useState(null);
  
// // // // // // //   // Get exam data based on examid
// // // // // // //   const exam = examsDatabase[examid];
  
// // // // // // //   // If exam not found, show error
// // // // // // //   if (!exam) {
// // // // // // //     return (
// // // // // // //       <div className="max-w-6xl mx-auto px-4 py-16 text-center">
// // // // // // //         <h1 className="text-3xl font-bold mb-4">Exam Not Found</h1>
// // // // // // //         <p className="mb-8">The exam you're looking for doesn't exist or may have been removed.</p>
// // // // // // //         <Button asChild>
// // // // // // //           <Link href="/exams">
// // // // // // //             <ArrowLeft className="mr-2 h-4 w-4" />
// // // // // // //             Back to All Exams
// // // // // // //           </Link>
// // // // // // //         </Button>
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   // Toggle FAQ accordion
// // // // // // //   const toggleFaq = (index) => {
// // // // // // //     setOpenFaqIndex(openFaqIndex === index ? null : index);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="max-w-6xl mx-auto px-4 py-8">
// // // // // // //       {/* Breadcrumb navigation */}
// // // // // // //       <div className="mb-6">
// // // // // // //         <Link href="/exams" className="text-gray-500 hover:text-gray-700 flex items-center">
// // // // // // //           <ArrowLeft className="mr-2 h-4 w-4" />
// // // // // // //           Back to All Exams
// // // // // // //         </Link>
// // // // // // //       </div>
      
// // // // // // //       {/* Exam header */}
// // // // // // //       <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 mb-8">
// // // // // // //         <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
// // // // // // //           <div>
// // // // // // //             <h1 className="text-3xl font-bold mb-2" style={{ color: colors.primary }}>{exam.title}</h1>
// // // // // // //             <p className="text-gray-500 mb-4">{exam.category}</p>
// // // // // // //             <p className="text-gray-700 mb-6 max-w-3xl">{exam.description}</p>
            
// // // // // // //             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
// // // // // // //               <div className="flex items-start">
// // // // // // //                 <Clock className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
// // // // // // //                 <div>
// // // // // // //                   <p className="text-sm font-medium text-gray-700">Duration</p>
// // // // // // //                   <p className="text-sm text-gray-600">{exam.averageTime}</p>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //               <div className="flex items-start">
// // // // // // //                 <ListChecks className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
// // // // // // //                 <div>
// // // // // // //                   <p className="text-sm font-medium text-gray-700">Questions</p>
// // // // // // //                   <p className="text-sm text-gray-600">{exam.questionCount}</p>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //               <div className="flex items-start">
// // // // // // //                 <Calendar className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
// // // // // // //                 <div>
// // // // // // //                   <p className="text-sm font-medium text-gray-700">Exam Dates</p>
// // // // // // //                   <p className="text-sm text-gray-600">{exam.examDate}</p>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //               <div className="flex items-start">
// // // // // // //                 <CheckCircle className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
// // // // // // //                 <div>
// // // // // // //                   <p className="text-sm font-medium text-gray-700">Pass Rate</p>
// // // // // // //                   <p className="text-sm text-gray-600">{exam.nationalPassRate}</p>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
          
// // // // // // //           <div className="flex flex-col gap-3 w-full md:w-auto">
// // // // // // //             <Button 
// // // // // // //               size="lg"
// // // // // // //               className="w-full md:w-auto"
// // // // // // //               style={{ backgroundColor: colors.primary }}
// // // // // // //             >
// // // // // // //               <BookOpen className="mr-2 h-5 w-5" />
// // // // // // //               Start Studying
// // // // // // //             </Button>
// // // // // // //             <Button 
// // // // // // //               variant="outline"
// // // // // // //               size="lg"
// // // // // // //               className="w-full md:w-auto border-gray-200"
// // // // // // //             >
// // // // // // //               <Bookmark className="mr-2 h-5 w-5" />
// // // // // // //               Save for Later
// // // // // // //             </Button>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
      
// // // // // // //       {/* Tabs for content sections */}
// // // // // // //       <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-16">
// // // // // // //         <TabsList className="mb-8 bg-gray-100 p-1 rounded-lg">
// // // // // // //           <TabsTrigger 
// // // // // // //             value="overview"
// // // // // // //             className={activeTab === "overview" ? "data-[state=active]:bg-white" : ""}
// // // // // // //           >
// // // // // // //             Overview
// // // // // // //           </TabsTrigger>
// // // // // // //           <TabsTrigger 
// // // // // // //             value="topics"
// // // // // // //             className={activeTab === "topics" ? "data-[state=active]:bg-white" : ""}
// // // // // // //           >
// // // // // // //             Topics
// // // // // // //           </TabsTrigger>
// // // // // // //           <TabsTrigger 
// // // // // // //             value="features"
// // // // // // //             className={activeTab === "features" ? "data-[state=active]:bg-white" : ""}
// // // // // // //           >
// // // // // // //             Features
// // // // // // //           </TabsTrigger>
// // // // // // //           <TabsTrigger 
// // // // // // //             value="testimonials"
// // // // // // //             className={activeTab === "testimonials" ? "data-[state=active]:bg-white" : ""}
// // // // // // //           >
// // // // // // //             Testimonials
// // // // // // //           </TabsTrigger>
// // // // // // //           <TabsTrigger 
// // // // // // //             value="faq"
// // // // // // //             className={activeTab === "faq" ? "data-[state=active]:bg-white" : ""}
// // // // // // //           >
// // // // // // //             FAQ
// // // // // // //           </TabsTrigger>
// // // // // // //         </TabsList>
        
// // // // // // //         <TabsContent value="overview" className="mt-0">
// // // // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // // // // //             <div className="md:col-span-2">
// // // // // // //               <h2 className="text-2xl font-bold mb-4">About this Exam</h2>
// // // // // // //               <p className="text-gray-700 mb-6 leading-relaxed">{exam.longDescription}</p>
              
// // // // // // //               <div className="bg-gray-50 rounded-lg p-6 mb-8">
// // // // // // //                 <h3 className="text-lg font-semibold mb-4 flex items-center">
// // // // // // //                   <Award className="mr-2 h-5 w-5 text-yellow-500" />
// // // // // // //                   Passing Score Information
// // // // // // //                 </h3>
// // // // // // //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // // // // // //                   <div>
// // // // // // //                     <p className="text-sm text-gray-500 mb-1">Passing Score</p>
// // // // // // //                     <p className="text-lg font-medium">{exam.passingScore}</p>
// // // // // // //                   </div>
// // // // // // //                   <div>
// // // // // // //                     <p className="text-sm text-gray-500 mb-1">National Pass Rate</p>
// // // // // // //                     <p className="text-lg font-medium">{exam.nationalPassRate}</p>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               </div>
              
// // // // // // //               <div className="mb-8">
// // // // // // //                 <h3 className="text-lg font-semibold mb-4">Why Prepare with DrNCards</h3>
// // // // // // //                 <ul className="space-y-3">
// // // // // // //                   {exam.features.slice(0, 3).map((feature, index) => (
// // // // // // //                     <li key={index} className="flex items-start">
// // // // // // //                       <CheckCircle className="h-5 w-5 mr-3 text-green-500 mt-0.5 flex-shrink-0" />
// // // // // // //                       <span className="text-gray-700">{feature}</span>
// // // // // // //                     </li>
// // // // // // //                   ))}
// // // // // // //                 </ul>
// // // // // // //               </div>
// // // // // // //             </div>
            
// // // // // // //             <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-fit">
// // // // // // //               <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
              
// // // // // // //               <div className="space-y-6">
// // // // // // //                 <div>
// // // // // // //                   <div className="flex justify-between items-center mb-2">
// // // // // // //                     <span className="text-sm text-gray-600">Difficulty</span>
// // // // // // //                     <Badge
// // // // // // //                       className={`${
// // // // // // //                         exam.difficulty === "Hard" ? "bg-red-100 text-red-800" :
// // // // // // //                         exam.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800" :
// // // // // // //                         "bg-green-100 text-green-800"
// // // // // // //                       }`}
// // // // // // //                     >
// // // // // // //                       {exam.difficulty}
// // // // // // //                     </Badge>
// // // // // // //                   </div>
// // // // // // //                   <Progress 
// // // // // // //                     value={
// // // // // // //                       exam.difficulty === "Hard" ? 90 :
// // // // // // //                       exam.difficulty === "Medium" ? 60 : 30
// // // // // // //                     }
// // // // // // //                     className="h-2 bg-gray-100"
// // // // // // //                     indicatorClassName={
// // // // // // //                       exam.difficulty === "Hard" ? "bg-red-500" :
// // // // // // //                       exam.difficulty === "Medium" ? "bg-yellow-500" : "bg-green-500"
// // // // // // //                     }
// // // // // // //                   />
// // // // // // //                 </div>
                
// // // // // // //                 <div>
// // // // // // //                   <div className="flex justify-between items-center mb-2">
// // // // // // //                     <span className="text-sm text-gray-600">Popularity</span>
// // // // // // //                     <span className="text-sm font-medium">{exam.popularity}</span>
// // // // // // //                   </div>
// // // // // // //                   <Progress 
// // // // // // //                     value={
// // // // // // //                       exam.popularity === "Very High" ? 95 :
// // // // // // //                       exam.popularity === "High" ? 75 :
// // // // // // //                       exam.popularity === "Medium" ? 50 : 25
// // // // // // //                     }
// // // // // // //                     className="h-2 bg-gray-100"
// // // // // // //                     indicatorClassName="bg-blue-500"
// // // // // // //                   />
// // // // // // //                 </div>
                
// // // // // // //                 <div className="pt-4 border-t border-gray-100">
// // // // // // //                   <h4 className="text-sm font-medium text-gray-700 mb-3">Who should take this exam?</h4>
// // // // // // //                   <p className="text-sm text-gray-600 mb-4">
// // // // // // //                     {exam.id === "usmle-step1" 
// // // // // // //                       ? "Medical students who have completed their basic science coursework and are preparing for clinical rotations."
// // // // // // //                       : "Nursing students who have completed their nursing program and are ready to obtain their RN license."}
// // // // // // //                   </p>
// // // // // // //                   <Button variant="outline" className="w-full text-sm border-gray-200">
// // // // // // //                     <FileText className="h-4 w-4 mr-2" />
// // // // // // //                     View Exam Requirements
// // // // // // //                   </Button>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </TabsContent>
        
// // // // // // //         <TabsContent value="topics" className="mt-0">
// // // // // // //           <div className="max-w-4xl mx-auto">
// // // // // // //             <h2 className="text-2xl font-bold mb-6 flex items-center">
// // // // // // //               <Brain className="mr-3 h-6 w-6" style={{ color: colors.primary }} />
// // // // // // //               Exam Topics
// // // // // // //             </h2>
// // // // // // //             <p className="text-gray-700 mb-8">
// // // // // // //               The {exam.title} covers {exam.topics.length} main topic areas. Understanding the breakdown helps you allocate your study time effectively.
// // // // // // //             </p>
            
// // // // // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
// // // // // // //               {exam.topics.map((topic, index) => (
// // // // // // //                 <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
// // // // // // //                   <h3 className="text-lg font-medium mb-3" style={{ color: colors.primary }}>
// // // // // // //                     {topic.name}
// // // // // // //                   </h3>
// // // // // // //                   <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
// // // // // // //                     <span>{topic.percentage}% of exam</span>
// // // // // // //                     <span>~{topic.questionCount} questions</span>
// // // // // // //                   </div>
// // // // // // //                   <Progress 
// // // // // // //                     value={topic.percentage * 100 / 20}
// // // // // // //                     className="h-2 bg-gray-100"
// // // // // // //                     indicatorClassName="bg-emerald-500"
// // // // // // //                   />
// // // // // // //                 </div>
// // // // // // //               ))}
// // // // // // //             </div>
            
// // // // // // //             <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
// // // // // // //               <h3 className="text-lg font-semibold mb-3">Study Strategy Tip</h3>
// // // // // // //               <p className="text-gray-700 mb-4">
// // // // // // //                 Focus your study efforts proportionally to the exam breakdown above. Our study materials are organized to match this distribution, ensuring you spend the right amount of time on each topic.
// // // // // // //               </p>
// // // // // // //               <Button style={{ backgroundColor: colors.primary }}>
// // // // // // //                 View Recommended Study Plan
// // // // // // //               </Button>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </TabsContent>
        
// // // // // // //         <TabsContent value="features" className="mt-0">
// // // // // // //           <div className="max-w-4xl mx-auto">
// // // // // // //             <h2 className="text-2xl font-bold mb-6">Key Features of Our {exam.title} Prep</h2>
// // // // // // //             <p className="text-gray-700 mb-8">
// // // // // // //               Our comprehensive preparation platform is designed specifically for {exam.title} success, with tools and resources developed by top-performing professionals.
// // // // // // //             </p>
            
// // // // // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
// // // // // // //               {exam.features.map((feature, index) => (
// // // // // // //                 <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex">
// // // // // // //                   <div 
// // // // // // //                     className="h-12 w-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
// // // // // // //                     style={{ backgroundColor: colors.lightGreen }}
// // // // // // //                   >
// // // // // // //                     <CheckCircle className="h-6 w-6" style={{ color: colors.primary }} />
// // // // // // //                   </div>
// // // // // // //                   <div>
// // // // // // //                     <h3 className="text-lg font-medium mb-2">
// // // // // // //                       {feature.split(" with ")[0]}
// // // // // // //                     </h3>
// // // // // // //                     <p className="text-gray-600">
// // // // // // //                       {feature.includes(" with ") ? `with ${feature.split(" with ")[1]}` : ""}
// // // // // // //                     </p>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               ))}
// // // // // // //             </div>
            
// // // // // // //             <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-8 border border-emerald-100">
// // // // // // //               <h3 className="text-xl font-bold mb-4">Ready to excel on your {exam.title}?</h3>
// // // // // // //               <p className="text-gray-700 mb-6">
// // // // // // //                 Join thousands of successful students who have used our platform to achieve their goals. Start your preparation journey today.
// // // // // // //               </p>
// // // // // // //               <div className="flex flex-col sm:flex-row gap-4">
// // // // // // //                 <Button 
// // // // // // //                   size="lg"
// // // // // // //                   style={{ backgroundColor: colors.primary }}
// // // // // // //                 >
// // // // // // //                   Start Free Trial
// // // // // // //                 </Button>
// // // // // // //                 <Button 
// // // // // // //                   variant="outline"
// // // // // // //                   size="lg"
// // // // // // //                   className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
// // // // // // //                 >
// // // // // // //                   View Pricing Options
// // // // // // //                 </Button>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </TabsContent>
        
// // // // // // //         <TabsContent value="testimonials" className="mt-0">
// // // // // // //           <div className="max-w-4xl mx-auto">
// // // // // // //             <h2 className="text-2xl font-bold mb-6">Success Stories</h2>
// // // // // // //             <p className="text-gray-700 mb-8">
// // // // // // //               Hear from students who successfully prepared for their {exam.title} using DrNCards.
// // // // // // //             </p>
            
// // // // // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
// // // // // // //               {exam.testimonials.map((testimonial, index) => (
// // // // // // //                 <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
// // // // // // //                   <div className="flex items-center mb-4">
// // // // // // //                     <div 
// // // // // // //                       className="h-12 w-12 rounded-full flex items-center justify-center mr-3 text-white font-bold text-lg"
// // // // // // //                       style={{ backgroundColor: colors.primary }}
// // // // // // //                     >
// // // // // // //                       {testimonial.name.split(" ")[0][0]}{testimonial.name.split(" ")[1][0]}
// // // // // // //                     </div>
// // // // // // //                     <div>
// // // // // // //                       <p className="font-medium">{testimonial.name}</p>
// // // // // // //                       <p className="text-sm text-gray-500">{testimonial.role}</p>
// // // // // // //                     </div>
// // // // // // //                   </div>
                  
// // // // // // //                   <div className="mb-4 flex">
// // // // // // //                     {[...Array(5)].map((_, i) => (
// // // // // // //                       <Star 
// // // // // // //                         key={i} 
// // // // // // //                         className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`}
// // // // // // //                       />
// // // // // // //                     ))}
// // // // // // //                   </div>
                  
// // // // // // //                   <p className="text-gray-700 italic">"{testimonial.content}"</p>
// // // // // // //                 </div>
// // // // // // //               ))}
// // // // // // //             </div>
            
// // // // // // //             <div className="text-center">
// // // // // // //               <Button variant="ghost" className="text-gray-600">
// // // // // // //                 Load More Testimonials
// // // // // // //               </Button>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </TabsContent>
        
// // // // // // //         <TabsContent value="faq" className="mt-0">
// // // // // // //           <div className="max-w-3xl mx-auto">
// // // // // // //             <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
// // // // // // //             <p className="text-gray-700 mb-8">
// // // // // // //               Get answers to common questions about the {exam.title} exam and our preparation materials.
// // // // // // //             </p>
            
// // // // // // //             <div className="space-y-4 mb-8">
// // // // // // //               {exam.faqs.map((faq, index) => (
// // // // // // //                 <div 
// // // // // // //                   key={index} 
// // // // // // //                   className="bg-white rounded-lg border border-gray-200 overflow-hidden"
// // // // // // //                 >
// // // // // // //                   <button
// // // // // // //                     className="w-full p-4 text-left flex justify-between items-center"
// // // // // // //                     onClick={() => toggleFaq(index)}
// // // // // // //                   >
// // // // // // //                     <h3 className="font-medium text-gray-800">{faq.question}</h3>
// // // // // // //                     {openFaqIndex === index ? (
// // // // // // //                       <ChevronUp className="h-5 w-5 text-gray-500" />
// // // // // // //                     ) : (
// // // // // // //                       <ChevronDown className="h-5 w-5 text-gray-500" />
// // // // // // //                     )}
// // // // // // //                   </button>
                  
// // // // // // //                   {openFaqIndex === index && (
// // // // // // //                     <div className="p-4 pt-0 border-t border-gray-100">
// // // // // // //                       <p className="text-gray-700">{faq.answer}</p>
// // // // // // //                     </div>
// // // // // // //                   )}
// // // // // // //                 </div>
// // // // // // //               ))}
// // // // // // //             </div>
            
// // // // // // //             <div className="bg-gray-50 rounded-lg p-6 text-center">
// // // // // // //               <h3 className="text-lg font-medium mb-2">Still have questions?</h3>
// // // // // // //               <p className="text-gray-600 mb-4">
// // // // // // //                 Our support team is here to help with any other questions about the {exam.title}.
// // // // // // //               </p>
// // // // // // //               <Button variant="outline" className="border-gray-300">
// // // // // // //                 Contact Support
// // // // // // //               </Button>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </TabsContent>
// // // // // // //       </Tabs>
      
// // // // // // //       {/* Call-to-action section */}
// // // // // // //       <div 
// // // // // // //         className="rounded-xl p-8 mb-8 relative overflow-hidden"
// // // // // // //         style={{ 
// // // // // // //           backgroundColor: colors.primary,
// // // // // // //           backgroundImage: "linear-gradient(135deg, rgba(0,120,50,1) 0%, rgba(0,90,40,1) 100%)"
// // // // // // //         }}
// // // // // // //       >
// // // // // // //         <div className="relative z-10 text-white text-center max-w-2xl mx-auto">
// // // // // // //           <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to ace your {exam.title}?</h2>
// // // // // // //           <p className="text-lg opacity-90 mb-6">
// // // // // // //             Join thousands of successful students who have prepared with DrNCards.
// // // // // // //           </p>
// // // // // // //           <div className="flex flex-col sm:flex-row justify-center gap-4">
// // // // // // //             <Button 
// // // // // // //               size="lg"
// // // // // // //               className="bg-white text-green-700 hover:bg-gray-100"
// // // // // // //             >
// // // // // // //               Start Free Trial
// // // // // // //             </Button>
// // // // // // //             <Button
// // // // // // //               variant="outline" 
// // // // // // //               size="lg"
// // // // // // //               className="border-white text-white hover:bg-white/10"
// // // // // // //             >
// // // // // // //               View Pricing
// // // // // // //             </Button>
// // // // // // //           </div>
// // // // // // //         </div>
        
// // // // // // //         {/* Decorative elements */}
// // // // // // //         <div className="absolute right-0 bottom-0 opacity-10">
// // // // // // //           <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // // // //             <path d="M120 240C186.274 240 240 186.274 240 120C240 53.7258 186.274 0 120 0C53.7258 0 0 53.7258 0 120C0 186.274 53.7258 240 120 240Z" fill="white"/>
// // // // // // //             <path d="M120 200C164.183 200 200 164.183 200 120C200 75.8172 164.183 40 120 40C75.8172 40 40 75.8172 40 120C40 164.183 75.8172 200 120 200Z" stroke="white" strokeWidth="4"/>
// // // // // // //             <path d="M120 170C147.614 170 170 147.614 170 120C170 92.3858 147.614 70 120 70C92.3858 70 70 92.3858 70 120C70 147.614 92.3858 170 120 170Z" stroke="white" strokeWidth="4"/>
// // // // // // //           </svg>
// // // // // // //         </div>
// // // // // // //       </div>
      
// // // // // // //       {/* Related exams */}
// // // // // // //       <div className="mb-16">
// // // // // // //         <h2 className="text-xl font-bold mb-6">Related Medical Exams</h2>
// // // // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
// // // // // // //           {Object.values(examsDatabase)
// // // // // // //             .filter(relatedExam => relatedExam.id !== examid)
// // // // // // //             .slice(0, 3)
// // // // // // //             .map(relatedExam => (
// // // // // // //               <Link href={`/exams/${relatedExam.id}`} key={relatedExam.id}>
// // // // // // //                 <div className="bg-white rounded-lg border border-gray-100 p-4 hover:shadow-md transition-shadow">
// // // // // // //                   <p className="font-medium mb-1" style={{ color: colors.primary }}>{relatedExam.title}</p>
// // // // // // //                   <p className="text-sm text-gray-500 mb-3">{relatedExam.category}</p>
// // // // // // //                   <div className="flex items-center text-sm text-gray-600">
// // // // // // //                     <Clock className="h-4 w-4 mr-1" />
// // // // // // //                     <span>{relatedExam.averageTime}</span>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               </Link>
// // // // // // //             ))}
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ExamDetailPage;
// // // // // // "use client";

// // // // // // import { useEffect, useState } from "react";
// // // // // // import Header from "@/components/Header";
// // // // // // import { ArrowLeft, BookOpen, FileText } from "lucide-react";
// // // // // // import Link from "next/link";
// // // // // // import { Button } from "@/components/ui/button";

// // // // // // // Simple mapping of exam IDs to titles
// // // // // // const examTitles = {
// // // // // //   "usmle-step1": "USMLE Step 1",
// // // // // //   "nclex-rn": "NCLEX-RN",
// // // // // //   "mcat": "MCAT",
// // // // // //   "pance": "PANCE",
// // // // // //   "naplex": "NAPLEX",
// // // // // //   "comlex-level-1": "COMLEX Level 1"
// // // // // // };

// // // // // // export default function ExamPage({ params }) {
// // // // // //   const { examid } = params;
// // // // // //   const [examTitle, setExamTitle] = useState("");
  
// // // // // //   useEffect(() => {
// // // // // //     // Set the exam title based on the ID or use a fallback
// // // // // //     setExamTitle(examTitles[examid] || `Exam ${examid}`);
// // // // // //   }, [examid]);

// // // // // //   return (
// // // // // //     <div className="min-h-screen flex flex-col bg-white">
// // // // // //       <Header />
      
// // // // // //       <main className="flex-grow max-w-6xl mx-auto px-4 py-8 w-full">
// // // // // //         <div className="mb-6">
// // // // // //           <Link href="/exams" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-800">
// // // // // //             <ArrowLeft className="w-4 h-4 mr-1" />
// // // // // //             Back to Exams
// // // // // //           </Link>
// // // // // //         </div>
        
// // // // // //         <h1 className="text-3xl font-bold mb-6">{examTitle}</h1>
        
// // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
// // // // // //           <Link href={`/exams/${examid}/mcqs`}>
// // // // // //             <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow transition-all flex items-center">
// // // // // //               <div className="bg-[#E6F4EA] rounded-full p-3 mr-4">
// // // // // //                 <BookOpen className="h-6 w-6 text-[#007832]" />
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <h2 className="text-lg font-medium mb-1">Practice MCQs</h2>
// // // // // //                 <p className="text-sm text-gray-600">Test your knowledge with multiple choice questions</p>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </Link>
          
// // // // // //           <Link href={`/exams/${examid}/content`}>
// // // // // //             <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow transition-all flex items-center">
// // // // // //               <div className="bg-[#E6F4EA] rounded-full p-3 mr-4">
// // // // // //                 <FileText className="h-6 w-6 text-[#007832]" />
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <h2 className="text-lg font-medium mb-1">Study Content</h2>
// // // // // //                 <p className="text-sm text-gray-600">Review comprehensive study materials</p>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </Link>
// // // // // //         </div>
        
// // // // // //         {/* Placeholder for additional content */}
// // // // // //         <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-100">
// // // // // //           <p className="text-gray-500 mb-4">Additional exam information will be available soon</p>
// // // // // //           <Button 
// // // // // //             variant="outline"
// // // // // //             className="text-[#007832] border-[#007832]"
// // // // // //           >
// // // // // //             Join Waitlist
// // // // // //           </Button>
// // // // // //         </div>
// // // // // //       </main>
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // "use client";

// // // // // import { useEffect, useState } from "react";
// // // // // import Header from "@/components/Header";
// // // // // import { ArrowLeft, FileText } from "lucide-react";
// // // // // import Link from "next/link";
// // // // // import { Button } from "@/components/ui/button";

// // // // // // Simple mapping of exam IDs to titles
// // // // // const examTitles = {
// // // // //   "usmle-step1": "USMLE Step 1",
// // // // //   "nclex-rn": "NCLEX-RN",
// // // // //   "mcat": "MCAT",
// // // // //   "pance": "PANCE",
// // // // //   "naplex": "NAPLEX",
// // // // //   "comlex-level-1": "COMLEX Level 1"
// // // // // };

// // // // // export default function ExamPage({ params }) {
// // // // //   const { examid } = params;
// // // // //   const [examTitle, setExamTitle] = useState("");
  
// // // // //   useEffect(() => {
// // // // //     // Set the exam title based on the ID or use a fallback
// // // // //     setExamTitle(examTitles[examid] || `Exam ${examid}`);
// // // // //   }, [examid]);

// // // // //   return (
// // // // //     <div className="min-h-screen flex flex-col bg-white">
// // // // //       <Header />
      
// // // // //       <main className="flex-grow max-w-6xl mx-auto px-4 py-8 w-full">
// // // // //         <div className="mb-6">
// // // // //           <Link href="/exams" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-800">
// // // // //             <ArrowLeft className="w-4 h-4 mr-1" />
// // // // //             Back to Exams
// // // // //           </Link>
// // // // //         </div>
        
// // // // //         <h1 className="text-3xl font-bold mb-6">{examTitle}</h1>
        
// // // // //         {/* Content Link */}
// // // // //         <div className="mb-8">
// // // // //           <Link href={`/exams/${examid}/content`}>
// // // // //             <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow transition-all flex items-center">
// // // // //               <div className="bg-[#E6F4EA] rounded-full p-3 mr-4">
// // // // //                 <FileText className="h-6 w-6 text-[#007832]" />
// // // // //               </div>
// // // // //               <div>
// // // // //                 <h2 className="text-lg font-medium mb-1">Study Content</h2>
// // // // //                 <p className="text-sm text-gray-600">Review comprehensive study materials and practice questions</p>
// // // // //               </div>
// // // // //             </div>
// // // // //           </Link>
// // // // //         </div>
        
// // // // //         {/* Exam Info */}
// // // // //         <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden mb-8">
// // // // //           <div className="p-6">
// // // // //             <h2 className="text-xl font-medium mb-4">About this Exam</h2>
            
// // // // //             <div className="space-y-4">
// // // // //               <p className="text-gray-700">
// // // // //                 The {examTitle} is designed to assess your knowledge and understanding of key medical concepts.
// // // // //                 This comprehensive exam covers essential topics needed for success in your medical career.
// // // // //               </p>
              
// // // // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
// // // // //                 <div className="bg-gray-50 p-4 rounded-lg">
// // // // //                   <h3 className="text-sm font-medium text-gray-500 mb-1">Format</h3>
// // // // //                   <p className="text-gray-800">Multiple-choice questions</p>
// // // // //                 </div>
                
// // // // //                 <div className="bg-gray-50 p-4 rounded-lg">
// // // // //                   <h3 className="text-sm font-medium text-gray-500 mb-1">Duration</h3>
// // // // //                   <p className="text-gray-800">Variable based on section</p>
// // // // //                 </div>
                
// // // // //                 <div className="bg-gray-50 p-4 rounded-lg">
// // // // //                   <h3 className="text-sm font-medium text-gray-500 mb-1">Difficulty</h3>
// // // // //                   <p className="text-gray-800">Moderate to Challenging</p>
// // // // //                 </div>
                
// // // // //                 <div className="bg-gray-50 p-4 rounded-lg">
// // // // //                   <h3 className="text-sm font-medium text-gray-500 mb-1">Updates</h3>
// // // // //                   <p className="text-gray-800">Content updated quarterly</p>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
          
// // // // //           <div className="bg-gray-50 p-6 border-t border-gray-100">
// // // // //             <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
// // // // //               <p className="text-gray-600">Ready to start studying?</p>
// // // // //               <Link href={`/exams/${examid}/content`}>
// // // // //                 <Button className="bg-[#007832] hover:bg-[#006128]">
// // // // //                   Begin Practice Questions
// // // // //                 </Button>
// // // // //               </Link>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </main>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // "use client";

// // // // import { useEffect, useState } from "react";
// // // // import Header from "@/components/Header";
// // // // import { ArrowLeft, FileText, Clock, ListChecks, Calendar, CheckCircle } from "lucide-react";
// // // // import Link from "next/link";
// // // // import { Button } from "@/components/ui/button";
// // // // import { Badge } from "@/components/ui/badge";
// // // // import { Progress } from "@/components/ui/progress";

// // // // // Custom color palette
// // // // const colors = {
// // // //   primary: "#007832",
// // // //   background: "#FFFFFF",
// // // //   lightGreen: "#E6F4EA"
// // // // };

// // // // // Mock exam database with detailed information
// // // // const examsDatabase = {
// // // //   "usmle-step1": {
// // // //     id: "usmle-step1",
// // // //     title: "USMLE Step 1",
// // // //     category: "Medical License",
// // // //     description: "The USMLE Step 1 is the first part of the United States Medical Licensing Examination. It assesses whether medical school students or graduates understand and can apply important concepts of the basic sciences to the practice of medicine.",
// // // //     longDescription: "The USMLE Step 1 exam is a crucial milestone for medical students, serving as a comprehensive assessment of basic science knowledge and its application to clinical medicine. The exam focuses on principles of basic sciences, with an emphasis on mechanisms of health, disease, and modes of therapy.",
// // // //     questionCount: 280,
// // // //     examDate: "Flexible scheduling",
// // // //     averageTime: "8 hours",
// // // //     popularity: "High",
// // // //     difficulty: "Hard",
// // // //     passingScore: 196,
// // // //     nationalPassRate: "91%",
// // // //     topics: [
// // // //       { name: "Anatomy", percentage: 12 },
// // // //       { name: "Biochemistry", percentage: 15 },
// // // //       { name: "Behavioral Sciences", percentage: 10 },
// // // //       { name: "Microbiology", percentage: 13 }
// // // //     ]
// // // //   },
// // // //   "nclex-rn": {
// // // //     id: "nclex-rn",
// // // //     title: "NCLEX-RN",
// // // //     category: "Nursing",
// // // //     description: "The National Council Licensure Examination for Registered Nurses (NCLEX-RN) measures the competencies needed to perform safely and effectively as a newly licensed, entry-level registered nurse.",
// // // //     longDescription: "The NCLEX-RN is a computer-adaptive test (CAT) that is a crucial step in obtaining licensure as a registered nurse. The exam evaluates the application of nursing knowledge, skills, and abilities essential for safe and effective entry-level nursing practice.",
// // // //     questionCount: "75-265 variable",
// // // //     examDate: "Year-round testing",
// // // //     averageTime: "6 hours (maximum)",
// // // //     popularity: "Very High",
// // // //     difficulty: "Medium",
// // // //     passingScore: "Variable (determined by logit)",
// // // //     nationalPassRate: "86.5%",
// // // //     topics: [
// // // //       { name: "Safety and Infection Control", percentage: 12 },
// // // //       { name: "Health Promotion", percentage: 9 },
// // // //       { name: "Psychosocial Integrity", percentage: 10 },
// // // //       { name: "Basic Care and Comfort", percentage: 9 }
// // // //     ]
// // // //   },
// // // //   // Default fallback exam
// // // //   "default": {
// // // //     id: "default",
// // // //     title: "Medical Examination",
// // // //     category: "Medical",
// // // //     description: "Comprehensive assessment of medical knowledge and skills.",
// // // //     longDescription: "This examination evaluates your understanding of core medical concepts and your ability to apply clinical reasoning to various scenarios.",
// // // //     questionCount: "200",
// // // //     examDate: "Flexible",
// // // //     averageTime: "4 hours",
// // // //     popularity: "Medium",
// // // //     difficulty: "Medium",
// // // //     passingScore: "70%",
// // // //     nationalPassRate: "85%",
// // // //     topics: [
// // // //       { name: "General Medicine", percentage: 25 },
// // // //       { name: "Clinical Skills", percentage: 25 },
// // // //       { name: "Medical Ethics", percentage: 25 },
// // // //       { name: "Patient Care", percentage: 25 }
// // // //     ]
// // // //   }
// // // // };

// // // // export default function ExamPage({ params }) {
// // // //   const { examid } = params;
// // // //   const [exam, setExam] = useState(null);
  
// // // //   useEffect(() => {
// // // //     // Get exam data based on ID or use default
// // // //     setExam(examsDatabase[examid] || examsDatabase.default);
// // // //   }, [examid]);

// // // //   if (!exam) {
// // // //     return (
// // // //       <div className="min-h-screen flex flex-col bg-white">
// // // //         <Header />
// // // //         <main className="flex-grow flex items-center justify-center">
// // // //           <div className="text-center p-8">
// // // //             <h1 className="text-2xl font-bold mb-4">Loading...</h1>
// // // //           </div>
// // // //         </main>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen flex flex-col bg-white">
// // // //       <Header />
      
// // // //       <main className="flex-grow max-w-6xl mx-auto px-4 py-8 w-full">
// // // //         {/* Breadcrumb navigation */}
// // // //         <div className="mb-6">
// // // //           <Link href="/exams" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-800">
// // // //             <ArrowLeft className="w-4 h-4 mr-1" />
// // // //             Back to Exams
// // // //           </Link>
// // // //         </div>
        
// // // //         {/* Exam header */}
// // // //         <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
// // // //           <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
// // // //             <div>
// // // //               <h1 className="text-3xl font-bold mb-2" style={{ color: colors.primary }}>{exam.title}</h1>
// // // //               <p className="text-gray-500 mb-4">{exam.category}</p>
// // // //               <p className="text-gray-700 mb-6 max-w-3xl">{exam.description}</p>
              
// // // //               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
// // // //                 <div className="flex items-start">
// // // //                   <Clock className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
// // // //                   <div>
// // // //                     <p className="text-sm font-medium text-gray-700">Duration</p>
// // // //                     <p className="text-sm text-gray-600">{exam.averageTime}</p>
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="flex items-start">
// // // //                   <ListChecks className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
// // // //                   <div>
// // // //                     <p className="text-sm font-medium text-gray-700">Questions</p>
// // // //                     <p className="text-sm text-gray-600">{exam.questionCount}</p>
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="flex items-start">
// // // //                   <Calendar className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
// // // //                   <div>
// // // //                     <p className="text-sm font-medium text-gray-700">Exam Dates</p>
// // // //                     <p className="text-sm text-gray-600">{exam.examDate}</p>
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="flex items-start">
// // // //                   <CheckCircle className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
// // // //                   <div>
// // // //                     <p className="text-sm font-medium text-gray-700">Pass Rate</p>
// // // //                     <p className="text-sm text-gray-600">{exam.nationalPassRate}</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
            
// // // //             <div className="w-full md:w-auto">
// // // //               <Link href={`/exams/${examid}/content`}>
// // // //                 <Button 
// // // //                   size="lg"
// // // //                   className="w-full"
// // // //                   style={{ backgroundColor: colors.primary }}
// // // //                 >
// // // //                   <FileText className="mr-2 h-5 w-5" />
// // // //                   Start Studying
// // // //                 </Button>
// // // //               </Link>
// // // //             </div>
// // // //           </div>
// // // //         </div>
        
// // // //         {/* Exam details */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
// // // //           <div className="md:col-span-2">
// // // //             <h2 className="text-2xl font-bold mb-4">About this Exam</h2>
// // // //             <p className="text-gray-700 mb-6 leading-relaxed">{exam.longDescription}</p>
            
// // // //             <div className="bg-gray-50 rounded-lg p-6 mb-8">
// // // //               <h3 className="text-lg font-semibold mb-4">Passing Score Information</h3>
// // // //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // // //                 <div>
// // // //                   <p className="text-sm text-gray-500 mb-1">Passing Score</p>
// // // //                   <p className="text-lg font-medium">{exam.passingScore}</p>
// // // //                 </div>
// // // //                 <div>
// // // //                   <p className="text-sm text-gray-500 mb-1">National Pass Rate</p>
// // // //                   <p className="text-lg font-medium">{exam.nationalPassRate}</p>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
            
// // // //             {/* Topics */}
// // // //             <div>
// // // //               <h3 className="text-lg font-semibold mb-4">Main Topic Areas</h3>
// // // //               <div className="space-y-4">
// // // //                 {exam.topics.map((topic, index) => (
// // // //                   <div key={index}>
// // // //                     <div className="flex justify-between items-center mb-1">
// // // //                       <span className="font-medium">{topic.name}</span>
// // // //                       <span className="text-sm text-gray-600">{topic.percentage}%</span>
// // // //                     </div>
// // // //                     <Progress 
// // // //                       value={topic.percentage}
// // // //                       className="h-2 bg-gray-100"
// // // //                       indicatorClassName="bg-emerald-500"
// // // //                     />
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //           </div>
          
// // // //           <div>
// // // //             <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-fit sticky top-20">
// // // //               <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
              
// // // //               <div className="space-y-6">
// // // //                 <div>
// // // //                   <div className="flex justify-between items-center mb-2">
// // // //                     <span className="text-sm text-gray-600">Difficulty</span>
// // // //                     <Badge
// // // //                       className={`${
// // // //                         exam.difficulty === "Hard" ? "bg-red-100 text-red-800" :
// // // //                         exam.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800" :
// // // //                         "bg-green-100 text-green-800"
// // // //                       }`}
// // // //                     >
// // // //                       {exam.difficulty}
// // // //                     </Badge>
// // // //                   </div>
// // // //                   <Progress 
// // // //                     value={
// // // //                       exam.difficulty === "Hard" ? 90 :
// // // //                       exam.difficulty === "Medium" ? 60 : 30
// // // //                     }
// // // //                     className="h-2 bg-gray-100"
// // // //                     indicatorClassName={
// // // //                       exam.difficulty === "Hard" ? "bg-red-500" :
// // // //                       exam.difficulty === "Medium" ? "bg-yellow-500" : "bg-green-500"
// // // //                     }
// // // //                   />
// // // //                 </div>
                
// // // //                 <div>
// // // //                   <div className="flex justify-between items-center mb-2">
// // // //                     <span className="text-sm text-gray-600">Popularity</span>
// // // //                     <span className="text-sm font-medium">{exam.popularity}</span>
// // // //                   </div>
// // // //                   <Progress 
// // // //                     value={
// // // //                       exam.popularity === "Very High" ? 95 :
// // // //                       exam.popularity === "High" ? 75 :
// // // //                       exam.popularity === "Medium" ? 50 : 25
// // // //                     }
// // // //                     className="h-2 bg-gray-100"
// // // //                     indicatorClassName="bg-blue-500"
// // // //                   />
// // // //                 </div>
                
// // // //                 <div className="pt-4 border-t border-gray-100">
// // // //                   <h4 className="text-sm font-medium text-gray-700 mb-3">Who should take this exam?</h4>
// // // //                   <p className="text-sm text-gray-600 mb-4">
// // // //                     {exam.id === "usmle-step1" 
// // // //                       ? "Medical students who have completed their basic science coursework and are preparing for clinical rotations."
// // // //                       : exam.id === "nclex-rn"
// // // //                       ? "Nursing students who have completed their nursing program and are ready to obtain their RN license."
// // // //                       : "Healthcare professionals seeking to validate their knowledge and skills in this area."}
// // // //                   </p>
// // // //                   <Link href={`/exams/${examid}/content`}>
// // // //                     <Button 
// // // //                       className="w-full"
// // // //                       style={{ backgroundColor: colors.primary }}
// // // //                     >
// // // //                       Begin Studying
// // // //                     </Button>
// // // //                   </Link>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </main>
// // // //     </div>
// // // //   );
// // // // }
// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import Header from "@/components/Header";
// // // import { ArrowLeft, FileText, Clock, ListChecks, Calendar, CheckCircle } from "lucide-react";
// // // import Link from "next/link";
// // // import { Button } from "@/components/ui/button";
// // // import { Badge } from "@/components/ui/badge";
// // // import { Progress } from "@/components/ui/progress";
// // // import { createClient } from '@supabase/supabase-js';

// // // // Initialize Supabase client
// // // const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// // // const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
// // // const supabase = createClient(supabaseUrl, supabaseAnonKey);

// // // // Custom color palette
// // // const colors = {
// // //   primary: "#000000",
// // //   background: "#FFFFFF",
// // //   lightGreen: "#E6F4EA"
// // // };

// // // export default function ExamDetailPage({ params }) {
// // //   const { examid } = params;
// // //   const [exam, setExam] = useState(null);
// // //   const [topics, setTopics] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
  
// // //   useEffect(() => {
// // //     const fetchExamDetails = async () => {
// // //       try {
// // //         setLoading(true);
        
// // //         // Fetch exam details
// // //         const { data: examData, error: examError } = await supabase
// // //           .from('exams')
// // //           .select(`
// // //             id,
// // //             name,
// // //             category,
// // //             description,
// // //             long_description,
// // //             passing_score,
// // //             national_pass_rate,
// // //             exam_date,
// // //             average_time,
// // //             popularity,
// // //             difficulty,
// // //             created_at,
// // //             updated_at
// // //           `)
// // //           .eq('slug', examid)
// // //           .single();
          
// // //         if (examError) throw examError;
        
// // //         // Fetch topics for this exam
// // //         const { data: topicsData, error: topicsError } = await supabase
// // //           .from('exam_topics')
// // //           .select('*')
// // //           .eq('exam_id', examData.id)
// // //           .order('percentage', { ascending: false });
          
// // //         if (topicsError) throw topicsError;
        
// // //         // Get question count
// // //         const { count: questionCount, error: countError } = await supabase
// // //           .from('questions')
// // //           .select('id', { count: 'exact', head: true })
// // //           .eq('exam_id', examData.id)
// // //           .eq('is_active', true);
          
// // //         if (countError) throw countError;
        
// // //         // Format the exam data
// // //         const formattedExam = {
// // //           ...examData,
// // //           questionCount: questionCount || 'N/A',
// // //           longDescription: examData.long_description || examData.description,
// // //           passingScore: examData.passing_score || 'Variable',
// // //           nationalPassRate: examData.national_pass_rate || 'N/A',
// // //           examDate: examData.exam_date || 'Flexible scheduling',
// // //           averageTime: examData.average_time || 'Variable',
// // //           popularity: examData.popularity || 'Medium',
// // //           difficulty: examData.difficulty || 'Medium'
// // //         };
        
// // //         setExam(formattedExam);
// // //         setTopics(topicsData || []);
// // //       } catch (err) {
// // //         console.error('Error fetching exam details:', err);
// // //         setError('Failed to load exam information.');
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchExamDetails();
// // //   }, [examid]);

// // //   if (loading) {
// // //     return (
// // //       <div className="min-h-screen flex flex-col bg-white">
// // //         <Header />
// // //         <main className="flex-grow max-w-6xl mx-auto px-4 py-8 w-full">
// // //           <div className="animate-pulse space-y-6">
// // //             <div className="h-6 w-48 bg-zinc-200 rounded"></div>
// // //             <div className="h-10 w-3/4 bg-zinc-200 rounded mb-2"></div>
// // //             <div className="h-6 w-1/4 bg-zinc-200 rounded mb-8"></div>
// // //             <div className="h-32 bg-zinc-100 rounded-lg mb-8"></div>
// // //             <div className="grid grid-cols-4 gap-4">
// // //               {[1, 2, 3, 4].map(i => (
// // //                 <div key={i} className="h-20 bg-zinc-100 rounded"></div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </main>
// // //       </div>
// // //     );
// // //   }

// // //   if (error) {
// // //     return (
// // //       <div className="min-h-screen flex flex-col bg-white">
// // //         <Header />
// // //         <main className="flex-grow flex items-center justify-center">
// // //           <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200 max-w-md mx-auto text-center">
// // //             <div className="text-3xl mb-4">😕</div>
// // //             <h2 className="text-xl font-semibold mb-2">Error</h2>
// // //             <p className="text-zinc-600 mb-4">{error}</p>
// // //             <Button onClick={() => window.location.reload()} className="bg-black hover:bg-zinc-800">
// // //               Try Again
// // //             </Button>
// // //           </div>
// // //         </main>
// // //       </div>
// // //     );
// // //   }

// // //   if (!exam) {
// // //     return (
// // //       <div className="min-h-screen flex flex-col bg-white">
// // //         <Header />
// // //         <main className="flex-grow flex items-center justify-center">
// // //           <div className="text-center p-8">
// // //             <h1 className="text-2xl font-bold mb-4">Exam Not Found</h1>
// // //             <p className="mb-6">The exam you're looking for doesn't exist or may have been removed.</p>
// // //             <Link href="/exams">
// // //               <Button className="bg-black hover:bg-zinc-800">
// // //                 <ArrowLeft className="mr-2 h-4 w-4" />
// // //                 Back to All Exams
// // //               </Button>
// // //             </Link>
// // //           </div>
// // //         </main>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen flex flex-col bg-white">
// // //       <Header />
      
// // //       <main className="flex-grow max-w-6xl mx-auto px-4 py-8 w-full">
// // //         {/* Breadcrumb navigation */}
// // //         <div className="mb-6">
// // //           <Link href="/exams" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-800">
// // //             <ArrowLeft className="w-4 h-4 mr-1" />
// // //             Back to Exams
// // //           </Link>
// // //         </div>
        
// // //         {/* Exam header */}
// // //         <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
// // //           <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
// // //             <div>
// // //               <h1 className="text-3xl font-bold mb-2" style={{ color: colors.primary }}>{exam.name}</h1>
// // //               <p className="text-gray-500 mb-4">{exam.category}</p>
// // //               <p className="text-gray-700 mb-6 max-w-3xl">{exam.description}</p>
              
// // //               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
// // //                 <div className="flex items-start">
// // //                   <Clock className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
// // //                   <div>
// // //                     <p className="text-sm font-medium text-gray-700">Duration</p>
// // //                     <p className="text-sm text-gray-600">{exam.averageTime}</p>
// // //                   </div>
// // //                 </div>
// // //                 <div className="flex items-start">
// // //                   <ListChecks className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
// // //                   <div>
// // //                     <p className="text-sm font-medium text-gray-700">Questions</p>
// // //                     <p className="text-sm text-gray-600">{exam.questionCount}</p>
// // //                   </div>
// // //                 </div>
// // //                 <div className="flex items-start">
// // //                   <Calendar className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
// // //                   <div>
// // //                     <p className="text-sm font-medium text-gray-700">Exam Dates</p>
// // //                     <p className="text-sm text-gray-600">{exam.examDate}</p>
// // //                   </div>
// // //                 </div>
// // //                 <div className="flex items-start">
// // //                   <CheckCircle className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
// // //                   <div>
// // //                     <p className="text-sm font-medium text-gray-700">Pass Rate</p>
// // //                     <p className="text-sm text-gray-600">{exam.nationalPassRate}</p>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
            
// // //             <div className="w-full md:w-auto">
// // //               <Link href={`/exams/${examid}/content`}>
// // //                 <Button 
// // //                   size="lg"
// // //                   className="w-full bg-black hover:bg-zinc-800"
// // //                 >
// // //                   <FileText className="mr-2 h-5 w-5" />
// // //                   Start Studying
// // //                 </Button>
// // //               </Link>
// // //             </div>
// // //           </div>
// // //         </div>
        
// // //         {/* Exam details */}
// // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
// // //           <div className="md:col-span-2">
// // //             <h2 className="text-2xl font-bold mb-4">About this Exam</h2>
// // //             <p className="text-gray-700 mb-6 leading-relaxed">{exam.longDescription}</p>
            
// // //             <div className="bg-gray-50 rounded-lg p-6 mb-8">
// // //               <h3 className="text-lg font-semibold mb-4">Passing Score Information</h3>
// // //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // //                 <div>
// // //                   <p className="text-sm text-gray-500 mb-1">Passing Score</p>
// // //                   <p className="text-lg font-medium">{exam.passingScore}</p>
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-sm text-gray-500 mb-1">National Pass Rate</p>
// // //                   <p className="text-lg font-medium">{exam.nationalPassRate}</p>
// // //                 </div>
// // //               </div>
// // //             </div>
            
// // //             {/* Topics */}
// // //             {topics.length > 0 && (
// // //               <div>
// // //                 <h3 className="text-lg font-semibold mb-4">Main Topic Areas</h3>
// // //                 <div className="space-y-4">
// // //                   {topics.map((topic, index) => (
// // //                     <div key={index}>
// // //                       <div className="flex justify-between items-center mb-1">
// // //                         <span className="font-medium">{topic.name}</span>
// // //                         <span className="text-sm text-gray-600">{topic.percentage}%</span>
// // //                       </div>
// // //                       <Progress 
// // //                         value={topic.percentage}
// // //                         className="h-2 bg-gray-100"
// // //                         indicatorClassName="bg-emerald-500"
// // //                       />
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             )}
// // //           </div>
          
// // //           <div>
// // //             <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-fit sticky top-20">
// // //               <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
              
// // //               <div className="space-y-6">
// // //                 <div>
// // //                   <div className="flex justify-between items-center mb-2">
// // //                     <span className="text-sm text-gray-600">Difficulty</span>
// // //                     <Badge
// // //                       className={`${
// // //                         exam.difficulty === "Hard" ? "bg-red-100 text-red-800" :
// // //                         exam.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800" :
// // //                         "bg-green-100 text-green-800"
// // //                       }`}
// // //                     >
// // //                       {exam.difficulty}
// // //                     </Badge>
// // //                   </div>
// // //                   <Progress 
// // //                     value={
// // //                       exam.difficulty === "Hard" ? 90 :
// // //                       exam.difficulty === "Medium" ? 60 : 30
// // //                     }
// // //                     className="h-2 bg-gray-100"
// // //                     indicatorClassName={
// // //                       exam.difficulty === "Hard" ? "bg-red-500" :
// // //                       exam.difficulty === "Medium" ? "bg-yellow-500" : "bg-green-500"
// // //                     }
// // //                   />
// // //                 </div>
                
// // //                 <div>
// // //                   <div className="flex justify-between items-center mb-2">
// // //                     <span className="text-sm text-gray-600">Popularity</span>
// // //                     <span className="text-sm font-medium">{exam.popularity}</span>
// // //                   </div>
// // //                   <Progress 
// // //                     value={
// // //                       exam.popularity === "Very High" ? 95 :
// // //                       exam.popularity === "High" ? 75 :
// // //                       exam.popularity === "Medium" ? 50 : 25
// // //                     }
// // //                     className="h-2 bg-gray-100"
// // //                     indicatorClassName="bg-blue-500"
// // //                   />
// // //                 </div>
                
// // //                 <div className="pt-4 border-t border-gray-100">
// // //                   <h4 className="text-sm font-medium text-gray-700 mb-3">Who should take this exam?</h4>
// // //                   <p className="text-sm text-gray-600 mb-4">
// // //                     Healthcare professionals seeking to validate their knowledge and skills in this area.
// // //                   </p>
// // //                   <Link href={`/exams/${examid}/content`}>
// // //                     <Button 
// // //                       className="w-full bg-black hover:bg-zinc-800"
// // //                     >
// // //                       Begin Studying
// // //                     </Button>
// // //                   </Link>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </main>
// // //     </div>
// // //   );
// // // }

// // "use client";

// // import { useEffect, useState } from "react";
// // import Header from "@/components/Header";
// // import { ArrowLeft, FileText, Clock, ListChecks, Calendar, CheckCircle } from "lucide-react";
// // import Link from "next/link";
// // import { Button } from "@/components/ui/button";
// // import { Badge } from "@/components/ui/badge";
// // import { Progress } from "@/components/ui/progress";
// // import { createClient } from '@supabase/supabase-js';

// // // Initialize Supabase client
// // const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// // const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
// // const supabase = createClient(supabaseUrl, supabaseAnonKey);

// // // Custom color palette
// // const colors = {
// //   primary: "#000000",
// //   background: "#FFFFFF",
// //   lightGreen: "#E6F4EA"
// // };

// // export default function ExamDetailPage({ params }) {
// //   const { examid } = params;
// //   const [exam, setExam] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
  
// //   useEffect(() => {
// //     const fetchExamDetails = async () => {
// //       try {
// //         setLoading(true);
        
// //         // Simplified query to avoid 400 errors
// //         const { data, error } = await supabase
// //           .from('exams')
// //           .select('id, name, category, description')
// //           .eq('slug', examid)
// //           .single();
          
// //         if (error) throw error;
        
// //         // Format the exam data with default values
// //         const formattedExam = {
// //           ...data,
// //           longDescription: data.description,
// //           questionCount: 'N/A',
// //           passingScore: 'Variable',
// //           nationalPassRate: '85%',
// //           examDate: 'Flexible scheduling',
// //           averageTime: 'Variable',
// //           popularity: 'Medium',
// //           difficulty: 'Medium',
// //           topics: [
// //             { name: "General Medicine", percentage: 25 },
// //             { name: "Clinical Skills", percentage: 25 },
// //             { name: "Medical Ethics", percentage: 25 },
// //             { name: "Patient Care", percentage: 25 }
// //           ]
// //         };
        
// //         setExam(formattedExam);
// //       } catch (err) {
// //         console.error('Error fetching exam details:', err);
// //         setError('Failed to load exam information.');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchExamDetails();
// //   }, [examid]);

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen flex flex-col bg-white">
// //         <Header />
// //         <main className="flex-grow max-w-6xl mx-auto px-4 py-8 w-full">
// //           <div className="animate-pulse space-y-6">
// //             <div className="h-6 w-48 bg-zinc-200 rounded"></div>
// //             <div className="h-10 w-3/4 bg-zinc-200 rounded mb-2"></div>
// //             <div className="h-6 w-1/4 bg-zinc-200 rounded mb-8"></div>
// //             <div className="h-32 bg-zinc-100 rounded-lg mb-8"></div>
// //             <div className="grid grid-cols-4 gap-4">
// //               {[1, 2, 3, 4].map(i => (
// //                 <div key={i} className="h-20 bg-zinc-100 rounded"></div>
// //               ))}
// //             </div>
// //           </div>
// //         </main>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="min-h-screen flex flex-col bg-white">
// //         <Header />
// //         <main className="flex-grow flex items-center justify-center">
// //           <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200 max-w-md mx-auto text-center">
// //             <div className="text-3xl mb-4">😕</div>
// //             <h2 className="text-xl font-semibold mb-2">Error</h2>
// //             <p className="text-zinc-600 mb-4">{error}</p>
// //             <Link href="/exams">
// //               <Button className="bg-black hover:bg-zinc-800">
// //                 Back to Exams
// //               </Button>
// //             </Link>
// //           </div>
// //         </main>
// //       </div>
// //     );
// //   }

// //   if (!exam) {
// //     return (
// //       <div className="min-h-screen flex flex-col bg-white">
// //         <Header />
// //         <main className="flex-grow flex items-center justify-center">
// //           <div className="text-center p-8">
// //             <h1 className="text-2xl font-bold mb-4">Exam Not Found</h1>
// //             <p className="mb-6">The exam you're looking for doesn't exist or may have been removed.</p>
// //             <Link href="/exams">
// //               <Button className="bg-black hover:bg-zinc-800">
// //                 <ArrowLeft className="mr-2 h-4 w-4" />
// //                 Back to All Exams
// //               </Button>
// //             </Link>
// //           </div>
// //         </main>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen flex flex-col bg-white">
// //       <Header />
      
// //       <main className="flex-grow max-w-6xl mx-auto px-4 py-8 w-full">
// //         {/* Breadcrumb navigation */}
// //         <div className="mb-6">
// //           <Link href="/exams" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-800">
// //             <ArrowLeft className="w-4 h-4 mr-1" />
// //             Back to Exams
// //           </Link>
// //         </div>
        
// //         {/* Exam header */}
// //         <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
// //           <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
// //             <div>
// //               <h1 className="text-3xl font-bold mb-2" style={{ color: colors.primary }}>{exam.name}</h1>
// //               <p className="text-gray-500 mb-4">{exam.category}</p>
// //               <p className="text-gray-700 mb-6 max-w-3xl">{exam.description}</p>
              
// //               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
// //                 <div className="flex items-start">
// //                   <Clock className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
// //                   <div>
// //                     <p className="text-sm font-medium text-gray-700">Duration</p>
// //                     <p className="text-sm text-gray-600">{exam.averageTime}</p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-start">
// //                   <ListChecks className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
// //                   <div>
// //                     <p className="text-sm font-medium text-gray-700">Questions</p>
// //                     <p className="text-sm text-gray-600">{exam.questionCount}</p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-start">
// //                   <Calendar className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
// //                   <div>
// //                     <p className="text-sm font-medium text-gray-700">Exam Dates</p>
// //                     <p className="text-sm text-gray-600">{exam.examDate}</p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-start">
// //                   <CheckCircle className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
// //                   <div>
// //                     <p className="text-sm font-medium text-gray-700">Pass Rate</p>
// //                     <p className="text-sm text-gray-600">{exam.nationalPassRate}</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
            
// //             <div className="w-full md:w-auto">
// //               <Link href={`/exams/${examid}/content`}>
// //                 <Button 
// //                   size="lg"
// //                   className="w-full bg-black hover:bg-zinc-800"
// //                 >
// //                   <FileText className="mr-2 h-5 w-5" />
// //                   Start Studying
// //                 </Button>
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
        
// //         {/* Exam details */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
// //           <div className="md:col-span-2">
// //             <h2 className="text-2xl font-bold mb-4">About this Exam</h2>
// //             <p className="text-gray-700 mb-6 leading-relaxed">{exam.longDescription}</p>
            
// //             <div className="bg-gray-50 rounded-lg p-6 mb-8">
// //               <h3 className="text-lg font-semibold mb-4">Passing Score Information</h3>
// //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                 <div>
// //                   <p className="text-sm text-gray-500 mb-1">Passing Score</p>
// //                   <p className="text-lg font-medium">{exam.passingScore}</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500 mb-1">National Pass Rate</p>
// //                   <p className="text-lg font-medium">{exam.nationalPassRate}</p>
// //                 </div>
// //               </div>
// //             </div>
            
// //             {/* Topics */}
// //             <div>
// //               <h3 className="text-lg font-semibold mb-4">Main Topic Areas</h3>
// //               <div className="space-y-4">
// //                 {exam.topics.map((topic, index) => (
// //                   <div key={index}>
// //                     <div className="flex justify-between items-center mb-1">
// //                       <span className="font-medium">{topic.name}</span>
// //                       <span className="text-sm text-gray-600">{topic.percentage}%</span>
// //                     </div>
// //                     <Progress 
// //                       value={topic.percentage}
// //                       className="h-2 bg-gray-100"
// //                       indicatorClassName="bg-emerald-500"
// //                     />
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
          
// //           <div>
// //             <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-fit sticky top-20">
// //               <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
              
// //               <div className="space-y-6">
// //                 <div>
// //                   <div className="flex justify-between items-center mb-2">
// //                     <span className="text-sm text-gray-600">Difficulty</span>
// //                     <Badge
// //                       className={`${
// //                         exam.difficulty === "Hard" ? "bg-red-100 text-red-800" :
// //                         exam.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800" :
// //                         "bg-green-100 text-green-800"
// //                       }`}
// //                     >
// //                       {exam.difficulty}
// //                     </Badge>
// //                   </div>
// //                   <Progress 
// //                     value={
// //                       exam.difficulty === "Hard" ? 90 :
// //                       exam.difficulty === "Medium" ? 60 : 30
// //                     }
// //                     className="h-2 bg-gray-100"
// //                     indicatorClassName={
// //                       exam.difficulty === "Hard" ? "bg-red-500" :
// //                       exam.difficulty === "Medium" ? "bg-yellow-500" : "bg-green-500"
// //                     }
// //                   />
// //                 </div>
                
// //                 <div>
// //                   <div className="flex justify-between items-center mb-2">
// //                     <span className="text-sm text-gray-600">Popularity</span>
// //                     <span className="text-sm font-medium">{exam.popularity}</span>
// //                   </div>
// //                   <Progress 
// //                     value={
// //                       exam.popularity === "Very High" ? 95 :
// //                       exam.popularity === "High" ? 75 :
// //                       exam.popularity === "Medium" ? 50 : 25
// //                     }
// //                     className="h-2 bg-gray-100"
// //                     indicatorClassName="bg-blue-500"
// //                   />
// //                 </div>
                
// //                 <div className="pt-4 border-t border-gray-100">
// //                   <h4 className="text-sm font-medium text-gray-700 mb-3">Who should take this exam?</h4>
// //                   <p className="text-sm text-gray-600 mb-4">
// //                     Healthcare professionals seeking to validate their knowledge and skills in this area.
// //                   </p>
// //                   <Link href={`/exams/${examid}/content`}>
// //                     <Button 
// //                       className="w-full bg-black hover:bg-zinc-800"
// //                     >
// //                       Begin Studying
// //                     </Button>
// //                   </Link>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }
// "use client";

// import { useEffect, useState } from "react";
// import Header from "@/components/Header";
// import { ArrowLeft, FileText, Clock, ListChecks, Calendar, CheckCircle } from "lucide-react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Progress } from "@/components/ui/progress";
// import { createClient } from '@supabase/supabase-js';

// // Initialize Supabase client
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
// const supabase = createClient(supabaseUrl, supabaseAnonKey);

// // Custom color palette
// const colors = {
//   primary: "#000000",
//   background: "#FFFFFF",
//   lightGreen: "#E6F4EA"
// };

// export default function ExamDetailPage({ params }) {
//   const { examid } = params;
//   const [exam, setExam] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   useEffect(() => {
//     const fetchExamDetails = async () => {
//       try {
//         setLoading(true);
        
//         // Simplified query to avoid 400 errors
//         const { data, error } = await supabase
//           .from('exams')
//           .select('id, name, category, description')
//           .eq('slug', examid)
//           .single();
          
//         if (error) throw error;
        
//         // Format the exam data with default values
//         const formattedExam = {
//           ...data,
//           longDescription: data.description,
//           questionCount: 'N/A',
//           passingScore: 'Variable',
//           nationalPassRate: '85%',
//           examDate: 'Flexible scheduling',
//           averageTime: 'Variable',
//           popularity: 'Medium',
//           difficulty: 'Medium',
//           topics: [
//             { name: "General Medicine", percentage: 25 },
//             { name: "Clinical Skills", percentage: 25 },
//             { name: "Medical Ethics", percentage: 25 },
//             { name: "Patient Care", percentage: 25 }
//           ]
//         };
        
//         setExam(formattedExam);
//       } catch (err) {
//         console.error('Error fetching exam details:', err);
//         setError('Failed to load exam information.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchExamDetails();
//   }, [examid]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex flex-col bg-white">
//         <Header />
//         <main className="flex-grow max-w-6xl mx-auto px-4 py-8 w-full">
//           <div className="animate-pulse space-y-6">
//             <div className="h-6 w-48 bg-zinc-200 rounded"></div>
//             <div className="h-10 w-3/4 bg-zinc-200 rounded mb-2"></div>
//             <div className="h-6 w-1/4 bg-zinc-200 rounded mb-8"></div>
//             <div className="h-32 bg-zinc-100 rounded-lg mb-8"></div>
//             <div className="grid grid-cols-4 gap-4">
//               {[1, 2, 3, 4].map(i => (
//                 <div key={i} className="h-20 bg-zinc-100 rounded"></div>
//               ))}
//             </div>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex flex-col bg-white">
//         <Header />
//         <main className="flex-grow flex items-center justify-center">
//           <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200 max-w-md mx-auto text-center">
//             <div className="text-3xl mb-4">😕</div>
//             <h2 className="text-xl font-semibold mb-2">Error</h2>
//             <p className="text-zinc-600 mb-4">{error}</p>
//             <Link href="/exams">
//               <Button className="bg-black hover:bg-zinc-800">
//                 Back to Exams
//               </Button>
//             </Link>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   if (!exam) {
//     return (
//       <div className="min-h-screen flex flex-col bg-white">
//         <Header />
//         <main className="flex-grow flex items-center justify-center">
//           <div className="text-center p-8">
//             <h1 className="text-2xl font-bold mb-4">Exam Not Found</h1>
//             <p className="mb-6">The exam you&apos;re looking for doesn&apos;t exist or may have been removed.</p>
//             <Link href="/exams">
//               <Button className="bg-black hover:bg-zinc-800">
//                 <ArrowLeft className="mr-2 h-4 w-4" />
//                 Back to All Exams
//               </Button>
//             </Link>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex flex-col bg-white">
//       <Header />
      
//       <main className="flex-grow max-w-6xl mx-auto px-4 py-8 w-full">
//         {/* Breadcrumb navigation */}
//         <div className="mb-6">
//           <Link href="/exams" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-800">
//             <ArrowLeft className="w-4 h-4 mr-1" />
//             Back to Exams
//           </Link>
//         </div>
        
//         {/* Exam header */}
//         <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
//           <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
//             <div>
//               <h1 className="text-3xl font-bold mb-2" style={{ color: colors.primary }}>{exam.name}</h1>
//               <p className="text-gray-500 mb-4">{exam.category}</p>
//               <p className="text-gray-700 mb-6 max-w-3xl">{exam.description}</p>
              
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//                 <div className="flex items-start">
//                   <Clock className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
//                   <div>
//                     <p className="text-sm font-medium text-gray-700">Duration</p>
//                     <p className="text-sm text-gray-600">{exam.averageTime}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <ListChecks className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
//                   <div>
//                     <p className="text-sm font-medium text-gray-700">Questions</p>
//                     <p className="text-sm text-gray-600">{exam.questionCount}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <Calendar className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
//                   <div>
//                     <p className="text-sm font-medium text-gray-700">Exam Dates</p>
//                     <p className="text-sm text-gray-600">{exam.examDate}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <CheckCircle className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
//                   <div>
//                     <p className="text-sm font-medium text-gray-700">Pass Rate</p>
//                     <p className="text-sm text-gray-600">{exam.nationalPassRate}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="w-full md:w-auto">
//               <Link href={`/exams/${examid}/content`}>
//                 <Button 
//                   size="lg"
//                   className="w-full bg-black hover:bg-zinc-800"
//                 >
//                   <FileText className="mr-2 h-5 w-5" />
//                   Start Studying
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
        
//         {/* Exam details */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//           <div className="md:col-span-2">
//             <h2 className="text-2xl font-bold mb-4">About this Exam</h2>
//             <p className="text-gray-700 mb-6 leading-relaxed">{exam.longDescription}</p>
            
//             <div className="bg-gray-50 rounded-lg p-6 mb-8">
//               <h3 className="text-lg font-semibold mb-4">Passing Score Information</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <p className="text-sm text-gray-500 mb-1">Passing Score</p>
//                   <p className="text-lg font-medium">{exam.passingScore}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500 mb-1">National Pass Rate</p>
//                   <p className="text-lg font-medium">{exam.nationalPassRate}</p>
//                 </div>
//               </div>
//             </div>
            
//             {/* Topics */}
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Main Topic Areas</h3>
//               <div className="space-y-4">
//                 {exam.topics.map((topic, index) => (
//                   <div key={index}>
//                     <div className="flex justify-between items-center mb-1">
//                       <span className="font-medium">{topic.name}</span>
//                       <span className="text-sm text-gray-600">{topic.percentage}%</span>
//                     </div>
//                     <Progress 
//                       value={topic.percentage}
//                       className="h-2 bg-gray-100"
//                       indicatorClassName="bg-emerald-500"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
          
//           <div>
//             <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-fit sticky top-20">
//               <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
              
//               <div className="space-y-6">
//                 <div>
//                   <div className="flex justify-between items-center mb-2">
//                     <span className="text-sm text-gray-600">Difficulty</span>
//                     <Badge
//                       className={`${
//                         exam.difficulty === "Hard" ? "bg-red-100 text-red-800" :
//                         exam.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800" :
//                         "bg-green-100 text-green-800"
//                       }`}
//                     >
//                       {exam.difficulty}
//                     </Badge>
//                   </div>
//                   <Progress 
//                     value={
//                       exam.difficulty === "Hard" ? 90 :
//                       exam.difficulty === "Medium" ? 60 : 30
//                     }
//                     className="h-2 bg-gray-100"
//                     indicatorClassName={
//                       exam.difficulty === "Hard" ? "bg-red-500" :
//                       exam.difficulty === "Medium" ? "bg-yellow-500" : "bg-green-500"
//                     }
//                   />
//                 </div>
                
//                 <div>
//                   <div className="flex justify-between items-center mb-2">
//                     <span className="text-sm text-gray-600">Popularity</span>
//                     <span className="text-sm font-medium">{exam.popularity}</span>
//                   </div>
//                   <Progress 
//                     value={
//                       exam.popularity === "Very High" ? 95 :
//                       exam.popularity === "High" ? 75 :
//                       exam.popularity === "Medium" ? 50 : 25
//                     }
//                     className="h-2 bg-gray-100"
//                     indicatorClassName="bg-blue-500"
//                   />
//                 </div>
                
//                 <div className="pt-4 border-t border-gray-100">
//                   <h4 className="text-sm font-medium text-gray-700 mb-3">Who should take this exam?</h4>
//                   <p className="text-sm text-gray-600 mb-4">
//                     Healthcare professionals seeking to validate their knowledge and skills in this area.
//                   </p>
//                   <Link href={`/exams/${examid}/content`}>
//                     <Button 
//                       className="w-full bg-black hover:bg-zinc-800"
//                     >
//                       Begin Studying
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }