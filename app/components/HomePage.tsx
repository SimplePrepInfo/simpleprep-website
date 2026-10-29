import Image from 'next/image';
import Link from 'next/link';
import { LanguageSetter } from './LanguageSetter';
import { SiteFooter, SiteHeader } from './PageChrome';

type Language = 'de' | 'en';

const content = {
  de: {
    heroEyebrow: 'Vorratsplanung, die sich nach Alltag anfühlt',
    heroTitle: 'Simple Prep: Vorräte einfach im Blick',
    heroText: 'Plane für deinen Haushalt, behalte Mengen und Mindesthaltbarkeitsdaten im Blick und baue fehlende Vorräte in deinem Tempo auf.',
    primary: 'Funktionen ansehen',
    secondary: 'Frage stellen',
    release: 'Bald für Android und iOS',
    imageAlt: 'Simple-Prep-Ansicht der persönlichen Vorräte',
    imageHeading: 'Deine Vorsorge auf einen Blick',
    proof: ['Kein Konto nötig', 'Lokale Datenspeicherung', 'Schrittweise, einfach und übersichtlich'],
    sectionEyebrow: 'Planen - Verwalten - Vorsorgen',
    sectionTitle: 'Dein Vorrat - klar organisiert',
    sectionText: 'Von der Bedarfsermittlung bis zur Einkaufsliste: Simple Prep führt dich verständlich durch jeden Schritt.',
    features: [
      ['01', 'Vorräte organisieren', 'Mengen, Einheiten, Lagerorte, Mindesthaltbarkeitsdaten und Nährwerte übersichtlich verwalten.'],
      ['02', 'Bedarf passend planen', 'Personenzahl, Zeitraum und täglichen Energiebedarf festlegen und daraus deinen Vorratsbedarf berechnen.'],
      ['03', 'Soll und Ist abgleichen', 'Geplanten Bedarf mit vorhandenen Vorräten vergleichen und fehlende Mengen sofort erkennen.'],
      ['04', 'Einkaufsliste abarbeiten', 'Fehlende Artikel übernehmen, Preise ergänzen und beim Einkauf Schritt für Schritt abhaken.'],
      ['05', 'Einkäufe sinnvoll verteilen', 'Offene Artikel nach Zieltermin, Anzahl der Einkäufe und verfügbarem Budget aufteilen.'],
      ['06', 'In der Datenbank entdecken', 'Vorratsideen, Prioritäten und praktische Hinweise geben dir Inspiration und einen roten Faden.'],
      ['07', 'Reichweiten auf einen Blick', 'Das Dashboard zeigt Lebensmittel, Wasser und Basisausrüstung kompakt und verständlich an.'],
      ['08', 'Rechtzeitig erinnert werden', 'Sieh, in wie vielen Tagen etwas abläuft, und aktiviere auf Wunsch lokale Erinnerungen.'],
      ['09', 'Scannen, sichern und teilen', 'Nährwerte pro 100 g/ml erfassen sowie Vorräte per Backup oder PDF sichern und weitergeben.'],
    ],
    localEyebrow: 'Lokal zuerst',
    localTitle: 'Deine Vorräte bleiben bei dir',
    localText: 'Die zentralen Haushaltsdaten werden lokal auf deinem Gerät gespeichert. Für die Nutzung ist kein Benutzerkonto und auch keine Cloud erforderlich.',
    localLink: 'Datenschutz im Detail →',
    platformEyebrow: '',
    platformTitle: 'Simple Prep für dein Smartphone',
    platformText: 'Die Veröffentlichung für Android und iOS wird vorbereitet. Danach kannst du Simple Prep kostenlos herunterladen.',
    storeSoon: 'Demnächst verfügbar',
  },
  en: {
    heroEyebrow: 'Supply planning that fits everyday life',
    heroTitle: 'Stay prepared, keep it simple',
    heroText: 'Plan for your household, keep quantities and best-before dates in view, and build up missing supplies at your own pace.',
    primary: 'Explore features',
    secondary: 'Ask a question',
    release: 'Coming soon to Android and iOS · Available in English and German',
    imageAlt: 'Simple Prep preview showing personal supplies',
    imageHeading: 'Your preparedness at a glance',
    proof: ['No account required', 'Local data storage', 'Step by step, simple and clear'],
    sectionEyebrow: 'Plan - Organize - Prepare',
    sectionTitle: 'Your supplies. Clearly organized.',
    sectionText: 'From calculating needs to completing your shopping list, Simple Prep guides you clearly through every step.',
    features: [
      ['01', 'Organize your supplies', 'Manage quantities, units, storage locations, best-before dates and nutrition details in one place.'],
      ['02', 'Plan what you need', 'Set household size, planning period and daily energy needs to calculate your supply target.'],
      ['03', 'Compare target and stock', 'Match your calculated needs against what you already have and spot missing quantities instantly.'],
      ['04', 'Work through your list', 'Add missing items, include prices and check them off one by one while shopping.'],
      ['05', 'Spread out shopping trips', 'Distribute open items by target date, number of trips and the budget available for each trip.'],
      ['06', 'Explore the database', 'Supply ideas, priorities and practical guidance provide inspiration and a clear path to follow.'],
      ['07', 'See your range at a glance', 'The dashboard brings food, water and essential equipment together in one clear overview.'],
      ['08', 'Get reminders in time', 'See exactly how many days remain and enable local reminders whenever you choose.'],
      ['09', 'Scan, back up and share', 'Capture nutrition per 100 g/ml and save or share supplies using backups and PDF exports.'],
    ],
    localEyebrow: 'Local first',
    localTitle: 'Your supplies stay with you',
    localText: 'Your essential household data is stored locally on your device. No user account or cloud service is required.',
    localLink: 'Privacy details →',
    platformEyebrow: 'For Android and iOS',
    platformTitle: 'Simple Prep for your smartphone',
    platformText: 'The Android and iOS release is being prepared. Once available, you will be able to download Simple Prep for free.',
    storeSoon: 'Coming soon',
  },
} as const;

