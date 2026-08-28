// Shared framer-motion variants reused across sections so animation
// timing/easing stays consistent and isn't redefined in every file.
// All variants animate only `transform`/`opacity` so they stay on the
// compositor thread (GPU) and run at 60fps without triggering layout.

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export const slideRight = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren, delayChildren },
  },
});

export const cardPop = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 15 },
  },
};

// Default viewport settings for scroll-reveal (`whileInView`) animations —
// trigger once, a little before the element is fully in view.
export const viewportOnce = { once: true, amount: 0.25 };

// Gentle, continuous vertical float used for decorative background shapes.
export const floatY = {
  animate: {
    y: [0, -18, 0],
    transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
  },
};

export const floatYSlow = {
  animate: {
    y: [0, 16, 0],
    x: [0, 10, 0],
    transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
  },
};
