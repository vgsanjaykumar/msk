import React, { Suspense, lazy } from "react";
import SEO from "../../seo/SEO";
import Breadcrumbs from "../common/Breadcrumbs";
import CTASection from "../common/CTASection";
import ServiceHero from "./ServiceHero";
import ServiceOverview from "./ServiceOverview";
import CommonProblems from "./CommonProblems";
import ServiceProcess from "./ServiceProcess";
import ServiceFAQ from "./ServiceFAQ";
import RelatedServices from "./RelatedServices";
import SectionSkeleton from "../common/SectionSkeleton";
import WhyChooseUs from "../sections/WhyChooseUs";
import { serviceFaqs } from "../../data/serviceFaqs";

const BrandsSwiper = lazy(() => import("../sections/BrandsSwiper"));

/**
 * Single reusable template every dedicated service route renders with its
 * own data object from src/data/services.js — layout stays consistent,
 * content (SEO, hero copy, problems, FAQs) stays unique per page.
 */
export default function ServicePage({ service }) {
  const faqs = serviceFaqs[service.faqsRef] || [];
  const breadcrumbTrail = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: `${service.name} Coimbatore`, path: service.path },
  ];

  return (
    <>
      <SEO
        title={service.seo.title}
        description={service.seo.description}
        keywords={[service.primaryKeyword, ...service.secondaryKeywords]}
        path={service.path}
        faqs={faqs}
        breadcrumbTrail={breadcrumbTrail}
      />
      <Breadcrumbs trail={breadcrumbTrail} />
      <ServiceHero
        eyebrow={service.eyebrow}
        h1={service.h1}
        subtitle={service.heroSubtitle}
        image={service.heroImage}
      />
      <ServiceOverview
        name={service.name}
        overview={service.overview}
        services={service.services}
      />
      <CommonProblems name={service.name} problems={service.problems} />
      <Suspense fallback={<SectionSkeleton />}>
        <BrandsSwiper title={`Brands We Service — ${service.name}`} />
      </Suspense>
      <WhyChooseUs
        eyebrow="Why Choose Us"
        title={`Why Coimbatore Trusts Us for ${service.name}`}
      />
      <ServiceProcess title={service.process.title} subtitle={service.process.subtitle} />
      <ServiceFAQ
        faqs={faqs}
        eyebrow="FAQ"
        title={`${service.name} Coimbatore — Frequently Asked Questions`}
      />
      <RelatedServices currentSlug={service.slug} />
      <CTASection
        title={`Need ${service.name} Today?`}
        subtitle={`Call us or book online — same-day ${service.name.toLowerCase()} across Coimbatore.`}
      />
    </>
  );
}
