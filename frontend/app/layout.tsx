import { Nunito } from 'next/font/google'

import { LoginModal, RegisterModal } from './components/modals'
import { Navbar } from './components/navbar'
import './globals.css'
import ToastProvider from './providers/ToastProvider'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone'
}

const font = Nunito({
  subsets: ['latin']
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ToastProvider />
        <RegisterModal />
        <LoginModal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
