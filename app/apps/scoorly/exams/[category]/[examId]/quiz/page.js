// // // // app/apps/scoorly/exams/[category]/[examId]/quiz/page.js
// // // "use client"

// // // import { useState, useEffect } from 'react'
// // // import Link from 'next/link'
// // // import { 
// // //   ChevronLeft, 
// // //   ChevronRight, 
// // //   Clock, 
// // //   Flag,
// // //   HelpCircle, 
// // //   CheckCircle, 
// // //   XCircle,
// // //   AlertTriangle,
// // //   X,
// // //   Menu,
// // //   Home,
// // //   CheckSquare
// // // } from 'lucide-react'

// // // // Mock exam questions
// // // const mockQuestions = {
// // //   "firefighter": [
// // //     {
// // //       id: 1,
// // //       question: "What type of fire extinguisher is used for Class A fires?",
// // //       options: [
// // //         "Carbon Dioxide (CO2)",
// // //         "Water",
// // //         "Dry Chemical",
// // //         "Halon"
// // //       ],
// // //       correctAnswer: 1, // Index of correct answer
// // //       explanation: "Water extinguishers are suitable for Class A fires, which involve ordinary combustible materials such as wood, paper, cloth, and some plastics.",
// // //       selectedOption: null
// // //     },
// // //     {
// // //       id: 2,
// // //       question: "Which of the following is NOT a component of the fire tetrahedron?",
// // //       options: [
// // //         "Fuel",
// // //         "Heat",
// // //         "Chemical Chain Reaction",
// // //         "Pressure"
// // //       ],
// // //       correctAnswer: 3,
// // //       explanation: "The fire tetrahedron consists of fuel, heat, oxygen, and chemical chain reaction. Pressure is not one of the components.",
// // //       selectedOption: null
// // //     },
// // //     {
// // //       id: 3,
// // //       question: "What is the primary purpose of a self-contained breathing apparatus (SCBA)?",
// // //       options: [
// // //         "To provide clean air in smoke-filled environments",
// // //         "To reduce firefighter fatigue",
// // //         "To improve communication between firefighters",
// // //         "To monitor vital signs during firefighting operations"
// // //       ],
// // //       correctAnswer: 0,
// // //       explanation: "The primary purpose of an SCBA is to provide clean, breathable air to firefighters operating in smoke-filled or toxic environments.",
// // //       selectedOption: null
// // //     },
// // //     {
// // //       id: 4,
// // //       question: "What is the recommended technique for carrying a victim down a ladder?",
// // //       options: [
// // //         "Piggyback carry",
// // //         "Cradle carry",
// // //         "Firefighter's carry",
// // //         "Chair carry"
// // //       ],
// // //       correctAnswer: 2,
// // //       explanation: "The firefighter's carry is the recommended method for carrying a victim down a ladder as it provides the most stability and security for both the rescuer and victim.",
// // //       selectedOption: null
// // //     },
// // //     {
// // //       id: 5,
// // //       question: "Which of the following building materials has the highest fire resistance rating?",
// // //       options: [
// // //         "Wood",
// // //         "Concrete",
// // //         "Steel",
// // //         "Glass"
// // //       ],
// // //       correctAnswer: 1,
// // //       explanation: "Concrete has the highest fire resistance rating among these materials. It is non-combustible and has low thermal conductivity.",
// // //       selectedOption: null
// // //     }
// // //   ],
// // //   "nremt-paramedic": [
// // //     {
// // //       id: 1,
// // //       question: "Which of the following is the most appropriate initial action for a patient with severe anaphylaxis?",
// // //       options: [
// // //         "Administer oral antihistamines",
// // //         "Start an IV of normal saline",
// // //         "Administer epinephrine",
// // //         "Apply supplemental oxygen"
// // //       ],
// // //       correctAnswer: 2,
// // //       explanation: "Epinephrine is the first-line treatment for severe anaphylaxis due to its ability to rapidly reverse symptoms by constricting blood vessels, relaxing airway muscles, and suppressing the immune response.",
// // //       selectedOption: null
// // //     },
// // //     {
// // //       id: 2,
// // //       question: "What is the correct dosage of epinephrine 1:10,000 for an adult patient in cardiac arrest?",
// // //       options: [
// // //         "0.5 mg IV/IO every 3-5 minutes",
// // //         "1 mg IV/IO every 3-5 minutes",
// // //         "2 mg IV/IO every 3-5 minutes",
// // //         "3 mg IV/IO every 3-5 minutes"
// // //       ],
// // //       correctAnswer: 1,
// // //       explanation: "The correct dosage of epinephrine 1:10,000 for an adult in cardiac arrest is 1 mg IV/IO every 3-5 minutes of CPR.",
// // //       selectedOption: null
// // //     }
// // //   ]
// // // };

