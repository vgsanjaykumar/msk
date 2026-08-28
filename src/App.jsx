import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import SectionSkeleton from "./components/common/SectionSkeleton";

// Every route beyond the homepage is code-split — the homepage never pays
// for their bundle weight, and vice versa.
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const ACService = lazy(() => import("./pages/ACService"));
const TVRepair = lazy(() => import("./pages/TVRepair"));
const WashingMachineRepair = lazy(() => import("./pages/WashingMachineRepair"));
const RefrigeratorRepair = lazy(() => import("./pages/RefrigeratorRepair"));
const AreasWeServe = lazy(() => import("./pages/AreasWeServe"));
const Contact = lazy(() => import("./pages/Contact"));
const BookService = lazy(() => import("./pages/BookService"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const NotFound = lazy(() => import("./pages/NotFound"));

function LazyRoute({ Component }) {
  return (
    <Suspense fallback={<SectionSkeleton />}>
      <Component />
    </Suspense>
  );
}

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<LazyRoute Component={About} />} />
        <Route path="services" element={<LazyRoute Component={Services} />} />
        <Route path="ac-service-coimbatore" element={<LazyRoute Component={ACService} />} />
        <Route path="tv-repair-coimbatore" element={<LazyRoute Component={TVRepair} />} />
        <Route
          path="washing-machine-repair-coimbatore"
          element={<LazyRoute Component={WashingMachineRepair} />}
        />
        <Route
          path="refrigerator-repair-coimbatore"
          element={<LazyRoute Component={RefrigeratorRepair} />}
        />
        <Route path="areas-we-serve" element={<LazyRoute Component={AreasWeServe} />} />
        <Route path="contact" element={<LazyRoute Component={Contact} />} />
        <Route path="book-service" element={<LazyRoute Component={BookService} />} />
        <Route path="privacy-policy" element={<LazyRoute Component={PrivacyPolicy} />} />
        <Route path="disclaimer" element={<LazyRoute Component={Disclaimer} />} />
        <Route path="*" element={<LazyRoute Component={NotFound} />} />
      </Route>
    </Routes>
  );
};

export default App;
