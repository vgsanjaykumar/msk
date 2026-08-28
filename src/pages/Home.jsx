import React, { Suspense, lazy } from "react";
import SEO from "../seo/SEO";
import SectionSkeleton from "../components/common/SectionSkeleton";
import Hero from "../components/sections/Hero";
import TrustIndicators from "../components/sections/TrustIndicators";
import ServiceGrid from "../components/services/ServiceGrid";
import CTASection from "../components/common/CTASection";
import { generalFaqs } from "../data/generalFaqs";

// Below-the-fold sections are code-split so the initial bundle stays small
// and the hero/nav (LCP-critical content) load first.
const BrandsSwiper = lazy(() => import("../components/sections/BrandsSwiper"));
const WhyChooseUs = lazy(() => import("../components/sections/WhyChooseUs"));
const ServiceProcess = lazy(() => import("../components/services/ServiceProcess"));
const ServiceAreasTeaser = lazy(() => import("../components/sections/ServiceAreasTeaser"));
const ServiceFAQ = lazy(() => import("../components/services/ServiceFAQ"));

export default function Home() {
  return (
    <>
      <SEO
        title="Appliance Repair Services in Coimbatore | AC, TV, Fridge & Washing Machine"
        description="Professional appliance repair and service solutions in Coimbatore for AC, TV, refrigerator and washing machines. Book a convenient service visit."
        faqs={generalFaqs}
        path="/"
      />
      <Hero />
      <TrustIndicators />
      <ServiceGrid />
      <Suspense fallback={<SectionSkeleton />}>
        <BrandsSwiper />
        <WhyChooseUs />
        <ServiceProcess />
        <ServiceAreasTeaser />
        <ServiceFAQ faqs={generalFaqs} eyebrow="FAQ" title="MSK Solution — Frequently Asked Questions" id="faq" />
      </Suspense>
      <CTASection />
    </>
  );
}
