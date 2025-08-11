import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Handshake,
  ChartColumnIncreasing,
  Users,
  GraduationCap,
  Search,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const services = [
  {
    title: "servicesSection.service1.title",
    description: "servicesSection.service1.description",
    icon: <Search />,
  },
  {
    title: "servicesSection.service2.title",
    description: "servicesSection.service2.description",
    icon: <Users />,
  },
  {
    title: "servicesSection.service3.title",
    description: "servicesSection.service3.description",
    icon: <ChartColumnIncreasing />,
  },
  {
    title: "servicesSection.service4.title",
    description: "servicesSection.service4.description",
    icon: <Handshake />,
  },
  {
    title: "servicesSection.service5.title",
    description: "servicesSection.service5.description",
    icon: <GraduationCap />,
  },
];

interface ServiceItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceItem = ({ title, description, icon }: ServiceItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();
  return (
    <div
      className="flex flex-col cursor-pointer bg-slate-100 p-4 rounded-md hover:shadow-md transition-all duration-300"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center gap-4 w-full justify-start">
        <p className="text-slate-950">{icon}</p>
        <p className="text-lg text-slate-950 font-semibold">{t(title)}</p>
        <div className="ml-auto text-slate-600">
          {!isExpanded ? <ChevronDown /> : <ChevronUp />}
        </div>
      </div>
      <motion.div
        initial={{ height: 0, marginTop: 0 }}
        animate={{
          height: isExpanded ? "auto" : 0,
          marginTop: isExpanded ? 20 : 0,
        }}
        exit={{ height: 0, marginTop: 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <p className="text-slate-600">{t(description)}</p>
      </motion.div>
    </div>
  );
};

export const Services = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col px-4 md:px-10 gap-8 md:gap-12 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-center">
        {t("servicesSection.title")}
      </h1>
      <h2 className="md:text-lg font-normal md:text-center">
        {t("servicesSection.description")}
      </h2>
      <div className="flex flex-col gap-4">
        {services.map((service) => (
          <ServiceItem key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
};
