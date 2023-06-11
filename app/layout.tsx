import { Footer, Navbar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Aluguel de carros',
  description: 'Descubra os melhores carros'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
