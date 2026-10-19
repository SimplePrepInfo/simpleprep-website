import type { Metadata } from 'next';
import Link from 'next/link';
import { DocumentPage } from '../../components/DocumentPage';

export const metadata: Metadata = { title: 'Impressum' };

export default function ImprintPage() {
  return (
    <DocumentPage
      language="de"
      kicker="Anbieterangaben"
      title="Impressum"
      intro="Angaben nach § 5 Digitale-Dienste-Gesetz (DDG)."
    >
      <section>
        <h2>Diensteanbieter</h2>
        <address>
          <strong>Maximilian Taag</strong><br />
          Einzelunternehmen<br />
          Hömicker Weg 1<br />
          51643 Gummersbach<br />
          Deutschland
        </address>
      </section>
      <section>
        <h2>Kontakt</h2>
        <p>E-Mail: <a href="mailto:simpleprep.info@gmail.com">simpleprep.info@gmail.com</a></p>
        <p>Telefon: <a href="tel:+491601260993">+49 160 1260993</a></p>
        <p>Telefonische Erreichbarkeit: montags von 18:00 bis 19:00 Uhr. Außerhalb dieser Zeit kann eine Nachricht hinterlassen werden. Wir melden uns zeitnah zurück.</p>
      </section>
      <section>
        <h2>Verbraucherstreitbeilegung</h2>
        <p>Der Anbieter ist weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      </section>
      <p className="document-back"><Link href="/">← Zur Startseite</Link></p>
    </DocumentPage>
  );
}
