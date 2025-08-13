/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import profilePicture from "@/assets/profile-pic.png";

interface ProfilePictureProps {
  className?: string;
}

const ProfilePicture = ({ className }: ProfilePictureProps) => {
  return (
    <img
      className={cn(
        "size-40 min-w-40 md:size-70 md:min-w-70 bg-white rounded-full p-2 border-2 border-slate-200 object-cover",
        className,
      )}
      src={profilePicture.src}
      alt="Profile"
    />
  );
};

export const ExecutiveDirector = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row gap-10 px-4 md:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col gap-6 md:gap-10 max-w-2xl">
        <span className="flex flex-col text-3xl md:text-4xl lg:text-6xl font-semibold">
          <h1>{t("executiveDirector.our")}</h1>
          <h2 className="text-secondary-600">
            {t("executiveDirector.executiveDirector")}
          </h2>
          <h3>{t("executiveDirector.name")}</h3>
        </span>
        <ProfilePicture className="block md:hidden mx-auto" />
        <p>{t("executiveDirector.description")}</p>
        <blockquote className="italic p-4 bg-neutral-100 rounded-md border-l-4 border-secondary-600 font-semibold">
          &quot;{t("executiveDirector.quote")}&quot;
        </blockquote>
        <p>{t("executiveDirector.description2")}</p>
      </div>
      <ProfilePicture className="hidden md:block" />
    </div>
  );
};
