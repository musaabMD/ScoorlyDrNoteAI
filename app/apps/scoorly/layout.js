// // // app/apps/scoorly/layout.js
// // import config from "@/config";
// // import { getSEOTags } from "@/libs/seo";
// // import ClientWrapper from "@/components/ClientWrapper";
// // import ClientLayout from "@/components/LayoutClient";
// // import Header from "@/components/Header";
// // import Footer from "@/components/Footer";

// // export const metadata = getSEOTags({
// //   title: 'Scoorly - Test Prep Platform',
// // });

// // export default function ScoorlyLayout({ children }) {
// //   return (
// //     <div className="scoorly-layout">
// //       <ClientLayout>
// //         <ClientWrapper />
// //         <Header />
// //         <main>{children}</main>
// //         <Footer />
// //       </ClientLayout>
// //     </div>
// //   );
// // }
// "use client"

// import { usePathname } from 'next/navigation';
// import config from "@/config";
// import { getSEOTags } from "@/libs/seo";
// import ClientWrapper from "@/components/ClientWrapper";
// import ClientLayout from "@/components/LayoutClient";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// export const metadata = getSEOTags({
//   title: 'Scoorly - Test Prep Platform',
// });

// export default function ScoorlyLayout({ children }) {
//   const pathname = usePathname();
//   const isQuizPage = pathname.includes('/quiz');

//   return (
//     <div className="scoorly-layout">
//       <ClientLayout>
//         <ClientWrapper />
//         {!isQuizPage && <Header />}
//         <main>{children}</main>
//         <Footer />
//       </ClientLayout>
//     </div>
//   );
// }
"use client";

import { usePathname } from "next/navigation";

export default function ScoorlyLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
 
      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}