// // // // Default questions if exam not found
// // // const defaultQuestions = [
// // //   {
// // //     id: 1,
// // //     question: "Sample question 1",
// // //     options: ["Option A", "Option B", "Option C", "Option D"],
// // //     correctAnswer: 0,
// // //     explanation: "This is a sample explanation.",
// // //     selectedOption: null
// // //   },
// // //   {
// // //     id: 2,
// // //     question: "Sample question 2",
// // //     options: ["Option A", "Option B", "Option C", "Option D"],
// // //     correctAnswer: 1,
// // //     explanation: "This is a sample explanation.",
// // //     selectedOption: null
// // //   }
// // // ];

// // // export default function QuizPage({ params }) {
// // //   const { category, examId } = params;
  
// // //   // Get questions for the exam
// // //   const questions = mockQuestions[examId] || defaultQuestions;
  
// // //   // State management
// // //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// // //   const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
// // //   const [showExplanation, setShowExplanation] = useState(false);
// // //   const [quizCompleted, setQuizCompleted] = useState(false);
// // //   const [timeRemaining, setTimeRemaining] = useState(60 * 60); // 60 minutes in seconds
// // //   const [showSidebar, setShowSidebar] = useState(false);
// // //   const [flaggedQuestions, setFlaggedQuestions] = useState([]);

// // //   // Format time remaining
// // //   const formatTime = (seconds) => {
// // //     const minutes = Math.floor(seconds / 60);
// // //     const remainingSeconds = seconds % 60;
// // //     return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
// // //   };

// // //   // Timer effect
// // //   useEffect(() => {
// // //     if (!quizCompleted && timeRemaining > 0) {
// // //       const timer = setTimeout(() => {
// // //         setTimeRemaining(prevTime => prevTime - 1);
// // //       }, 1000);
      
// // //       return () => clearTimeout(timer);
// // //     } else if (timeRemaining === 0 && !quizCompleted) {
// // //       setQuizCompleted(true);
// // //     }
// // //   }, [timeRemaining, quizCompleted]);
  
// // //   // Navigate to the next question
// // //   const goToNextQuestion = () => {
// // //     if (currentQuestionIndex < questions.length - 1) {
// // //       setCurrentQuestionIndex(prevIndex => prevIndex + 1);
// // //       setShowExplanation(false);
// // //     }
// // //   };
  
// // //   // Navigate to the previous question
// // //   const goToPreviousQuestion = () => {
// // //     if (currentQuestionIndex > 0) {
// // //       setCurrentQuestionIndex(prevIndex => prevIndex - 1);
// // //       setShowExplanation(false);
// // //     }
// // //   };
  
// // //   // Go to a specific question
// // //   const goToQuestion = (index) => {
// // //     setCurrentQuestionIndex(index);
// // //     setShowExplanation(false);
// // //     setShowSidebar(false);
// // //   };
  
// // //   // Handle answer selection
// // //   const handleSelectAnswer = (optionIndex) => {
// // //     if (quizCompleted) return;
    
// // //     const newUserAnswers = [...userAnswers];
// // //     newUserAnswers[currentQuestionIndex] = optionIndex;
// // //     setUserAnswers(newUserAnswers);
// // //   };
  
// // //   // Toggle flag for current question
// // //   const toggleFlagQuestion = () => {
// // //     setFlaggedQuestions(prev => {
// // //       if (prev.includes(currentQuestionIndex)) {
// // //         return prev.filter(index => index !== currentQuestionIndex);
// // //       } else {
// // //         return [...prev, currentQuestionIndex];
// // //       }
// // //     });
// // //   };
  
// // //   // Submit quiz
// // //   const handleSubmitQuiz = () => {
// // //     setQuizCompleted(true);
// // //   };
  
// // //   // Check if all questions are answered
// // //   const allQuestionsAnswered = userAnswers.every(answer => answer !== null);
  
// // //   // Calculate score
// // //   const calculateScore = () => {
// // //     let correctCount = 0;
// // //     userAnswers.forEach((answer, index) => {
// // //       if (answer === questions[index].correctAnswer) {
// // //         correctCount++;
// // //       }
// // //     });
// // //     return {
// // //       correct: correctCount,
// // //       total: questions.length,
// // //       percentage: Math.round((correctCount / questions.length) * 100)
// // //     };
// // //   };
  
// // //   // Current question
// // //   const currentQuestion = questions[currentQuestionIndex];
  
// // //   return (
// // //     <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">
// // //       {/* Quiz Header */}
// // //       <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 py-3 px-4">
// // //         <div className="max-w-6xl mx-auto flex justify-between items-center">
// // //           <div className="flex items-center">
// // //             <button 
// // //               onClick={() => setShowSidebar(!showSidebar)}
// // //               className="p-2 mr-3 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 lg:hidden"
// // //             >
// // //               <Menu className="h-5 w-5" />
// // //             </button>
// // //             <Link 
// // //               href={`/apps/scoorly/exams/${category}/${examId}`}
// // //               className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
// // //             >
// // //               <ChevronLeft className="h-4 w-4 mr-1" />
// // //               Exit Quiz
// // //             </Link>
// // //           </div>
          
// // //           <div className="flex items-center">
// // //             <div className="flex items-center mr-6 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
// // //               <Clock className="h-4 w-4 text-slate-500 dark:text-slate-400 mr-2" />
// // //               <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
// // //                 {formatTime(timeRemaining)}
// // //               </span>
// // //             </div>
// // //             <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
// // //               Question {currentQuestionIndex + 1} of {questions.length}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </header>
      
