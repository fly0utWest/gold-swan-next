import { Programming } from "solar-icon-set";
import { fullStackServices, llmServices } from "./features/webdev";

const webdev = {
  slug: "webdev",
  icon: Programming,
  title: {
    full: "title.full",
    firstString: "title.firstString",
    secondString: "title.secondString",
    thirdString: "title.thirdString",
  },
  description: "description",
  categories: {
    fullStackDev: {
      title: "fullStackDev.title",
      features: fullStackServices,
    },
    LLMIntegrations: {
      title: "LLMIntegrations.title",
      features: llmServices,
    },
  },
};

export default webdev;
