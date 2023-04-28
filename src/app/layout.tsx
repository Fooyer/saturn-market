import './globals.css'

import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import ToastComponent from '@/components/toast/toast';

export const metadata = {
  title: 'Saturn Market',
  description: 'Mercado saturno, mercado livre online fácil e prático',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="pt-br">

      <body>

        <Header />

        {children}

        <Footer />

        <ToastComponent />

      </body>

    </html>
  )
}
