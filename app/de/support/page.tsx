import type { Metadata } from 'next';
import Link from 'next/link';
import { DocumentPage } from '../../components/DocumentPage';

export const metadata: Metadata = { title: 'Support' };

export default function SupportPage() {
  return (
    <DocumentPage
      language="de"
      kicker="Wir helfen gern"
      title="Support"
      intro="Du hast eine Frage, einen Fehler gefunden oder möchtest Feedback geben? Schreib uns direkt."
    >
      <section>
        <h2>Kontakt</h2>
        <p>Am einfachsten erreichst du uns per E-Mail:</p>
        <a className="button button-primary inline-button" href="mailto:simpleprep.info@gmail.com">simpleprep.info@gmail.com</a>
      </section>
      <section>
        <h2>Damit wir schneller helfen können</h2>
        <ul>
          <li>Nenne bitte, ob du Android oder iOS verwendest.</li>
          <li>Beschreibe kurz, was du tun wolltest und was stattdessen passiert ist.</li>
          <li>Gib die installierte App-Version an, wenn sie dir angezeigt wird.</li>
          <li>Schicke keine privaten Vorratsdaten, Kaufbelege oder andere sensible Informationen, wenn sie nicht unbedingt erforderlich sind.</li>
        </ul>
      </section>
      <section>
        <h2>Daten löschen</h2>
        <p>Simple Prep verwendet kein Benutzerkonto und keine eigene Cloud. Deine Kerndaten liegen lokal auf deinem Gerät.</p>
        <p>Öffne in der App <strong>Einstellungen → Daten löschen</strong>. Nach einer zweistufigen Bestätigung werden Vorräte, Verbrauchshistorie, Einkaufsliste, Planerdaten und persönliche Einstellungen gelöscht. Anschließend beginnt die Ersteinrichtung erneut.</p>
        <p>Bereits exportierte Backups, PDF-Dateien oder geteilte Inhalte bleiben erhalten. Lösche solche Dateien bei Bedarf zusätzlich an ihrem jeweiligen Speicherort.</p>
      </section>
      <p className="document-back"><Link href="/">← Zur Startseite</Link></p>
    </DocumentPage>
  );
}
