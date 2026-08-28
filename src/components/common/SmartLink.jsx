import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const MotionLink = motion(Link);

/**
 * Route-aware link for a single-page-per-route site with in-page section
 * anchors (e.g. `#ac-service`). Given `to`:
 *  - A path like `/privacy-policy` always renders a React Router `Link`.
 *  - A hash like `#ac-service` renders a plain `<a href="#...">` when
 *    already on the homepage (instant native smooth scroll), or a
 *    `Link to="/#ac-service"` from any other route — `ScrollManager`
 *    handles scrolling to it once the target route has mounted.
 *
 * Used by both `Navbar` and `Footer` so this logic lives in one place.
 */
export default function SmartLink({ to, children, ...rest }) {
  const { pathname } = useLocation();
  const isHash = to.startsWith("#");

  if (!isHash) {
    return (
      <MotionLink to={to} {...rest}>
        {children}
      </MotionLink>
    );
  }

  if (pathname === "/") {
    return (
      <motion.a href={to} {...rest}>
        {children}
      </motion.a>
    );
  }

  return (
    <MotionLink to={`/${to}`} {...rest}>
      {children}
    </MotionLink>
  );
}
