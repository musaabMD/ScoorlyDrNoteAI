// app/page.js
import { redirect } from 'next/navigation';

export default function RootPage({ params }) {
  // This only runs on the server
  // We use the middleware to handle the domain-based redirects
  // This is just a fallback for direct access to the root
  redirect('/apps/scoorly');
  
  // This will never be rendered
  return null;
}