// // //       <div className="flex flex-1">
// // //         {/* Sidebar - Question Navigator */}
// // //         <aside className={`fixed inset-0 z-20 transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 w-72 overflow-y-auto lg:block`}>
// // //           <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
// // //             <h2 className="font-semibold text-slate-900 dark:text-white">Questions</h2>
// // //             <button 
// // //               onClick={() => setShowSidebar(false)}
// // //               className="p-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 lg:hidden"
// // //             >
// // //               <X className="h-5 w-5" />
// // //             </button>
// // //           </div>
          
// // //           <div className="p-4 grid grid-cols-5 gap-2">
// // //             {questions.map((_, index) => (
// // //               <button
// // //                 key={index}
// // //                 className={`h-10 w-10 flex items-center justify-center rounded-lg font-medium 
// // //                   ${currentQuestionIndex === index ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300' : 
// // //                     userAnswers[index] !== null ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300' : 
// // //                     'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'}
// // //                   ${flaggedQuestions.includes(index) ? 'ring-2 ring-orange-400 dark:ring-orange-500' : ''}
// // //                 `}
// // //                 onClick={() => goToQuestion(index)}
// // //               >
// // //                 {index + 1}
// // //               </button>
// // //             ))}
// // //           </div>
          
// // //           <div className="p-4 border-t border-slate-200 dark:border-slate-700">
// // //             <div className="flex items-center mb-4">
// // //               <div className="h-4 w-4 bg-blue-100 dark:bg-blue-900 rounded mr-2"></div>
// // //               <span className="text-sm text-slate-600 dark:text-slate-400">Current Question</span>
// // //             </div>
// // //             <div className="flex items-center mb-4">
// // //               <div className="h-4 w-4 bg-green-100 dark:bg-green-900 rounded mr-2"></div>
// // //               <span className="text-sm text-slate-600 dark:text-slate-400">Answered</span>
// // //             </div>
// // //             <div className="flex items-center">
// // //               <div className="h-4 w-4 bg-slate-100 dark:bg-slate-700 rounded ring-2 ring-orange-400 dark:ring-orange-500 mr-2"></div>
// // //               <span className="text-sm text-slate-600 dark:text-slate-400">Flagged</span>
// // //             </div>
// // //           </div>
// // //         </aside>
        
// // //         {/* Main Quiz Content */}
// // //         <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
// // //           <div className="max-w-3xl mx-auto">
// // //             {!quizCompleted ? (
// // //               <>
// // //                 {/* Question Card */}
// // //                 <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 mb-6">
// // //                   {/* Question Header */}
// // //                   <div className="border-b border-slate-200 dark:border-slate-700 px-6 py-4 flex justify-between items-center">
// // //                     <div className="text-lg font-semibold text-slate-900 dark:text-white">
// // //                       Question {currentQuestionIndex + 1}
// // //                     </div>
// // //                     <button 
// // //                       onClick={toggleFlagQuestion}
// // //                       className={`p-1.5 rounded-full ${flaggedQuestions.includes(currentQuestionIndex) ? 'bg-orange-100 text-orange-500 dark:bg-orange-900/50 dark:text-orange-400' : 'text-slate-400 hover:text-orange-500 dark:text-slate-500 dark:hover:text-orange-400'}`}
// // //                       title={flaggedQuestions.includes(currentQuestionIndex) ? "Unflag this question" : "Flag this question for review"}
// // //                     >
// // //                       <Flag className="h-5 w-5" />
// // //                     </button>
// // //                   </div>
                  
// // //                   {/* Question Content */}
// // //                   <div className="px-6 py-5">
// // //                     <p className="text-slate-900 dark:text-white mb-6">
// // //                       {currentQuestion.question}
// // //                     </p>
                    
// // //                     {/* Answer Options */}
// // //                     <div className="space-y-3">
// // //                       {currentQuestion.options.map((option, index) => (
// // //                         <button
// // //                           key={index}
// // //                           onClick={() => handleSelectAnswer(index)}
// // //                           className={`w-full text-left p-4 rounded-lg border ${
// // //                             userAnswers[currentQuestionIndex] === index
// // //                               ? 'bg-blue-50 border-blue-300 dark:bg-blue-900/30 dark:border-blue-700'
// // //                               : 'border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600'
// // //                           }`}
// // //                         >
// // //                           <div className="flex items-start">
// // //                             <div className={`flex-shrink-0 h-5 w-5 mr-3 mt-0.5 rounded-full border ${
// // //                               userAnswers[currentQuestionIndex] === index
// // //                                 ? 'border-blue-600 bg-blue-600 dark:border-blue-500 dark:bg-blue-500'
// // //                                 : 'border-slate-300 dark:border-slate-600'
// // //                             } flex items-center justify-center`}>
// // //                               {userAnswers[currentQuestionIndex] === index && (
// // //                                 <div className="h-2 w-2 rounded-full bg-white"></div>
// // //                               )}
// // //                             </div>
// // //                             <span className={`${
// // //                               userAnswers[currentQuestionIndex] === index
// // //                                 ? 'text-blue-700 dark:text-blue-300'
// // //                                 : 'text-slate-700 dark:text-slate-300'
// // //                             }`}>
// // //                               {option}
// // //                             </span>
// // //                           </div>
// // //                         </button>
// // //                       ))}
// // //                     </div>
// // //                   </div>
                  
