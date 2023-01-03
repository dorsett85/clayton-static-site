import React, { Suspense } from 'react';

const LandingFab = React.lazy(() => import('./LandingFab'));

export const LandingFabLazy: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <LandingFab />
    </Suspense>
  );
};
