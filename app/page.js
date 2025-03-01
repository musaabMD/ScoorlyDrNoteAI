// app/page.js
import { redirect } from 'next/navigation';

export default function RootPage() {
  // Get hostname from the browser
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
  
  // Route based on hostname
  if (hostname.includes('drnote.co') || hostname === 'localhost') {
    redirect('/apps/drnote');
  } else {
    // Default to scoorly
    redirect('/apps/scoorly');
  }
  
  // This fallback will never be shown
  return <div>Redirecting...</div>;
}