import './globals.css'

import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'

export const metadata = {
  title: 'Saturn Market',
  description: 'Saturn Market is a market with saturn theme',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="pt-br">

      <body>

        <Header />

        {children}

        <Footer />
        
      </body>

    </html>
  )
}
