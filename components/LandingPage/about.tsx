import { Eye, Heart, ShieldCheck, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { sectionIds } from "./sectionIds";

const aboutItems = [
  {
    title: "aboutUs.item1",
    icon: <TrendingUp />,
  },
  {
    title: "aboutUs.item2",
    icon: <ShieldCheck />,
  },
  {
    title: "aboutUs.item3",
    icon: <Heart />,
  },
  {
    title: "aboutUs.item4",
    icon: <Eye />,
  },
];

interface AboutItemProps {
  title: string;
  icon: React.ReactNode;
}

const AboutItem = ({ title, icon }: AboutItemProps) => {
  const { t } = useTranslation();

  return (
    <div
      className="flex gap-2 items-center bg-slate-100 text-neutral-900 
    p-4 rounded-md w-full text-sm md:text-base"
    >
      {icon}
      <p>{t(title)}</p>
    </div>
  );
};

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col px-4 md:px-10 gap-8 md:gap-12 max-w-6xl mx-auto">
      <h1
        className="text-3xl md:text-4xl lg:text-6xl font-semibold text-center"
        id={sectionIds.about}
      >
        {t("aboutUs.title")}
      </h1>
      <p className="md:text-lg font-normal md:text-center">{t("aboutUs.p1")}</p>
      <p className="md:text-lg font-normal md:text-center">{t("aboutUs.p2")}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {aboutItems.map((item) => (
          <AboutItem key={item.title} title={item.title} icon={item.icon} />
        ))}
      </div>
    </div>
  );
};
