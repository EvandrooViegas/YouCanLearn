import React from "react";
import Overlay from "../Overlay";

type PageSections = "courses" | "questions" | "devs" | "contact" 
type Props = {
  children: React.ReactNode;
  containerClassName?: string;
  overlayClassName?: string;
  title?: string;
  id?: PageSections;
  showOverlayBg?: boolean;
  isFullScreen?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export default function Section(props: Props) {
  const { children, className, containerClassName, title, id, overlayClassName, isFullScreen = false, showOverlayBg = true, ...rest } = props;

  return (
    <section id={id} className={`bg ${isFullScreen ? 'min-h-screen' : 'min-h-fit'} w-full flex flex-col ${className}`}>
      <Overlay showOverlayBg={showOverlayBg} className={`md:px-20 px-12 py-16 grow flex flex-col gap-4 ${overlayClassName}`} >
        {title ? <h4 className="text-2xl md:text-3xl text-center mb-12">{title}</h4> : null}
        {children}
      </Overlay>
    </section>
   
  );
}
