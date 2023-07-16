import image from "@/assets/images/dev.png";
import Image from "next/image";
import AnimatedElement from "@/components/AnimatedElement";
import { Button } from "@/components/Button";
import wrap from "word-wrap";
import VideoBackground from "./VideoBackground";
import Section from "@/components/Section";

export default function Home() {
  return (
    <Section id="home" className="relative flex items-center full text-white">
      <VideoBackground />
      {/* With Video Background */}
      <div className="md:grid md:grid-cols-2 flex flex-col mt-24 full md:gap-y-0 gap-y-12">
        <div className="flex flex-col justify-center full text-center md:text-start">
          <h4 className="text-2xl">Torna-te num Desenvolder</h4>
          <h1 className="text-6xl text-primary">Outsystems</h1>
          <Button className="mt-4 w-full md:w-fit">Inscrever-se</Button>
        </div>
        <div className="relative pb-[100%]">
          <Image
            className="object-contain md:object-right "
            alt="Developer with a computer"
            src={image}
            fill
          />
        </div>
      </div>
    </Section>
  );
}
