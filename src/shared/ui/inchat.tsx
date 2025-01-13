"use client";
import React, { useEffect } from "react";

const Inchat = () => {
  useEffect(() => {
    // @ts-ignore
    if (typeof window !== undefined && window.mountInchatWidget) {
      // @ts-ignore
      window.mountInchatWidget();
    }
  }, []);

  return null;
};

export default Inchat;
