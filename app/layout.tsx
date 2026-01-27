import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar';
import Modal from './components/modals/Modal';
import './globals.css'

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone, select any hotel',
}

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal isOpen title="Hello World!" />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
