import React from 'react'
import Marquee from '@/shared/ui/marquee';
import {default as splashes} from '@/shared/utils/splashes.json';

const MarqeeSection = () => {
  return (
    <section>
      <div
        className="overflow-hidden w-full my-8 md:my-16 flex flex-col justify-center h-96 sm:h-[32rem] md:h-[48rem]
                word-spacing-6 text-6xl sm:text-8xl md:text-9xl font-bold"
      >
        <Marquee rotation={8} className="text-neutral-100" scrollBoost={0.25}>
          {splashes.join(" ")}
        </Marquee>
        <div className="h-4 md:h-12" />
        <Marquee
          rotation={8}
          baseVelocity={-1}
          className="text-white dark:text-background text-outline-neutral-300"
          scrollBoost={0.25}
        >
          {splashes.join(" ")}
        </Marquee>
      </div>
    </section>
  );
}

export default MarqeeSection