"use client";
import React, { useState } from 'react';
import { ArrowLeft, Crown, Search, MessageSquare, Pin, XCircle, Book, Filter, FileText, X } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';

const QuizHeaderPreview = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  // Mock data for demonstration
  const examName = "USMLE Step 1";
  const subjects = [
    { label: "Cardiology", value: "cardiology" },
    { label: "Neurology", value: "neurology" },
    { label: "Immunology", value: "immunology" },
    { label: "Pharmacology", value: "pharmacology" }
  ];
  const topics = [
    { label: "Heart Failure", value: "heart_failure" },
    { label: "Arrhythmias", value: "arrhythmias" },
    { label: "Stroke", value: "stroke" },
    { label: "Antibiotics", value: "antibiotics" }
  ];
  const reviewOptions = [
    { label: "Review All", value: "review_all", icon: Book },
    { label: "Review Pinned", value: "review_pinned", icon: Pin },
    { label: "Review Incorrect", value: "review_incorrect", icon: XCircle }
  ];
  
  // Mock states
  const selectedCount = 124;
  const searchTerm = "";
  const [subject, setSubject] = useState(["cardiology", "neurology"]);
  const [topic, setTopic] = useState("heart_failure");
  const [review, setReview] = useState("review_all");
  const timeLeft = 1740; // 29 minutes

  const Logo = ({ examName = '' }) => (
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <div className="w-7 h-7 md:w-8 md:h-8 bg-green-600 rounded-lg flex items-center justify-center">
          <span className="text-lg md:text-xl font-bold text-white">D</span>
        </div>
      </div>
      <span className="hidden md:block text-xl font-bold text-gray-800 ml-2">DrNote</span>
      <span className="text-sm font-medium text-gray-600 ml-2">{examName}</span>
    </div>
  );

  const renderSearchBar = (isMobile = false) => (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <Input
        type="text"
        placeholder="Search questions..."
        className={`w-full pl-10 pr-4 py-2 rounded-lg bg-white border-gray-200 ${isMobile ? 'text-sm' : ''}`}
        value={searchTerm}
      />
    </div>
  );

  const renderFilters = (isMobile = false) => {
    // Get display text for subject filter
    let subjectDisplayText = "All Subjects";
    if (Array.isArray(subject) && subject.length > 0) {
      if (subject.length === 1) {
        subjectDisplayText = subjects.find(s => s.value === subject[0])?.label || "Subject";
      } else {
        subjectDisplayText = `${subject.length} selected`;
      }
    }

    // Get display text for topic
    const topicDisplayText = topics.find(t => t.value === topic)?.label || "Topics";

    // Get display and icon for review
    const selectedReview = reviewOptions.find(o => o.value === review) || reviewOptions[0];
    const ReviewIcon = selectedReview.icon;

    return (
      <div className={`flex gap-2 ${isMobile ? 'w-full flex-col' : ''}`}>
        <div className="relative">
          <Select 
            value={Array.isArray(subject) && subject.length === 1 ? subject[0] : "multiple"}
          >
            <SelectTrigger className={`${isMobile ? 'w-full' : 'w-40'} h-9 text-sm`}>
              <Book className="w-4 h-4 mr-1.5" />
              <SelectValue placeholder="Subject">{subjectDisplayText}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <div className="p-2">
                {Array.isArray(subject) && subject.length > 0 && (
                  <div className="flex items-center justify-between mb-2 p-2 bg-gray-100 rounded">
                    <div>{subjectDisplayText}</div>
                    <button 
                      onClick={() => setSubject([])}
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
                
                {subjects.map(item => (
                  <div 
                    key={item.value} 
                    className="flex items-center p-1.5 hover:bg-gray-100 rounded cursor-pointer"
                    onClick={() => {
                      if (Array.isArray(subject)) {
                        if (subject.includes(item.value)) {
                          setSubject(subject.filter(s => s !== item.value));
                        } else {
                          setSubject([...subject, item.value]);
                        }
                      }
                    }}
                  >
                    <div className="flex-1">{item.label}</div>
                    {Array.isArray(subject) && subject.includes(item.value) && (
                      <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    )}
                  </div>
                ))}
              </div>
            </SelectContent>
          </Select>
        </div>

        <Select value={topic} onValueChange={setTopic}>
          <SelectTrigger className={`${isMobile ? 'w-full' : 'w-40'} h-9 text-sm`}>
            <FileText className="w-4 h-4 mr-1.5" />
            <SelectValue placeholder="Topics">{topicDisplayText}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {topics.map(item => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={review} onValueChange={setReview}>
          <SelectTrigger className={`${isMobile ? 'w-full' : 'w-40'} h-9 text-sm`}>
            <ReviewIcon className="w-4 h-4 mr-1.5" />
            <SelectValue placeholder="Review">{selectedReview.label}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {reviewOptions.map(item => {
              const Icon = item.icon;
              return (
                <SelectItem key={item.value} value={item.value}>
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
    );
  };

  return (
    <div className="w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-2 md:px-4 py-2 md:py-4 bg-white border-b">
        <div className="flex items-center gap-2">
          <button
            className="hover:bg-gray-100 p-1.5 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <Logo examName={examName} />
        </div>

        <div className="flex items-center">
          <button className="text-sm font-medium px-4 py-1.5 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white" onClick={() => window.location.href = '/pricing'}>
            Upgrade
          </button>
        </div>
      </div>

      <div className="px-2 md:px-4 py-2 md:py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="block md:hidden">
            <div className="flex items-center gap-2 mb-3">
              {renderSearchBar(true)}
              <button 
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="flex-shrink-0 p-2 bg-white rounded-lg border border-gray-200"
              >
                <Filter className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            {showMobileFilters && (
              <div className="space-y-3 mt-2 p-3 bg-white rounded-lg border border-gray-200">
                {renderFilters(true)}
              </div>
            )}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {renderFilters()}
            {renderSearchBar()}
          </div>

          {selectedCount !== undefined && (
            <div className="mt-2 text-right text-xs text-gray-600">
              {selectedCount} question{selectedCount !== 1 && 's'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizHeaderPreview;