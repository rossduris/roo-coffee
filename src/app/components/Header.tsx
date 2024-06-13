"use client";
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useShop } from "./ShopProvider";
import { useRef } from "react";

const Header = () => {
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { name } = useShop();

  const handleMenuPress = () => {
    const mobileMenu = mobileMenuRef.current;
    if (!mobileMenu) return;

    if (!mobileMenu.classList.contains("menu-hide")) {
      mobileMenu.classList.add("menu-hide");
    } else {
      mobileMenu.classList.remove("menu-hide");
    }
  };

  return (
    <header className="w-full  flex p-1 overflow-hidden">
      <div className="m-2 rounded-full p-4 shadow-md bg-white bg-opacity-95  w-full flex justify-between">
        <span className="organic-font text-xl">Roo</span>
        <nav className=" flex gap-2">
          <ShoppingBagIcon className="size-6 text-black" />
          <Bars3Icon onClick={handleMenuPress} className="size-6 text-black" />
        </nav>
        <div ref={mobileMenuRef} className="mobile-menu menu-hide">
          <div className="relative flex w-full h-full">
            <XMarkIcon
              onClick={handleMenuPress}
              className="size-12 text-black absolute top-4 right-4 z-30 cursor-pointer"
            ></XMarkIcon>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
