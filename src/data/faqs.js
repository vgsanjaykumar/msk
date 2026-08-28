// Backward-compatible re-export. AC-specific FAQ content now lives in
// serviceFaqs.js (serviceFaqs.ac) alongside the other services' FAQs.
export { serviceFaqs } from "./serviceFaqs";
import { serviceFaqs } from "./serviceFaqs";
export const faqs = serviceFaqs.ac;