// // //                   {/* Explanation (if shown) */}
// // //                   {showExplanation && (
// // //                     <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
// // //                       <div className="flex items-start">
// // //                         <div className={`p-1 rounded-full mr-2 mt-0.5 ${
// // //                           userAnswers[currentQuestionIndex] === currentQuestion.correctAnswer
// // //                             ? 'bg-green-100 dark:bg-green-900/30'
// // //                             : 'bg-red-100 dark:bg-red-900/30'
// // //                         }`}>
// // //                           {userAnswers[currentQuestionIndex] === currentQuestion.correctAnswer ? (
// // //                             <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
// // //                           ) : (
// // //                             <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
// // //                           )}
// // //                         </div>
// // //                         <div>
// // //                           <p className={`font-medium ${
// // //                             userAnswers[currentQuestionIndex] === currentQuestion.correctAnswer
// // //                               ? 'text-green-600 dark:text-green-400'
// // //                               : 'text-red-600 dark:text-red-400'
// // //                           }`}>
// // //                             {userAnswers[currentQuestionIndex] === currentQuestion.correctAnswer
// // //                               ? 'Correct!'
// // //                               : 'Incorrect. The correct answer is: ' + currentQuestion.options[currentQuestion.correctAnswer]
// // //                             }
// // //                           </p>
// // //                           <p className="mt-2 text-slate-600 dark:text-slate-400">
// // //                             {currentQuestion.explanation}
// // //                           </p>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   )}
// // //                 </div>
                
// // //                 {/* Quiz Controls */}
// // //                 <div className="flex justify-between items-center">
// // //                   <button
// // //                     onClick={goToPreviousQuestion}
// // //                     disabled={currentQuestionIndex === 0}
// // //                     className={`px-4 py-2 flex items-center rounded-lg border border-slate-300 dark:border-slate-700 ${
// // //                       currentQuestionIndex === 0
// // //                         ? 'text-slate-400 dark:text-slate-600 cursor-not-allowed'
// // //                         : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
// // //                     }`}
// // //                   >
// // //                     <ChevronLeft className="h-5 w-5 mr-1" />
// // //                     Previous
// // //                   </button>
                  
// // //                   <div className="flex gap-2">
// // //                     {userAnswers[currentQuestionIndex] !== null && !showExplanation && (
// // //                       <button
// // //                         onClick={() => setShowExplanation(true)}
// // //                         className="px-4 py-2 flex items-center text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
// // //                       >
// // //                         <HelpCircle className="h-5 w-5 mr-1" />
// // //                         Show Explanation
// // //                       </button>
// // //                     )}
                    
// // //                     {currentQuestionIndex === questions.length - 1 ? (
// // //                       <button
// // //                         onClick={handleSubmitQuiz}
// // //                         disabled={!allQuestionsAnswered}
// // //                         className={`px-6 py-2 rounded-lg font-medium ${
// // //                           allQuestionsAnswered
// // //                             ? 'bg-blue-600 hover:bg-blue-700 text-white'
// // //                             : 'bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-600 cursor-not-allowed'
// // //                         }`}
// // //                       >
// // //                         Submit Quiz
// // //                       </button>
// // //                     ) : (
// // //                       <button
// // //                         onClick={goToNextQuestion}
// // //                         className="px-4 py-2 flex items-center text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
// // //                       >
// // //                         Next
// // //                         <ChevronRight className="h-5 w-5 ml-1" />
// // //                       </button>
// // //                     )}
// // //                   </div>
// // //                 </div>
// // //               </>
// // //             ) : (
// // //               /* Quiz Results */
// // //               <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
// // //                 <div className="text-center mb-6">
// // //                   <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Quiz Completed!</h2>
// // //                   <p className="text-slate-600 dark:text-slate-400">
// // //                     You've completed the exam. Here's your score:
// // //                   </p>
// // //                 </div>
                
// // //                 <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg mb-6">
// // //                   <div className="text-center">
// // //                     <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
// // //                       {calculateScore().percentage}%
// // //                     </div>
// // //                     <p className="text-slate-600 dark:text-slate-400">
// // //                       {calculateScore().correct} correct out of {calculateScore().total} questions
// // //                     </p>
// // //                   </div>
                  
// // //                   <div className="mt-6 h-3 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
// // //                     <div
// // //                       className={`h-full ${
// // //                         calculateScore().percentage >= 70
// // //                           ? 'bg-green-500'
// // //                           : calculateScore().percentage >= 50
// // //                             ? 'bg-yellow-500'
// // //                             : 'bg-red-500'
// // //                       }`}
// // //                       style={{ width: `${calculateScore().percentage}%` }}
// // //                     ></div>
// // //                   </div>
                  
