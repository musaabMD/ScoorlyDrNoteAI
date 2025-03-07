// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import Footer from "@/components/Footer";
// import { createClient } from "@supabase/supabase-js";

// export default function HomeContent() {
//   const [exams, setExams] = useState([]);

//   useEffect(() => {
//     const fetchExams = async () => {
//       const supabase = createClient(
//         process.env.NEXT_PUBLIC_SUPABASE_URL,
//         process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
//       );

//       const { data, error } = await supabase
//         .from('exams')
//         .select('*')
//         .eq('is_active', true)
//         .order('name');

//       if (data) setExams(data);
//     };

//     fetchExams();
//   }, []);

//   return (
//     <main className="flex-grow flex flex-col items-center justify-center px-4 py-16">
//       <div className="max-w-4xl mx-auto text-center">
//         <h1 className="text-4xl md:text-6xl font-bold mb-6">
//           Master Medical Exams with DrNote
//         </h1>
//         <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
//           The smartest way to prepare for medical exams with comprehensive question banks and study tools
//         </p>

//         {/* Exam List */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//           {exams.map((exam) => (
//             <Link 
//               key={exam.id} 
//               href={`/exams/${exam.slug}`}
//               className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-black transition-colors"
//             >
//               <h3 className="text-xl font-semibold mb-2">{exam.name}</h3>
//               <p className="text-gray-600 text-sm mb-4">{exam.description}</p>
//               <span className="inline-block px-3 py-1 bg-gray-100 text-sm rounded-full">
//                 {exam.category}
//               </span>
//             </Link>
//           ))}
//         </div>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Button asChild size="lg" className="bg-black hover:bg-gray-800">
//             <Link href="/exams">
//               Browse All Exams
//             </Link>
//           </Button>
//           <Button asChild variant="outline" size="lg" className="border-gray-300">
//             <Link href="/signup">
//               Try For Free
//             </Link>
//           </Button>
//         </div>
//       </div>
//       <Footer />
//     </main>
//   );
// }
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { createClient } from "@supabase/supabase-js";
import { BookOpen } from 'lucide-react';

export default function HomeContent() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const fetchExams = async () => {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      );

      const { data, error } = await supabase
        .from('exams')
        .select('*')
        .eq('is_active', true)
        .order('name');

      if (data) setExams(data);
    };

    fetchExams();
  }, []);

  return (
    <main className="flex-grow flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
      <div className="max-w-5xl mx-auto text-center py-16 px-4 sm:px-6 lg:px-8 relative">
  {/* Background accent */}
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute left-[10%] top-[20%] h-36 w-36 rounded-full bg-blue-100 blur-3xl opacity-70"></div>
    <div className="absolute right-[15%] top-[35%] h-40 w-40 rounded-full bg-green-100 blur-3xl opacity-60"></div>
  </div>

  {/* Icon above heading */}
  <div className="inline-flex items-center justify-center mb-8 p-4 bg-gradient-to-br from-blue-500 to-teal-400 rounded-2xl shadow-lg">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
    </svg>
  </div>

  {/* Badge above heading */}
 

  <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
    Master Medical Exams with DrNote
  </h1>

  <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
    The smartest way to prepare for medical exams with comprehensive question banks and study tools
  </p>

  

</div>
        {/* Exam Grid - App Store Style */}
        <div className="max-w-6xl mx-auto  p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-medium mb-6 text-gray-900 pl-2 text-center"> Select your Exams</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-x-4">
            {exams.map((exam) => (
              <Link
                key={exam.id}
                href={`/exams/${exam.slug}`}
                className="flex flex-col items-center text-center transition-transform hover:scale-105 cursor-pointer group"
              >
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-2 shadow-md"
                  style={{ background: `linear-gradient(145deg, #4FA8EB, #3498DB)` }}
                >
                  <BookOpen size={42} strokeWidth={1.5} color="white" />
                </div>
                <div className="w-full px-1">
                  <div className="font-medium text-sm text-gray-900 truncate">{exam.name}</div>
                  <div className="text-xs text-gray-500 truncate">{exam.category}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

       
          <Button asChild variant="outline" size="lg" className="border-gray-300">
            <Link href="/signup">
              Try For Free
            </Link>
          </Button>
      
      </div>
    </main>
  );
}