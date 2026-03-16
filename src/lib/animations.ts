export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-48px" },
  transition: { duration: 0.5, ease: "easeOut" },
};

export const staggerContainer = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
  viewport: { once: true, margin: "-48px" },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};

export const cardHover = {
  rest: { y: 0, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" },
  hover: { y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" },
};

export const countUpConfig = { duration: 2, useEasing: true };
