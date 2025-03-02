// "use client";

// import React from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import Header from "@/components/Header";

// export default function HomeContent() {
//   return (
//     <div className="min-h-screen flex flex-col bg-white">
//       <Header />
      
//       <main className="flex-grow flex flex-col items-center justify-center px-4 py-16">
//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">
//             Master Medical Exams with DrNote
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
//             The smartest way to prepare for medical exams with comprehensive question banks and study tools
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button asChild size="lg" className="bg-black hover:bg-gray-800">
//               <Link href="/exams">
//                 Browse Exams
//               </Link>
//             </Button>
//             <Button asChild variant="outline" size="lg" className="border-gray-300">
//               <Link href="/signup">
//                 Try For Free
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomeContent() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Master Medical Exams with DrNote
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            The smartest way to prepare for medical exams with comprehensive question banks and study tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-black hover:bg-gray-800">
              <Link href="/exams">
                Browse Exams
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gray-300">
              <Link href="/signup">
                Try For Free
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}