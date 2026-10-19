import type { Metadata } from 'next';
import { HomePage } from '../components/HomePage';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  robots: { index: false, follow: true },
};

export default function GermanHomeAlias() {
  return <HomePage language="de" />;
}