// // //                   <div className="mt-4 flex justify-between text-sm text-slate-500 dark:text-slate-400">
// // //                     <span>0%</span>
// // //                     <span>Passing: 70%</span>
// // //                     <span>100%</span>
// // //                   </div>
// // //                 </div>
                
// // //                 <div className="space-y-3 mb-6">
// // //                   {calculateScore().percentage >= 70 ? (
// // //                     <div className="flex p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg">
// // //                       <CheckCircle className="h-5 w-5 mt-0.5 mr-3" />
// // //                       <div>
// // //                         <p className="font-medium">Congratulations!</p>
// // //                         <p>You've passed the exam with a score of {calculateScore().percentage}%.</p>
// // //                       </div>
// // //                     </div>
// // //                   ) : (
// // //                     <div className="flex p-4 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 rounded-lg">
// // //                       <AlertTriangle className="h-5 w-5 mt-0.5 mr-3" />
// // //                       <div>
// // //                         <p className="font-medium">Not quite there yet</p>
// // //                         <p>You need 70% to pass. Try again after reviewing the material.</p>
// // //                       </div>
// // //                     </div>
// // //                   )}
// // //                 </div>
                
// // //                 <div className="flex flex-col sm:flex-row gap-3 justify-center">
// // //                   <Link
// // //                     href={`/apps/scoorly/exams/${category}/${examId}`}
// // //                     className="py-2.5 px-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 text-center"
// // //                   >
// // //                     Back to Exam
// // //                   </Link>
// // //                   <button
// // //                     onClick={() => {
// // //                       setCurrentQuestionIndex(0);
// // //                       setUserAnswers(Array(questions.length).fill(null));
// // //                       setShowExplanation(false);
// // //                       setQuizCompleted(false);
// // //                       setTimeRemaining(60 * 60);
// // //                       setFlaggedQuestions([]);
// // //                     }}
// // //                     className="py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
// // //                   >
// // //                     Retake Quiz
// // //                   </button>
// // //                   <Link
// // //                     href="/apps/scoorly/exams"
// // //                     className="py-2.5 px-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 text-center flex items-center justify-center"
// // //                   >
// // //                     <Home className="h-4 w-4 mr-2" />
// // //                     Back to All Exams
// // //                   </Link>
// // //                 </div>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </main>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // "use client"

// // import { useState, useEffect } from 'react';
// // import { useSearchParams } from 'next/navigation';
// // import QuizHeader from '@/components/quiz/QuizHeader';
// // import QuestionSidebar from '@/components/quiz/QuestionSidebar';
// // import QuestionCard from '@/components/quiz/QuestionCard';
// // import QuizControls from '@/components/quiz/QuizControls';
// // import QuizResults from '@/components/quiz/QuizResults';
// // import LoadingSpinner from '@/components/ui/LoadingSpinner';
// // import ErrorMessage from '@/components/ui/ErrorMessage';

// // // Mock exam questions - in a real app, you'd fetch these from Supabase
// // const mockQuestions = {
// //   "firefighter": [
// //     {
// //       id: 1,
// //       question: "What type of fire extinguisher is used for Class A fires?",
// //       options: [
// //         "Carbon Dioxide (CO2)",
// //         "Water",
// //         "Dry Chemical",
// //         "Halon"
// //       ],
// //       correctAnswer: 1, // Index of correct answer
// //       explanation: "Water extinguishers are suitable for Class A fires, which involve ordinary combustible materials such as wood, paper, cloth, and some plastics.",
// //       selectedOption: null
// //     },
// //     {
// //       id: 2,
// //       question: "Which of the following is NOT a component of the fire tetrahedron?",
// //       options: [
// //         "Fuel",
// //         "Heat",
// //         "Chemical Chain Reaction",
// //         "Pressure"
// //       ],
// //       correctAnswer: 3,
// //       explanation: "The fire tetrahedron consists of fuel, heat, oxygen, and chemical chain reaction. Pressure is not one of the components.",
// //       selectedOption: null
// //     },
// //     {
// //       id: 3,
// //       question: "What is the primary purpose of a self-contained breathing apparatus (SCBA)?",
// //       options: [
// //         "To provide clean air in smoke-filled environments",
// //         "To reduce firefighter fatigue",
// //         "To improve communication between firefighters",
// //         "To monitor vital signs during firefighting operations"
// //       ],
// //       correctAnswer: 0,
// //       explanation: "The primary purpose of an SCBA is to provide clean, breathable air to firefighters operating in smoke-filled or toxic environments.",
// //       selectedOption: null
// //     },
// //     {
// //       id: 4,
// //       question: "What is the recommended technique for carrying a victim down a ladder?",
// //       options: [
// //         "Piggyback carry",
// //         "Cradle carry",
// //         "Firefighter's carry",
// //         "Chair carry"
// //       ],
// //       correctAnswer: 2,
// //       explanation: "The firefighter's carry is the recommended method for carrying a victim down a ladder as it provides the most stability and security for both the rescuer and victim.",
// //       selectedOption: null
// //     },
// //     {
// //       id: 5,
// //       question: "Which of the following building materials has the highest fire resistance rating?",
// //       options: [
// //         "Wood",
// //         "Concrete",
// //         "Steel",
// //         "Glass"
// //       ],
// //       correctAnswer: 1,
// //       explanation: "Concrete has the highest fire resistance rating among these materials. It is non-combustible and has low thermal conductivity.",
// //       selectedOption: null
// //     }
// //   ],
// //   "nremt-paramedic": [
// //     {
// //       id: 1,
// //       question: "Which of the following is the most appropriate initial action for a patient with severe anaphylaxis?",
// //       options: [
// //         "Administer oral antihistamines",
// //         "Start an IV of normal saline",
// //         "Administer epinephrine",
// //         "Apply supplemental oxygen"
// //       ],
// //       correctAnswer: 2,
// //       explanation: "Epinephrine is the first-line treatment for severe anaphylaxis due to its ability to rapidly reverse symptoms by constricting blood vessels, relaxing airway muscles, and suppressing the immune response.",
// //       selectedOption: null
// //     },
// //     {
// //       id: 2,
// //       question: "What is the correct dosage of epinephrine 1:10,000 for an adult patient in cardiac arrest?",
// //       options: [
// //         "0.5 mg IV/IO every 3-5 minutes",
// //         "1 mg IV/IO every 3-5 minutes",
// //         "2 mg IV/IO every 3-5 minutes",
// //         "3 mg IV/IO every 3-5 minutes"
// //       ],
// //       correctAnswer: 1,
// //       explanation: "The correct dosage of epinephrine 1:10,000 for an adult in cardiac arrest is 1 mg IV/IO every 3-5 minutes of CPR.",
// //       selectedOption: null
// //     }
// //   ]
// // };

