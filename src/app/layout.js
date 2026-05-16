import '@/styles/globals.css';
import AuthProvider from '@/components/AuthProvider';
import LayoutWrapper from '@/components/layout/LayoutWrapper';

export const metadata = {
  title: {
    default: 'Vasundhara Academy Akole | CBSE School in Akole, Maharashtra',
    template: '%s | Vasundhara Academy Akole',
  },
  description:
    'Vasundhara Academy is a premier CBSE affiliated school in Akole, Maharashtra, providing quality English medium education, modern facilities, and holistic student development.',
  keywords: [
    'Vasundhara Academy Akole',
    'CBSE school in Akole',
    'Best school in Akole',
    'School admission in Akole',
    'CBSE affiliated school in Akole Maharashtra',
    'English medium school in Akole',
    'School near Dhamangaon Awari Road Akole',
    'Abhinav Education Society Akole',
    'Vasundhara Academy admission',
  ],
  authors: [{ name: 'Vasundhara Academy' }],
  creator: 'Vasundhara Academy',
  publisher: 'Vasundhara Academy',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://vasundhara-academy.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Vasundhara Academy Akole | CBSE School in Akole, Maharashtra',
    description: 'Premier CBSE-affiliated English medium school in Akole, Maharashtra. Focused on academics, values, sports, and modern facilities.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://vasundhara-academy.vercel.app',
    siteName: 'Vasundhara Academy Akole',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vasundhara Academy Akole School Campus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vasundhara Academy Akole | CBSE School in Akole, Maharashtra',
    description: 'Premier CBSE-affiliated school in Akole. Quality education from Grade 1-10.',
    images: ['/images/og-image.jpg'],
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
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'School',
  name: 'Vasundhara Academy',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://vasundhara-academy.vercel.app',
  logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://vasundhara-academy.vercel.app'}/images/logo.png`,
  image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://vasundhara-academy.vercel.app'}/images/og-image.jpg`,
  description: 'Vasundhara Academy is a CBSE affiliated school in Akole, Maharashtra, focused on academics, values, sports, modern facilities, and holistic student development.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dhamangaon Awari Road',
    addressLocality: 'Akole',
    addressRegion: 'Maharashtra',
    postalCode: '422601',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 19.5281872,
    longitude: 74.0017772,
  },
  telephone: '+91-98819-45960',
  email: 'vasundhara.academy2016@gmail.com',
  foundingDate: '2014',
  award: 'Expert Abacus State Level Winners, SOF Olympiad Winners',
  identifier: 'CBSE Affiliation No. 1130637',
  sameAs: [
    'https://wa.me/919881945960'
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <AuthProvider>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
