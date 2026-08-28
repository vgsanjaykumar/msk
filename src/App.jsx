import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import SectionSkeleton from "./components/common/SectionSkeleton";

// Secondary pages are code-split too — the homepage never needs to pay
// for their bundle weight, and vice versa.
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="privacy-policy"
          element={
            <Suspense fallback={<SectionSkeleton />}>
              <PrivacyPolicy />
            </Suspense>
          }
        />
        <Route
          path="disclaimer"
          element={
            <Suspense fallback={<SectionSkeleton />}>
              <Disclaimer />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<SectionSkeleton />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
