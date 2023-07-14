import Navbar from '@/components/Navbar'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata = {
  title: 'Torna-te um desenvolvedor Outsystem',
  description: 'Faz parte da comunidade de desenvolvedores Outsystem em Angola'
}

type Props = {
  children: React.ReactNode
}
export default function RootLayout(props: Props) {
  const { children } = props
  return (
    <html lang="en">
      
      <body className={`${poppins.className} scroll-smooth max-w-5xl mx-auto`}>
        <Navbar />

        {children}
      </body>
    </html>
  )
}
