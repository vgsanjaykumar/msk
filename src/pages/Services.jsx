import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/SEO";
import Breadcrumbs from "../components/common/Breadcrumbs";
import CTASection from "../components/common/CTASection";
import ServiceGrid from "../components/services/ServiceGrid";
import SectionSkeleton from "../components/common/SectionSkeleton";
import { siteConfig } from "../config/site";

const FocusGrid = lazy(() => import("../components/sections/FocusGrid"));

const breadcrumbTrail = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export default function Services() {
  return (
    <>
    <section className="w-full bg-white dark:bg-slate-900 transition-colors duration-300">
  <SEO
        title={`Appliance Repair Services in Coimbatore - ${siteConfig.name}`}
        description="Browse all appliance repair and service pages from MSK Solution — AC, TV, washing machine and refrigerator service across Coimbatore."
        path="/services"
        breadcrumbTrail={breadcrumbTrail}
      />
      <Breadcrumbs trail={breadcrumbTrail} />

      <section className="max-w-4xl mx-auto px-6 pt-14 md:pt-16 text-center bg-">
        <p className="text-sm font-semibold uppercase tracking-wider text-purple-600 dark:text-cyan-400 mb-2">
          Our Services
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Appliance Repair Services in Coimbatore
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-base md:text-lg">
          Choose a service below for detailed pricing-free information on what
          we repair, common problems and frequently asked questions.
        </p>
      </section>

      <ServiceGrid
        eyebrow="Dedicated Service Pages"
        title="Explore Each Service"
        showDetails
      />

      <section className="w-full py-16 md:py-20 bg-gray-50 dark:bg-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<SectionSkeleton />}>
            <FocusGrid />
          </Suspense>
          <div className="mt-4 text-center">
            <Link
              to="/book-service"
              className="inline-flex items-center gap-2 font-semibold text-purple-700 dark:text-cyan-400 hover:underline"
            >
              Book a service for any of these appliances
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </section>
    
    </>
  );
}
