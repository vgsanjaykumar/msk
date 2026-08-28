// Central service configuration. Each entry drives one dedicated route via
// the reusable <ServicePage /> template (src/pages/*.jsx + src/components
// /services/ServicePage.jsx), so the layout stays consistent while every
// page's SEO metadata, copy, problems and FAQs remain unique — see rule
// "no duplicate content between service pages" in the project brief.
import {
  FaSnowflake,
  FaFan,
  FaTools,
  FaCheckCircle,
  FaTint,
  FaBroom,
  FaBolt,
  FaShieldAlt,
  FaTv,
  FaVolumeUp,
  FaWifi,
  FaMicrochip,
  FaPlug,
  FaExclamationTriangle,
  FaSyncAlt,
  FaDoorClosed,
  FaWater,
  FaThermometerHalf,
  FaWind,
  FaCompress,
} from "react-icons/fa";

export const services = [
  {
    slug: "ac-service-coimbatore",
    path: "/ac-service-coimbatore",
    navLabel: "AC Service",
    name: "AC Service",
    eyebrow: "AC Service in Coimbatore",
    h1: "Best AC Service in Coimbatore",
    heroSubtitle:
      "Split AC and window AC repair, installation, gas filling, deep cleaning and AMC — trusted AC technicians serving homes and offices across Coimbatore.",
    heroImage: "/assets/services/ac.png",
    seo: {
      title: "Best AC Service in Coimbatore | AC Repair & Maintenance",
      description:
        "Looking for AC service in Coimbatore? Get reliable AC repair, maintenance, cleaning and installation services with convenient service support.",
    },
    primaryKeyword: "AC service in Coimbatore",
    secondaryKeywords: [
      "AC repair service in Coimbatore",
      "best AC service in Coimbatore",
      "AC service near me",
      "AC repair near me",
      "AC maintenance Coimbatore",
      "AC cleaning service Coimbatore",
      "AC installation Coimbatore",
      "AC gas refill Coimbatore",
    ],
    overview:
      "MSK Solution provides professional AC service in Coimbatore for split and window air conditioners of every major brand. From a sudden cooling drop to a full new installation, our technicians diagnose the issue on-site and carry out the repair, gas top-up or maintenance using genuine parts — with transparent pricing and a service warranty on every visit.",
    services: [
      { icon: FaTools, title: "AC Repair", desc: "Diagnosis and repair of cooling, sensor and thermostat faults." },
      { icon: FaFan, title: "AC Gas Refill", desc: "Refrigerant top-up to restore full cooling performance." },
      { icon: FaSnowflake, title: "AC Installation", desc: "Split & window AC installation with proper piping and leak testing." },
      { icon: FaBroom, title: "AC Deep Cleaning", desc: "Indoor and outdoor unit cleaning for better air quality and efficiency." },
      { icon: FaCheckCircle, title: "AC Maintenance & AMC", desc: "Scheduled maintenance and Annual Maintenance Contracts." },
      { icon: FaTint, title: "Water Leakage Fix", desc: "Diagnosis and repair of AC water leakage from indoor units." },
    ],
    problems: [
      { icon: FaExclamationTriangle, title: "Not Cooling Properly", desc: "Low or no cooling from the indoor unit." },
      { icon: FaTint, title: "Water Leakage", desc: "Water dripping from the indoor unit or pipe." },
      { icon: FaBolt, title: "AC Not Turning On", desc: "Unit fails to power on or trips the breaker." },
      { icon: FaFan, title: "Low Gas / Cooling Drop", desc: "Refrigerant running low, reducing cooling output." },
      { icon: FaVolumeUp, title: "Unusual Noise", desc: "Rattling, buzzing or grinding sounds during operation." },
      { icon: FaShieldAlt, title: "Bad Odour from AC", desc: "Musty smell caused by dust or mould build-up." },
    ],
    faqsRef: "ac",
    process: {
      title: "Our AC Repair Process",
      subtitle: "A clear, no-surprises process from the first call to a working, cool AC.",
    },
  },
  {
    slug: "tv-repair-coimbatore",
    path: "/tv-repair-coimbatore",
    navLabel: "TV Repair",
    name: "TV Repair",
    eyebrow: "TV Repair in Coimbatore",
    h1: "TV Repair Services in Coimbatore",
    heroSubtitle:
      "LED, LCD and Smart TV repair for display, sound, power and connectivity problems — doorstep diagnosis and repair across Coimbatore.",
    heroImage: "/assets/services/tv.png",
    seo: {
      title: "TV Repair Services in Coimbatore | LED & Smart TV Repair",
      description:
        "Get professional TV repair services in Coimbatore for LED, LCD and Smart TVs. Book a service visit for TV display, sound and power issues.",
    },
    primaryKeyword: "TV repair service in Coimbatore",
    secondaryKeywords: [
      "TV repair near me",
      "LED TV repair Coimbatore",
      "Smart TV repair Coimbatore",
      "LCD TV repair Coimbatore",
      "TV display repair Coimbatore",
      "TV sound problem repair",
      "TV not turning on repair",
    ],
    overview:
      "MSK Solution repairs LED, LCD and Smart TVs of all major brands in Coimbatore. Our technicians handle display faults, sound issues, power problems and connectivity errors, and carry out wall-mount installation as well — so you get a single, reliable point of contact for TV service at home.",
    services: [
      { icon: FaTv, title: "Display Repair", desc: "Backlight, screen flicker and picture-quality issues." },
      { icon: FaVolumeUp, title: "Sound Repair", desc: "Speaker and audio board faults causing no or distorted sound." },
      { icon: FaMicrochip, title: "Motherboard Repair", desc: "Chip-level repair for power and board-level faults." },
      { icon: FaWifi, title: "Smart TV & Connectivity", desc: "Wi-Fi, app and HDMI/input connectivity troubleshooting." },
      { icon: FaTools, title: "TV Installation", desc: "Wall mounting and complete setup service." },
      { icon: FaPlug, title: "Power Issue Repair", desc: "Fixing TVs that won't switch on or keep restarting." },
    ],
    problems: [
      { icon: FaTv, title: "No Picture", desc: "Screen stays blank even though the TV powers on." },
      { icon: FaVolumeUp, title: "No Sound", desc: "Picture works but there is no audio output." },
      { icon: FaPlug, title: "TV Not Turning On", desc: "No response at all when powering the TV on." },
      { icon: FaExclamationTriangle, title: "Screen Flickering", desc: "Picture flickers, dims or shows lines." },
      { icon: FaWifi, title: "HDMI / Input Issues", desc: "TV doesn't detect a connected device or input source." },
      { icon: FaTools, title: "Remote Not Working", desc: "TV doesn't respond to the remote control." },
    ],
    faqsRef: "tv",
    process: {
      title: "Our TV Repair Process",
      subtitle: "From diagnosis to a fully tested, working television.",
    },
  },
  {
    slug: "washing-machine-repair-coimbatore",
    path: "/washing-machine-repair-coimbatore",
    navLabel: "Washing Machine Repair",
    name: "Washing Machine Repair",
    eyebrow: "Washing Machine Repair in Coimbatore",
    h1: "Washing Machine Repair Services in Coimbatore",
    heroSubtitle:
      "Front-load and top-load washing machine repair for draining, spinning, leakage and installation issues — at your doorstep in Coimbatore.",
    heroImage: "/assets/services/washing-machine.png",
    seo: {
      title: "Washing Machine Repair Services in Coimbatore | Service Support",
      description:
        "Professional washing machine repair services in Coimbatore for common washing, drainage, spinning, leakage and installation issues.",
    },
    primaryKeyword: "washing machine repair Coimbatore",
    secondaryKeywords: [
      "washing machine service Coimbatore",
      "washing machine repair near me",
      "front load washing machine repair",
      "top load washing machine repair",
      "washing machine not draining",
      "washing machine not spinning",
      "washing machine water leakage repair",
    ],
    overview:
      "MSK Solution repairs both front-load and top-load washing machines across Coimbatore. Whether the drum won't spin, water won't drain or the machine leaks during a wash cycle, our technicians diagnose the fault on-site and carry out the repair or installation with genuine spare parts.",
    services: [
      { icon: FaSyncAlt, title: "Drum & Spin Repair", desc: "Fixing vibration, spin failure and drum motor issues." },
      { icon: FaTint, title: "Water Leakage Repair", desc: "Fixing inlet, outlet and pipe leakage." },
      { icon: FaTools, title: "Installation", desc: "Front-load and top-load machine installation." },
      { icon: FaBroom, title: "Deep Cleaning", desc: "Drum and filter cleaning for better wash performance." },
      { icon: FaDoorClosed, title: "Door Lock Repair", desc: "Fixing door latch and lock sensor faults." },
      { icon: FaMicrochip, title: "Error Code Diagnosis", desc: "Reading and resolving display error codes." },
    ],
    problems: [
      { icon: FaPlug, title: "Not Starting", desc: "Machine doesn't power on or respond to controls." },
      { icon: FaWater, title: "Not Filling Water", desc: "Drum doesn't fill with water at the start of a cycle." },
      { icon: FaTint, title: "Not Draining", desc: "Water stays in the drum after the wash cycle." },
      { icon: FaSyncAlt, title: "Not Spinning", desc: "Drum fails to spin or spin-dry clothes." },
      { icon: FaExclamationTriangle, title: "Excessive Vibration", desc: "Machine shakes or moves heavily during spin." },
      { icon: FaDoorClosed, title: "Door Lock Problem", desc: "Door won't lock, unlock, or open after a cycle." },
    ],
    faqsRef: "washing-machine",
    process: {
      title: "Our Washing Machine Repair Process",
      subtitle: "A straightforward process to get your machine washing again.",
    },
  },
  {
    slug: "refrigerator-repair-coimbatore",
    path: "/refrigerator-repair-coimbatore",
    navLabel: "Refrigerator Repair",
    name: "Refrigerator Repair",
    eyebrow: "Refrigerator Repair in Coimbatore",
    h1: "Refrigerator Repair Service in Coimbatore",
    heroSubtitle:
      "Single-door and double-door refrigerator repair for cooling, gas, compressor and noise issues — reliable service across Coimbatore.",
    heroImage: "/assets/services/refrigerator.png",
    seo: {
      title: "Refrigerator Repair Service in Coimbatore | Fridge Repair",
      description:
        "Reliable refrigerator repair service in Coimbatore for cooling, leakage, noise, temperature and other common fridge problems.",
    },
    primaryKeyword: "refrigerator repair Coimbatore",
    secondaryKeywords: [
      "fridge repair service Coimbatore",
      "refrigerator service near me",
      "fridge not cooling repair",
      "refrigerator cooling problem",
      "refrigerator water leakage",
      "refrigerator noise problem",
      "double door refrigerator repair",
      "single door refrigerator repair",
    ],
    overview:
      "MSK Solution repairs single-door and double-door refrigerators across Coimbatore. From a fridge that has stopped cooling to a noisy compressor or a leaking door seal, our technicians identify the root cause and carry out the repair or gas refill needed to restore normal cooling.",
    services: [
      { icon: FaSnowflake, title: "Cooling Issue Repair", desc: "Diagnosis and repair of freezer and cooling faults." },
      { icon: FaFan, title: "Gas Refill", desc: "Refrigerant refill to restore proper cooling." },
      { icon: FaCompress, title: "Compressor Repair", desc: "Fixing compressor noise and failure." },
      { icon: FaDoorClosed, title: "Gasket Replacement", desc: "Replacing worn or damaged door seals." },
      { icon: FaTint, title: "Water Leakage Repair", desc: "Fixing leaks from the fridge or freezer compartment." },
      { icon: FaThermometerHalf, title: "Temperature Control Repair", desc: "Fixing thermostat and temperature fluctuation issues." },
    ],
    problems: [
      { icon: FaSnowflake, title: "Not Cooling", desc: "Fridge or freezer compartment stays warm." },
      { icon: FaThermometerHalf, title: "Excessive Cooling", desc: "Food freezes even in the fridge compartment." },
      { icon: FaTint, title: "Water Leakage", desc: "Water pooling inside or underneath the refrigerator." },
      { icon: FaWind, title: "Ice Build-Up", desc: "Excess frost forming in the freezer compartment." },
      { icon: FaCompress, title: "Compressor Noise", desc: "Loud humming, clicking or buzzing sounds." },
      { icon: FaDoorClosed, title: "Door / Gasket Problem", desc: "Door doesn't seal properly, letting cool air escape." },
    ],
    faqsRef: "refrigerator",
    process: {
      title: "Our Refrigerator Repair Process",
      subtitle: "Careful diagnosis first, so we fix the actual cause of the problem.",
    },
  },
];

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);

// Extra appliance types MSK Solution services but that don't (yet) have a
// dedicated landing page — shown on the Services directory and linked to
// Book Service / Contact instead of a standalone route.
export const additionalAppliances = [
  { title: "Water Heater / Geyser", desc: "Heating element replacement, repair and installation.", icon: FaThermometerHalf },
  { title: "Microwave Oven", desc: "Heating faults, sparking and control panel repair.", icon: FaMicrochip },
  { title: "Speaker Repair", desc: "Home theatre, Bluetooth and tower speaker repair.", icon: FaVolumeUp },
  { title: "Air Cooler", desc: "Pump, fan and cooling pad service and repair.", icon: FaWind },
];
