import { Box } from "lucide-react";
import {
  motionCGIServices,
  designPostProductionServices,
  fullCGServices,
  vfxServices,
  prototypingServices,
} from "./features/3DForgeStudio";

const threeDForgeStudio = {
  slug: "3dForgeStudio",
  icon: Box,
  title: {
    full: "title.full",
    firstString: "title.firstString",
    secondString: "title.secondString",
    thirdString: "title.thirdString",
  },
  description: "description",
  categories: {
    motionCGI: {
      title: "motionCGI.title",
      features: motionCGIServices,
    },
    designPostProduction: {
      title: "designPostProduction.title",
      features: designPostProductionServices,
    },
    fullCG: {
      title: "fullCG.title",
      features: fullCGServices,
    },
    vfx: {
      title: "VFX.title",
      features: vfxServices,
    },
    prototyping: {
      title: "3DPrototyping.title",
      features: prototypingServices,
    },
  },
};

export default threeDForgeStudio;
