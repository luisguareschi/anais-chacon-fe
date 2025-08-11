import { Navbar } from "@/components/common/navbar";
import { Hero } from "./hero";
import { About } from "./about";
import { Sectors } from "./sectors";
import { ExecutiveDirector } from "./executive-director";
import { CallToAction } from "./call-to-action";
import { Footer } from "../common/footer";
import { Services } from "./services";

export const LandingPage = () => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <div className="flex flex-col gap-10 md:gap-20">
        <Hero />
        <About />
        <Sectors />
        <ExecutiveDirector />
        <CallToAction />
        <Services />
        <Footer />
      </div>
    </div>
  );
};
