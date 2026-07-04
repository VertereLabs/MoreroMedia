import { Inter, Oswald, Playfair_Display, Great_Vibes } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const oswald = Oswald({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://moreromedia.co.za'),
  title: {
    default: 'Morero Media | Photography by Juvane Moonsami',
    template: '%s | Morero Media',
  },
  alternates: {
    canonical: './',
  },
  description: 'Morero Media — commercial, fashion and lifestyle photography by Juvane Moonsami.',
  keywords: ['Morero Media', 'Photography', 'Commercial', 'Fashion', 'Lifestyle', 'Juvane Moonsami', 'South Africa'],
  authors: [{ name: 'Juvane Moonsami' }],
  creator: 'Juvane Moonsami',
  publisher: 'Morero Media',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://moreromedia.co.za',
    siteName: 'Morero Media',
    images: [
      {
        url: '/images/juvane/JM_Camera.jpg', // Assuming this exists or will be replaced
        width: 1200,
        height: 630,
        alt: 'Morero Media — Photography by Juvane Moonsami',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morero Media | Photography by Juvane Moonsami',
    description: 'Commercial, fashion and lifestyle photography.',
    creator: '@juvanemoonsami',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} ${playfair.variable} ${greatVibes.variable}`}>
      <head>
        <Script
          src="https://stats.verterelabs.co.za/script.js"
          data-website-id="42c13126-e917-487f-be8c-bea380e8a9f3"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <ThemeProvider>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main style={{ flex: 1, marginTop: 'var(--header-height)' }}>
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