function FeatureVisual({ index, language }: { index: number; language: Language }) {
  const de = language === 'de';

  if (index === 0) {
    return (
      <div className="feature-visual inventory-visual" aria-hidden="true">
        <div className="inventory-product"><i>R</i><div><strong>{de ? 'Reis' : 'Rice'}</strong><span>5 kg</span></div></div>
        <div className="inventory-details">
          <span><small>{de ? 'MHD' : 'Best before'}</small>14.01.2027</span>
          <span><small>{de ? 'Lagerort' : 'Storage'}</small>{de ? 'Küche' : 'Kitchen'}</span>
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="feature-visual planner-visual" aria-hidden="true">
        <div className="planner-inputs">
          <span><small>{de ? 'Personen' : 'People'}</small><strong>2</strong></span>
          <span><small>{de ? 'Zeitraum' : 'Period'}</small><strong>{de ? '14 Tage' : '14 days'}</strong></span>
        </div>
        <div className="planner-result"><small>{de ? 'Berechneter Bedarf' : 'Calculated need'}</small><strong>56.000 kcal</strong></div>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="feature-visual compare-visual" aria-hidden="true">
        <div className="compare-values">
          <span><small>{de ? 'Bedarf' : 'Target'}</small><strong>14 kg</strong></span>
          <span><small>{de ? 'Vorhanden' : 'In stock'}</small><strong>9 kg</strong></span>
        </div>
        <div className="compare-track"><i /></div>
        <div className="compare-missing"><span>{de ? 'Fehlende Menge' : 'Missing amount'}</span><strong>5 kg</strong></div>
      </div>
    );
  }

  if (index === 3) {
    return (
      <div className="feature-visual checklist-visual" aria-hidden="true">
        <div className="check-row checked"><i>✓</i><span>{de ? 'Reis' : 'Rice'}</span></div>
        <div className="check-row"><i /><span>{de ? 'Wasser' : 'Water'}</span></div>
      </div>
    );
  }

  if (index === 4) {
    return (
      <div className="feature-visual trips-visual" aria-hidden="true">
        <div className="trip-dots"><i>1</i><i>2</i><i>3</i><i>4</i></div>
        <strong>{de ? '25 € je Einkauf' : '€25 per trip'}</strong>
      </div>
    );
  }

  if (index === 5) {
    return (
      <div className="feature-visual database-visual" aria-hidden="true">
        <div><strong>{de ? 'Dosenöffner' : 'Can opener'}</strong><span>{de ? 'Prio 1' : 'Priority 1'}</span></div>
        <small>{de ? 'Idee direkt übernehmen +' : 'Add idea directly +'}</small>
      </div>
    );
  }

  if (index === 6) {
    return (
      <div className="feature-visual range-visual" aria-hidden="true">
        <div><strong>26</strong><span>{de ? 'Tage Essen' : 'days food'}</span></div>
        <div><strong>22</strong><span>{de ? 'Tage Wasser' : 'days water'}</span></div>
        <div><strong>66%</strong><span>{de ? 'Ausrüstung' : 'equipment'}</span></div>
      </div>
    );
  }

  if (index === 8) {
    return (
      <div className="feature-visual scan-visual" aria-hidden="true">
        <div><small>100 g/ml</small><strong>350 kcal</strong></div>
        <span>→</span>
        <div className="scan-actions"><i>PDF</i><i>Backup</i></div>
      </div>
    );
  }

  return (
    <div className="feature-visual reminder-visual" aria-hidden="true">
      <div className="reminder-mark">4</div>
      <div><strong>{de ? 'Basmati-Reis' : 'Basmati rice'}</strong><span>{de ? 'Läuft in 4 Tagen ab' : 'Expires in 4 days'}</span></div>
    </div>
  );
}

