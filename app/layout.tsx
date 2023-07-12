import Navbar from '@/components/Navbar'
import './globals.css'
import { Red_Rose } from 'next/font/google'

const redRose = Red_Rose({ subsets: ['latin'] })

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
      
      <body className={`${redRose.className} text-white scroll-smooth`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
