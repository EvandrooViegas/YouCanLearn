import React from "react";
import Logo from "./Logo";
import { LinksList } from "./LinksList";
import MoblieNav from "./MoblieNav";
export const screenExtremesClassname = "max-w-[1500px] px-8 mx-auto"

export default function Navbar() {
  return (
    <nav className="bg-white fixed nav-z-index inset-x-0 top-0 shadow-xl">
      <div
        className={`flex items-center justify-between py-3 ${screenExtremesClassname}`}
      >
        <Logo />
        <div className="hidden md:block">
          <LinksList />
        </div>
        <MoblieNav />
      </div>
    </nav>
  );
}