// // // Default questions if exam not found
// // const defaultQuestions = [
// //   {
// //     id: 1,
// //     question: "Sample question 1",
// //     options: ["Option A", "Option B", "Option C", "Option D"],
// //     correctAnswer: 0,
// //     explanation: "This is a sample explanation.",
// //     selectedOption: null
// //   },
// //   {
// //     id: 2,
// //     question: "Sample question 2",
// //     options: ["Option A", "Option B", "Option C", "Option D"],
// //     correctAnswer: 1,
// //     explanation: "This is a sample explanation.",
// //     selectedOption: null
// //   }
// // ];

// // export default function QuizPage({ params }) {
// //   const { category, examId } = params;
// //   const searchParams = useSearchParams();
  
// //   // Get quiz mode and related params from URL
// //   const quizMode = searchParams.get('mode') || 'practice';
// //   const subjectParam = searchParams.get('subject');
// //   const topicParam = searchParams.get('topic');
  
// //   // Get questions based on exam ID and quiz mode
// //   const getQuestions = () => {
// //     // First try to get questions for the specific exam
// //     const examQuestions = mockQuestions[examId];
    
// //     if (!examQuestions) {
// //       console.log('No specific questions found for this exam, using defaults');
// //       return defaultQuestions;
// //     }
    
// //     // If we have a specific mode, filter questions accordingly
// //     if (quizMode === 'subject' && subjectParam) {
// //       console.log(`Filtering questions for subject: ${subjectParam}`);
// //       // In a real app, you would filter questions by subject
// //       // For now, just return a subset to simulate filtered questions
// //       return examQuestions.slice(0, Math.min(2, examQuestions.length));
// //     }
    
// //     if (quizMode === 'topic' && topicParam) {
// //       console.log(`Filtering questions for topic: ${topicParam}`);
// //       // In a real app, you would filter questions by topic
// //       // For now, just return a subset to simulate filtered questions
// //       return examQuestions.slice(0, Math.min(3, examQuestions.length));
// //     }
    
// //     if (quizMode === 'study') {
// //       console.log('Study mode enabled - will show explanations immediately');
// //       // In study mode, we use all questions but might customize the behavior
// //       return examQuestions;
// //     }
    
// //     // Default for 'self-assessment' or any other mode - return all questions
// //     return examQuestions;
// //   };
  
// //   const questions = getQuestions();
  
// //   // State management
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// //   const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
// //   const [showExplanation, setShowExplanation] = useState(false);
// //   const [quizCompleted, setQuizCompleted] = useState(false);
// //   const [timeRemaining, setTimeRemaining] = useState(60 * 60); // 60 minutes in seconds
// //   const [showSidebar, setShowSidebar] = useState(false);
// //   const [flaggedQuestions, setFlaggedQuestions] = useState([]);

// //   // Timer effect
// //   useEffect(() => {
// //     if (!quizCompleted && timeRemaining > 0) {
// //       const timer = setTimeout(() => {
// //         setTimeRemaining(prevTime => prevTime - 1);
// //       }, 1000);
      
// //       return () => clearTimeout(timer);
// //     } else if (timeRemaining === 0 && !quizCompleted) {
// //       setQuizCompleted(true);
// //     }
// //   }, [timeRemaining, quizCompleted]);

