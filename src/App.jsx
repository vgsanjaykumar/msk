import React, { Suspense, lazy } from "react";
import SEO from "./seo/SEO";
import SkipLink from "./components/common/SkipLink";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Footer from "./components/layout/Footer";
import FloatingActions from "./components/layout/FloatingActions";
import { faqs } from "./components/sections/FAQ";

// Below-the-fold sections are code-split so the initial bundle stays small
// and the hero/nav (LCP-critical content) load first.
const Services = lazy(() => import("./components/sections/Services"));
const BrandsSwiper = lazy(() => import("./components/sections/BrandsSwiper"));
const About = lazy(() => import("./components/sections/About"));
const WhyChooseUs = lazy(() => import("./components/sections/WhyChooseUs"));
const FocusGrid = lazy(() => import("./components/sections/FocusGrid"));
const Gallery = lazy(() => import("./components/sections/Gallery"));
const FAQ = lazy(() => import("./components/sections/FAQ"));
const Contact = lazy(() => import("./components/sections/Contact"));

function SectionFallback() {
  return (
    <div
      className="w-full py-24 flex items-center justify-center"
      aria-hidden="true"
    >
      <div className="h-8 w-8 rounded-full border-2 border-purple-300 border-t-purple-600 dark:border-cyan-800 dark:border-t-cyan-400 animate-spin" />
    </div>
  );
}

const App = () => {
  return (
    <>
      <SEO faqs={faqs} />
      <SkipLink />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <Services />
          <BrandsSwiper />
          <About />
          <WhyChooseUs />
          <FocusGrid />
          <Gallery />
          <FAQ />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
};

export default App;
