import { Eye, Heart, ShieldCheck, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const aboutItems = [
  {
    title: "Crecimiento de Índice de desarrollo humano",
    icon: <TrendingUp />,
  },
  {
    title: "Libertades económicas e individuales",
    icon: <ShieldCheck />,
  },
  {
    title: "Aumento de la calidad de vida",
    icon: <Heart />,
  },
  {
    title: "Transparencia y sostenibilidad",
    icon: <Eye />,
  },
];

interface AboutItemProps {
  title: string;
  icon: React.ReactNode;
}

const AboutItem = ({ title, icon }: AboutItemProps) => {
  return (
    <div
      className="flex gap-2 items-center bg-neutral-100 text-neutral-900 
    p-4 rounded-md w-full text-sm md:text-base"
    >
      {icon}
      <p>{title}</p>
    </div>
  );
};

export const About = () => {
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-col px-4 md:px-10 py-10 md:py-20 gap-8 md:gap-12 max-w-6xl mx-auto"
      id="about"
    >
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-center">
        {t("aboutUs.title")}
      </h1>
      <p className="text-lg md:text-xl lg:text-xl font-normal md:text-center">
        {t("aboutUs.p1")}
      </p>
      <p className="text-lg md:text-xl lg:text-xl font-normal md:text-center">
        {t("aboutUs.p2")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {aboutItems.map((item) => (
          <AboutItem key={item.title} title={item.title} icon={item.icon} />
        ))}
      </div>
    </div>
  );
};
