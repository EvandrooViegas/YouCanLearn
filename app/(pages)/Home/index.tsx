import Section from "@/components/Section";
import image from "../../../assets/images/dev.png";
import Image from "next/image";
import AnimatedElement from "@/components/AnimatedElement";
import { Button } from "@/components/Button";
export default function Home() {
  return (
    <Section isFullScreen showOverlayBg>
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover  z-[-1]">
        <source src="/video-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="grow grid md:grid-cols-2 md:grid-rows-none grid-rows-2">
        <div className="flex flex-col justify-center gap-2">
          <h2 className="md:text-6xl text-5xl break-all font-bold ">
            TORNA-TE UM DESENVOLVEDOR <br />
            <AnimatedElement
              element="span"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: [0, 1], x: [-20, 0] }}
              className="bg-primary px-4"
            >
              OUTSYSTEM
            </AnimatedElement>
          </h2>
          <Button className="w-full md:w-fit">Inscreva-te</Button>
        </div>
        <div className="absolute bottom-0 right-0  md:w-[500px] w-[300px] ">
          <Image src={image} alt="Developer Coding" className="w-full h-full" />
        </div>
      </div>
    </Section>
  );
}
