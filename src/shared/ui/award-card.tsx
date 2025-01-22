import React from "react";
import Image from "next/image";
import Heading from "./heading";

interface AwardCardProps {
  title: string;
  description: string;
  image: string;
  large?: boolean
}

const AwardCard: React.FC<AwardCardProps> = ({ title, description, image, large = false }) => {
  return (
    <div className="flex-1 flex flex-col gap-4 bg-neutral-100 p-6 dark:bg-neutral-800 rounded-3xl border-2 border-primary-500 min-w-max">
      <Image
        className="object-cover"
        src={`/images/logos/${image}`}
        width={large ? 275 : 125}
        height={125}
        alt={title}
      />
      <div>
        <Heading as="h3" className="text-2xl font-bold">
          {title}
        </Heading>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default AwardCard;