// //   // Set loading false after component mounts
// //   useEffect(() => {
// //     setLoading(false);
// //   }, []);
  
// //   // Navigate to the next question
// //   const goToNextQuestion = () => {
// //     if (currentQuestionIndex < questions.length - 1) {
// //       setCurrentQuestionIndex(prevIndex => prevIndex + 1);
// //       setShowExplanation(false);
// //     }
// //   };
  
// //   // Navigate to the previous question
// //   const goToPreviousQuestion = () => {
// //     if (currentQuestionIndex > 0) {
// //       setCurrentQuestionIndex(prevIndex => prevIndex - 1);
// //       setShowExplanation(false);
// //     }
// //   };
  
// //   // Go to a specific question
// //   const goToQuestion = (index) => {
// //     setCurrentQuestionIndex(index);
// //     setShowExplanation(false);
// //     setShowSidebar(false);
// //   };
  
// //   // Handle answer selection
// //   const handleSelectAnswer = (optionIndex) => {
// //     if (quizCompleted) return;
    
// //     const newUserAnswers = [...userAnswers];
// //     newUserAnswers[currentQuestionIndex] = optionIndex;
// //     setUserAnswers(newUserAnswers);
    
// //     // In study mode, automatically show explanation after answering
// //     if (quizMode === 'study') {
// //       setShowExplanation(true);
// //     }
// //   };
  
// //   // Toggle flag for current question
// //   const toggleFlagQuestion = () => {
// //     setFlaggedQuestions(prev => {
// //       if (prev.includes(currentQuestionIndex)) {
// //         return prev.filter(index => index !== currentQuestionIndex);
// //       } else {
// //         return [...prev, currentQuestionIndex];
// //       }
// //     });
// //   };
  
// //   // Submit quiz
// //   const handleSubmitQuiz = () => {
// //     setQuizCompleted(true);
// //   };
  
// //   // Reset quiz
// //   const resetQuiz = () => {
// //     setCurrentQuestionIndex(0);
// //     setUserAnswers(Array(questions.length).fill(null));
// //     setShowExplanation(false);
// //     setQuizCompleted(false);
// //     setTimeRemaining(60 * 60);
// //     setFlaggedQuestions([]);
// //   };
  
// //   // Check if all questions are answered
// //   const allQuestionsAnswered = userAnswers.every(answer => answer !== null);
  
// //   // Calculate score
// //   const calculateScore = () => {
// //     let correctCount = 0;
// //     userAnswers.forEach((answer, index) => {
// //       if (answer === questions[index].correctAnswer) {
// //         correctCount++;
// //       }
// //     });
// //     return {
// //       correct: correctCount,
// //       total: questions.length,
// //       percentage: Math.round((correctCount / questions.length) * 100)
// //     };
// //   };
  
// //   // Current question
// //   const currentQuestion = questions[currentQuestionIndex];
  
// //   // Show loading state
// //   if (loading) {
// //     return <LoadingSpinner message="Loading quiz..." />;
// //   }
  
// //   // Show error state
// //   if (error) {
// //     return <ErrorMessage 
// //       title="Quiz Error" 
// //       message={error} 
// //       linkText="Back to Exam"
// //       linkHref={`/apps/scoorly/exams/${category}/${examId}`}
// //     />;
// //   }

// //   return (
// //     <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">
// //       {/* Quiz Header */}
// //       <QuizHeader 
// //         category={category}
// //         examId={examId}
// //         timeRemaining={timeRemaining}
// //         currentQuestionIndex={currentQuestionIndex}
// //         totalQuestions={questions.length}
// //         onToggleSidebar={() => setShowSidebar(!showSidebar)}
// //       />
      
// //       <div className="flex flex-1">
// //         {/* Sidebar - Question Navigator */}
// //         <QuestionSidebar 
// //           questions={questions}
// //           currentQuestionIndex={currentQuestionIndex}
// //           userAnswers={userAnswers}
// //           flaggedQuestions={flaggedQuestions}
// //           goToQuestion={goToQuestion}
// //           isVisible={showSidebar}
// //           onToggleSidebar={() => setShowSidebar(false)}
// //         />
        
// //         {/* Main Quiz Content */}
// //         <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
// //           <div className="max-w-3xl mx-auto">
// //             {!quizCompleted ? (
// //               <>
// //                 {/* Question Card */}
// //                 <QuestionCard 
// //                   question={currentQuestion}
// //                   currentQuestionIndex={currentQuestionIndex}
// //                   userAnswer={userAnswers[currentQuestionIndex]}
// //                   handleSelectAnswer={handleSelectAnswer}
// //                   showExplanation={showExplanation}
// //                   flaggedQuestions={flaggedQuestions}
// //                   toggleFlagQuestion={toggleFlagQuestion}
// //                   quizCompleted={quizCompleted}
// //                 />
                
