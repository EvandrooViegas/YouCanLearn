import Contact from "./(pages)/Contact";
import Courses from "./(pages)/Courses";
import Home from "./(pages)/Home";
import Questions from "./(pages)/Questions";


export default async function Page() {

  return (
    <main>
      <Home /> 
      <Courses /> 
      <Questions />
      <Contact />
    </main>
  );
}
