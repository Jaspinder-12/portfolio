import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeProvider from '@/app/components/ThemeProvider'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Jaspinder Singh | Python Developer & AI Specialist',
  description: 'Portfolio of Jaspinder Singh - Python Developer, AI Developer, Data Science Intern specializing in Machine Learning, NLP, and AI Systems.',
  keywords: ['Python Developer', 'AI Developer', 'Machine Learning', 'Data Science', 'NLP', 'FastAPI', 'Jaspinder Singh'],
  authors: [{ name: 'Jaspinder Singh' }],
  openGraph: {
    title: 'Jaspinder Singh | Python Developer & AI Specialist',
    description: 'Portfolio showcasing AI-powered systems, ML projects, and automation solutions.',
    url: 'https://jaspinder-portfolio.vercel.app',
    siteName: 'Jaspinder Singh Portfolio',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jaspinder Singh | Python Developer & AI Specialist',
    description: 'Portfolio showcasing AI-powered systems, ML projects, and automation solutions.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://jaspinder-portfolio.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