// //                 {/* Quiz Controls */}
// //                 <QuizControls 
// //                   currentQuestionIndex={currentQuestionIndex}
// //                   totalQuestions={questions.length}
// //                   userAnswer={userAnswers[currentQuestionIndex]}
// //                   showExplanation={showExplanation}
// //                   setShowExplanation={setShowExplanation}
// //                   goToPreviousQuestion={goToPreviousQuestion}
// //                   goToNextQuestion={goToNextQuestion}
// //                   handleSubmitQuiz={handleSubmitQuiz}
// //                   allQuestionsAnswered={allQuestionsAnswered}
// //                 />
// //               </>
// //             ) : (
// //               /* Quiz Results */
// //               <QuizResults 
// //                 category={category}
// //                 examId={examId}
// //                 score={calculateScore()}
// //                 resetQuiz={resetQuiz}
// //               />
// //             )}
// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // }
// "use client"

// import { useState, useEffect } from 'react';
// import { useSearchParams } from 'next/navigation';
// import QuizHeader from '@/components/quiz/QuizHeader';

// // Mock exam questions
// const mockQuestions = {
//   "firefighter": [
//     {
//       id: 1,
//       question: "What type of fire extinguisher is used for Class A fires?",
//       options: [
//         "Carbon Dioxide (CO2)",
//         "Water",
//         "Dry Chemical",
//         "Halon"
//       ],
//       correctAnswer: 1,
//       explanation: "Water extinguishers are suitable for Class A fires, which involve ordinary combustible materials such as wood, paper, cloth, and some plastics.",
//       selectedOption: null
//     },
//     {
//       id: 2,
//       question: "Which of the following is NOT a component of the fire tetrahedron?",
//       options: [
//         "Fuel",
//         "Heat",
//         "Chemical Chain Reaction",
//         "Pressure"
//       ],
//       correctAnswer: 3,
//       explanation: "The fire tetrahedron consists of fuel, heat, oxygen, and chemical chain reaction. Pressure is not one of the components.",
//       selectedOption: null
//     },
//     // Additional questions omitted for brevity
//   ],
//   "nremt-paramedic": [
//     {
//       id: 1,
//       question: "Which of the following is the most appropriate initial action for a patient with severe anaphylaxis?",
//       options: [
//         "Administer oral antihistamines",
//         "Start an IV of normal saline",
//         "Administer epinephrine",
//         "Apply supplemental oxygen"
//       ],
//       correctAnswer: 2,
//       explanation: "Epinephrine is the first-line treatment for severe anaphylaxis due to its ability to rapidly reverse symptoms by constricting blood vessels, relaxing airway muscles, and suppressing the immune response.",
//       selectedOption: null
//     },
//     // Additional questions omitted for brevity
//   ]
// };

// // Default questions if exam not found
// const defaultQuestions = [
//   {
//     id: 1,
//     question: "Sample question 1",
//     options: ["Option A", "Option B", "Option C", "Option D"],
//     correctAnswer: 0,
//     explanation: "This is a sample explanation.",
//     selectedOption: null
//   },
//   {
//     id: 2,
//     question: "Sample question 2",
//     options: ["Option A", "Option B", "Option C", "Option D"],
//     correctAnswer: 1,
//     explanation: "This is a sample explanation.",
//     selectedOption: null
//   }
// ];

// export default function QuizPage({ params }) {
//   const { category, examId } = params;
//   const searchParams = useSearchParams();
  
//   // Get quiz mode and related params from URL
//   const quizMode = searchParams.get('mode') || 'practice';
  
//   // Get questions based on exam ID
//   const questions = mockQuestions[examId] || defaultQuestions;
  
//   // State management
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [timeRemaining, setTimeRemaining] = useState(60 * 60); // 60 minutes in seconds
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [showExplanation, setShowExplanation] = useState(false);

//   // Timer effect
//   useEffect(() => {
//     if (!quizCompleted && timeRemaining > 0) {
//       const timer = setTimeout(() => {
//         setTimeRemaining(prevTime => prevTime - 1);
//       }, 1000);
      
//       return () => clearTimeout(timer);
//     } else if (timeRemaining === 0 && !quizCompleted) {
//       setQuizCompleted(true);
//     }
//   }, [timeRemaining, quizCompleted]);

//   return (
//     <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">
//       {/* Quiz Header - Using our QuizHeader component */}
//       <QuizHeader 
//         category={category}
//         examId={examId}
//         timeRemaining={timeRemaining}
//         currentQuestionIndex={currentQuestionIndex}
//         totalQuestions={questions.length}
//         onToggleSidebar={() => setShowSidebar(!showSidebar)}
//       />
      
//       <div className="flex flex-1">
//         {/* Placeholder for the rest of the quiz UI */}
//         <div className="flex-1 p-8 flex items-center justify-center">
//           <div className="text-center">
//             <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Quiz Page</h2>
//             <p className="text-slate-600 dark:text-slate-400">
//               This is a simplified quiz page showing only the QuizHeader component.
//             </p>
//             <p className="text-slate-600 dark:text-slate-400 mt-2">
//               Current question: {currentQuestionIndex + 1} of {questions.length}
//             </p>
           
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from 'react'
import QuizHeader from '@/components/quiz/QuizHeader'
const page = () => {
  return (
    <div>
      <QuizHeader/>
    </div>
  )
}

export default page
