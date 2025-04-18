import React, { Suspense } from 'react'
import Header from './Header'
import Banner from './Banner';
import LogoShowcase from './LogoShowcase';
import { Loader } from './Loader';

export const HomePage = () => {
  return (
    <>
    <Suspense fallback={<Loader />}>
    <Header/>
    <Banner/>
    <LogoShowcase/>
    </Suspense>
   
    </>
   
  );
}

