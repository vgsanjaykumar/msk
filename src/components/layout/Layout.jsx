import React from "react";
import { Outlet } from "react-router-dom";
import SkipLink from "../common/SkipLink";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";
import MobileBottomBar from "./MobileBottomBar";
import ScrollManager from "./ScrollManager";

/**
 * Shared page chrome (skip link, navbar, footer, floating actions) so every
 * route gets the same header/footer without duplicating them per page.
 * `<Outlet />` renders whichever route matched. `pb-16 md:pb-0` on <main>
 * reserves space for the fixed mobile bottom bar so it never overlaps
 * page content or the footer.
 */
export default function Layout() {
  return (
    <>
      <ScrollManager />
      <SkipLink />
      <Navbar />
      <main id="main-content" className="pb-16 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
      <MobileBottomBar />
    </>
  );
}
