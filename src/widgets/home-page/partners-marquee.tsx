import React from "react";
import { partnerMarquee } from "@/shared/models/awards";
import StaticMarquee from "@/shared/ui/static-marquee";
import Image from "next/image";

const PartnersMarquee: React.FC = () => {
    return (
    <div className="p-6 bg-card overflow-hidden border-y-primary-500 border-y-2">
      <StaticMarquee repeatCount={2}>
        {partnerMarquee.map((image, index) => (
          <div key={index} className="flex h-max items-center justify-center">
            <Image
              className="mx-4"
              src={image}
              alt="Partner logo"
              width={150}
              height={150}
            />
          </div>
        ))}
      </StaticMarquee>
    </div>
  );
};

export default PartnersMarquee;
