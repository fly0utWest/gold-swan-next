"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import CloseIcon from "@/shared/assets/icons/close-icon";
import MenuIcon from "@/shared/assets/icons/menu-icon";

export const MenuContext = createContext({
  open: false,
  setOpen: (_: boolean) => {},
});

export default function HeaderMenu({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mounted) return null;

  return (
    <MenuContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      <div className="md:hidden cursor-pointer" onClick={() => setOpen(true)}>
        <MenuIcon width={32} height={32} color="var(--foreground)"/>
      </div>
      <nav
        className={`flex md:opacity-100 items-center md:bg-transparent fixed md:static gap-8 md:text-2xl text-4xl 
                inset-0 w-screen md:w-auto h-screen md:h-auto flex-col md:flex-row justify-center bg-background text-center z-10
                ${
                  open ? "translate-y-0" : "-translate-y-full"
                } md:translate-y-0 transition-transform duration-700 ease-in-out`}
      >
        <div
          className="absolute top-4 right-8 md:hidden cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <CloseIcon
            width={32}
            height={32}
            color="var(--foreground)"
          />
        </div>
        {children}
      </nav>
      <div
        className={`md:hidden ${
          open ? "translate-y-full" : "-translate-y-full"
        } bg-primary-100 w-screen 
             transition-all duration-700 ease-in-out h-screen inset-0 absolute`}
      />
    </MenuContext.Provider>
  );
}
