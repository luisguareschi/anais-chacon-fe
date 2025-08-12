import { sectionIds } from "@/components/LandingPage/sectionIds";

export const navbarItems = [
  {
    label: "home",
    href: "/",
  },
  {
    label: "about",
    href: `/#${sectionIds.about}`,
  },
  {
    label: "services",
    href: `/#${sectionIds.services}`,
  },
  {
    label: "contact",
    href: `/#${sectionIds.contact}`,
  },
];
