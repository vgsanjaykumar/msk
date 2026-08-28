import React, { Suspense, lazy } from "react";
import SEO from "../seo/SEO";
import SectionSkeleton from "../components/common/SectionSkeleton";
import Hero from "../components/sections/Hero";
import { faqs } from "../data/faqs";

// Below-the-fold sections are code-split so the initial bundle stays small
// and the hero/nav (LCP-critical content) load first.
const Services = lazy(() => import("../components/sections/Services"));
const BrandsSwiper = lazy(() => import("../components/sections/BrandsSwiper"));
const About = lazy(() => import("../components/sections/About"));
const WhyChooseUs = lazy(() => import("../components/sections/WhyChooseUs"));
const FocusGrid = lazy(() => import("../components/sections/FocusGrid"));
const Gallery = lazy(() => import("../components/sections/Gallery"));
const FAQ = lazy(() => import("../components/sections/FAQ"));
const Contact = lazy(() => import("../components/sections/Contact"));

export default function Home() {
  return (
    <>
      <SEO faqs={faqs} path="/" />
      <Hero />
      <Suspense fallback={<SectionSkeleton />}>
        <Services />
        <BrandsSwiper />
        <About />
        <WhyChooseUs />
        <FocusGrid />
        <Gallery />
        <FAQ />
        <Contact />
      </Suspense>
    </>
  );
}
