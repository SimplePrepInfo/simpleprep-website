import type { ReactNode } from 'react';
import { LanguageSetter } from './LanguageSetter';
import { SiteFooter, SiteHeader } from './PageChrome';

type Language = 'de' | 'en';

export function DocumentPage({
  language,
  kicker,
  title,
  intro,
  notice,
  children,
}: {
  language: Language;
  kicker: string;
  title: string;
  intro: string;
  notice?: string;
  children: ReactNode;
}) {
  return (
    <main>
      <LanguageSetter language={language} />
      <SiteHeader language={language} compact />
      <article className="document-page">
        <header className="document-hero">
          <span className="eyebrow">{kicker}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
        </header>
        {notice ? <aside className="draft-notice">{notice}</aside> : null}
        <div className="document-body">{children}</div>
      </article>
      <SiteFooter language={language} />
    </main>
  );
}
