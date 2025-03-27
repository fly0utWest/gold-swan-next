import { Camera } from "lucide-react";
import {
  photographyServices,
  videoProductionServices,
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
