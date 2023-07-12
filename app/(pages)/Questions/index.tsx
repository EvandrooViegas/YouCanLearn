import QuestionList from "@/components/QuestionToggler/question-list";
import Section from "@/components/Section";
import data from "@/data";
export default async function Questions() {
  return (
    <Section
    className="bg-gradient-to-b from-zinc-900 to-zinc-900"
      title="Perguntas ❓"
      id="questions"
    >
      <div className="grow flex  items-center">
        <QuestionList questions={data.questions} />
      </div>
    </Section>
  );
}
