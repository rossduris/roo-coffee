"use client";
import { createContext, useContext } from "react";

type ShopContextType = {
  name: string;
};

const ShopContext = createContext<ShopContextType | null>(null);

export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ShopContext.Provider value={{ name: "default" }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const ctx = useContext(ShopContext);

  if (!ctx) throw new Error("Error: No context found!");

  return ctx;
};
