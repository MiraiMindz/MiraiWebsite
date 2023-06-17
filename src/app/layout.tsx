import './globals.css';
import { Fira_Code, DM_Mono, IBM_Plex_Mono } from 'next/font/google';
import { BodyLayout } from './layouts/BodyLayout';

const firaCode = Fira_Code({
    subsets: ['latin'],
    variable: '--font-FiraCode'
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-DmMono'
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-IbmPlexMono'
});

export const metadata = {
  title: 'Mirai Website',
  description: 'Meu site pessoal.',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-br">
      <body className={`${firaCode.variable} ${dmMono.variable} ${ibmPlexMono.variable} transition-colors delay-0 ease-in-out text-justify scroll-smooth min-h-screen w-full scroll-snap tabular-nums slashed-zero font-dmMono`}>
        <BodyLayout>
          {children}
        </BodyLayout>
      </body>
    </html>
  )
}
