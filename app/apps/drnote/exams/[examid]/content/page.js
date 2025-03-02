// // // // // // // // "use client";

// // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // import Header from "@/components/Header";
// // // // // // // // import { ArrowLeft, Check, X } from "lucide-react";
// // // // // // // // import Link from "next/link";
// // // // // // // // import { Button } from "@/components/ui/button";

// // // // // // // // // Simple mapping of exam IDs to titles
// // // // // // // // const examTitles = {
// // // // // // // //   "usmle-step1": "USMLE Step 1",
// // // // // // // //   "nclex-rn": "NCLEX-RN",
// // // // // // // //   "mcat": "MCAT",
// // // // // // // //   "pance": "PANCE",
// // // // // // // //   "naplex": "NAPLEX",
// // // // // // // //   "comlex-level-1": "COMLEX Level 1"
// // // // // // // // };

// // // // // // // // // Dummy question data
// // // // // // // // const dummyQuestions = {
// // // // // // // //   "usmle-step1": {
// // // // // // // //     question: "A 45-year-old man presents with fatigue, joint pain, and bronze skin. Lab tests show elevated serum iron and transferrin saturation. Which gene mutation is most likely present?",
// // // // // // // //     options: [
// // // // // // // //       "CFTR",
// // // // // // // //       "HFE",
// // // // // // // //       "Alpha-1 antitrypsin",
// // // // // // // //       "Apolipoprotein E"
// // // // // // // //     ],
// // // // // // // //     correctAnswer: 1,
// // // // // // // //     explanation: "This patient presents with classic signs of hereditary hemochromatosis (fatigue, joint pain, and bronze skin due to iron deposition). The HFE gene mutation (most commonly C282Y) is responsible for hereditary hemochromatosis, an autosomal recessive disorder causing increased iron absorption and deposition in tissues."
// // // // // // // //   },
// // // // // // // //   "nclex-rn": {
// // // // // // // //     question: "A nurse is caring for a client who has a nasogastric tube connected to low suction. Which finding requires immediate intervention?",
// // // // // // // //     options: [
// // // // // // // //       "Greenish drainage in the collection chamber",
// // // // // // // //       "Gurgling sound when irrigating the tube",
// // // // // // // //       "Coffee-ground appearance of the drainage",
// // // // // // // //       "Fluctuation in the water-seal chamber with respiration"
// // // // // // // //     ],
// // // // // // // //     correctAnswer: 2,
// // // // // // // //     explanation: "Coffee-ground appearance of nasogastric drainage indicates the presence of old blood, which could signal upper gastrointestinal bleeding and requires immediate intervention. The other findings are expected or normal observations."
// // // // // // // //   },
// // // // // // // //   "default": {
// // // // // // // //     question: "Which of the following is a characteristic feature of this condition?",
// // // // // // // //     options: [
// // // // // // // //       "Option A",
// // // // // // // //       "Option B",
// // // // // // // //       "Option C",
// // // // // // // //       "Option D"
// // // // // // // //     ],
// // // // // // // //     correctAnswer: 1,
// // // // // // // //     explanation: "Option B is the correct answer because it represents the typical presentation of this condition. The pathophysiology involves several mechanisms that result in this clinical manifestation."
// // // // // // // //   }
// // // // // // // // };

// // // // // // // // export default function ExamContentPage({ params }) {
// // // // // // // //   const { examid } = params;
// // // // // // // //   const [examTitle, setExamTitle] = useState("");
// // // // // // // //   const [question, setQuestion] = useState(null);
// // // // // // // //   const [selectedAnswer, setSelectedAnswer] = useState(null);
// // // // // // // //   const [showExplanation, setShowExplanation] = useState(false);
  
// // // // // // // //   useEffect(() => {
// // // // // // // //     // Set the exam title based on the ID or use a fallback
// // // // // // // //     setExamTitle(examTitles[examid] || `Exam ${examid}`);
    
// // // // // // // //     // Set the question based on exam ID or use default
// // // // // // // //     const questionData = dummyQuestions[examid] || dummyQuestions.default;
// // // // // // // //     setQuestion(questionData);
// // // // // // // //   }, [examid]);

// // // // // // // //   const handleSelectAnswer = (index) => {
// // // // // // // //     setSelectedAnswer(index);
// // // // // // // //     setShowExplanation(true);
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen flex flex-col bg-white">
// // // // // // // //       <Header />
      
// // // // // // // //       <main className="flex-grow max-w-4xl mx-auto px-4 py-8 w-full">
// // // // // // // //         <div className="mb-6">
// // // // // // // //           <Link href={`/exams/${examid}`} className="inline-flex items-center text-sm text-gray-500 hover:text-gray-800">
// // // // // // // //             <ArrowLeft className="w-4 h-4 mr-1" />
// // // // // // // //             Back to {examTitle}
// // // // // // // //           </Link>
// // // // // // // //         </div>
        
// // // // // // // //         <h1 className="text-2xl font-bold mb-8">{examTitle} Content</h1>
        
// // // // // // // //         {question && (
// // // // // // // //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// // // // // // // //             {/* Question */}
// // // // // // // //             <div className="p-6 border-b border-gray-100">
// // // // // // // //               <h2 className="text-lg font-medium mb-6">{question.question}</h2>
              
// // // // // // // //               <div className="space-y-3">
// // // // // // // //                 {question.options.map((option, index) => {
// // // // // // // //                   // Determine styling based on selection and correctness
// // // // // // // //                   let bgColor = "bg-white";
// // // // // // // //                   let borderColor = "border-gray-200";
// // // // // // // //                   let textColor = "text-gray-800";
                  
// // // // // // // //                   if (selectedAnswer !== null) {
// // // // // // // //                     if (index === question.correctAnswer) {
// // // // // // // //                       bgColor = "bg-green-50";
// // // // // // // //                       borderColor = "border-green-200";
// // // // // // // //                       textColor = "text-green-800";
// // // // // // // //                     } else if (index === selectedAnswer) {
// // // // // // // //                       bgColor = "bg-red-50";
// // // // // // // //                       borderColor = "border-red-200";
// // // // // // // //                       textColor = "text-red-800";
// // // // // // // //                     } else {
// // // // // // // //                       bgColor = "bg-gray-50";
// // // // // // // //                       textColor = "text-gray-500";
// // // // // // // //                     }
// // // // // // // //                   }
                  
// // // // // // // //                   return (
// // // // // // // //                     <button
// // // // // // // //                       key={index}
// // // // // // // //                       className={`w-full p-4 rounded-lg border ${borderColor} ${bgColor} ${textColor} flex items-center justify-between transition-colors ${selectedAnswer === null ? "hover:bg-gray-50" : ""}`}
// // // // // // // //                       onClick={() => handleSelectAnswer(index)}
// // // // // // // //                       disabled={selectedAnswer !== null}
// // // // // // // //                     >
// // // // // // // //                       <div className="flex items-center">
// // // // // // // //                         <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
// // // // // // // //                         <span>{option}</span>
// // // // // // // //                       </div>
                      
// // // // // // // //                       {selectedAnswer !== null && index === question.correctAnswer && (
// // // // // // // //                         <Check className="h-5 w-5 text-green-600" />
// // // // // // // //                       )}
                      
// // // // // // // //                       {selectedAnswer !== null && index === selectedAnswer && index !== question.correctAnswer && (
// // // // // // // //                         <X className="h-5 w-5 text-red-600" />
// // // // // // // //                       )}
// // // // // // // //                     </button>
// // // // // // // //                   );
// // // // // // // //                 })}
// // // // // // // //               </div>
// // // // // // // //             </div>
            
