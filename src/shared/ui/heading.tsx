import React from "react";
import { JSX } from "react";

type HeadingProps = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  id?: string;
  children: React.ReactNode;
};

const Heading = ({ as: Tag = "h1", className, id, children }: HeadingProps) => {
  return (
    <Tag className={className} id={id}>
      {children}
    </Tag>
  );
};

export default Heading;
