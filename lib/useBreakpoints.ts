import { useWindowSize } from "usehooks-ts";

const breakPoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

/**
 * Custom hook for responsive breakpoint detection
 *
 * Returns boolean values indicating whether the current window width
 * is below each breakpoint threshold. Useful for conditional rendering
 * based on screen size.
 *
 * @returns Object with breakpoint flags (sm, md, lg, xl, 2xl)
 * - sm: true if width < 640px
 * - md: true if width < 768px
 * - lg: true if width < 1024px
 * - xl: true if width < 1280px
 * - 2xl: true if width < 1536px
 */
export const useBreakpoints = () => {
  const { width } = useWindowSize();

  const sm = width >= breakPoints.sm;
  const md = width >= breakPoints.md;
  const lg = width >= breakPoints.lg;
  const xl = width >= breakPoints.xl;
  const xxl = width >= breakPoints["2xl"];

  return { sm, md, lg, xl, "2xl": xxl };
};
