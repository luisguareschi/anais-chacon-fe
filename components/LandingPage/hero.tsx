import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";

export const Hero = () => {
  const { t } = useTranslation();

  const handleLearnMore = () => {
    // scroll to the about section
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-[calc(100dvh-80px)] w-full bg-primary-600 text-white flex flex-col justify-center items-center px-4 md:px-10">
      <div className="flex flex-col gap-8 justify-center items-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold md:text-center text-primary-950">
          {t("hero.title1")}: <br />
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold md:text-center text-white">
          {t("hero.title2")}
        </h2>
        <p className="text-lg md:text-2xl lg:text-2xl font-normal md:text-center max-w-2xl">
          {t("hero.description")}
        </p>
        <div className="flex gap-4 w-full justify-center">
          <Button variant="secondary" className="w-full md:w-fit">
            {t("hero.contact")}
          </Button>
          <Button
            variant="outline"
            className="w-full md:w-fit"
            onClick={handleLearnMore}
          >
            {t("hero.learnMore")}
          </Button>
        </div>
      </div>
    </div>
  );
};
