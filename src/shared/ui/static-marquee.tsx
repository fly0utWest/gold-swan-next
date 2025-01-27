"use client";

import { useEffect, useRef } from "react";

export type StaticMarqueeProps = {
  children: React.ReactNode;
  baseVelocity?: number;
  rotation?: number;
  className?: string;
  repeatCount?: number;
  scrollBoost?: number;
};

export default function StaticMarquee({
  children,
  baseVelocity = 1,
  rotation = 0,
  scrollBoost = 0,
  className = "",
  repeatCount = 1,
}: StaticMarqueeProps) {
  const previousPageScroll = useRef(0);
  const marqueeScroll = useRef(0);
  const marquee = useRef<HTMLDivElement>(null);
  const reference = useRef<HTMLDivElement>(null);
  const currentVelocity = useRef(baseVelocity);

  useEffect(() => {
    let currentFrame: number;

    const update = () => {
      if (marquee.current && reference.current) {
        const pageScroll = window.scrollY;
        const pageScrollDelta =
          (pageScroll - previousPageScroll.current) * scrollBoost;
        previousPageScroll.current = pageScroll;

        if (pageScrollDelta < 0) {
          currentVelocity.current = -Math.abs(currentVelocity.current);
        } else if (pageScrollDelta > 0) {
          currentVelocity.current = Math.abs(currentVelocity.current);
        }

        marqueeScroll.current +=
          currentVelocity.current + pageScrollDelta * baseVelocity;

        const width = reference.current.offsetWidth;

        if (marqueeScroll.current > width) {
          marqueeScroll.current = width;
          currentVelocity.current *= -1; // reverse direction
        } else if (marqueeScroll.current < 0) {
          marqueeScroll.current = 0;
          currentVelocity.current *= -1; // reverse direction
        }

        marquee.current.style.transform = `rotate(${rotation}deg) translateX(${-marqueeScroll.current}px)`;
      }

      currentFrame = requestAnimationFrame(update);
    };

    currentFrame = requestAnimationFrame(update);

    return () => cancelAnimationFrame(currentFrame);
  }, [baseVelocity, scrollBoost, rotation]);

  return (
    <div
      className={`inline-flex justify-center items-center ${className}`}
      ref={marquee}
    >
      <div ref={reference} className="inline-flex shrink-0">
        {children}
      </div>

      <div aria-hidden="true" className="inline-flex justify-center items-center shrink-0">
        {Array.from({ length: repeatCount }).map((_, idx) => (
          <div key={idx} className="inline-flex justify-center items-center shrink-0">
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
