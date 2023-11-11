import { siteConfig } from '@/config/site'
import '@/styles/globals.css'
import { Metadata } from 'next'
import { Providers } from '../providers'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es' suppressHydrationWarning>
      <head />
      <body>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <main className='container min-w-full bg-zinc-900'>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
