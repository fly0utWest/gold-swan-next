import { Shield } from "solar-icon-set";
import { reputationLifecycle } from "./features/reputationAndDataProtection";

const reputationAndDataProtection = {
  slug: "reputationAndDataProtection",
  icon: Shield,
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