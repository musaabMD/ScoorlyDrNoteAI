// app/apps/drnote/page.js
import Link from 'next/link';
import ButtonSignin from '@/components/ButtonSignin';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export default function DrNoteHomePage() {
  return (
    <main>
      <Header />
      <Hero
        title="DrNote"
        subtitle="Medical test prep made easy"
      />
      <Footer />
    </main>
  );
}