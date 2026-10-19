import type { Metadata } from 'next';
import Link from 'next/link';
import { DocumentPage } from '../../components/DocumentPage';

export const metadata: Metadata = { title: 'Support' };

export default function SupportPage() {
  return (
    <DocumentPage
      language="en"
      kicker="We are happy to help"
      title="Support"
      intro="Have a question, found a problem or want to share feedback? Send us an email."
    >
      <section>
        <h2>Contact</h2>
        <p>The easiest way to reach us is by email:</p>
        <a className="button button-primary inline-button" href="mailto:simpleprep.info@gmail.com">simpleprep.info@gmail.com</a>
      </section>
      <section>
        <h2>Help us understand the issue</h2>
        <ul>
          <li>Tell us whether you use Android or iOS.</li>
          <li>Briefly describe what you tried to do and what happened instead.</li>
          <li>Include the installed app version if it is shown to you.</li>
          <li>Do not send private inventory data, receipts or other sensitive information unless it is strictly necessary.</li>
        </ul>
      </section>
      <section>
        <h2>Deleting data</h2>
        <p>Simple Prep does not use a user account or proprietary cloud. Your core data is stored locally on your device.</p>
        <p>In the app, open <strong>Settings → Delete data</strong>. After a two-step confirmation, supplies, consumption history, the shopping list, planner data and personal settings are deleted. Initial setup then starts again.</p>
        <p>Previously exported backups, PDFs or shared content are retained. Delete those files separately from their storage location if necessary.</p>
      </section>
      <p className="document-back"><Link href="/en">← Back to home</Link></p>
    </DocumentPage>
  );
}
