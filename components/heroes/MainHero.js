// // import Link from 'next/link';
// // import { ArrowRight, CheckCircle, Award, Search } from 'lucide-react';

// // /**
// //  * MainHero - Hero component for the main app homepage
// //  * 
// //  * Features:
// //  * - Bold heading and tagline
// //  * - CTA buttons for premium/free access
// //  * - Stats section with key features
// //  * - Search box for exams
// //  * 
// //  * @param {Object} props
// //  * @param {string} props.tagline - Optional tagline text to display
// //  * @param {Function} props.onSearch - Function to handle search input
// //  * @param {string} props.searchValue - Current search value
// //  * @returns {JSX.Element}
// //  */
// // export default function MainHero({ 
// //   tagline = "Pass Your Medical Certification Exam on the First Try", 
// //   onSearch,
// //   searchValue = ""
// // }) {
// //   return (
// //     <div className="bg-white dark:bg-slate-800">
// //       <div className="max-w-5xl mx-auto px-4 pt-16 pb-20 flex flex-col md:flex-row items-center">
// //         {/* Left Column - Text Content */}
// //         <div className="md:w-1/2 text-left md:pr-8 mb-8 md:mb-0">
// //           <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white leading-tight">
// //             {tagline}
// //           </h1>
// //           <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
// //             92% of our users pass their exam on the first attempt. Join 50,000+ healthcare professionals who trust Scoorly.
// //           </p>
          
// //           {/* CTA Buttons */}
// //           <div className="flex flex-col sm:flex-row gap-4">
// //             <Link 
// //               href="/apps/scoorly/subscribe"
// //               className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors text-center flex items-center justify-center"
// //             >
// //               Get Premium Access <ArrowRight className="h-4 w-4 ml-2" />
// //             </Link>
// //             <Link 
// //               href="/apps/scoorly/exams"
// //               className="px-6 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-white font-medium rounded-lg transition-colors text-center"
// //             >
// //               Explore Free Exams
// //             </Link>
// //           </div>
          
// //           {/* Stats */}
// //           <div className="flex flex-wrap gap-6 mt-8">
// //             <div className="flex items-center">
// //               <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
// //               <span className="text-slate-700 dark:text-slate-300">4,300+ Practice Questions</span>
// //             </div>
// //             <div className="flex items-center">
// //               <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
// //               <span className="text-slate-700 dark:text-slate-300">37 Exam Types</span>
// //             </div>
// //             <div className="flex items-center">
// //               <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
// //               <span className="text-slate-700 dark:text-slate-300">Money-Back Guarantee</span>
// //             </div>
// //           </div>
// //         </div>
        
// //         {/* Right Column - Search Box */}
// //         <div className="md:w-1/2 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-8 border border-slate-200 dark:border-slate-700">
// //           <div className="text-center mb-4">
// //             <Award className="h-10 w-10 text-purple-600 dark:text-purple-400 mx-auto" />
// //             <h2 className="text-2xl font-bold mt-2 text-slate-900 dark:text-white">Search Exams</h2>
// //           </div>
// //           <div className="relative mb-6">
// //             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
// //             <input 
// //               type="text" 
// //               placeholder="Find your certification exam..." 
// //               value={searchValue}
// //               onChange={(e) => onSearch && onSearch(e.target.value)}
// //               className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
// //             />
// //           </div>
// //           <div className="text-center">
// //             <span className="text-sm text-slate-500 dark:text-slate-400">Popular searches:</span>
// //             <div className="flex flex-wrap gap-2 mt-2 justify-center">
// //               <span className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full border border-slate-200 dark:border-slate-600">NREMT® Paramedic</span>
// //               <span className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full border border-slate-200 dark:border-slate-600">Firefighter</span>
// //               <span className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full border border-slate-200 dark:border-slate-600">FNP</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// // components/heroes/MainHero.js
// import Link from 'next/link';
// import { ArrowRight, CheckCircle, Award, Search } from 'lucide-react';

