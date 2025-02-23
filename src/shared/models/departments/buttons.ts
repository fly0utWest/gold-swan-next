import { Camera, SmartSpeaker2, MoneyBag, Programming, Safe2, Star2, Stars, PieChart2 } from "solar-icon-set";

interface DepartmentButton {
  title: string;
  icon: (allProps: any) => JSX.Element;
  href: string;
}

const departmentButtons: DepartmentButton[] = [
  {
    title: "marketing",
    icon: MoneyBag,
    href: "/departments/digitalMarketing",
  },
  {
    title: "brandDevelopment",
    icon: Star2,
    href: "/departments/brandDevelopmentAndPR",
  },
  {
    title: "reputationAndDataProtection",
    icon: Safe2,
    href: "/departments/reputationAndDataProtection",
  },
  {
    title: "analyticsAndStrategy",
    icon: PieChart2,
    href: "/departments/analyticsAndStrategy",
  },
  {
    title: "photoVideoShooting",
    icon: Camera,
    href: "/departments/photoAndVideoShooting",
  },
  {
    title: "webdev",
    icon: Programming,
    href: "/departments/webdev",
  },
  {
    title: "3DForgeStudio",
    icon: SmartSpeaker2,
    href: "/departments/3DForgeStudio",
  },
  {
    title: "castingAndProduction",
    icon: Stars, 
    href: "/departments/castingAndProduction",
  },
];

export default departmentButtons;