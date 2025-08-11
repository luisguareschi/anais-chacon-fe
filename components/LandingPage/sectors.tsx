import { Bus, Droplets, Sprout } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";

const sectors = [
  {
    title: "sectors.transport",
    description: "sectors.transportDescription",
    icon: <Bus />,
    bgColor: "bg-red-100",
    textColor: "text-red-900",
  },
  {
    title: "sectors.water",
    description: "sectors.waterDescription",
    icon: <Droplets />,
    bgColor: "bg-primary-100",
    textColor: "text-primary-900",
  },
  {
    title: "sectors.agriculture",
    description: "sectors.agricultureDescription",
    icon: <Sprout />,
    bgColor: "bg-green-100",
    textColor: "text-green-900",
  },
];

export const Sectors = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-10 px-4 md:px-10 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-center">
        {t("sectors.title")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
        {sectors.map((sector) => (
          <Card
            key={sector.title}
            className="flex flex-col gap-4 items-center justify-start p-4 hover:shadow-2xl transition-all duration-300"
          >
            <div
              className={cn(
                "bg-neutral-100 p-4 rounded-full",
                sector.bgColor,
                sector.textColor,
              )}
            >
              {sector.icon}
            </div>
            <h2 className="text-center font-semibold">{t(sector.title)}</h2>
            <p className="text-center text-slate-600">
              {t(sector.description)}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};
