import { Camera } from "solar-icon-set";
import {
  photographyServices,
  videoProductionServices,
  designAndPrintingServices,
  postProductionServices,
  graphicDesignServices,
  musicalAccompanimentServices,
} from "./features/photoAndVideoShooting";

export default {
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
    designAndPrinting: {
      title: "designAndPrinting.title",
      features: designAndPrintingServices,
    },
    postProduction: {
      title: "postProduction.title",
      features: postProductionServices,
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