// // // // // // // //             {/* Explanation */}
// // // // // // // //             {showExplanation && (
// // // // // // // //               <div className="p-6 bg-gray-50">
// // // // // // // //                 <h3 className="font-medium text-gray-800 mb-2">Explanation</h3>
// // // // // // // //                 <p className="text-gray-700">{question.explanation}</p>
// // // // // // // //               </div>
// // // // // // // //             )}
            
// // // // // // // //             {/* Actions */}
// // // // // // // //             <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-between">
// // // // // // // //               <Button
// // // // // // // //                 variant="outline"
// // // // // // // //                 className="text-gray-600"
// // // // // // // //                 onClick={() => {
// // // // // // // //                   setSelectedAnswer(null);
// // // // // // // //                   setShowExplanation(false);
// // // // // // // //                 }}
// // // // // // // //                 disabled={selectedAnswer === null}
// // // // // // // //               >
// // // // // // // //                 Try Again
// // // // // // // //               </Button>
              
// // // // // // // //               <Button 
// // // // // // // //                 className="bg-[#007832] hover:bg-[#006128]"
// // // // // // // //                 disabled={selectedAnswer === null}
// // // // // // // //               >
// // // // // // // //                 Next Question
// // // // // // // //               </Button>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         )}
// // // // // // // //       </main>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // "use client";

// // // // // // // import { useEffect, useState } from "react";
// // // // // // // import Link from "next/link";
// // // // // // // import { createClient } from '@supabase/supabase-js';
// // // // // // // import { ArrowLeft, ThumbsUp, ThumbsDown, Check, X, Info, Eye, EyeOff } from "lucide-react";
// // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // import Header from "@/components/Header";
// // // // // // // import { Badge } from "@/components/ui/badge";

// // // // // // // // Initialize Supabase client
// // // // // // // const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// // // // // // // const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
// // // // // // // const supabase = createClient(supabaseUrl, supabaseAnonKey);

// // // // // // // // Custom color palette
// // // // // // // const colors = {
// // // // // // //   primary: "#000000",
// // // // // // //   secondary: "#333333",
// // // // // // //   background: "#FFFFFF",
// // // // // // //   cardBg: "#FAFAFA",
// // // // // // //   border: "#E5E7EB",
// // // // // // //   borderHover: "#000000",
// // // // // // //   success: "#10B981",
// // // // // // //   error: "#EF4444",
// // // // // // //   successBg: "#F0FDF4",
// // // // // // //   errorBg: "#FEF2F2",
// // // // // // //   neutral: "#F3F4F6"
// // // // // // // };

// // // // // // // export default function ExamContentPage({ params }) {
// // // // // // //   const { examid } = params;
// // // // // // //   const [exam, setExam] = useState(null);
// // // // // // //   const [questions, setQuestions] = useState([]);
// // // // // // //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// // // // // // //   const [selectedAnswer, setSelectedAnswer] = useState(null);
// // // // // // //   const [showExplanation, setShowExplanation] = useState(false);
// // // // // // //   const [userAnswers, setUserAnswers] = useState({});
// // // // // // //   const [loadingQuestions, setLoadingQuestions] = useState(true);
// // // // // // //   const [loadingExam, setLoadingExam] = useState(true);
// // // // // // //   const [error, setError] = useState(null);
// // // // // // //   const [reviews, setReviews] = useState({});
  
// // // // // // //   useEffect(() => {
// // // // // // //     const fetchExam = async () => {
// // // // // // //       try {
// // // // // // //         setLoadingExam(true);
// // // // // // //         const { data, error } = await supabase
// // // // // // //           .from('exams')
// // // // // // //           .select('id, name, category, description, slug')
// // // // // // //           .eq('slug', examid)
// // // // // // //           .single();
          
// // // // // // //         if (error) throw error;
// // // // // // //         setExam(data);
// // // // // // //       } catch (err) {
// // // // // // //         console.error('Error fetching exam:', err);
// // // // // // //         setError('Failed to load exam details.');
// // // // // // //       } finally {
// // // // // // //         setLoadingExam(false);
// // // // // // //       }
// // // // // // //     };
    
// // // // // // //     const fetchQuestions = async () => {
// // // // // // //       try {
// // // // // // //         setLoadingQuestions(true);
// // // // // // //         // First get the exam ID from the slug
// // // // // // //         const { data: examData, error: examError } = await supabase
// // // // // // //           .from('exams')
// // // // // // //           .select('id')
// // // // // // //           .eq('slug', examid)
// // // // // // //           .single();
          
// // // // // // //         if (examError) throw examError;
        
// // // // // // //         // Then fetch questions for this exam
// // // // // // //         const { data, error } = await supabase
// // // // // // //           .from('questions')
// // // // // // //           .select('*')
// // // // // // //           .eq('exam_id', examData.id)
// // // // // // //           .eq('is_active', true)
// // // // // // //           .order('created_at');
          
// // // // // // //         if (error) throw error;
        
// // // // // // //         // Transform the data to match our component's expected format
// // // // // // //         const formattedQuestions = data.map(q => ({
// // // // // // //           id: q.id,
// // // // // // //           question: q.text,
// // // // // // //           options: q.choices.map(choice => choice.text),
// // // // // // //           correctAnswer: q.choices.findIndex(choice => choice.isCorrect === true),
// // // // // // //           explanation: q.explanation || "No explanation provided.",
// // // // // // //           subject: q.subject,
// // // // // // //           topic: q.topic,
// // // // // // //           difficultyLevel: q.difficulty_level
// // // // // // //         }));
        
// // // // // // //         setQuestions(formattedQuestions);
// // // // // // //       } catch (err) {
// // // // // // //         console.error('Error fetching questions:', err);
// // // // // // //         setError('Failed to load questions.');
// // // // // // //       } finally {
// // // // // // //         setLoadingQuestions(false);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     fetchExam();
// // // // // // //     fetchQuestions();
// // // // // // //   }, [examid]);

// // // // // // //   const currentQuestion = questions[currentQuestionIndex];
  
// // // // // // //   const handleSelectAnswer = (index) => {
// // // // // // //     setSelectedAnswer(index);
// // // // // // //     setShowExplanation(true);
// // // // // // //     setUserAnswers({
// // // // // // //       ...userAnswers,
// // // // // // //       [currentQuestion.id]: {
// // // // // // //         selected: index,
// // // // // // //         isCorrect: index === currentQuestion.correctAnswer
// // // // // // //       }
// // // // // // //     });
// // // // // // //   };

// // // // // // //   const handleNextQuestion = () => {
// // // // // // //     if (currentQuestionIndex < questions.length - 1) {
// // // // // // //       setCurrentQuestionIndex(currentQuestionIndex + 1);
// // // // // // //       setSelectedAnswer(null);
// // // // // // //       setShowExplanation(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handlePreviousQuestion = () => {
// // // // // // //     if (currentQuestionIndex > 0) {
// // // // // // //       setCurrentQuestionIndex(currentQuestionIndex - 1);
// // // // // // //       const previousQuestion = questions[currentQuestionIndex - 1];
// // // // // // //       const previousAnswer = userAnswers[previousQuestion.id];
      
