import { useReducedMotion as useFramerReducedMotion } from "framer-motion";

/**
 * Thin wrapper around framer-motion's `useReducedMotion` so every component
 * imports it from one place. Returns `true` when the user has enabled
 * "reduce motion" in their OS/browser — components should then skip
 * decorative animation (parallax, floating shapes, large transforms) while
 * keeping simple opacity fades so content still appears.
 */
export default function useReducedMotion() {
  return useFramerReducedMotion();
}
