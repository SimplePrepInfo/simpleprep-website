import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://simpleprep.de'),
  title: {
    default: 'Simple Prep – Vorräte einfach im Blick',
    template: '%s | Simple Prep',
  },
  description:
    'Vorräte planen, Mindesthaltbarkeitsdaten im Blick behalten und Einkäufe einfach organisieren.',
  alternates: {
    canonical: '/',
    languages: {
      de: '/',
      en: '/en/',
    },
  },
  openGraph: {
    title: 'Simple Prep – Vorräte einfach im Blick',
    description: 'Praktische Haushaltsvorsorge ohne Alarmismus.',
    images: ['/brand/feature-graphic.png'],
    locale: 'de_DE',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
