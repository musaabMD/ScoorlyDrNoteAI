// // components/ClientWrapper.js
// "use client";

// import { usePathname } from "next/navigation";
// import NextTopLoader from "nextjs-toploader";
// import { Toaster } from "react-hot-toast";
// import { Tooltip } from "react-tooltip";
// import config from "@/config";

// // Add client-side features without affecting page layout
// export default function ClientWrapper() {
//   const pathname = usePathname();
  
//   return (
//     <>
//       <NextTopLoader color={config.colors.main} showSpinner={false} />
//       <Toaster toastOptions={{ duration: 3000 }} />
//       <Tooltip id="tooltip" className="z-[60] !opacity-100 max-w-sm shadow-lg" />
//     </>
//   );
// }
// components/ClientLayoutWrapper.js
"use client";

import { Suspense } from 'react';

export function ClientSuspense({ children }) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}

export default function ClientLayoutWrapper({ children }) {
  return <>{children}</>;
}