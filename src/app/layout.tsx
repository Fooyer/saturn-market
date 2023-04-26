"use client"

import './globals.css'
import 'react-toastify/dist/ReactToastify.css';

import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import { ToastContainer } from 'react-toastify'

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="pt-br">

      <body>

        <Header />

        {children}

        <Footer />

        <ToastContainer autoClose={3000} hideProgressBar={true} theme="colored" />

      </body>

    </html>
  )
}
