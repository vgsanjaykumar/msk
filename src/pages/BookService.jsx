import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp, FaClock } from "react-icons/fa";
import SEO from "../seo/SEO";
import Breadcrumbs from "../components/common/Breadcrumbs";
import BookingForm from "../components/forms/BookingForm";
import { siteConfig, telLink, waLink } from "../config/site";

const breadcrumbTrail = [
  { name: "Home", path: "/" },
  { name: "Book Service", path: "/book-service" },
];

export default function BookService() {
  return (
    <>
      <SEO
        title={`Book a Service - ${siteConfig.name} | AC & Appliance Repair Coimbatore`}
        description={`Book AC, TV, washing machine or refrigerator repair with ${siteConfig.name} in Coimbatore. Fill in your details and we'll confirm by phone or WhatsApp.`}
        path="/book-service"
        breadcrumbTrail={breadcrumbTrail}
      />
      <Breadcrumbs trail={breadcrumbTrail} />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-600 dark:text-cyan-400 mb-2">
            Book a Service
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Book Appliance Service in Coimbatore
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-base md:text-lg">
            Tell us about your appliance and the problem — we'll confirm your
            preferred date and time by phone or WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 rounded-2xl p-6 sm:p-8 shadow-lg bg-purple-50 dark:bg-slate-800">
            <BookingForm />
          </div>

          <aside className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-800 p-6 shadow-sm">
              <h2 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Prefer to talk directly?
              </h2>
              <div className="space-y-3">
                <a
                  href={telLink()}
                  className="flex items-center gap-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 transition-colors"
                >
                  <FaPhoneAlt aria-hidden="true" /> Call {siteConfig.phoneDisplay}
                </a>
                <a
                  href={waLink("Hi MSK Solution, I'd like to book a service.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg bg-green-500 hover:bg-green-400 text-white px-4 py-3 transition-colors"
                >
                  <FaWhatsapp aria-hidden="true" /> Chat on WhatsApp
                </a>
              </div>
              <p className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <FaClock aria-hidden="true" /> Available 24/7 for emergency requests
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-800 p-6 shadow-sm text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              We currently serve {siteConfig.address.locality},{" "}
              {siteConfig.address.region} and surrounding areas. See our full{" "}
              <Link to="/areas-we-serve" className="text-purple-700 dark:text-cyan-400 underline underline-offset-2">
                service area list
              </Link>{" "}
              if you're unsure whether we cover your location.
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
