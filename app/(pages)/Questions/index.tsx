import QuestionList from "@/components/QuestionToggler/question-list";
import Section from "@/components/Section";
export default async function Questions() {
  const questions = [
    {
      text: "Question 1",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis temporibus rem, adipisci culpa mollitia omnis doloremque dignissimos quidem! Id eum beatae provident ratione incidunt qui ea tempore, eveniet nobis iure!",
    },
    {
      text: "Question 2",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis temporibus rem, adipisci culpa mollitia omnis doloremque dignissimos quidem! Id eum beatae provident ratione incidunt qui ea tempore, eveniet nobis iure!",
    },
    {
      text: "Question 3",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis temporibus rem, adipisci culpa mollitia omnis doloremque dignissimos quidem! Id eum beatae provident ratione incidunt qui ea tempore, eveniet nobis iure!",
    },
    {
      text: "Question 4",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis temporibus rem, adipisci culpa mollitia omnis doloremque dignissimos quidem! Id eum beatae provident ratione incidunt qui ea tempore, eveniet nobis iure!",
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
