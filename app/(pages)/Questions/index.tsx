import QuestionList from "@/components/QuestionToggler/question-list";
import Section from "@/components/Section";
export default async function Questions() {
  const questions = [
    {
      text: "Não sei nada de programação web?",
      answer:
        "Não te preocupes. O nosso curso está feito para que possas ter o máximo aproveitamento mesmo que nunca tenhas trabalhado com programação.",
    },
    {
      text: "Quais são os requisitos mínimos do computador para assistir as aulas?",
      answer: `
      Requisitos mínimos do computador para assistir as aulas
      PC ou Notebooks
      Processador Intel ou AMD Quad-Core (4 núcleos) ou superior; 
      4GB RAM ou superior;
      Processador Intel ou AMD Quad-Core (4 núcleos) ou superior; 
      8GB RAM ou superior;
      Windows 8.1 (todas as versões); 
      Windows 10 (todas as versões)
      `,
    },
    {
      text: "Como está estruturado o curso?",
      answer: `
        O nosso curso é estruturado em quatro módulos com aulas gravadas e ao vivo (100% online). 
        `,
    },
  ];
  return (
    <Section id="questions" className="py-12">
      <h4 className="text-2xl font-bold text-primary mb-4">
        Perguntas Frequentes
      </h4>
      <QuestionList questions={questions} />
    </Section>
  );
}
