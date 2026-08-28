import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router does two things a plain multi-page site gets for free, so we
 * handle them manually:
 *  1. Reset scroll to the top when navigating to a new route.
 *  2. Scroll to the matching element when the URL has a `#hash` (e.g. a
 *     Footer/Navbar link to `/#ac-service` from another page). Because
 *     below-the-fold sections are lazy-loaded, the target element may not
 *     exist yet on the first render after navigation, so this retries with
 *     `requestAnimationFrame` for a short window instead of firing once.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Don't fight the browser on the very first load of the app — let it
    // land wherever the URL/hash naturally points.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (!hash) return;
    }

    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    const id = hash.replace("#", "");
    let attempts = 0;
    let frameId;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      attempts += 1;
      if (attempts < 120) {
        frameId = requestAnimationFrame(tryScroll);
      }
    };

    tryScroll();
    return () => cancelAnimationFrame(frameId);
  }, [pathname, hash]);

  return null;
}