export function HomePage({ language }: { language: Language }) {
  const copy = content[language];
  const de = language === 'de';
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://simpleprep.de/#website',
        url: 'https://simpleprep.de/',
        name: 'Simple Prep',
        alternateName: de ? 'Simple Prep Vorrats-App' : 'Simple Prep supply app',
        inLanguage: ['de', 'en'],
      },
      {
        '@type': 'Brand',
        '@id': 'https://simpleprep.de/#brand',
        name: 'Simple Prep',
        url: 'https://simpleprep.de/',
        logo: 'https://simpleprep.de/brand/simple-prep-crest.png',
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://simpleprep.de/#app',
        name: 'Simple Prep',
        url: de ? 'https://simpleprep.de/' : 'https://simpleprep.de/en/',
        description: de
          ? 'Vorrats-App für Haushalt und Vorsorge: Vorräte planen, Mindesthaltbarkeitsdaten überwachen, Reichweiten berechnen und Einkäufe organisieren.'
          : 'A household supply app for planning stock, tracking best-before dates, calculating coverage and organizing shopping.',
        applicationCategory: 'LifestyleApplication',
        operatingSystem: 'Android, iOS',
        isAccessibleForFree: true,
        inLanguage: ['de', 'en'],
        image: 'https://simpleprep.de/brand/feature-graphic.png',
        brand: { '@id': 'https://simpleprep.de/#brand' },
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LanguageSetter language={language} />
      <SiteHeader language={language} />
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">{copy.heroEyebrow}</span>
          <h1>{copy.heroTitle}</h1>
          <p className="hero-lead">{copy.heroText}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#funktionen">{copy.primary}</a>
            <Link className="button button-secondary" href={de ? '/de/support' : '/en/support'}>{copy.secondary}</Link>
          </div>
          <p className="release-note">{copy.release}</p>
        </div>
        <div className="hero-visual">
          <h2 className="visual-heading">{copy.imageHeading}</h2>
          <div className="phone-preview">
            <div className="phone-screen-single" role="img" aria-label={copy.imageAlt}>
              <Image
                className="single-shot"
                src={de ? '/screens/supplies-crop-de.png' : '/screens/supplies-crop-en.png'}
                alt=""
                width={410}
                height={820}
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section className="platform-section" aria-labelledby="platform-title">
        <div className="platform-crest">
          <Image
            src="/brand/simple-prep-crest.png"
            alt={de ? 'Simple Prep Wappen' : 'Simple Prep crest'}
            width={972}
            height={1126}
          />
        </div>
        <div className="platform-copy">
          {copy.platformEyebrow ? <span className="eyebrow">{copy.platformEyebrow}</span> : null}
          <h2 id="platform-title">{copy.platformTitle}</h2>
          <p>{copy.platformText}</p>
          <div className="store-link-grid" aria-label={de ? 'Store-Verlinkungen' : 'Store links'}>
            <div className="store-link-slot">
              <span>Android</span>
              <strong>Google Play</strong>
              <small>{copy.storeSoon}</small>
            </div>
            <div className="store-link-slot">
              <span>iOS</span>
              <strong>App Store</strong>
              <small>{copy.storeSoon}</small>
            </div>
          </div>
        </div>
      </section>
      <section className="proof-strip" aria-label={de ? 'Produkteigenschaften' : 'Product principles'}>
        {copy.proof.map((item) => <span key={item}>{item}</span>)}
      </section>
      <section className="features" id="funktionen">
        <div className="section-heading">
          <span className="eyebrow">{copy.sectionEyebrow}</span>
          <h2>{copy.sectionTitle}</h2>
          <p>{copy.sectionText}</p>
        </div>
        <div className="feature-grid">
          {copy.features.map(([number, title, text], index) => (
            <article className="feature-card" key={number}>
              <span className="feature-number">{number}</span>
              <FeatureVisual index={index} language={language} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="local-first" id="lokal">
        <div>
          <span className="eyebrow eyebrow-light">{copy.localEyebrow}</span>
          <h2>{copy.localTitle}</h2>
        </div>
        <div>
          <p>{copy.localText}</p>
          <Link className="text-link" href={de ? '/de/datenschutz' : '/en/privacy'}>{copy.localLink}</Link>
        </div>
      </section>
      <SiteFooter language={language} />
    </main>
  );
}
