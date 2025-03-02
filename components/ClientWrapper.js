// components/ClientWrapper.js
"use client";

import { usePathname } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import config from "@/config";

export default function ClientWrapper() {
  return (
    <>
      <NextTopLoader color={config.colors.main} showSpinner={false} />
      <Toaster toastOptions={{ duration: 3000 }} />
      <Tooltip id="tooltip" className="z-[60] !opacity-100 max-w-sm shadow-lg" />
    </>
  );
}