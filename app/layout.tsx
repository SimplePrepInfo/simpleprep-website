import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://simpleprep.de'),
  applicationName: 'Simple Prep',
  title: {
    default: 'Simple Prep -Vorrats-App für Haushalt und Vorsorge',
    template: '%s | Simple Prep',
  },
  description:
    'Mit Simple Prep Vorräte planen, Mindesthaltbarkeitsdaten überwachen, Reichweiten berechnen und Einkäufe organisieren – lokal, übersichtlich und ohne Benutzerkonto.',
  alternates: {
    canonical: '/',
    languages: {
      de: '/',
      en: '/en/',
    },
  },
  openGraph: {
    title: 'Simple Prep -Vorrats-App für Haushalt und Vorsorge',
    description:
      'Mit Simple Prep Vorräte planen, Mindesthaltbarkeitsdaten überwachen, Reichweiten berechnen und Einkäufe organisieren – lokal, übersichtlich und ohne Benutzerkonto.',
    images: ['/brand/feature-graphic.png'],
    locale: 'de_DE',
    siteName: 'Simple Prep',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simple Prep -Vorrats-App für Haushalt und Vorsorge',
    description:
      'Mit Simple Prep Vorräte planen, Mindesthaltbarkeitsdaten überwachen, Reichweiten berechnen und Einkäufe organisieren – lokal, übersichtlich und ohne Benutzerkonto.',
    images: ['/brand/feature-graphic.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
