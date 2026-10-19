import Image from 'next/image';
import Link from 'next/link';

type Language = 'de' | 'en';

export function SiteHeader({ language, compact = false }: { language: Language; compact?: boolean }) {
  const de = language === 'de';
  const home = de ? '/' : '/en';

  return (
    <header className={`site-header${compact ? ' site-header-compact' : ''}`}>
      <Link className="brand" href={home} aria-label={de ? 'Simple Prep Startseite' : 'Simple Prep home'}>
        <Image src="/brand/app-icon.png" alt="" width={52} height={52} priority />
        <span>Simple Prep</span>
      </Link>
      <p className="header-tagline">{de ? 'Praktische Haushaltsvorsorge ohne Alarmismus.' : 'Practical household preparedness without alarmism.'}</p>
      <nav aria-label={de ? 'Hauptnavigation' : 'Main navigation'}>
        <Link href={`${home}#funktionen`}>{de ? 'Funktionen' : 'Features'}</Link>
        <Link href={de ? '/de/datenschutz' : '/en/privacy'}>{de ? 'Datenschutz' : 'Privacy'}</Link>
        <Link href={de ? '/de/support' : '/en/support'}>Support</Link>
        <Link className="language-link" href={de ? '/en' : '/'}>{de ? 'EN' : 'DE'}</Link>
      </nav>
    </header>
  );
}

export function SiteFooter({ language }: { language: Language }) {
  const de = language === 'de';

  return (
    <footer>
      <Link className="brand footer-brand" href={de ? '/' : '/en'}>
        <Image src="/brand/app-icon.png" alt="" width={42} height={42} />
        <span>Simple Prep</span>
      </Link>
      <p>{de ? 'Praktische Haushaltsvorsorge ohne Alarmismus.' : 'Practical household preparedness without alarmism.'}</p>
      <div className="footer-links">
        <Link href={de ? '/de/support' : '/en/support'}>Support</Link>
        <Link href={de ? '/de/datenschutz' : '/en/privacy'}>{de ? 'Datenschutz' : 'Privacy'}</Link>
        <Link href={de ? '/de/impressum' : '/en/legal-notice'}>{de ? 'Impressum' : 'Legal notice'}</Link>
      </div>
    </footer>
  );
}
