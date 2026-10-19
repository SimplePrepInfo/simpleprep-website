import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DocumentPage } from '../../components/DocumentPage';

export const metadata: Metadata = {
  title: 'Terms and conditions – working draft',
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  notFound();

  return (
    <DocumentPage
      language="en"
      kicker="Fair and clear"
      title="Terms and conditions"
      intro="These terms and conditions govern use of the Simple Prep app and supplement the terms of the relevant app store."
      notice="Working terms draft dated 19 October 2026 – do not publish yet. Provider details, target markets, advertising configuration, liability and consumer information require professional review and approval before release."
    >
      <section>
        <h2>1. Provider and scope</h2>
        <p>The app is provided by:</p>
        <address>
          Maximilian Taag, sole proprietor<br />
          Hömicker Weg 1<br />
          51643 Gummersbach<br />
          Germany<br />
          Email: <a href="mailto:simpleprep.info@gmail.com">simpleprep.info@gmail.com</a><br />
          Telephone: <a href="tel:+491601260993">+49 160 1260993</a> (Mondays 18:00–19:00 German local time)
        </address>
        <p>These terms apply to the Simple Prep mobile app for Android and iOS. They apply to the website only where the website expressly refers to them. The usage and payment terms of the store through which you obtain the app also apply. Mandatory statutory consumer rights remain unaffected.</p>
        <p>Simple Prep is intended exclusively for adults aged 18 or older. Persons under the age of 18 must not use the app.</p>
      </section>

      <section>
        <h2>2. Contract and licence</h2>
        <p>When you download the app, you receive a limited, non-exclusive, non-transferable and revocable right to use it on devices that you own or control, as permitted by the relevant app-store rules. The app is licensed, not sold. You must not unlawfully copy, resell, sublicense, modify, reverse-engineer or circumvent safeguards in the app. Mandatory legal exceptions remain unaffected.</p>
        <p>On iOS, the applicable Apple Media Services Terms and, unless an effective custom agreement takes precedence, Apple’s Standard EULA apply in addition. On Android, the Google Play Terms of Service apply in addition.</p>
        <ul>
          <li><a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" rel="noreferrer">Apple Standard EULA</a></li>
          <li><a href="https://play.google.com/about/play-terms/" rel="noreferrer">Google Play Terms of Service</a></li>
        </ul>
      </section>

      <section>
        <h2>3. App features</h2>
        <p>Simple Prep supports local management of supplies and equipment, best-before reminders, needs planning, shopping lists, staged purchasing, nutrition text recognition and user-initiated exports and backups. The exact features are those provided by the installed version and described in the relevant store listing.</p>
        <p>The core features do not require a Simple Prep account or proprietary Simple Prep cloud. Data is generally stored locally on your device. Some features require internet access or services provided by Apple, Google or apps you choose, including advertising, consent management, model updates, sharing and printing.</p>
      </section>

      <section>
        <h2>4. Your input and responsibilities</h2>
        <p>You are responsible for ensuring that your input is accurate and lawful and that you hold any rights required for content you enter, photograph, export or share. You must not misuse the app, use it unlawfully or interfere with devices, services or third parties.</p>
        <p>Regularly check quantities, prices, units, nutrition values, best-before dates, storage conditions and reminders. OCR results may be incomplete or incorrect and must be compared with the product label.</p>
      </section>

      <section>
        <h2>5. Plans, calculations and specialist information</h2>
        <p>Supply-range, calorie, water, quantity, budget and equipment calculations are non-binding planning aids based on your input and general assumptions. They do not guarantee complete provision or safety in a specific emergency.</p>
        <p>Simple Prep is not a substitute for medical, nutritional, food-safety, regulatory or professional emergency advice. Individual needs can differ substantially due to age, health, pregnancy, climate, activity, medication, allergies and the circumstances of an emergency. Follow product labels, official guidance and qualified advice.</p>
        <p>A best-before date is not the same as a use-by date. You remain responsible for checking food condition and storage and for discarding products if safety is uncertain.</p>
      </section>

      <section>
        <h2>6. Camera, notifications and permissions</h2>
        <p>Camera, photo-picker and notification permissions are requested only in connection with the relevant feature. You may refuse or later withdraw permissions through the operating-system settings, in which case the feature may be unavailable or limited.</p>
        <p>Notifications may be delayed or not delivered because of operating-system settings, battery-saving measures, time-zone changes, device manufacturers or technical faults. Do not rely exclusively on an app reminder for safety-critical decisions.</p>
      </section>

      <section>
        <h2>7. Local data, backup and deletion</h2>
        <p>You are responsible for maintaining an appropriate backup of your local data. The app backup is an unencrypted, human-readable JSON file and may contain all local app values. Protect it and share it only with trusted recipients. Restoring a backup replaces the app data present at that time.</p>
        <p>After a two-step confirmation, the deletion feature removes supplies, consumption history, the shopping list, planner data and personal settings from the device. Exported files remain and must be managed separately at their storage location. See the <Link href="/en/privacy">Privacy policy</Link> for details.</p>
      </section>

      <section>
        <h2>8. Advertising and privacy choices</h2>
        <p>The free version may include advertising. Whether ads are requested and which ads are shown depends on region, availability, app version, advertising configuration and your privacy choices. Where required, consent is requested before non-essential device access or personalised advertising. Available privacy choices can be reopened in the app settings.</p>
        <p>Displaying an advertisement does not constitute our endorsement or warranty of the advertised product. The relevant third party is responsible for the content, offers and websites of the advertiser.</p>
      </section>

      <section>
        <h2>9. Availability, changes and updates</h2>
        <p>We aim to provide a reliable service but do not promise uninterrupted or error-free availability at all times. Features may be changed for technical, legal, security or economic reasons. Where possible and required, material limitations will be explained in advance.</p>
        <p>Updates may be necessary to maintain security, compatibility or legal compliance. If you do not install a required update or your operating system is no longer supported, features may be limited. Statutory update and warranty obligations remain unaffected.</p>
      </section>

      <section>
        <h2>10. Rights in the app and content</h2>
        <p>The app, brand, design, text, database structure, graphics and other content are protected in accordance with applicable law. Third-party rights and open-source licences remain unaffected. Using the app does not transfer any additional rights to you.</p>
      </section>

      <section>
        <h2>11. Liability</h2>
        <p>We remain fully liable for intent and gross negligence, injury to life, body or health, liability under the German Product Liability Act, and to the extent of any expressly assumed guarantee.</p>
        <p>For a slightly negligent breach of an essential contractual obligation, liability is limited to foreseeable damage typical for the contract. Essential obligations are those that make proper use of the app possible and on which you may normally rely. Otherwise, liability for slight negligence is excluded to the extent permitted by law.</p>
        <p>This clause does not restrict mandatory consumer, warranty or data protection rights. It requires professional review before publication.</p>
      </section>

      <section>
        <h2>12. Term and termination</h2>
        <p>You may stop using the free app at any time by uninstalling it. We may restrict or end use in the event of a material breach of these terms to the extent permitted by law.</p>
      </section>

      <section>
        <h2>13. Governing law and dispute resolution</h2>
        <p>German law applies, excluding the UN Convention on Contracts for the International Sale of Goods. If you are a consumer habitually resident in another country, mandatory consumer protection rules of that country remain unaffected. No exclusive jurisdiction is agreed for consumers.</p>
        <p>The provider is neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration body. The former EU Online Dispute Resolution platform was discontinued in 2025 and is therefore not linked.</p>
      </section>

      <section>
        <h2>14. Changes, contact and version</h2>
        <p>Changes to these terms apply prospectively. If a change materially affects your existing contractual position, we will provide appropriate notice and obtain consent where required by law. Individual agreements and mandatory law take precedence.</p>
        <p>Questions about these terms can be sent to <a href="mailto:simpleprep.info@gmail.com">simpleprep.info@gmail.com</a>. Working draft dated 19 October 2026.</p>
      </section>
      <p className="document-back"><Link href="/en">← Back to home</Link></p>
    </DocumentPage>
  );
}
