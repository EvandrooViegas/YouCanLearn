import React from "react";
import Logo from "./Logo";
import { LinksList } from "./LinksList";
import MoblieNav from "./MoblieNav";
import { screenExtremesClassname } from "../Section";

export default function Navbar() {
  return (
    <nav className="bg-white fixed nav-z-index inset-x-0 top-0">
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
