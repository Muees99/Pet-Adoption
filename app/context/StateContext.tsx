"use client";

import React, { createContext, useContext, useEffect, useMemo } from "react";
import { StateContextProps } from "@/app/@types";

export const StateContext = createContext({} as StateContextProps);

const StateContextProvider = ({ children }: { children: React.ReactNode }) => {
  // State(s) to be added Here
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showMobileMenu]);

  const value = useMemo(
    () => ({ showMobileMenu, setShowMobileMenu }),
    [showMobileMenu, setShowMobileMenu]
  );

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

// Call this function whenever you want to use the context
export const useStateCtx = () => {
  const ctx = useContext(StateContext);

  if (!ctx) {
    throw new Error("useStateCtx must be used within a StateContextProvider");
  }
  return ctx;
};

export default StateContextProvider;
