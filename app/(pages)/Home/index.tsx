import image from "../../../assets/images/dev.png";
import Image from "next/image";
import AnimatedElement from "@/components/AnimatedElement";
import { Button } from "@/components/Button";
import wrap from "word-wrap"

export default function Home() {
  return (
    <section className="h-screen flex items-stretch text-white px-12">
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover  z-[-1]">
        <source src="/video-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="bg-black/40 absolute inset-0 z-[-1]" />
      <div className="min-h-full grid md:grid-cols-2 overflow-hidden">
        <div className="flex flex-col justify-center gap-2 pt-24 md:pt-0">
          <h2 className="text-3xl font-extrabold ">
            {wrap("TORNA-TE UM DESENVOLVEDOR")} <br />
            <AnimatedElement
              element="span"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: [0, 1], x: [-20, 0] }}
              className="md:text-7xl text-4xl text-primary"
            >
              OUTSYSTEM
            </AnimatedElement>
          </h2>
          <Button className="w-full md:w-fit">Inscreva-te</Button>
        </div>
          <Image src={image} alt="Developer Coding" className="md:mt-24  max-w-[500px] w-full h-full" />
      </div>
    </section>
  );
}
