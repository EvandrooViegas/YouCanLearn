import React from "react";
import Overlay from "../Overlay";

type PageSections = "courses" | "questions" | "devs" | "contact" | "home"
type Props = {
  children: React.ReactNode;
  id: PageSections;
} & React.HTMLAttributes<HTMLElement>;
export const screenExtremesClassname = "max-w-[1700px] px-8"

export default function Section(props: Props) {
  const { children, id = "home", className } = props;

  return (
    <section id={id} className={`${screenExtremesClassname} ${className}`}>
      {children}
    </section>
   
  );
}
