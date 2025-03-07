"use client"

export default function LoadingSpinner({ message = "Loading..." }) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
        <p className="text-slate-600 dark:text-slate-400">{message}</p>
      </div>
    </div>
  );
}