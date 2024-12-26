import Link from "@/shared/ui/link";
import Image from "next/image";
import React from "react";

export type DepartmentCardProps = {
  href: string;
  title: string;
  img: string;
  icon: React.ReactNode;
  buttonText: string;
};

export default function DepartmentCard({
  href,
  title,
  buttonText,
  icon,
}: DepartmentCardProps) {
  return (
    <figure
      className="group border-2 border-neutral-300 rounded-4xl p-4 md:p-8 flex flex-col gap-6 justify-center duration-300 ease-in-out
            items-center w-72 md:w-96 h-96 md:h-[32rem] hover:border-primary-500 hover:shadow-inner hover:shadow-primary-500 overflow-hidden transition-colors relative"
    >
      <div className="w-full" />
      <h6 className="font-display font-bold text-2xl text-center md:text-3xl group-hover:text-primary-500 transition-colors">
        {title}
      </h6>
      <div className="w-full flex-1" />
      <div className="rounded-full aspect-square border-2 group-hover:border-primary-500 transition-colors mb-6 w-24 md:w-36 flex items-center justify-center">
        {icon}
      </div>
      <Link
        className="translate-y-28 group-hover:translate-y-0 transition-transform w-full py-4 md:py-6 text-xl
                md:text-2xl bg-primary-500 text-white rounded-xl active:bg-primary-400 active:text-white flex justify-center
                items-center duration-300 ease-in-out"
        href={href}
        target="_blank"
        data-drag-slider-ignore
      >
        {buttonText}
      </Link>
    </figure>
  );
}
