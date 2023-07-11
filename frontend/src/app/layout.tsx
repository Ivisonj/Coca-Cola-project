'use client'
import { GlobalStyle }  from './globals'
import { AuthProvider } from './Context/authContext'
import { Inter, Open_Sans, Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ["latin"] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html lang="en">
      <body className={openSans.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
    <GlobalStyle />
    </>
  )
}
