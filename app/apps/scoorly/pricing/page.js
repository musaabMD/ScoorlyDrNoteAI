import { Suspense } from 'react';
import PricingPlans from '@/components/PricingPlans';

export default function ScoorlyPricingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PricingPlans />
    </Suspense>
  );
}
