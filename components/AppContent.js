"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { 
  Headphones, 
  Book, 
  Tablet, 
  BookOpen, 
  Play, 
  BookMarked, 
  FileText, 
  Music, 
  Mail, 
  ShoppingBag,
  Stethoscope,
  ClipboardList,
  Brain,
  Heart,
  PenTool,
  Pills
} from 'lucide-react';

export default function AppContent() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  // Icon mapping function
  const getIcon = (iconName) => {
    const iconMap = {
      'Headphones': <Headphones size={42} strokeWidth={1.5} color="white" />,
      'Book': <Book size={42} strokeWidth={1.5} color="white" />,
      'Tablet': <Tablet size={42} strokeWidth={1.5} color="white" />,
      'BookOpen': <BookOpen size={42} strokeWidth={1.5} color="white" />,
      'Play': <Play size={42} strokeWidth={1.5} color="white" />,
      'BookMarked': <BookMarked size={42} strokeWidth={1.5} color="white" />,
      'FileText': <FileText size={42} strokeWidth={1.5} color="white" />,
      'Music': <Music size={42} strokeWidth={1.5} color="white" />,
      'Mail': <Mail size={42} strokeWidth={1.5} color="white" />,
      'ShoppingBag': <ShoppingBag size={42} strokeWidth={1.5} color="white" />,
      'Stethoscope': <Stethoscope size={42} strokeWidth={1.5} color="white" />,
      'ClipboardList': <ClipboardList size={42} strokeWidth={1.5} color="white" />,
      'Brain': <Brain size={42} strokeWidth={1.5} color="white" />,
      'Heart': <Heart size={42} strokeWidth={1.5} color="white" />,
      'PenTool': <PenTool size={42} strokeWidth={1.5} color="white" />,
      'Pills': <Pills size={42} strokeWidth={1.5} color="white" />
    };
    
    return iconMap[iconName] || <Book size={42} strokeWidth={1.5} color="white" />;
  };

  useEffect(() => {
    const fetchApps = async () => {
      setLoading(true);
      try {
        const supabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        );
        
        // Fetch apps from Supabase
        const { data, error } = await supabase
          .from('medical_apps')
          .select('*')
          .eq('is_active', true)
          .order('name');
          
        if (error) throw error;
        
        if (data && data.length > 0) {
          setApps(data);
        } else {
          console.log("No medical apps found in Supabase");
          setApps([]);
        }
      } catch (error) {
        console.error("Error fetching apps:", error);
        setApps([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchApps();
  }, []);

  // Define a simple Footer component
  const SimpleFooter = () => {
    return (
      <footer className="w-full py-6 mt-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-600">© 2025 DrNote Medical. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading medical apps...</div>;
  }

  return (
    <main className="flex-grow flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-6xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">DrNote Medical Apps</h1>
          <p className="text-gray-600">Resources for medical students and professionals</p>
        </header>
        
        <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
          {apps.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-6 gap-x-4">
              {apps.map((app) => (
                <Link 
                  key={app.id} 
                  href={`/apps/${app.slug}`}
                  className="flex flex-col items-center text-center transition-transform hover:scale-105 cursor-pointer"
                >
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-2 shadow-md"
                    style={{ background: app.gradient }}
                  >
                    {getIcon(app.icon_name)}
                  </div>
                  <div className="w-full px-1">
                    <div className="font-medium text-sm text-gray-900 truncate">{app.name}</div>
                    <div className="text-xs text-gray-500 truncate">{app.publisher}</div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">No medical apps available at the moment.</p>
            </div>
          )}
        </div>
        
        <div className="flex justify-center mt-8">
          <Link 
            href="/exams" 
            className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Return to Exams
          </Link>
        </div>
      </div>
      <SimpleFooter />
    </main>
  );
}