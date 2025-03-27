import { PieChart } from "lucide-react";
import {
  businessAnalyticsServices,
  marketResearchServices,
  strategicPlanningServices,
  predictiveAnalyticsServices,
  competitiveAnalysisServices,
  kpiMonitoringServices,
  dataVisualizationServices,
} from "./features/analyticsAndStrategy";

const analyticsAndStrategy = {
  slug: "analyticsAndStrategy",
  icon: PieChart,
  title: {
    full: "title.full",
    firstString: "title.firstString",
    secondString: "title.secondString",
    thirdString: "title.thirdString",
  },
  description: "description",
  categories: {
    businessAnalytics: {
      title: "businessAnalytics.title",
      features: businessAnalyticsServices,
    },
    marketResearch: {
      title: "marketResearch.title",
      features: marketResearchServices,
    },
    strategicPlanning: {
      title: "strategicPlanning.title",
      features: strategicPlanningServices,
    },
    predictiveAnalytics: {
      title: "predictiveAnalytics.title",
      features: predictiveAnalyticsServices,
    },
    competitiveAnalysis: {
      title: "competitiveAnalysis.title",
      features: competitiveAnalysisServices,
    },
    kpiMonitoring: {
      title: "kpiMonitoring.title",
      features: kpiMonitoringServices,
    },
    dataVisualization: {
      title: "dataVisualization.title",
      features: dataVisualizationServices,
    },
  },
};

export default analyticsAndStrategy;
