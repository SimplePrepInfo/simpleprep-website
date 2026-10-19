import type { Metadata } from 'next';
import Link from 'next/link';
import { DocumentPage } from '../../components/DocumentPage';

export const metadata: Metadata = { title: 'Legal notice' };

export default function LegalNoticePage() {
  return (
    <DocumentPage
      language="en"
      kicker="Provider information"
      title="Legal notice"
      intro="Provider information pursuant to section 5 of the German Digital Services Act (DDG)."
    >
      <section>
        <h2>Service provider</h2>
        <address>
          <strong>Maximilian Taag</strong><br />
          Sole proprietorship<br />
          Hömicker Weg 1<br />
          51643 Gummersbach<br />
          Germany
        </address>
      </section>
      <section>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:simpleprep.info@gmail.com">simpleprep.info@gmail.com</a></p>
        <p>Telephone: <a href="tel:+491601260993">+49 160 1260993</a></p>
        <p>Telephone availability: Mondays from 18:00 to 19:00 German local time. Outside these hours, you may leave a message and we will return your call promptly.</p>
      </section>
      <section>
        <h2>Consumer dispute resolution</h2>
        <p>The provider is neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration body.</p>
      </section>
      <p className="document-back"><Link href="/en">← Back to home</Link></p>
    </DocumentPage>
  );
}
