import { Lock } from "lucide-react";
import { reputationLifecycle } from "./features/reputationAndDataProtection";

const reputationAndDataProtection = {
  slug: "reputationAndDataProtection",
  icon: Lock,
  title: {
    full: "title.full",
    firstString: "title.firstString",
    secondString: "title.secondString",
    thirdString: "title.thirdString",
  },
  description: "description",
  categories: {
    reputationLifecycle: {
      title: "reputationLifecycle.title",
      features: reputationLifecycle,
    },
  },
};

export default reputationAndDataProtection;