// app/apps/scoorly/page.js
import Link from 'next/link';
import ButtonSignin from '@/components/ButtonSignin';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export default function ScoorlyHomePage() {
  return (
    <main>
      <Header />
      <Hero
        title="Scoorly"
        subtitle="Test prep made simple"
      />
      <Footer />
    </main>
  );
}