import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./Providers";
import { Metadata } from "next";
import WhatsappButton from "@/components/WhatsappButton";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Torna-te um desenvolvedor Outsystem",
  description: "Faz parte da comunidade de desenvolvedores Outsystem em Angola",
  icons: { icon: '/icon.svg' }
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout(props: Props) {
  const { children } = props;
  return (
    <html lang="en">
      <body className={`${inter.className}  scroll-smooth`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
        <WhatsappButton />
      </body>
    </html>
  );
}