// // // // // // //       if (previousAnswer) {
// // // // // // //         setSelectedAnswer(previousAnswer.selected);
// // // // // // //         setShowExplanation(true);
// // // // // // //       } else {
// // // // // // //         setSelectedAnswer(null);
// // // // // // //         setShowExplanation(false);
// // // // // // //       }
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleReview = (questionId, status) => {
// // // // // // //     setReviews(prev => ({
// // // // // // //       ...prev,
// // // // // // //       [questionId]: status
// // // // // // //     }));
// // // // // // //   };

// // // // // // //   const resetQuestion = () => {
// // // // // // //     setSelectedAnswer(null);
// // // // // // //     setShowExplanation(false);
// // // // // // //   };

// // // // // // //   if (error) {
// // // // // // //     return (
// // // // // // //       <div className="min-h-screen flex flex-col bg-white">
// // // // // // //         <Header />
// // // // // // //         <main className="flex-grow flex items-center justify-center">
// // // // // // //           <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200 max-w-md mx-auto text-center">
// // // // // // //             <div className="text-3xl mb-4">😕</div>
// // // // // // //             <h2 className="text-xl font-semibold mb-2">Error</h2>
// // // // // // //             <p className="text-zinc-600 mb-4">{error}</p>
// // // // // // //             <Button onClick={() => window.location.reload()} className="bg-black hover:bg-zinc-800">
// // // // // // //               Try Again
// // // // // // //             </Button>
// // // // // // //           </div>
// // // // // // //         </main>
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   if (loadingExam || loadingQuestions) {
// // // // // // //     return (
// // // // // // //       <div className="min-h-screen flex flex-col bg-white">
// // // // // // //         <Header />
// // // // // // //         <main className="flex-grow flex items-center justify-center">
// // // // // // //           <div className="animate-pulse space-y-6 max-w-4xl w-full px-4">
// // // // // // //             <div className="h-6 w-48 bg-zinc-200 rounded"></div>
// // // // // // //             <div className="h-8 w-64 bg-zinc-200 rounded"></div>
// // // // // // //             <div className="h-64 w-full bg-zinc-100 rounded-lg border border-zinc-200"></div>
// // // // // // //           </div>
// // // // // // //         </main>
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   if (!currentQuestion) {
// // // // // // //     return (
// // // // // // //       <div className="min-h-screen flex flex-col bg-white">
// // // // // // //         <Header />
// // // // // // //         <main className="flex-grow flex items-center justify-center">
// // // // // // //           <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200 max-w-md mx-auto text-center">
// // // // // // //             <div className="text-3xl mb-4">📚</div>
// // // // // // //             <h2 className="text-xl font-semibold mb-2">No Questions Available</h2>
// // // // // // //             <p className="text-zinc-600 mb-4">There are no questions available for this exam yet.</p>
// // // // // // //             <Link href={`/exams/${examid}`}>
// // // // // // //               <Button className="bg-black hover:bg-zinc-800">
// // // // // // //                 Back to Exam Page
// // // // // // //               </Button>
// // // // // // //             </Link>
// // // // // // //           </div>
// // // // // // //         </main>
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen flex flex-col bg-zinc-50">
// // // // // // //       <Header />
      
// // // // // // //       <main className="flex-grow max-w-4xl mx-auto px-4 py-8 w-full">
// // // // // // //         <div className="mb-6 flex items-center justify-between">
// // // // // // //           <Link href={`/exams/${examid}`} className="inline-flex items-center text-sm text-zinc-600 hover:text-black transition-colors">
// // // // // // //             <ArrowLeft className="w-4 h-4 mr-1" />
// // // // // // //             Back to {exam?.name || 'Exam'}
// // // // // // //           </Link>
          
// // // // // // //           <div className="flex items-center gap-2">
// // // // // // //             <Badge variant="outline" className="bg-white">
// // // // // // //               Question {currentQuestionIndex + 1} of {questions.length}
// // // // // // //             </Badge>
// // // // // // //             <Badge variant="secondary" className="bg-black text-white">
// // // // // // //               {currentQuestion.subject}
// // // // // // //             </Badge>
// // // // // // //           </div>
// // // // // // //         </div>
        
// // // // // // //         <div className="bg-white rounded-lg border border-zinc-200 shadow-sm overflow-hidden mb-6">
// // // // // // //           {/* Question */}
// // // // // // //           <div className="p-6 border-b border-zinc-100">
// // // // // // //             <h2 className="text-lg font-medium mb-6">{currentQuestion.question}</h2>
            
// // // // // // //             <div className="space-y-3">
// // // // // // //               {currentQuestion.options.map((option, index) => {
// // // // // // //                 // Determine styling based on selection and correctness
// // // // // // //                 let bgColor = "bg-white";
// // // // // // //                 let borderColor = "border-zinc-200";
// // // // // // //                 let textColor = "text-zinc-800";
                
// // // // // // //                 if (showExplanation) {
// // // // // // //                   if (index === currentQuestion.correctAnswer) {
// // // // // // //                     bgColor = colors.successBg;
// // // // // // //                     borderColor = "border-emerald-200";
// // // // // // //                     textColor = "text-emerald-800";
// // // // // // //                   } else if (index === selectedAnswer) {
// // // // // // //                     bgColor = colors.errorBg;
// // // // // // //                     borderColor = "border-red-200";
// // // // // // //                     textColor = "text-red-800";
// // // // // // //                   } else {
// // // // // // //                     bgColor = "bg-zinc-50";
// // // // // // //                     textColor = "text-zinc-500";
// // // // // // //                   }
// // // // // // //                 }
                
// // // // // // //                 return (
// // // // // // //                   <button
// // // // // // //                     key={index}
// // // // // // //                     className={`w-full p-4 rounded-lg border ${borderColor} ${bgColor} ${textColor} flex items-center justify-between transition-colors ${selectedAnswer === null ? "hover:bg-zinc-50" : ""}`}
// // // // // // //                     onClick={() => handleSelectAnswer(index)}
// // // // // // //                     disabled={selectedAnswer !== null}
// // // // // // //                   >
// // // // // // //                     <div className="flex items-center">
// // // // // // //                       <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
// // // // // // //                       <span>{option}</span>
// // // // // // //                     </div>
                    
// // // // // // //                     {showExplanation && index === currentQuestion.correctAnswer && (
// // // // // // //                       <Check className="h-5 w-5 text-emerald-600" />
// // // // // // //                     )}
                    
// // // // // // //                     {showExplanation && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
// // // // // // //                       <X className="h-5 w-5 text-red-600" />
// // // // // // //                     )}
// // // // // // //                   </button>
// // // // // // //                 );
// // // // // // //               })}
// // // // // // //             </div>
// // // // // // //           </div>
          
// // // // // // //           {/* Explanation */}
// // // // // // //           {showExplanation && (
// // // // // // //             <div className="p-6 bg-zinc-50 border-t border-zinc-100">
// // // // // // //               <div className="flex items-center gap-2 mb-3">
// // // // // // //                 <Info className="h-5 w-5 text-black" />
// // // // // // //                 <h3 className="font-medium text-black">Explanation</h3>
// // // // // // //               </div>
// // // // // // //               <p className="text-zinc-700">{currentQuestion.explanation}</p>
              
// // // // // // //               {/* Review buttons */}
// // // // // // //               <div className="mt-6 pt-4 border-t border-zinc-200 flex gap-4">
// // // // // // //                 <h4 className="text-sm font-medium text-zinc-700 self-center mr-2">Mark this question:</h4>
// // // // // // //                 <Button
// // // // // // //                   variant="outline"
// // // // // // //                   className={`flex items-center gap-2 ${reviews[currentQuestion.id] === 'got-it' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'hover:bg-zinc-100'}`}
// // // // // // //                   onClick={() => handleReview(currentQuestion.id, 'got-it')}
// // // // // // //                 >
// // // // // // //                   <ThumbsUp className="h-4 w-4" />
// // // // // // //                   <span>Got it</span>
// // // // // // //                 </Button>
// // // // // // //                 <Button
// // // // // // //                   variant="outline"
// // // // // // //                   className={`flex items-center gap-2 ${reviews[currentQuestion.id] === 'review' ? 'bg-amber-50 text-amber-700 border-amber-200' : 'hover:bg-zinc-100'}`}
// // // // // // //                   onClick={() => handleReview(currentQuestion.id, 'review')}
// // // // // // //                 >
// // // // // // //                   <ThumbsDown className="h-4 w-4" />
// // // // // // //                   <span>Need review</span>
// // // // // // //                 </Button>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           )}
// // // // // // //         </div>
        
// // // // // // //         {/* Actions */}
// // // // // // //         <div className="flex flex-wrap gap-4 justify-between">
// // // // // // //           <div className="flex gap-3">
// // // // // // //             <Button 
// // // // // // //               variant="outline" 
// // // // // // //               onClick={resetQuestion}
// // // // // // //               disabled={selectedAnswer === null}
// // // // // // //               className="border-zinc-200 text-zinc-700 hover:bg-zinc-100"
// // // // // // //             >
// // // // // // //               Try Again
// // // // // // //             </Button>
            
// // // // // // //             <Button
// // // // // // //               variant="outline"
// // // // // // //               onClick={handlePreviousQuestion}
// // // // // // //               disabled={currentQuestionIndex === 0}
// // // // // // //               className="border-zinc-200 text-zinc-700 hover:bg-zinc-100"
// // // // // // //             >
// // // // // // //               Previous Question
// // // // // // //             </Button>
// // // // // // //           </div>
          
// // // // // // //           <Button 
// // // // // // //             className="bg-black hover:bg-zinc-800"
// // // // // // //             onClick={handleNextQuestion}
// // // // // // //             disabled={currentQuestionIndex === questions.length - 1}
// // // // // // //           >
// // // // // // //             Next Question
// // // // // // //           </Button>
// // // // // // //         </div>
        
// // // // // // //         {/* Question Progress */}
// // // // // // //         <div className="mt-8">
// // // // // // //           <h3 className="text-sm font-medium text-zinc-700 mb-3">Questions Progress</h3>
// // // // // // //           <div className="flex flex-wrap gap-2">
// // // // // // //             {questions.map((_, index) => {
// // // // // // //               const question = questions[index];
// // // // // // //               const answer = userAnswers[question?.id];
// // // // // // //               let bgColor = "bg-zinc-100";
// // // // // // //               let textColor = "text-zinc-600";
              
// // // // // // //               if (answer) {
// // // // // // //                 if (answer.isCorrect) {
// // // // // // //                   bgColor = "bg-emerald-100";
// // // // // // //                   textColor = "text-emerald-800";
// // // // // // //                 } else {
// // // // // // //                   bgColor = "bg-red-100";
// // // // // // //                   textColor = "text-red-800";
// // // // // // //                 }
// // // // // // //               }
              
// // // // // // //               if (index === currentQuestionIndex) {
// // // // // // //                 bgColor = "bg-black";
// // // // // // //                 textColor = "text-white";
// // // // // // //               }
              
// // // // // // //               return (
// // // // // // //                 <button
// // // // // // //                   key={index}
// // // // // // //                   className={`w-10 h-10 flex items-center justify-center rounded-full ${bgColor} ${textColor} font-medium text-sm transition-colors`}
// // // // // // //                   onClick={() => {
// // // // // // //                     setCurrentQuestionIndex(index);
// // // // // // //                     const targetQuestion = questions[index];
// // // // // // //                     const targetAnswer = userAnswers[targetQuestion.id];
                    
// // // // // // //                     if (targetAnswer) {
// // // // // // //                       setSelectedAnswer(targetAnswer.selected);
// // // // // // //                       setShowExplanation(true);
// // // // // // //                     } else {
// // // // // // //                       setSelectedAnswer(null);
// // // // // // //                       setShowExplanation(false);
// // // // // // //                     }
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   {index + 1}
// // // // // // //                 </button>
// // // // // // //               );
// // // // // // //             })}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </main>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }
// // // // // // "use client";

// // // // // // import { useEffect, useState } from "react";
// // // // // // import Link from "next/link";
// // // // // // import { createClient } from '@supabase/supabase-js';
// // // // // // import { ArrowLeft, ThumbsUp, ThumbsDown, Check, X, Info, Eye, EyeOff } from "lucide-react";
// // // // // // import { Button } from "@/components/ui/button";
// // // // // // import Header from "@/components/Header";
// // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // import MCQApp from "@/components/notes/MCQApp";

// // // // // // // Initialize Supabase client
// // // // // // const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// // // // // // const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
// // // // // // const supabase = createClient(supabaseUrl, supabaseAnonKey);

// // // // // // // Custom color palette
// // // // // // const colors = {
// // // // // //   primary: "#000000",
// // // // // //   secondary: "#333333",
// // // // // //   background: "#FFFFFF",
// // // // // //   cardBg: "#FAFAFA",
// // // // // //   border: "#E5E7EB",
// // // // // //   borderHover: "#000000",
// // // // // //   success: "#10B981",
// // // // // //   error: "#EF4444",
// // // // // //   successBg: "#F0FDF4",
// // // // // //   errorBg: "#FEF2F2",
// // // // // //   neutral: "#F3F4F6"
// // // // // // };

// // // // // // export default function ExamContentPage({ params }) {
// // // // // //   const { examid } = params;
// // // // // //   const [exam, setExam] = useState(null);
// // // // // //   const [questions, setQuestions] = useState([]);
// // // // // //   const [loading, setLoading] = useState(true);
// // // // // //   const [error, setError] = useState(null);
  
// // // // // //   useEffect(() => {
// // // // // //     const fetchExam = async () => {
// // // // // //       try {
// // // // // //         setLoading(true);
// // // // // //         const { data, error } = await supabase
// // // // // //           .from('exams')
// // // // // //           .select('id, name, category, description, slug')
// // // // // //           .eq('slug', examid)
// // // // // //           .single();
          
// // // // // //         if (error) throw error;
// // // // // //         setExam(data);

// // // // // //         // Fetch questions for the exam
// // // // // //         const { data: questionsData, error: questionsError } = await supabase
// // // // // //           .from('questions')
// // // // // //           .select('*')
// // // // // //           .eq('exam_id', data.id)
// // // // // //           .eq('is_active', true)
// // // // // //           .order('created_at');
          
// // // // // //         if (questionsError) throw questionsError;
        
// // // // // //         setQuestions(questionsData);
// // // // // //       } catch (err) {
// // // // // //         console.error('Error fetching exam data:', err);
// // // // // //         setError('Failed to load exam content. Please try again later.');
// // // // // //       } finally {
// // // // // //         setLoading(false);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchExam();
// // // // // //   }, [examid]);

// // // // // //   // Handle loading state
// // // // // //   if (loading) {
// // // // // //     return (
// // // // // //       <div className="min-h-screen flex flex-col bg-white">
// // // // // //         <Header />
// // // // // //         <main className="flex-grow flex items-center justify-center">
// // // // // //           <div className="animate-pulse space-y-6 max-w-4xl w-full px-4">
// // // // // //             <div className="h-6 w-48 bg-zinc-200 rounded"></div>
// // // // // //             <div className="h-8 w-64 bg-zinc-200 rounded"></div>
// // // // // //             <div className="h-64 w-full bg-zinc-100 rounded-lg border border-zinc-200"></div>
// // // // // //           </div>
// // // // // //         </main>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   // Handle error state
// // // // // //   if (error) {
// // // // // //     return (
// // // // // //       <div className="min-h-screen flex flex-col bg-white">
// // // // // //         <Header />
// // // // // //         <main className="flex-grow flex items-center justify-center">
// // // // // //           <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200 max-w-md mx-auto text-center">
// // // // // //             <div className="text-3xl mb-4">😕</div>
// // // // // //             <h2 className="text-xl font-semibold mb-2">Error</h2>
// // // // // //             <p className="text-zinc-600 mb-4">{error}</p>
// // // // // //             <Button onClick={() => window.location.reload()} className="bg-black hover:bg-zinc-800">
// // // // // //               Try Again
// // // // // //             </Button>
// // // // // //           </div>
// // // // // //         </main>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   // If no questions available
// // // // // //   if (questions.length === 0) {
// // // // // //     return (
// // // // // //       <div className="min-h-screen flex flex-col bg-white">
// // // // // //         <Header />
// // // // // //         <main className="flex-grow flex items-center justify-center">
// // // // // //           <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200 max-w-md mx-auto text-center">
// // // // // //             <div className="text-3xl mb-4">📚</div>
// // // // // //             <h2 className="text-xl font-semibold mb-2">No Questions Available</h2>
// // // // // //             <p className="text-zinc-600 mb-4">There are no questions available for this exam yet.</p>
// // // // // //             <Link href={`/exams/${examid}`}>
// // // // // //               <Button className="bg-black hover:bg-zinc-800">
// // // // // //                 Back to Exam Page
// // // // // //               </Button>
// // // // // //             </Link>
// // // // // //           </div>
// // // // // //         </main>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return <MCQApp />;
// // // // // // }
// // // // // "use client";

// // // // // import { useEffect, useState } from "react";
// // // // // import Link from "next/link";
// // // // // import { createClient } from '@supabase/supabase-js';
// // // // // import { ArrowLeft } from "lucide-react";
// // // // // import Header from "@/components/Header";
// // // // // import MCQApp from "@/components/notes/MCQApp";

// // // // // // Initialize Supabase client
// // // // // const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// // // // // const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
// // // // // const supabase = createClient(supabaseUrl, supabaseAnonKey);

// // // // // export default function ExamContentPage({ params }) {
// // // // //   const { examid } = params;
// // // // //   const [exam, setExam] = useState(null);
// // // // //   const [questions, setQuestions] = useState([]);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState(null);
  
// // // // //   useEffect(() => {
// // // // //     const fetchExamAndQuestions = async () => {
// // // // //       try {
// // // // //         setLoading(true);
// // // // //         // Fetch exam data
// // // // //         const { data: examData, error: examError } = await supabase
// // // // //           .from('exams')
// // // // //           .select('id, name, category, description')
// // // // //           .eq('slug', examid)
// // // // //           .single();
          
// // // // //         if (examError) throw examError;
// // // // //         setExam(examData);

// // // // //         // Fetch questions for this exam
// // // // //         const { data: questionsData, error: questionsError } = await supabase
// // // // //           .from('questions')
// // // // //           .select('*')
// // // // //           .eq('exam_id', examData.id)
// // // // //           .eq('is_active', true);

// // // // //         if (questionsError) throw questionsError;
        
// // // // //         // Transform the questions data to match the MCQApp expected format
// // // // //         const formattedQuestions = questionsData.map(q => ({
// // // // //           id: q.id,
// // // // //           shortQuestion: q.title || q.text.substring(0, 50),
// // // // //           shortAnswer: q.short_answer || "No short answer available",
// // // // //           fullQuestion: q.text,
// // // // //           options: q.choices?.map(choice => choice.text) || [],
// // // // //           correctAnswer: q.choices?.findIndex(choice => choice.isCorrect) || 0,
// // // // //           explanation: q.explanation || "No explanation available",
// // // // //           subject: q.subject || examData.category,
// // // // //           date: new Date(q.created_at).toLocaleDateString('en-US', {month: 'short', year: '2-digit'})
// // // // //         }));
        
// // // // //         setQuestions(formattedQuestions.length > 0 ? formattedQuestions : null);
// // // // //       } catch (err) {
// // // // //         console.error('Error fetching data:', err);
// // // // //         setError('Failed to load content. Please try again later.');
// // // // //       } finally {
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };

// // // // //     fetchExamAndQuestions();
// // // // //   }, [examid]);

// // // // //   // Handle loading state
// // // // //   if (loading) {
// // // // //     return (
// // // // //       <div className="min-h-screen flex flex-col bg-white">
// // // // //         <Header />
// // // // //         <main className="flex-grow flex items-center justify-center">
// // // // //           <div className="animate-pulse space-y-6 max-w-4xl w-full px-4">
// // // // //             <div className="h-6 w-48 bg-zinc-200 rounded"></div>
// // // // //             <div className="h-8 w-64 bg-zinc-200 rounded"></div>
// // // // //             <div className="h-64 w-full bg-zinc-100 rounded-lg border border-zinc-200"></div>
// // // // //           </div>
// // // // //         </main>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   // Handle error state
// // // // //   if (error) {
// // // // //     return (
// // // // //       <div className="min-h-screen flex flex-col bg-white">
// // // // //         <Header />
// // // // //         <main className="flex-grow flex items-center justify-center">
// // // // //           <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200 max-w-md mx-auto text-center">
// // // // //             <div className="text-3xl mb-4">😕</div>
// // // // //             <h2 className="text-xl font-semibold mb-2">Error</h2>
// // // // //             <p className="text-zinc-600 mb-4">{error}</p>
// // // // //             <Link href="/exams" className="inline-block px-4 py-2 bg-black text-white rounded-md hover:bg-zinc-800">
// // // // //               Back to Exams
// // // // //             </Link>
// // // // //           </div>
// // // // //         </main>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   // If we have exam data but no questions
// // // // //   if (exam && !questions) {
// // // // //     return (
// // // // //       <div className="min-h-screen flex flex-col bg-white">
// // // // //         <Header />
// // // // //         <main className="flex-grow flex items-center justify-center">
// // // // //           <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200 max-w-md mx-auto text-center">
// // // // //             <div className="text-3xl mb-4">📚</div>
// // // // //             <h2 className="text-xl font-semibold mb-2">No Questions Available</h2>
// // // // //             <p className="text-zinc-600 mb-4">There are no questions available for this exam yet.</p>
// // // // //             <Link href={`/exams/${examid}`} className="inline-block px-4 py-2 bg-black text-white rounded-md hover:bg-zinc-800">
// // // // //               Back to Exam Details
// // // // //             </Link>
// // // // //           </div>
// // // // //         </main>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <>
// // // // //       <MCQApp 
// // // // //         examName={exam?.name} 
// // // // //         examId={examid}
// // // // //         initialQuestions={questions || []}
// // // // //         loadFromSupabase={true}
// // // // //       />
// // // // //     </>
// // // // //   );
// // // // // }
// // // // "use client";

// // // // import { useEffect, useState } from "react";
// // // // import Link from "next/link";
// // // // import { createClient } from '@supabase/supabase-js';
// // // // import { Button } from "@/components/ui/button";
// // // // import { Skeleton } from "@/components/ui/skeleton";
// // // // import { Alert, AlertDescription } from "@/components/ui/alert";
// // // // import Header from "@/components/Header";
// // // // import MCQApp from "@/components/notes/MCQApp";

// // // // // Initialize Supabase client
// // // // const supabase = createClient(
// // // //   process.env.NEXT_PUBLIC_SUPABASE_URL,
// // // //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// // // // );

// // // // export default function ExamContentPage({ params }) {
// // // //   const { examid } = params;
// // // //   const [exam, setExam] = useState(null);
// // // //   const [questions, setQuestions] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);

// // // //   useEffect(() => {
// // // //     const fetchExamAndQuestions = async () => {
// // // //       try {
// // // //         setLoading(true);
// // // //         setError(null);

// // // //         // Fetch exam data with error handling
// // // //         const { data: examData, error: examError } = await supabase
// // // //           .from('exams')
// // // //           .select('id, name, category, description')
// // // //           .eq('slug', examid)
// // // //           .single();

// // // //         if (examError) {
// // // //           throw new Error('Failed to fetch exam details');
// // // //         }

// // // //         if (!examData) {
// // // //           throw new Error('Exam not found');
// // // //         }

// // // //         setExam(examData);

// // // //         // Fetch questions with proper error handling
// // // //         const { data: questionsData, error: questionsError } = await supabase
// // // //           .from('questions')
// // // //           .select('*')
// // // //           .eq('exam_id', examData.id)
// // // //           .eq('is_active', true)
// // // //           .order('created_at', { ascending: true });

// // // //         if (questionsError) {
// // // //           throw new Error('Failed to fetch questions');
// // // //         }

// // // //         const formattedQuestions = questionsData.map(q => ({
// // // //           id: q.id,
// // // //           shortQuestion: q.shortquestion || q.text?.substring(0, 100) || "Question",
// // // //           shortAnswer: q.shortanswer || "Answer not available",
// // // //           fullQuestion: q.text || "No question text available",
// // // //           options: Array.isArray(q.choices) ? q.choices.map(choice => 
// // // //             typeof choice === 'object' ? choice.text : choice
// // // //           ) : [],
// // // //           correctAnswer: Array.isArray(q.choices) ? 
// // // //             q.choices.findIndex(choice => 
// // // //               typeof choice === 'object' ? choice.isCorrect : false
// // // //             ) : 0,
// // // //           explanation: q.explanation || "No explanation available",
// // // //           subject: q.subject || examData.category,
// // // //           date: q.created_at ? new Date(q.created_at).toLocaleDateString('en-US', {
// // // //             month: 'short',
// // // //             year: '2-digit',
// // // //             day: 'numeric'
// // // //           }) : "Unknown"
// // // //         }));

// // // //         setQuestions(formattedQuestions);
// // // //       } catch (err) {
// // // //         console.error('Error:', err);
// // // //         setError(err.message || 'An unexpected error occurred');
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchExamAndQuestions();
// // // //   }, [examid]);

// // // //   if (loading) {
// // // //     return (
// // // //       <div className="min-h-screen flex flex-col bg-gradient-to-b from-zinc-50 to-white">
// // // //         <Header />
// // // //         <main className="flex-grow container mx-auto px-4 py-8">
// // // //           <div className="max-w-4xl mx-auto space-y-8">
// // // //             <Skeleton className="h-8 w-64" />
// // // //             <Skeleton className="h-4 w-full max-w-lg" />
// // // //             <div className="space-y-6">
// // // //               {[1, 2, 3].map((i) => (
// // // //                 <div key={i} className="bg-white rounded-lg p-6 shadow-sm border border-zinc-100">
// // // //                   <Skeleton className="h-4 w-3/4 mb-4" />
// // // //                   <div className="space-y-3">
// // // //                     <Skeleton className="h-3 w-full" />
// // // //                     <Skeleton className="h-3 w-5/6" />
// // // //                   </div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </main>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   if (error) {
// // // //     return (
// // // //       <div className="min-h-screen flex flex-col bg-gradient-to-b from-zinc-50 to-white">
// // // //         <Header />
// // // //         <main className="flex-grow container mx-auto px-4 py-8">
// // // //           <div className="max-w-md mx-auto">
// // // //             <Alert variant="destructive" className="mb-6">
// // // //               <AlertDescription>{error}</AlertDescription>
// // // //             </Alert>
// // // //             <div className="text-center">
// // // //               <Button asChild variant="outline" className="mx-auto">
// // // //                 <Link href="/exams">
// // // //                   Back to Exams
// // // //                 </Link>
// // // //               </Button>
// // // //             </div>
// // // //           </div>
// // // //         </main>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   if (!exam || questions.length === 0) {
// // // //     return (
// // // //       <div className="min-h-screen flex flex-col bg-gradient-to-b from-zinc-50 to-white">
// // // //         <Header />
// // // //         <main className="flex-grow container mx-auto px-4 py-8">
// // // //           <div className="max-w-md mx-auto text-center">
// // // //             <h2 className="text-xl font-semibold mb-4">No Content Available</h2>
// // // //             <p className="text-zinc-600 mb-6">
// // // //               This exam either doesn't exist or has no questions available.
// // // //             </p>
// // // //             <Button asChild variant="outline">
// // // //               <Link href="/exams">
// // // //                 Browse Other Exams
// // // //               </Link>
// // // //             </Button>
// // // //           </div>
// // // //         </main>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen flex flex-col bg-gradient-to-b from-zinc-50 to-white">
// // // //       <main className="flex-grow">
// // // //         <MCQApp 
// // // //           examName={exam.name} 
// // // //           examId={examid}
// // // //           initialQuestions={questions}
// // // //           loadFromSupabase={false}
// // // //         />
// // // //       </main>
// // // //     </div>
// // // //   );
// // // // }
// // // 'use client';

// // // import { useEffect, useState } from 'react';
// // // import Link from 'next/link';
// // // import { createClient } from '@supabase/supabase-js';
// // // import { Button } from "@/components/ui/button";
// // // import { Skeleton } from "@/components/ui/skeleton";
// // // import { Alert, AlertDescription } from "@/components/ui/alert";
// // // import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// // // import { Rows, SquareStack, FileText } from 'lucide-react';
// // // import Header from "@/components/Header";
// // // import MCQView from '@/components/notes/mcq-view';
// // // import FlashcardView from '@/components/notes/flashcard-view';
// // // import NoteView from '@/components/notes/NoteView';

// // // // Initialize Supabase client
// // // const supabase = createClient(
// // //   process.env.NEXT_PUBLIC_SUPABASE_URL,
// // //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// // // );

// // // export default function ExamContentPage({ params }) {
// // //   const { examid } = params;
// // //   const [exam, setExam] = useState(null);
// // //   const [questions, setQuestions] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [activeView, setActiveView] = useState('mcq');

// // //   useEffect(() => {
// // //     const fetchExamAndQuestions = async () => {
// // //       try {
// // //         setLoading(true);
// // //         setError(null);

// // //         // Fetch exam data
// // //         const { data: examData, error: examError } = await supabase
// // //           .from('exams')
// // //           .select('id, name, category, description')
// // //           .eq('slug', examid)
// // //           .single();

// // //         if (examError) throw new Error('Failed to fetch exam details');
// // //         if (!examData) throw new Error('Exam not found');
        
// // //         setExam(examData);

// // //         // Fetch questions
// // //         const { data: questionsData, error: questionsError } = await supabase
// // //           .from('questions')
// // //           .select('*')
// // //           .eq('exam_id', examData.id)
// // //           .eq('is_active', true)
// // //           .order('created_at', { ascending: true });

// // //         if (questionsError) throw new Error('Failed to fetch questions');

// // //         const formattedQuestions = questionsData.map(q => ({
// // //           id: q.id,
// // //           text: q.text || "No question text available",
// // //           subject: q.subject || examData.category,
// // //           choices: Array.isArray(q.choices) ? q.choices.map(choice => 
// // //             typeof choice === 'object' ? choice.text : choice
// // //           ) : [],
// // //           correctAnswer: Array.isArray(q.choices) ? 
// // //             q.choices.findIndex(choice => typeof choice === 'object' && choice.isCorrect) : 0,
// // //           explanation: q.explanation || "No explanation available",
// // //         }));

// // //         setQuestions(formattedQuestions);
// // //       } catch (err) {
// // //         console.error('Error:', err);
// // //         setError(err.message || 'An unexpected error occurred');
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchExamAndQuestions();
// // //   }, [examid]);

// // //   const renderContent = () => {
// // //     switch (activeView) {
// // //       case 'flashcards':
// // //         return <FlashcardView examId={examid} />;
// // //       case 'notes':
// // //         return <NoteView examId={examid} />;
// // //       case 'mcq':
// // //       default:
// // //         return <MCQView questions={questions} />;
// // //     }
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <div className="min-h-screen flex flex-col bg-gradient-to-b from-zinc-50 to-white">
// // //         <Header />
// // //         <main className="flex-grow container mx-auto px-4 py-8">
// // //           <div className="max-w-4xl mx-auto space-y-8">
// // //             <Skeleton className="h-8 w-64" />
// // //             <div className="space-y-6">
// // //               {[1, 2, 3].map((i) => (
// // //                 <div key={i} className="bg-white rounded-lg p-6 shadow-sm border border-zinc-100">
// // //                   <Skeleton className="h-4 w-3/4 mb-4" />
// // //                   <div className="space-y-3">
// // //                     <Skeleton className="h-3 w-full" />
// // //                     <Skeleton className="h-3 w-5/6" />
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </main>
// // //       </div>
// // //     );
// // //   }

// // //   if (error) {
// // //     return (
// // //       <div className="min-h-screen flex flex-col bg-gradient-to-b from-zinc-50 to-white">
// // //         <Header />
// // //         <main className="flex-grow container mx-auto px-4 py-8">
// // //           <div className="max-w-md mx-auto">
// // //             <Alert variant="destructive" className="mb-6">
// // //               <AlertDescription>{error}</AlertDescription>
// // //             </Alert>
// // //             <div className="text-center">
// // //               <Button asChild variant="outline" className="mx-auto">
// // //                 <Link href="/exams">Back to Exams</Link>
// // //               </Button>
// // //             </div>
// // //           </div>
// // //         </main>
// // //       </div>
// // //     );
// // //   }

// // //   if (!exam || questions.length === 0) {
// // //     return (
// // //       <div className="min-h-screen flex flex-col bg-gradient-to-b from-zinc-50 to-white">
// // //         <Header />
// // //         <main className="flex-grow container mx-auto px-4 py-8">
// // //           <div className="max-w-md mx-auto text-center">
// // //             <h2 className="text-xl font-semibold mb-4">No Content Available</h2>
// // //             <p className="text-zinc-600 mb-6">
// // //               This exam either doesn't exist or has no questions available.
// // //             </p>
// // //             <Button asChild variant="outline">
// // //               <Link href="/exams">Browse Other Exams</Link>
// // //             </Button>
// // //           </div>
// // //         </main>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen flex flex-col bg-gradient-to-b from-zinc-50 to-white">
// // //       <Header />
// // //       <main className="flex-grow">
// // //         <div className="space-y-8">
// // //           {/* Back to Exam */}
// // //           <div className="container mx-auto px-4 py-4">
// // //             <Link 
// // //               href={`/exams/${examid}`}
// // //               className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
// // //             >
// // //               ← Back to {exam.name}
// // //             </Link>
// // //           </div>

// // //           {/* Tabs Navigation */}
// // //           <div className="border-b">
// // //             <div className="container mx-auto px-4">
// // //               <Tabs
// // //                 value={activeView}
// // //                 onValueChange={setActiveView}
// // //                 className="w-full"
// // //               >
// // //                 <TabsList className="inline-flex h-14 items-center justify-center rounded-none border-b bg-transparent p-0">
// // //                   <TabsTrigger
// // //                     value="mcq"
// // //                     className="inline-flex items-center justify-center rounded-none border-b-2 border-transparent px-6 py-4 text-sm font-medium text-muted-foreground ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
// // //                   >
// // //                     <Rows className="mr-2 h-4 w-4" />
// // //                     MCQ
// // //                   </TabsTrigger>
// // //                   <TabsTrigger
// // //                     value="flashcards"
// // //                     className="inline-flex items-center justify-center rounded-none border-b-2 border-transparent px-6 py-4 text-sm font-medium text-muted-foreground ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
// // //                   >
// // //                     <SquareStack className="mr-2 h-4 w-4" />
// // //                     Flashcards
// // //                   </TabsTrigger>
// // //                   <TabsTrigger
// // //                     value="notes"
// // //                     className="inline-flex items-center justify-center rounded-none border-b-2 border-transparent px-6 py-4 text-sm font-medium text-muted-foreground ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
// // //                   >
// // //                     <FileText className="mr-2 h-4 w-4" />
// // //                     Notes
// // //                   </TabsTrigger>
// // //                 </TabsList>
// // //               </Tabs>
// // //             </div>
// // //           </div>

// // //           {/* Content Area */}
// // //           <div>
// // //             {renderContent()}
// // //           </div>
// // //         </div>
// // //       </main>
// // //     </div>
// // //   );
// // // }

// // 'use client';

// // import { useEffect, useState } from 'react';
// // import Link from 'next/link';
// // import { createClient } from '@supabase/supabase-js';
// // import { Button } from "@/components/ui/button";
// // import { Alert, AlertDescription } from "@/components/ui/alert";
// // import Header from "@/components/Header";
// // import ExamHeader from "@/components/notes/ExamHeader";
// // import MCQView from '@/components/notes/mcq-view';
// // import FlashcardView from '@/components/notes/flashcard-view';
// // import NoteView from '@/components/notes/NoteView';

// // // Initialize Supabase client
// // const supabase = createClient(
// //   process.env.NEXT_PUBLIC_SUPABASE_URL,
// //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// // );

// // export default function ExamContentPage({ params }) {
// //   const { examid } = params;
// //   const [exam, setExam] = useState(null);
// //   const [questions, setQuestions] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [activeView, setActiveView] = useState('mcq');
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [selectedFilter, setSelectedFilter] = useState('all');
// //   const [stats, setStats] = useState({
// //     total: 0,
// //     correct: 0,
// //     incorrect: 0,
// //     remaining: 0
// //   });

// //   useEffect(() => {
// //     const fetchExamAndQuestions = async () => {
// //       try {
// //         setLoading(true);
// //         setError(null);

// //         // Fetch exam data
// //         const { data: examData, error: examError } = await supabase
// //           .from('exams')
// //           .select('id, name, category, description')
// //           .eq('slug', examid)
// //           .single();

// //         if (examError) throw new Error('Failed to fetch exam details');
// //         if (!examData) throw new Error('Exam not found');
        
// //         setExam(examData);

// //         // Fetch questions
// //         const { data: questionsData, error: questionsError } = await supabase
// //           .from('questions')
// //           .select('*')
// //           .eq('exam_id', examData.id)
// //           .eq('is_active', true)
// //           .order('created_at', { ascending: true });

// //         if (questionsError) throw new Error('Failed to fetch questions');

// //         const formattedQuestions = questionsData.map(q => ({
// //           id: q.id,
// //           text: q.text || "No question text available",
// //           subject: q.subject || examData.category,
// //           choices: Array.isArray(q.choices) ? q.choices.map(choice => 
// //             typeof choice === 'object' ? choice.text : choice
// //           ) : [],
// //           correctAnswer: Array.isArray(q.choices) ? 
// //             q.choices.findIndex(choice => typeof choice === 'object' && choice.isCorrect) : 0,
// //           explanation: q.explanation || "No explanation available",
// //         }));

// //         setQuestions(formattedQuestions);
// //         setStats({
// //           total: formattedQuestions.length,
// //           correct: 0,
// //           incorrect: 0,
// //           remaining: formattedQuestions.length
// //         });
// //       } catch (err) {
// //         console.error('Error:', err);
// //         setError(err.message || 'An unexpected error occurred');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchExamAndQuestions();
// //   }, [examid]);

// //   const renderContent = () => {
// //     switch (activeView) {
// //       case 'flashcards':
// //         return <FlashcardView examId={examid} />;
// //       case 'notes':
// //         return <NoteView examId={examid} />;
// //       case 'mcq':
// //       default:
// //         return <MCQView 
// //           questions={questions} 
// //           searchQuery={searchQuery}
// //           selectedFilter={selectedFilter}
// //           onStatsChange={setStats}
// //         />;
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen flex flex-col bg-white">
// //         <div className="animate-pulse">
// //           <ExamHeader 
// //             examName="Loading..."
// //             activeView={activeView}
// //             onViewChange={() => {}}
// //             stats={{
// //               total: 0,
// //               correct: 0,
// //               incorrect: 0,
// //               remaining: 0
// //             }}
// //           />
// //         </div>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="min-h-screen flex flex-col bg-white">
// //         <Header />
// //         <main className="flex-grow container mx-auto px-4 py-8">
// //           <div className="max-w-md mx-auto">
// //             <Alert variant="destructive" className="mb-6">
// //               <AlertDescription>{error}</AlertDescription>
// //             </Alert>
// //             <div className="text-center">
// //               <Button asChild variant="outline" className="mx-auto">
// //                 <Link href="/exams">Back to Exams</Link>
// //               </Button>
// //             </div>
// //           </div>
// //         </main>
// //       </div>
// //     );
// //   }

// //   if (!exam || questions.length === 0) {
// //     return (
// //       <div className="min-h-screen flex flex-col bg-white">
// //         <main className="flex-grow container mx-auto px-4 py-8">
// //           <div className="max-w-md mx-auto text-center">
// //             <h2 className="text-xl font-semibold mb-4">No Content Available</h2>
// //             <p className="text-zinc-600 mb-6">
// //               This exam either doesn't exist or has no questions available.
// //             </p>
// //             <Button asChild variant="outline">
// //               <Link href="/exams">Browse Other Exams</Link>
// //             </Button>
// //           </div>
// //         </main>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen flex flex-col bg-white">
// //       <ExamHeader 
// //         examName={exam.name}
// //         activeView={activeView}
// //         onViewChange={setActiveView}
// //         searchQuery={searchQuery}
// //         onSearchChange={setSearchQuery}
// //         selectedFilter={selectedFilter}
// //         onFilterChange={setSelectedFilter}
// //         stats={stats}
// //       />
// //       <main className="flex-grow">
// //         {/* Back to Exam */}
// //         <div className="container mx-auto px-4 py-4">
// //           <Link 
// //             href={`/exams/${examid}`}
// //             className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
// //           >
// //             ← Back to {exam.name}
// //           </Link>
// //         </div>

// //         {/* Content Area */}
// //         <div className="py-6">
// //           {renderContent()}
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }
// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { createClient } from '@supabase/supabase-js';
// import { Button } from "@/components/ui/button";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import Header from "@/components/Header";
// import ExamHeader from "@/components/notes/ExamHeader";
// import MCQView from '@/components/notes/mcq-view';
// import FlashcardView from '@/components/notes/flashcard-view';
// import NoteView from '@/components/notes/NoteView';

// // Initialize Supabase client
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// );

// export default function ExamContentPage({ params }) {
//   const { examid } = params;
//   const [exam, setExam] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeView, setActiveView] = useState('mcq');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedFilter, setSelectedFilter] = useState('all');
//   const [stats, setStats] = useState({
//     total: 0,
//     correct: 0,
//     incorrect: 0,
//     remaining: 0
//   });

//   useEffect(() => {
//     const fetchExamAndQuestions = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         // Fetch exam data
//         const { data: examData, error: examError } = await supabase
//           .from('exams')
//           .select('id, name, category, description')
//           .eq('slug', examid)
//           .single();

//         if (examError) throw new Error('Failed to fetch exam details');
//         if (!examData) throw new Error('Exam not found');
        
//         setExam(examData);

//         // Fetch questions
//         const { data: questionsData, error: questionsError } = await supabase
//           .from('questions')
//           .select('*')
//           .eq('exam_id', examData.id)
//           .eq('is_active', true)
//           .order('created_at', { ascending: true });

//         if (questionsError) throw new Error('Failed to fetch questions');

//         const formattedQuestions = questionsData.map(q => ({
//           id: q.id,
//           text: q.text || "No question text available",
//           subject: q.subject || examData.category,
//           choices: Array.isArray(q.choices) ? q.choices.map(choice => 
//             typeof choice === 'object' ? choice.text : choice
//           ) : [],
//           correctAnswer: Array.isArray(q.choices) ? 
//             q.choices.findIndex(choice => typeof choice === 'object' && choice.isCorrect) : 0,
//           explanation: q.explanation || "No explanation available",
//         }));

//         setQuestions(formattedQuestions);
//         setStats({
//           total: formattedQuestions.length,
//           correct: 0,
//           incorrect: 0,
//           remaining: formattedQuestions.length
//         });
//       } catch (err) {
//         console.error('Error:', err);
//         setError(err.message || 'An unexpected error occurred');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchExamAndQuestions();
//   }, [examid]);

//   const renderContent = () => {
//     switch (activeView) {
//       case 'flashcards':
//         return <FlashcardView examId={examid} />;
//       case 'notes':
//         return <NoteView examId={examid} />;
//       case 'mcq':
//       default:
//         return <MCQView 
//           questions={questions} 
//           searchQuery={searchQuery}
//           selectedFilter={selectedFilter}
//           onStatsChange={setStats}
//         />;
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex flex-col bg-white">
//         <div className="animate-pulse">
//           <ExamHeader 
//             examName="Loading..."
//             activeView={activeView}
//             onViewChange={() => {}}
//             stats={{
//               total: 0,
//               correct: 0,
//               incorrect: 0,
//               remaining: 0
//             }}
//           />
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex flex-col bg-white">
//         <Header />
//         <main className="flex-grow container mx-auto px-4 py-8">
//           <div className="max-w-md mx-auto">
//             <Alert variant="destructive" className="mb-6">
//               <AlertDescription>{error}</AlertDescription>
//             </Alert>
//             <div className="text-center">
//               <Button asChild variant="outline" className="mx-auto">
//                 <Link href="/exams">Back to Exams</Link>
//               </Button>
//             </div>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   if (!exam || questions.length === 0) {
//     return (
//       <div className="min-h-screen flex flex-col bg-white">
//         <main className="flex-grow container mx-auto px-4 py-8">
//           <div className="max-w-md mx-auto text-center">
//             <h2 className="text-xl font-semibold mb-4">No Content Available</h2>
//             <p className="text-zinc-600 mb-6">
//               This exam either doesn&apos;t exist or has no questions available.
//             </p>
//             <Button asChild variant="outline">
//               <Link href="/exams">Browse Other Exams</Link>
//             </Button>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex flex-col bg-white">
//       <ExamHeader 
//         examName={exam.name}
//         activeView={activeView}
//         onViewChange={setActiveView}
//         searchQuery={searchQuery}
//         onSearchChange={setSearchQuery}
//         selectedFilter={selectedFilter}
//         onFilterChange={setSelectedFilter}
//         stats={stats}
//       />
//       <main className="flex-grow">
//         {/* Back to Exam */}
//         <div className="container mx-auto px-4 py-4">
//           <Link 
//             href={`/exams/${examid}`}
//             className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
//           >
//             ← Back to {exam.name}
//           </Link>
//         </div>

//         {/* Content Area */}
//         <div className="py-6">
//           {renderContent()}
//         </div>
//       </main>
//     </div>
//   );
// }