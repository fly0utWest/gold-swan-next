import React from "react";
import Heading from "@/shared/ui/heading";

export interface StrategyStepsProps {
  Icon?: (allProps: any) => JSX.Element;
  heading: string;
  steps: string[];
  example?: string;
}

const StrategySteps: React.FC<StrategyStepsProps> = ({
  heading,
  Icon,
  steps,
  example,
}) => {
  return (
    <div className="px-6">
      <div className="max-w-screen-2xl p-6 md:mx-auto w-full space-y-6 bg-neutral-50 dark:bg-black rounded-3xl border-neutral-800 border-2">
        {Icon ? <Icon size={32} color="var(--primary-500)" /> : null}
        <Heading as="h2" className="text-2xl text-primary-400 font-semibold">
          {heading}
        </Heading>

        <section className="flex flex-col gap-6 flex-wrap">
          <ol className="list-inside text-lg list-decimal ">
            {steps.map((step, index) => (
              <li
                className="marker:text-primary-500 marker:text-xli"
                key={index}
              >
                {step}
              </li>
            ))}
          </ol>
          <div>
            {example ? (
              <>
                <Heading
                  as="h3"
                  className="text-lg text-primary-400 font-semibold"
                >
                  Example
                </Heading>
                <p>{example}</p>
              </>
            ) : null}
          </div>
        </section>
      </div>
    </div>
  );
};

export default StrategySteps;
