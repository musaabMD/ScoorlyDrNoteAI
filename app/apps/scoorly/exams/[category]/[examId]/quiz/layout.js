// "use client"

// import { getSEOTags } from "@/libs/seo";
// import ClientWrapper from "@/components/ClientWrapper";
// import ClientLayout from "@/components/LayoutClient";
// import Footer from "@/components/Footer";

// export default function QuizLayout({ children }) {
//   return (
//     <div className="quiz-layout">
//       <ClientLayout>
//         <ClientWrapper />
//         {/* No Header component here - QuizHeader will be used instead */}
//         <main>{children}</main>
//         <Footer />
//       </ClientLayout>
//     </div>
//   );
// }
export default function QuizLayout({ children }) {
    return (
      <div>
        {children}
      </div>
    );
  }