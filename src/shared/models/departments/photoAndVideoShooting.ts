import { Camera } from "solar-icon-set";
import {
  photographyServices,
  videoProductionServices,
  designAndPrintingServices,
  postProductionServices,
  graphicDesignServices,
  musicalAccompanimentServices,
} from "./features/photoAndVideoShooting";

const photoAndVideoShooting = {
  slug: "photoAndVideoShooting",
  icon: Camera,
  title: {
    full: "title.full",
    firstString: "title.firstString",
    secondString: "title.secondString",
    thirdString: "title.thirdString",
  },
  description: "description",
  categories: {
    photographyServices: {
      title: "photographyServices.title",
      features: photographyServices,
    },
    videoProduction: {
      title: "videoProduction.title",
      features: videoProductionServices,
    },
    designAndPostProduction: {
      title: "designAndPostProduction.title",
      features: [...designAndPrintingServices, ...postProductionServices],
    },
    graphicDesign: {
      title: "graphicDesign.title",
      features: graphicDesignServices,
    },
    musicalAccompaniment: {
      title: "musicalAccompaniment.title",
      features: musicalAccompanimentServices,
    },
  },
};

export default photoAndVideoShooting;