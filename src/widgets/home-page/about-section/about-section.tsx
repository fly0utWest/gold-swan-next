import LightbulbIcon from "@/shared/assets/icons/lightbulb-icon";
import PuzzleIcon from "@/shared/assets/icons/puzzle-icon";
import React from "react";
import FeatureCard from "./feature-card";
import ChessQueenIcon from "@/shared/assets/icons/queen-icon";

const features = [
  {
    title: "Idea",
    content: "During the discussion process with the client, our agency can assist in refining and enhancing their idea, leveraging our extensive experience and broad perspective. We bring a fresh, professional viewpoint that helps turn initial concepts into impactful, well-structured strategies",
    icon: <LightbulbIcon />
  },
  {
    title: "Strategy",
    content: "In the world of business, strategy is the foundation of success. It’s not just about having ideas but about having a clear, actionable plan to navigate the competitive landscape. Companies with a well-thought-out strategy are equipped to anticipate challenges, seize opportunities, and maintain a consistent course toward their goals. Those who drift without a plan are often caught off guard, reacting to circumstances rather than shaping them. The winners in any field are those who take the time to craft a strong strategy, because a plan doesn’t just guide—it creates direction, purpose, and resilience, ultimately determining the path to victory",
    icon: <ChessQueenIcon />
  },
  {
    title: "Implementation",
    content: "Implementation is like a puzzle that comes together from an idea and various stages. The final result depends on the implementation, as without it, even the best idea remains just a concept. Every stage is important, and only through their proper execution can success be achieved",
    icon: <PuzzleIcon />
  }
];

const AboutSection = () => {
  return (
    <section className="bg-neutral-100 dark:bg-black pb-10 px-6  rounded-b-3xl md:rounded-b-5xl">
      <div className="max-w-screen-xl mx-auto space-y-10">
        <div className="flex flex-col text-center md:text-left gap-6 md:flex-row md:justify-between items-center">
          <h2 className="text-5xl uppercase text-outline-primary-400 dark:text-black  text-neutral-100 text-nowrap">
            About Us
          </h2>
          <p className="md:max-w-[50%] text-3xl text-pretty">
            We are a global agency specializing in digital marketing, branding,
            PR, and reputation management. Our goal is to create innovative
            strategies that drive growth, build trust, and ensure long-term
            success for our clients.
          </p>
        </div>
        <div className="space-y-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              content={feature.content}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
