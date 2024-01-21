import image from "@/assets/images/dev.svg";
import Image from "next/image";
import { Button } from "@/components/Button";
import VideoBackground from "./VideoBackground";
import Section from "@/components/Section";

export default function Home() {
  return (
    <Section
      id="home"
      backgroundClassName="relative"
      className="flex items-center full text-white"
    >
      <VideoBackground />
      {/* With Video Background */}
      <div className="md:grid md:grid-cols-2 flex flex-col mt-24 full md:gap-y-0 gap-y-12">
        <div className="flex flex-col justify-center full text-center md:text-start">
          <h4 className="md:text-[42.5px] text-[24px]">
            Torna-se num Desenvolvedor
          </h4>
          <h1 className="md:text-[100px] text-[58px] leading-[70px] font-bold text-primary">
            Outsystems
          </h1>

          <a
            href="https://personal-cz9pe0mx.outsystemscloud.com/Register/Register?_ts=638414348112416621"
            target="_blank"
          >
            <Button className="mt-8 w-full md:w-fit">Inscrever-se</Button>
          </a>
        </div>
        <div className="relative pb-[100%] ">
          <div>
            <Image
              className="object-contain md:object-right "
              alt="Developer with a computer"
              src={image}
              fill
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
