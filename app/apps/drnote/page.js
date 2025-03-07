// // // app/apps/drnote/page.js
// // import Link from 'next/link';
// // import ButtonSignin from '@/components/ButtonSignin';
// // import Header from '@/components/Header';
// // import Hero from '@/components/Hero';
// // import Footer from '@/components/Footer';

// // export default function DrNoteHomePage() {
// //   return (
// //     <main>
// //       <Header />
// //       <Hero
// //         title="DrNote"
// //         subtitle="Medical test prep made easy"
// //       />
// //       <h1> hi drnote</h1>
// //       <Footer />
// //     </main>
// //   );
// // }
// // app/apps/drnote/page.js
// import { Suspense } from 'react';
// import HomeContent from "@/components/HomeContent";

// export default function HomePage() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <HomeContent />
//     </Suspense>
//   );
// }
// pages/index.js
"use client"

// pages/index.js
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Home() {
  // Saudi medical exams data
  const exams = [
    {
      id: 'SLLE',
      name: 'Saudi Licensing Exam for Physicians',
      description: 'Standard examination for medical licensing in Saudi Arabia',
      icon: '🩺'
    },
    {
      id: 'SMLE',
      name: 'Saudi Medical Licensing Exam',
      description: 'Comprehensive assessment for medical practitioners',
      icon: '📝'
    },
    {
      id: 'SNLE',
      name: 'Saudi Nursing Licensing Exam',
      description: 'Qualification exam for nursing professionals',
      icon: '💉'
    },
    {
      id: 'SDLE',
      name: 'Saudi Dental Licensing Exam',
      description: 'Certification exam for dental practitioners',
      icon: '🦷'
    },
    {
      id: 'SPLE',
      name: 'Saudi Pharmacy Licensing Exam',
      description: 'Licensing exam for pharmacy professionals',
      icon: '💊'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Head>
        <title>DrNote - Medical Exam Preparation</title>
        <meta name="description" content="Prepare for Saudi medical exams with DrNote" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">D</span>
            </div>
            <span className="ml-2 text-xl font-bold text-blue-800">DrNote</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="https://new.drnote.co/" className="text-gray-600 hover:text-blue-600 transition">About</a>
            <a href="https://new.drnote.co/pricing" className="text-gray-600 hover:text-blue-600 transition">Pricing</a>
          </nav>
          <div className="flex space-x-3">
            <a href="https://new.drnote.co/signin" className="px-3 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition text-sm">Log in</a>
            <a href="https://new.drnote.co/signin" className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm">Sign up free</a>
            <a href="https://new.drnote.co/pricing" className="px-3 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition text-sm">✨ Upgrade</a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section - Simple & Centered */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-3xl font-bold">D</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ace Your Saudi Medical Licensing Exams
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              DrNote provides comprehensive study materials and practice tests for Saudi medical exams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://new.drnote.co/signin" className="px-6 py-3 bg-blue-600 text-white rounded-md text-base font-semibold hover:bg-blue-700 transition">
                Get Started
              </a>
              <a href="https://new.drnote.co/pricing" className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-md text-base font-semibold hover:bg-blue-50 transition">
                View Pricing
              </a>
            </div>
          </div>
        </section>

        {/* Exams Section */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold text-center mb-10">Saudi Medical Exams</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exams.map((exam) => (
                <a 
                  href={`https://new.drnote.co/exams/${exam.id}`} 
                  key={exam.id}
                  className="block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition border border-gray-100"
                >
                  <div className="p-5">
                    <div className="text-3xl mb-3">{exam.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{exam.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{exam.description}</p>
                    <div className="flex items-center">
                      <span className="text-blue-600 text-sm font-medium">Explore</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 py-6 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} DrNote. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}