import './globals.css'
import { Fira_Code } from 'next/font/google'
import { BodyLayout } from './layouts/BodyLayout'

const firaCode = Fira_Code({ subsets: ['latin'] });

export const metadata = {
  title: 'Mirai Website',
  description: 'Meu site pessoal.',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-br">
      <body className={firaCode.className + " transition-colors delay-0 ease-in-out text-justify scroll-smooth min-h-screen w-full scroll-snap tabular-nums slashed-zero ordinal"}>
        <BodyLayout>
          {children}
        </BodyLayout>
      </body>
    </html>
  )
}
