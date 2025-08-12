import { useTranslation } from "react-i18next";
import { Mail, MapPin, Globe } from "lucide-react";
import { constants } from "@/lib/constants";
import { sectionIds } from "./sectionIds";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-col px-4 md:px-10 gap-8 md:gap-12 max-w-6xl mx-auto"
      id={sectionIds.contact}
    >
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold">
          {t("contactSection.title")}
        </h1>
        <p className="md:text-lg font-normal mt-4 max-w-3xl mx-auto">
          {t("contactSection.description")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Contact Information */}
        <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 text-white p-6 md:p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">
            {t("contactSection.contact")}
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  {t("contactSection.location")}
                </h3>
                <p className="text-secondary-100">{constants.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  {t("contactSection.email")}
                </h3>
                <a
                  href={`mailto:${constants.email}`}
                  className="text-secondary-100 hover:text-white transition-colors"
                >
                  {constants.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  {t("contactSection.website")}
                </h3>
                <p className="text-secondary-100">{constants.domain}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Card */}
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            {t("contactSection.whyChoose")}
          </h3>
          <div className="space-y-3 text-slate-700">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
              <span>{t("contactSection.item1")}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
              <span>{t("contactSection.item2")}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
              <span>{t("contactSection.item3")}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
              <span>{t("contactSection.item4")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
