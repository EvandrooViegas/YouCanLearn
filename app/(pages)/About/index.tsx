import Section from "@/components/Section";
import image from "@/assets/images/logo.svg";
import React from "react";
import Image from "next/image";

export default function About() {
  const title = "Sobre Nós";
  const text =
    `A "You Can Learn" é uma academia de ensino online 100% Angolana, dedicada à formação de talentos emergentes no campo do desenvolvimento de aplicativos low-code, com foco específico na Plataforma OutSystems. 
    Nosso método de instrução é meticulosamente direcionado à prática, visando dotar nossos alunos com as habilidades necessárias para enfrentar desafios concretos e prosperar no desenvolvimento de aplicativos de envergadura empresarial.`;
  return (
    <Section
      id="about"
      className="grid grid-cols-2 items-center md:gap-4 gap-12  py-6"
    >
      <div className="space-y-2 w-full md:col-span-1 col-span-2">
        <h4 className="text-2xl font-bold text-primary">{title}</h4>
        <p className="border-l-4 border-primary p-4 text-neutral-800 shadow text-justify">
          {text}
        </p>{" "}
      </div>
      <div className="md:block hidden w-[500px] h-[300px] relative ">
          <Image
            className="object-right object-contain"
            alt="Developer with a computer"
            src={image}
            fill
          />
      </div>
    </Section>
  );
}
