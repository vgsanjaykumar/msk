import React from "react";
import { Outlet } from "react-router-dom";
import SkipLink from "../common/SkipLink";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";
import ScrollManager from "./ScrollManager";

/**
 * Shared page chrome (skip link, navbar, footer, floating actions) so every
 * route gets the same header/footer without duplicating them per page.
 * `<Outlet />` renders whichever route matched (Home, Privacy Policy, etc).
 */
export default function Layout() {
  return (
    <>
      <ScrollManager />
      <SkipLink />
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
