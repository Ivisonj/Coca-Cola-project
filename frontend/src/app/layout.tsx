'use client'
import { GlobalStyle }  from './globals'
import { AuthProvider } from '../Context/authContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
    <GlobalStyle />
    </>
  )
}

