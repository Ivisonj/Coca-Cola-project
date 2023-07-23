import { GlobalStyle }  from './globals'
import { AuthProvider } from '../Context/authContext'
import StyledComponentsRegistry from '../registry'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <AuthProvider>
            {children}
          </AuthProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
    <GlobalStyle />
    </>
  )
}

