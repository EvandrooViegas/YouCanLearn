import React from "react";
import Logo from "./Logo";
import { LinksList } from "./LinksList";
import MoblieNav from "./MoblieNav";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white fixed nav-z-index inset-x-0 top-0">

        <div className="mx-auto max-w-5xl flex items-center justify-between md:px-20 px-12 py-3">         
          <Logo />
          <div className="hidden md:block">
            <LinksList />
          </div>
          <MoblieNav />
        </div>
      </nav>
    </>

  );
}
