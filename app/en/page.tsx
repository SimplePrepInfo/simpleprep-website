import type { Metadata } from 'next';
import { HomePage } from '../components/HomePage';

export const metadata: Metadata = {
  title: 'Simple Prep – Stay prepared. Keep it simple.',
  description: 'Plan supplies, track best-before dates and organize shopping with ease.',
  alternates: {
    canonical: '/en/',
    languages: {
      de: '/',
      en: '/en/',
    },
  },
  openGraph: {
    title: 'Simple Prep – Stay prepared. Keep it simple.',
    description: 'Practical household preparedness without alarmism.',
    locale: 'en_US',
  },
};

export default function EnglishHome() {
  return <HomePage language="en" />;
}
