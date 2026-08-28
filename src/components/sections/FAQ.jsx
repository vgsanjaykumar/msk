import React from "react";
import ServiceFAQ from "../services/ServiceFAQ";
import { generalFaqs } from "../../data/generalFaqs";

/** Homepage FAQ band — company-wide questions (see ServiceFAQ for the
 *  reusable accordion, and data/services.js for each service's own FAQs). */
export default function FAQ() {
  return (
    <ServiceFAQ
      faqs={generalFaqs}
      eyebrow="FAQ"
      title="MSK Solution — Frequently Asked Questions"
      id="faq"
    />
  );
}
