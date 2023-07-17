import { Button } from "@/components/Button";
import Section from "@/components/Section";
import React from "react";
import Info from "./Info";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { ImAlarm } from "react-icons/im";
import { RiHourglassFill } from "react-icons/ri";
import { IoPricetagsOutline } from "react-icons/io5";
export default async function Courses() {
  return (
    <Section className="p-12 flex flex-col" id="courses">
        <h4 className="text-2xl font-bold text-primary mb-3">
          Boocamp -
          Outsystems Reactive Developer
        </h4>
      <div className="grid md:grid-cols-2 items-center gap-4">
        <div className="flex flex-col gap-6">
          <p className="text-neutral-800">
            O Bootcamp Outsystems Reactive Developer é um curso intensivo e
            focado 100% na pratica. Ao longo do Bootcamp, os alunos desenvolvem
            projetos reais, baseados nos desafios enfrentados por profissionais
            no mercado de trabalho. No fim do Bootcamo os alunos estarão aptos
            para Desenvolver Aplicações Web com a Plataforma Outsystems.
          </p>
          <Button>Inscrever-se</Button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Info
            icon={HiOutlineDesktopComputer}
            title="Formato do Curso"
            description="100% Online"
          />
          <Info
            icon={ImAlarm}
            title="Horário Pós-Laboral"
            description="
              Das 19h às 21h
              2ª; 3ª; 5ª e 6ª
            "
          />
          <Info icon={RiHourglassFill} title="Duração" description="1 Mês" />
          <Info
            icon={IoPricetagsOutline}
            title="Preço"
            description="2000.000 AKZ"
          />
        </div>
      </div>
    </Section>
  );
}
