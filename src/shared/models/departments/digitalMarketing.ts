import { CircleDollarSign } from "lucide-react";
import {
  seoServices,
  contentMarketingServices,
  smmServices,
  influencerMarketingServices,
  targetedAdvertisingServices,
  ppcServices,
  emailMarketingServices,
  analyticsAndAuditsServices,
} from "./features/digitalMarketing";

const digitalMarketing = {  
  slug: "digitalMarketing",
  icon: CircleDollarSign,
  title: {
    full: "title.full",
    firstString: "title.firstString",
    secondString: "title.secondString",
    thirdString: "title.thirdString",
  },
  description: "description",
  categories: {
    seo: {
      title: "seo.title",
      features: seoServices,
    },
    contentMarketing: {
      title: "contentMarketing.title",
      features: contentMarketingServices,
    },
    smm: {
      title: "smm.title",
      features: smmServices,
    },
    influencerMarketing: {
      title: "influencerMarketing.title",
      features: influencerMarketingServices,
    },
    targetedAdvertising: {
      title: "targetedAdvertising.title",
      features: targetedAdvertisingServices,
    },
    ppc: {
      title: "ppc.title",
      features: ppcServices,
    },
    emailMarketing: {
      title: "emailMarketing.title",
      features: emailMarketingServices,
    },
    analyticsAndAudits: {
      title: "analyticsAndAudits.title",
      features: analyticsAndAuditsServices,
    },
  },
};

export default digitalMarketing;