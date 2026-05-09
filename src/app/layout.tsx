import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sangam & Sagar Law Office LLP | Premier Legal Services',
  description: 'Top-rated law firm in Lucknow, Prayagraj & Jaunpur. Expert litigation lawyers in Uttar Pradesh and online legal consultancy across India.',
  keywords: 'law firm Lucknow, best lawyer Lucknow, advocate Prayagraj, litigation UP, legal services India',
  openGraph: {
    title: 'Sangam & Sagar Law Office LLP',
    description: 'Premier legal services in Uttar Pradesh. Expert litigation, consultancy & compliance.',
    type: 'website',
    url: 'https://sangamsagar.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sangam & Sagar Law Office LLP',
    description: 'Premier legal services in Uttar Pradesh.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600;1,800&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Cormorant+SC:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
