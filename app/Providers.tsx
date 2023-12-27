"use client";

import { NavbarContextProvider } from "@/components/Navbar/context";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Providers(props: Props) {
  const { children } = props;
  return <NavbarContextProvider>
    {children}
    
    </NavbarContextProvider>;
}