// export default function MainHero({ searchTerm, setSearchTerm }) {
//   return (
//     <div className="bg-white dark:bg-slate-800">
//       <div className="max-w-5xl mx-auto px-4 pt-16 pb-20 flex flex-col md:flex-row items-center">
//         <div className="md:w-1/2 text-left md:pr-8 mb-8 md:mb-0">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white leading-tight">
//             Pass Your Medical Certification Exam on the First Try
//           </h1>
//           <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
//             92% of our users pass their exam on the first attempt. Join 50,000+ healthcare professionals who trust Scoorly.
//           </p>
          
//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4">
//             <Link 
//               href="/apps/scoorly/subscribe"
//               className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors text-center flex items-center justify-center"
//             >
//               Get Premium Access <ArrowRight className="h-4 w-4 ml-2" />
//             </Link>
//             <Link 
//               href="/apps/scoorly/exams"
//               className="px-6 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-white font-medium rounded-lg transition-colors text-center"
//             >
//               Explore Free Exams
//             </Link>
//           </div>
          
//           {/* Stats */}
//           <div className="flex flex-wrap gap-6 mt-8">
//             <div className="flex items-center">
//               <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
//               <span className="text-slate-700 dark:text-slate-300">4,300+ Practice Questions</span>
//             </div>
//             <div className="flex items-center">
//               <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
//               <span className="text-slate-700 dark:text-slate-300">37 Exam Types</span>
//             </div>
//             <div className="flex items-center">
//               <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
//               <span className="text-slate-700 dark:text-slate-300">Money-Back Guarantee</span>
//             </div>
//           </div>
//         </div>
        
//         <div className="md:w-1/2 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-8 border border-slate-200 dark:border-slate-700">
//           <div className="text-center mb-4">
//             <Award className="h-10 w-10 text-purple-600 dark:text-purple-400 mx-auto" />
//             <h2 className="text-2xl font-bold mt-2 text-slate-900 dark:text-white">Search Exams</h2>
//           </div>
//           <div className="relative mb-6">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
//             <input 
//               type="text" 
//               placeholder="Find your certification exam..." 
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//           </div>
//           <div className="text-center">
//             <span className="text-sm text-slate-500 dark:text-slate-400">Popular searches:</span>
//             <div className="flex flex-wrap gap-2 mt-2 justify-center">
//               <span className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full border border-slate-200 dark:border-slate-600">NREMT® Paramedic</span>
//               <span className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full border border-slate-200 dark:border-slate-600">Firefighter</span>
//               <span className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full border border-slate-200 dark:border-slate-600">FNP</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import Link from 'next/link';
import { ArrowRight, CheckCircle, Award, Search, Clock, ShieldCheck, Star } from 'lucide-react';

export default function MainHero({ searchTerm, setSearchTerm }) {
  // Temporary state for countdown timer (in production, use actual expiring offers)
  const hours = 23;
  const minutes = 59;
  const seconds = 59;

  return (
    <div className="bg-white dark:bg-slate-800">
      {/* Limited-time offer banner */}
      <div className="bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100 py-3 text-center">
        <div className="flex items-center justify-center flex-col sm:flex-row">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            <span className="font-medium">Special Offer: 40% OFF Premium - Ends in {hours}:{minutes}:{seconds}</span>
          </div>
          <Link 
            href="/apps/scoorly/subscribe"
            className="ml-0 sm:ml-4 mt-2 sm:mt-0 px-4 py-1 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md text-sm transition-colors"
          >
            Claim Discount
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-12 pb-16 text-center">
        {/* Hero Title Section */}
        <div className="mb-3 flex justify-center">
          <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium px-3 py-1 rounded-full">92% Pass Rate</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white leading-tight">
          Guaranteed to Pass Your Medical Certification Exam
        </h1>
        
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
          Join the 50,000+ healthcare professionals who passed their exam on the first try with Scoorly's proven system.
        </p>
        
     
       
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/apps/scoorly/subscribe"
            className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors text-center flex items-center justify-center shadow-md"
          >
            Get 40% OFF Premium Today <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        
        </div>
        
     
      </div>
    </div>
  );
}