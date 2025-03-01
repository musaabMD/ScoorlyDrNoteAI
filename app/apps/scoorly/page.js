// app/apps/scoorly/page.js
import { Suspense } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export default function ScoorlyHomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main>
        <Header />
        <Hero
          title="Scoorly"
          subtitle="Test prep made simple"
        />
        <Footer />
      </main>
    </Suspense>
  );
}