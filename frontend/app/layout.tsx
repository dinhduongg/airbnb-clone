import { Nunito } from 'next/font/google'

import './globals.css'
import { RegisterModal } from './components/modals'
import ToastProvider from './providers/ToastProvider'
import { Navbar } from './components/navbar'

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
        <Navbar />
        {children}
      </body>
    </html>
  )
}
