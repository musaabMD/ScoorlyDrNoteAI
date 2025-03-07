"use client";
import { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export default function PricingPlans() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedExam = searchParams.get('exam') || 'smle';
  const isdrNote = pathname.includes('/apps/drnote');
  
  const exams = [
    { id: 'smle', name: 'SMLE', description: 'Saudi Medical Licensing Exam' },
    { id: 'sle', name: 'SLE', description: 'Saudi Licensing Exam' },
    { id: 'saudi-board', name: 'Saudi Board', description: 'Saudi Board Certification' }
  ];
  
  const handleExamChange = (examId) => {
    router.push(`/apps/drnote/pricing?exam=${examId}`);
  };
  
  const scoorlyPlans = [
    {
      name: 'Free',
      price: 0,
      period: '',
      type: 'free',
      features: [
        'Access to basic question bank',
        'Limited practice tests (50 questions)',
        'Basic progress tracking',
        'Community forum access'
      ],
      cta: 'Get Started',
      href: '/signup',
      highlighted: false
    },
    {
      name: 'Monthly',
      price: 19.99,
      period: '/month',
      type: 'subscription',
      features: [
        'Full question bank access',
        'Unlimited practice tests',
        'Advanced analytics',
        'Performance insights',
        'Email support',
        'Auto-renews monthly'
      ],
      cta: 'Subscribe Monthly',
      href: '/upgrade',
      highlighted: true,
      note: 'Cancel anytime'
    },
    {
      name: '3 Months',
      price: 49.99,
      period: ' one-time',
      type: 'one-time',
      features: [
        'Everything in Monthly plan',
        '3 months full access',
        'Study plan generator',
        'Priority support',
        'Progress reports',
        'No auto-renewal'
      ],
      cta: 'Buy 3 Months',
      href: '/upgrade',
      highlighted: false
    },
    {
      name: '12 Months',
      price: 149.99,
      period: ' one-time',
      type: 'one-time',
      features: [
        'Everything in 3 Months plan',
        '12 months full access',
        'Private study group',
        '1-on-1 coaching session',
        'Score improvement guarantee',
        'Best value option'
      ],
      cta: '✨ Best Value',
      href: '/upgrade',
      highlighted: false
    }
  ];

  // Simplified and more sensible DrNote pricing structure
  const createExamPlans = (examId, examName) => {
    return [
      {
        name: 'Free',
        price: 0,
        period: '',
        features: [
          '24-hour access',
          '50 sample questions',
          'Basic progress tracking',
          'Limited features',
          'Mobile access'
        ],
        cta: 'Try Free',
        href: `/apps/drnote/signup?exam=${examId}`,
        highlighted: false,
        type: 'free'
      },
      {
        name: 'Monthly',
        price: 29.99,
        period: '/month',
        features: [
          'Full question bank',
          'Unlimited practice tests',
          'Performance analytics',
          'Study guides',
          'Mobile access',
          'Auto-renews monthly'
        ],
        cta: 'Subscribe',
        href: `/apps/drnote/upgrade?exam=${examId}&plan=monthly`,
        highlighted: false,
        type: 'subscription',
        note: 'Cancel anytime'
      },
      {
        name: '3 Months',
        price: 79.99,
        period: ' one-time',
        features: [
          'Everything in Monthly',
          '3 months access',
          'Advanced analytics',
          'AI study planner',
          'Performance tracking',
          'No auto-renewal'
        ],
        cta: '✨ Most Popular',
        href: `/apps/drnote/upgrade?exam=${examId}&plan=quarter`,
        highlighted: true,
        type: 'one-time'
      },
      {
        name: '12 Months',
        price: 199.99,
        period: ' one-time',
        features: [
          'Everything in 3 Months',
          '12 months access',
          'Personal tutor session',
          'Score guarantee',
          'Priority support',
          'Best value option'
        ],
        cta: 'Best Value',
        href: `/apps/drnote/upgrade?exam=${examId}&plan=annual`,
        highlighted: false,
        type: 'one-time'
      }
    ];
  };
  
  const drNotePlans = {
    'smle': createExamPlans('smle', 'SMLE'),
    'sle': createExamPlans('sle', 'SLE'),
    'saudi-board': createExamPlans('saudi-board', 'Saudi Board')
  };
  
  const plans = isdrNote ? (drNotePlans[selectedExam] || drNotePlans.smle) : scoorlyPlans;
  
  return (
    <div className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isdrNote ? 'Choose Your Exam Preparation Plan' : 'Simple, Flexible Pricing'}
          </h2>
          
          {/* Exam Selector for DrNote */}
          {isdrNote && (
            <div className="mb-8">
              <div className="relative inline-block w-full max-w-md">
                <select
                  value={selectedExam}
                  onChange={(e) => handleExamChange(e.target.value)}
                  className="w-full px-4 py-3 text-lg bg-white border border-gray-300 rounded-lg appearance-none cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {exams.map((exam) => (
                    <option key={exam.id} value={exam.id}>
                      {exam.name} - {exam.description}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
              </div>
            </div>
          )}
          
          <p className="text-xl text-gray-600 mb-8">
            {isdrNote
              ? `Choose the ${exams.find(e => e.id === selectedExam)?.name} preparation plan that works for you`
              : 'Start with a free plan or choose a package that suits your needs'
            }
          </p>
        </div>
        
        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`rounded-2xl border ${
                plan.highlighted
                  ? 'border-blue-600 shadow-xl md:scale-105'
                  : 'border-gray-200'
              } p-8 relative flex flex-col ${plan.type === 'free' ? 'bg-gray-50' : 'bg-white'}`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-500 ml-1">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 shrink-0 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {plan.note && (
                <p className="text-sm text-gray-500 mb-4">{plan.note}</p>
              )}
              
              <Link
                href={plan.href}
                className={`w-full text-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
                    : plan.type === 'free'
                      ? 'bg-white text-gray-900 border border-gray-300 hover:border-gray-900'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
        
        {/* Money-back guarantee */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            30-day money-back guarantee on all paid plans. Start your exam preparation with confidence.
          </p>
        </div>
      </div>
    </div>
  );
}