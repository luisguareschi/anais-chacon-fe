import { ArrowRight, Mail } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { constants } from "@/lib/constants";
import { useTranslation } from "react-i18next";

export const CallToAction = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-primary-600 p-4 md:p-10 py-10 md:py-14">
      <div className="flex flex-col gap-6 md:gap-10 max-w-6xl mx-auto items-center">
        <h1 className="text-center text-white text-2xl md:text-4xl font-semibold">
          {t("callToAction.title")}
        </h1>
        <Link href={`mailto:${constants.email}`} target="_blank">
          <Button
            variant="secondary"
            className="w-full md:w-fit gap-5 min-w-[200px]"
          >
            <Mail />
            {t("callToAction.contact")}
            <ArrowRight />
          </Button>
        </Link>
        <p className="text-center text-white">{constants.email}</p>
      </div>
    </div>
  );
};
