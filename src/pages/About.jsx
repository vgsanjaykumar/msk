import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import SEO from "../seo/SEO";
import Breadcrumbs from "../components/common/Breadcrumbs";
import CTASection from "../components/common/CTASection";
import SectionHeading from "../components/common/SectionHeading";
import SectionSkeleton from "../components/common/SectionSkeleton";
import About from "../components/sections/About";
import { fadeUp, viewportOnce } from "../components/common/motionPresets";
import { siteConfig } from "../config/site";

const WhyChooseUs = lazy(() => import("../components/sections/WhyChooseUs"));
const Gallery = lazy(() => import("../components/sections/Gallery"));
const ServiceAreasTeaser = lazy(() => import("../components/sections/ServiceAreasTeaser"));

const breadcrumbTrail = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export default function AboutPage() {
  return (
    <section className="w-full bg-white dark:bg-slate-900 transition-colors duration-300">
      <SEO
        title={`About Us - ${siteConfig.name} | Appliance Service in Coimbatore`}
        description={`Learn about ${siteConfig.name}, an independent AC service and home appliance repair provider in Coimbatore — our approach, service quality and coverage.`}
        path="/about"
        breadcrumbTrail={breadcrumbTrail}
      />
      <Breadcrumbs trail={breadcrumbTrail} />

      <section className="max-w-4xl mx-auto px-6 pt-14 md:pt-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-purple-600 dark:text-cyan-400 mb-2">
          About Us
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          About {siteConfig.name}
        </h1>
      </section>

      <About />

      <section className="w-full py-16 md:py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <SectionHeading
              eyebrow="Our Approach"
              title="How We Work"
              level={2}
              align="left"
            />
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We diagnose before we recommend. Every visit starts with
              identifying the actual fault, so you know what's wrong and what
              it will take to fix it before any repair begins. We explain the
              issue in plain terms and use genuine or manufacturer-recommended
              parts for every job.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <SectionHeading
              eyebrow="Customer Focus"
              title="Service Quality & Support"
              level={2}
              align="left"
            />
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Clear communication, honest pricing and a service warranty on
              every repair — that's what we aim for on each visit. If a
              problem returns, reach out and we'll follow up.
            </p>
          </motion.div>
        </div>
      </section>

      <Suspense fallback={<SectionSkeleton />}>
        <WhyChooseUs
          eyebrow="Why Choose Us"
          title="Reasons Coimbatore Trusts MSK Solution"
        />
        <Gallery />
        <ServiceAreasTeaser />
      </Suspense>

      <CTASection
        title="Ready to Book a Service?"
        subtitle={`Reach out to ${siteConfig.name} for AC, TV, refrigerator or washing machine service in Coimbatore.`}
      />
    </section>
  );
}
