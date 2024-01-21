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
      answer: `PC ou Notebooks com acesso a internet;
      Processador Intel ou superior; 
      4GB RAM ou superior;
      8GB RAM ou superior;
      Windows 10 ou superior;`,
    },
    {
      text: "Como está estruturado o curso?",
      answer: `O nosso curso é estruturado em quatro módulos com aulas gravadas e ao vivo (100% online).`,
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
