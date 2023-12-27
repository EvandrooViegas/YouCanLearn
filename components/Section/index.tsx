
import React from "react";
import { screenExtremesClassname } from "../Navbar";

type PageSections = "courses" | "questions" | "devs" | "contact" | "home" | "about" | "talkwithus"
type Props = {
  children: React.ReactNode;
  id?: PageSections;
  backgroundClassName?: string
} & React.HTMLAttributes<HTMLElement>;

export default function Section(props: Props) {
  const { children, id = "home", className, backgroundClassName } = props;

  return (
    <section id={id} className={`${backgroundClassName}`}>
      <div className={`${screenExtremesClassname} ${className}`}>
        {children}
      </div>
    </section>
   
  );
}
