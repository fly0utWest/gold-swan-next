import { Stars } from "lucide-react";
import {
  castingAndModelSelectionServices,
  photoVideoShootsServices,
  advertisingContentServices,
} from "./features/castingAndProduction";

const castingAndProduction = {
  slug: "castingAndProduction",
  icon: Stars,
  title: {
    full: "title.full",
    firstString: "title.firstString",
    secondString: "title.secondString",
    thirdString: "title.thirdString",
  },
  description: "description",
  categories: {
    castingAndModelSelection: {
      title: "castingAndModelSelection.title",
      features: castingAndModelSelectionServices,
    },
    photoVideoShoots: {
      title: "photoVideoShoots.title",
      features: photoVideoShootsServices,
    },
    advertisingContent: {
      title: "advertisingContent.title",
      features: advertisingContentServices,
    },
  },
};

export default castingAndProduction;
