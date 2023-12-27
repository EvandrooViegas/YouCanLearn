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
      text: "Como está estruturado o curso?",
      answer:
        `
        O nosso curso é estruturado em quatro módulos com aulas gravadas e ao vivo (100% online). 
        No primeiro módulo, proporcionamos uma introdução abrangente à plataforma OutSystems e aproveitamos desenvolver uma aplicação de Gestão de Finanças Pessoais. 
        O segundo módulo concentra-se na lógica de programação, incluindo a resolução de exercícios práticos. 
        No terceiro módulo, os formandos têm a oportunidade de criar uma aplicação abrangente, obedecendo rigorosamente às melhores práticas estabelecidas pela plataforma. 
        O curso termina (quarto módulo) com a criação de um projeto, e partilha de dicas cruciais para a certificação Associate Reactive Developer.`,
    },
  ];
  return (
    <Section
    id="questions"
    className="py-12"
    >
        <h4 className="text-2xl font-bold text-primary mb-4">Perguntas Frequentes</h4>
        <QuestionList questions={questions} />
    </Section>
  );
}
