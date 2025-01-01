"use client"; // Marks this component as client-side only

import { useEffect } from "react";
import { Observer } from "tailwindcss-intersect";

export default function ClientObserver() {
  useEffect(() => {
    Observer.start();
  }, []);

  return null; 
}
