// "use client"

// import { useState } from 'react';
// import Link from 'next/link';
// import { ChevronLeft, PlayCircle, FileText, Target, BookOpen } from 'lucide-react';

// export default function PracticeOptions({ exam, subjectScores = [] }) {
//   const [selectedOption, setSelectedOption] = useState(null);

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
  
//   if (!exam) return null;

//   return (
//     <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
//       <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Practice Options</h2>
      
//       {selectedOption ? (
//         <div>
//           <div className="flex items-center mb-6">
//             <button 
//               onClick={() => setSelectedOption(null)}
//               className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
//             >
//               <ChevronLeft className="h-4 w-4 mr-1" />
//               Back to options
//             </button>
//           </div>
          
//           {selectedOption === 'self-assessment' && (
//             <div>
//               <h3 className="text-lg font-medium mb-4 text-slate-900 dark:text-white">Self Assessment Mode</h3>
//               <p className="text-slate-600 dark:text-slate-400 mb-6">
//                 This mode simulates the full exam experience with randomized questions from all topics.
//                 You'll have {exam.duration} to complete all {exam.questions} questions.
//               </p>
//               <Link 
//                 href={`/apps/scoorly/exams/${exam.category}/${exam.id}/quiz?mode=self-assessment`}
//                 className="inline-block w-full sm:w-auto py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-center"
//               >
//                 Start Exam Simulation
//               </Link>
//             </div>
//           )}
          
//           {selectedOption === 'subject-wise' && (
//             <div>
//               <h3 className="text-lg font-medium mb-4 text-slate-900 dark:text-white">Subject Wise Practice</h3>
//               <p className="text-slate-600 dark:text-slate-400 mb-6">
//                 Select a subject to focus your practice on:
//               </p>
//               <div className="grid gap-3 sm:grid-cols-2">
//                 {subjectScores.map((subject, index) => (
//                   <Link 
//                     key={index}
//                     href={`/apps/scoorly/exams/${exam.category}/${exam.id}/quiz?mode=subject&subject=${subject.name}`}
//                     className="flex justify-between items-center p-4 rounded-lg border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
//                   >
//                     <span className="font-medium">{subject.name}</span>
//                     <span className="text-sm bg-white dark:bg-green-900 px-2 py-1 rounded-full">
//                       {subject.score}%
//                     </span>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           )}
          
//           {selectedOption === 'topic-wise' && (
//             <div>
//               <h3 className="text-lg font-medium mb-4 text-slate-900 dark:text-white">Topic Wise Practice</h3>
//               <p className="text-slate-600 dark:text-slate-400 mb-6">
//                 Select a specific topic to practice:
//               </p>
//               <div className="grid gap-3 sm:grid-cols-2">
//                 {exam.topics && exam.topics.map((topic, index) => (
//                   <Link 
//                     key={index}
//                     href={`/apps/scoorly/exams/${exam.category}/${exam.id}/quiz?mode=topic&topic=${topic}`}
//                     className="flex justify-between items-center p-4 rounded-lg border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
//                   >
//                     <span className="font-medium">{topic}</span>
//                     <span className="text-sm bg-white dark:bg-purple-900 px-2 py-1 rounded-full">
//                       {Math.floor(Math.random() * 30) + 70}%
//                     </span>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           )}
          
//           {selectedOption === 'study-mode' && (
//             <div>
//               <h3 className="text-lg font-medium mb-4 text-slate-900 dark:text-white">Study Mode</h3>
//               <p className="text-slate-600 dark:text-slate-400 mb-6">
//                 In study mode, you'll receive immediate feedback after each question, with detailed explanations.
//                 This is perfect for learning rather than testing.
//               </p>
//               <Link 
//                 href={`/apps/scoorly/exams/${exam.category}/${exam.id}/quiz?mode=study`}
//                 className="inline-block w-full sm:w-auto py-2.5 px-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors text-center"
//               >
//                 Start Study Mode
//               </Link>
//             </div>
//           )}
//         </div>
//       ) : (
//         <div className="grid gap-4 sm:grid-cols-2">
//           {quizOptions.map((option) => (
//             <button 
//               key={option.id}
//               onClick={() => setSelectedOption(option.id)}
//               className={`flex items-center p-4 rounded-lg border border-${option.color}-200 dark:border-${option.color}-800 bg-${option.color}-50 dark:bg-${option.color}-900/20 text-${option.color}-600 dark:text-${option.color}-400 hover:bg-${option.color}-100 dark:hover:bg-${option.color}-900/30 transition-colors`}
//             >
//               <div className="mr-3">
//                 {option.icon}
//               </div>
//               <div className="text-left">
//                 <div className="font-medium">{option.title}</div>
//                 <div className="text-sm opacity-80">{option.description}</div>
//               </div>
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
import React from 'react';
import Link from 'next/link';
import { PlayCircle, BookOpen } from 'lucide-react';

export default function SimplePracticeOptions({ exam }) {
  if (!exam) {
    // Default exam data for preview
    exam = {
      id: 'usmle-step1',
      category: 'medical',
      duration: '8 hours',
      questions: 280
    };
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
      <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Start Practicing</h2>
      
      <div className="grid gap-4 sm:grid-cols-2">
        <Link 
          href={`/apps/scoorly/exams/${exam.category}/${exam.id}/quiz?mode=study`}
          className="flex items-center p-4 rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
        >
          <div className="mr-3">
            <BookOpen className="h-5 w-5" />
          </div>
          <div className="text-left">
            <div className="font-medium">Study Mode</div>
            <div className="text-sm opacity-80">Learn with immediate feedback</div>
          </div>
        </Link>

        <Link 
          href={`/apps/scoorly/exams/${exam.category}/${exam.id}/quiz?mode=self-assessment`}
          className="flex items-center p-4 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
        >
          <div className="mr-3">
            <PlayCircle className="h-5 w-5" />
          </div>
          <div className="text-left">
            <div className="font-medium">Self Assessment</div>
            <div className="text-sm opacity-80">Full exam simulation</div>
          </div>
        </Link>
      </div>
    </div>
  );
}