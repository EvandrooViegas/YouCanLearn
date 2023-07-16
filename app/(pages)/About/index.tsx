import Section from "@/components/Section";
import data from "@/data";
import React from "react";

export default function About() {
    const aboutPage = data.pages.about
  return (
    <Section id="about" backgroundClassName="bg-zinc-300" className="flex flex-col gap-2 items-center py-12 ">
      <h4 className="text-3xl">{aboutPage.title}</h4>
      <p className="text-center">{aboutPage.text}</p>
    </Section>
  );
}
