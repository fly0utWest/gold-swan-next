import { Camera } from "solar-icon-set";
import { MoneyBag } from "solar-icon-set";
import { Programming } from "solar-icon-set";
import { Safe2 } from "solar-icon-set";
import { Star2 } from "solar-icon-set";
import { PieChart2 } from "solar-icon-set";

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
];

export default departmentButtons;