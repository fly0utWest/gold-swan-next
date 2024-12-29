import React from "react";

type HeadingProps = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
};

const Heading = ({ as: Tag = "h1", className, children }: HeadingProps) => {
  return <Tag className={className}>{children}</Tag>;
};

export default Heading;
