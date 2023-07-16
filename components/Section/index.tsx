import React from "react";

type PageSections = "courses" | "questions" | "devs" | "contact" | "home" | "about"
type Props = {
  children: React.ReactNode;
  id: PageSections;
  backgroundClassName?: string
} & React.HTMLAttributes<HTMLElement>;
export const screenExtremesClassname = "max-w-[1500px] px-8 mx-auto"

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
