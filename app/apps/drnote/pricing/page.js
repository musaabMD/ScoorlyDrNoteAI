import { Suspense } from 'react';
import PricingPlans from '@/components/PricingPlans';

export default function DrNotePricingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PricingPlans />
    </Suspense>
  );
}
