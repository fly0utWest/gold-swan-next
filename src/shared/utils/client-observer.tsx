"use client"; // Marks this component as client-side only

import { useEffect } from "react";
import { Observer } from "tailwindcss-intersect";

export default function ClientObserver() {
  useEffect(() => {
    // Start the Observer when the component is mounted
    Observer.start();
  }, []);

  return null; // No UI needed for this component
}
