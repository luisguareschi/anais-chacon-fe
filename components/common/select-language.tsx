import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const SelectLanguage = () => {
  return (
    <Select defaultValue="es">
      <SelectTrigger className="rounded-full text-base">
        <Globe />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="es">Español</SelectItem>
        <SelectItem value="en">English</SelectItem>
      </SelectContent>
    </Select>
  );
};
