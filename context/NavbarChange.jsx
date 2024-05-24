"use client";
import { useContext, createContext, useState } from "react";

const NavbarChangeContext = createContext();

export function useNavBarChange() {
  return useContext(NavbarChangeContext);
}

export function NavbarProvider({ children }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <NavbarChangeContext.Provider
      value={{
        isActive,
        setIsActive,
      }}
    >
      {children}
    </NavbarChangeContext.Provider>
  );
}
