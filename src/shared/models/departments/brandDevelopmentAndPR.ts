import { Star2 } from "solar-icon-set";
import {
  brandBookServices,
  brandPositioningServices,
  uspDevelopmentServices,
  creativeAdvertisingServices,
  prAndMediaRelationsServices,
  influencerMarketingServices,
  eventOrganizationServices,
  crisisPrManagementServices,
} from "./features/brandDevelopmentAndPR";

const brandDevelopmentAndPR = {
  slug: "brandDevelopmentAndPR",
  icon: Star2,
  title: {
    full: "title.full",
    firstString: "title.firstString",
    secondString: "title.secondString",
    thirdString: "title.thirdString",
  },
  description: "description",
  categories: {
    brandBookCreation: {
      title: "brandBookCreation.title",
      features: brandBookServices,
    },
    brandPositioning: {
      title: "brandPositioning.title",
      features: brandPositioningServices,
    },
    uspDevelopment: {
      title: "uspDevelopment.title",
      features: uspDevelopmentServices,
    },
    creativeAdvertising: {
      title: "creativeAdvertising.title",
      features: creativeAdvertisingServices,
    },
    prAndMediaRelations: {
      title: "prAndMediaRelations.title",
      features: prAndMediaRelationsServices,
    },
    influencerMarketing: {
      title: "influencerMarketing.title",
      features: influencerMarketingServices,
    },
    eventOrganization: {
      title: "eventOrganization.title",
      features: eventOrganizationServices,
    },
    crisisPrManagement: {
      title: "crisisPrManagement.title",
      features: crisisPrManagementServices,
    },
  },
};

export default brandDevelopmentAndPR;