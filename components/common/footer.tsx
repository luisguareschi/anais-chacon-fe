import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import { Mail, MapPin } from "lucide-react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("flex flex-col gap-4 text-sm max-w-sm", className)}>
      {children}
    </div>
  );
};

const ItemWithIcon = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex items-center gap-2">
      {icon}
      {children}
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="w-full bg-slate-900 p-4 md:p-10 py-10 md:py-14 text-slate-300">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-8 md:gap-20 md:flex-row justify-center">
          <Container>
            <h1 className="text-white font-semibold">
              International Impact & <br />
              <span className="text-slate-300 font-normal">
                Social Economy Consulting
              </span>
            </h1>
            <ItemWithIcon icon={<MapPin />}>
              Colors Business Center, 15, rue de l&apos;industrie, L-8069
              Bertrange - Luxembourg.
            </ItemWithIcon>
            <ItemWithIcon icon={<Mail />}>
              <a
                href="mailto:info@internationalimpact.lu"
                className="hover:underline"
              >
                info@internationalimpact.lu
              </a>
            </ItemWithIcon>
          </Container>
          <Container>
            <h1 className="text-white font-semibold">
              Anais Chacón
              <br />
              <span className="text-slate-300 font-normal">
                Executive Director
              </span>
            </h1>
            <p>
              Business permit: Nº 10165359/4. Authorized by le Gouvernement du
              Grand-Duché Du Luxembourg
            </p>
          </Container>
        </div>
        <Separator className="bg-slate-800" />
        <p className="text-center text-xs text-slate-400">
          © 2025 International Impact & Social Economy Consulting Anais Chacón.
          All rights reserved.
        </p>
      </div>
    </div>
  );
};
