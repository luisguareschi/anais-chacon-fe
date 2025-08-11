import { Navbar } from "@/components/common/navbar";
import { Hero } from "./hero";
import { About } from "./about";
import { Sectors } from "./sectors";

export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Sectors />
    </div>
  );
};
