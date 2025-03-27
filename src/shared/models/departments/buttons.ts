import {
  Camera,
  Box,
  CircleDollarSign,
  Terminal,
  LockIcon,
  Star,
  Stars,
  LucideIcon,
  PieChart,
} from "lucide-react";

interface DepartmentButton {
  title: string;
  icon: LucideIcon;
  href: string;
}

const departmentButtons: DepartmentButton[] = [
  {
    title: "marketing",
    icon: CircleDollarSign,
    href: "/departments/digitalMarketing",
  },
  {
    title: "brandDevelopment",
    icon: Star,
    href: "/departments/brandDevelopmentAndPR",
  },
  {
    title: "reputationAndDataProtection",
    icon: LockIcon,
    href: "/departments/reputationAndDataProtection",
  },
  {
    title: "analyticsAndStrategy",
    icon: PieChart,
    href: "/departments/analyticsAndStrategy",
  },
  {
    title: "photoVideoShooting",
    icon: Camera,
    href: "/departments/photoAndVideoShooting",
  },
  {
    title: "webdev",
    icon: Terminal,
    href: "/departments/webdev",
  },
  {
    title: "3DForgeStudio",
    icon: Box,
    href: "/departments/3DForgeStudio",
  },
  {
    title: "castingAndProduction",
    icon: Stars,
    href: "/departments/castingAndProduction",
  },
];

export default departmentButtons;
