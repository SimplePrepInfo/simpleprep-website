import type { Metadata } from 'next';
import Link from 'next/link';
import { DocumentPage } from '../../components/DocumentPage';

export const metadata: Metadata = { title: 'Privacy policy' };

export default function PrivacyPage() {
  return (
    <DocumentPage
      language="en"
      kicker="Transparency"
      title="Privacy policy"
      intro="This page explains which data is processed when you use the Simple Prep website and the Simple Prep app."
    >
      <section>
        <h2>1. Controller</h2>
        <address>
          Maximilian Taag, sole proprietorship<br />
          Hömicker Weg 1<br />
          51643 Gummersbach<br />
          Germany<br />
          Email: <a href="mailto:simpleprep.info@gmail.com">simpleprep.info@gmail.com</a><br />
          Telephone: <a href="tel:+491601260993">+49 160 1260993</a>
        </address>
        <p>No data protection officer has been appointed. You may send privacy enquiries directly to the email address above.</p>
      </section>

      <section>
        <h2>2. Scope and local-first principle</h2>
        <p>This policy applies to the simpleprep.de website and the Simple Prep mobile app for Android and iOS. The app follows a local-first design: its core functions require neither a user account nor a proprietary Simple Prep cloud. Inventory, consumption, planning, shopping and settings data is generally stored on your device.</p>
        <p>Simple Prep does not automatically receive this local core data. Data may nevertheless be processed or passed to third parties if you actively export, share or print information, contact support, or if the third-party SDKs described below process technical data.</p>
        <p>Simple Prep is intended exclusively for adults aged 18 or older and is not designed for children or minors. The app should therefore not be used by anyone under the age of 18.</p>
      </section>

      <section>
        <h2>3. Website access and hosting</h2>
        <p>The website is provided as a static website through GitHub Pages. GitHub identifies GitHub B.V., Prins Bernhardplein 200, 1097 JB Amsterdam, the Netherlands, and GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA, in connection with its services. According to GitHub’s documentation, a visitor’s IP address is logged and stored for security purposes whenever a GitHub Pages site is visited, regardless of whether the visitor is signed in to GitHub. GitHub may also process connection and usage data such as device information, request date and time, pages viewed, referrer, browser and operating-system information.</p>
        <p>The website is provided on the basis of Article 6(1)(f) GDPR. Our legitimate interest is providing our website securely, reliably and economically. GitHub processes data in the United States and other countries and identifies in particular the European Commission’s standard contractual clauses and the EU–US Data Privacy Framework as relevant transfer mechanisms.</p>
        <p>The website’s own code does not set cookies or comparable storage objects, add analytics, advertising trackers, external fonts or contact forms, or access browser storage. If this changes, we will update this policy and any required consent flow before introducing the relevant technology.</p>
        <ul>
          <li><a href="https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages" rel="noreferrer">GitHub Pages – operation and IP logging</a></li>
          <li><a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" rel="noreferrer">GitHub General Privacy Statement</a></li>
        </ul>
      </section>

      <section>
        <h2>4. Contact by email and telephone</h2>
        <p>If you contact us by email, we process your email address, the contents of your message, technical email metadata and any information you voluntarily provide in order to handle your request. Depending on the request, the legal basis is Article 6(1)(b) GDPR for pre-contractual or contractual measures or Article 6(1)(f) GDPR. Our legitimate interest is responding to questions, bug reports and feedback. Statutory retention requirements may additionally be based on Article 6(1)(c) GDPR.</p>
        <p>The contact address is provided through a Google service. Google may process technical metadata and the contents of the communication. Please do not send sensitive inventory, health, payment or account information unless it is necessary for your request.</p>
        <p>If you contact us by telephone or leave a voicemail message, we process information including your telephone number, the time and duration of the contact and the information you provide. Calls are not recorded. Depending on the request, processing is based on Article 6(1)(b) or Article 6(1)(f) GDPR and is used to handle your enquiry. The telecommunications provider may process connection and voicemail data under its own responsibility.</p>
        <p><a href="https://policies.google.com/privacy?hl=en" rel="noreferrer">Google Privacy Policy</a></p>
      </section>

      <section>
        <h2>5. App data stored locally</h2>
        <p>Depending on how you use the app, the following information is stored locally on your device:</p>
        <ul>
          <li>language, country, currency, units, theme, text size and other personal settings,</li>
          <li>supplies, partial quantities, amounts, categories, storage locations, notes, nutrition values and best-before dates,</li>
          <li>consumption history and planning details such as people, period, calories, water and dietary options,</li>
          <li>shopping lists, prices, budgets, planned shopping trips and completion status,</li>
          <li>reminder and notification settings.</li>
        </ul>
        <p>Local processing is required to provide the app features you choose to use. To the extent that it is subject to our data protection responsibility, it is carried out under Article 6(1)(b) GDPR. Technically necessary storage on your device and access by the app is based on Section 25(2)(2) TDDDG. We have no remote access to this data.</p>
      </section>

      <section>
        <h2>6. Camera, photos and nutrition text recognition</h2>
        <p>The camera or photo picker is opened only if you actively start nutrition text recognition and grant the relevant operating-system permission. A newly captured camera image is processed as a temporary file and deleted on a best-effort basis after recognition. An original selected from your photo library is not modified or deleted. The image is not stored as part of your inventory.</p>
        <p>Text recognition uses Google ML Kit. According to the provider, input images, recognised text and results are processed entirely on the device and are not sent to Google servers. ML Kit may nevertheless contact Google servers for bug fixes, model updates and hardware-accelerator compatibility information. Technical usage and performance metrics are also processed, for example device and app information, installation identifiers, API configuration, event types, input and output sizes, and error codes. Google states that it uses this data to measure performance, debug, maintain and improve the APIs, and detect misuse or abuse.</p>
        <p>To the extent that it is subject to our responsibility, the text recognition initiated by you is provided under Article 6(1)(b) GDPR. We rely on Article 6(1)(f) GDPR for integrating the service and the associated technically necessary diagnostic and compatibility operations. Our legitimate interest is providing text recognition that is reliable, secure and compatible with different devices. Google may process technical data for its own purposes under its own data protection responsibility.</p>
        <p><a href="https://developers.google.com/ml-kit/terms" rel="noreferrer">Google ML Kit – Terms &amp; Privacy</a></p>
      </section>

      <section>
        <h2>7. Local notifications</h2>
        <p>If you enable reminders and grant the operating-system permission, Simple Prep schedules expiry and inventory notifications locally on your device. Simple Prep does not operate its own push infrastructure and does not transmit the contents of these reminders to a proprietary server. You can change or disable notifications in the app or operating-system settings.</p>
      </section>

      <section>
        <h2>8. Advertising, consent and privacy options</h2>
        <p>Simple Prep finances the free version through banner and full-screen advertising. We use Google Mobile Ads (AdMob) and Google’s User Messaging Platform (UMP) for this purpose. Recipients include Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland, affiliated Google companies and – depending on your choices – the advertising partners listed in the consent form.</p>
        <p>Simple Prep is responsible for selecting and integrating these services and for data transfers triggered within our sphere of influence. Google and individual advertising partners may be independent controllers for their subsequent processing, for example for their own measurement, security, fraud-prevention or advertising purposes. The UMP form identifies the participating providers and the purposes and legal bases they state.</p>
        <p>At every app launch, UMP requests the applicable privacy status and, where required, displays a form listing purposes, legal bases and participating advertising partners. The app requests ads only if UMP reports that ads may be requested. The form of advertising that can be provided – personalised, non-personalised or limited advertising – depends on your region, availability, your choices and the settings of the providers involved.</p>
        <p>The app’s local core functions remain available if you refuse consent, UMP does not permit ad requests or the privacy status cannot be retrieved temporarily. Simple Prep does not request advertising while UMP does not permit ad requests. Depending on your choices and UMP’s decision, this may result in limited or non-personalised advertising, or temporarily no advertising.</p>
        <p>Depending on your choices, Google Mobile Ads, UMP and partners listed in the form may process information including your IP address and approximate location derived from it, device and app information, advertising or other device identifiers, consent data, app and advertising interactions, advertisements shown, and crash, performance and other diagnostic data. These activities are used in particular for ad delivery, reach and performance measurement, frequency capping, analytics, security and fraud prevention.</p>
        <p>Personalised advertising and non-essential storage or access on your device take place only where valid consent under Article 6(1)(a) GDPR and Section 25(1) TDDDG exists. If no consent is given, the app requests only the form of limited or non-personalised advertising that UMP permits based on your choices and applicable law. To the extent that processing within our responsibility is necessary for basic ad delivery, security and fraud prevention, we rely on Article 6(1)(f) GDPR. Our legitimate interest is financing the free app and providing advertising securely and with protection against misuse. Access to your device takes place only with consent under Section 25(1) TDDDG or where a statutory exception, in particular Section 25(2) TDDDG, applies.</p>
        <p>Google and individual partners may rely on their own legitimate interests for security, fraud-prevention, measurement or technical purposes identified in the form. The purposes and legal bases actually used, together with available objection options, are displayed in the UMP form. Your choices are taken into account for subsequent ad delivery.</p>
        <p>On iOS, Simple Prep does not request App Tracking Transparency permission, does not deliberately access the IDFA and has disabled Google’s publisher first-party ID. Simple Prep does not intend to perform cross-app tracking on iOS. The other technical advertising, usage and diagnostic data described above may still be processed. On Android, the Google Mobile Ads SDK may process the Android advertising ID or other device identifiers depending on operating-system settings, privacy choices and ad-serving mode.</p>
        <p>Where Google makes privacy options available for your region and app configuration, you can reopen and change your choices for the future at any time under “Settings → Privacy &amp; advertising” in the app. This does not affect the lawfulness of processing carried out before the change.</p>
        <ul>
          <li><a href="https://developers.google.com/admob/flutter/privacy" rel="noreferrer">Google AdMob – UMP for Flutter</a></li>
          <li><a href="https://developers.google.com/admob/flutter/privacy/ad-serving-modes" rel="noreferrer">Google AdMob – ad serving modes</a></li>
          <li><a href="https://policies.google.com/technologies/partner-sites?hl=en" rel="noreferrer">How Google uses information from partner services</a></li>
          <li><a href="https://policies.google.com/privacy?hl=en" rel="noreferrer">Google Privacy Policy</a></li>
        </ul>
      </section>

      <section>
        <h2>9. Backup, PDF, printing and sharing</h2>
        <p>A backup is created only when you actively select the function. The app generates an unencrypted, human-readable JSON file. It may contain the inventory, consumption, shopping, planning and settings data stored in Simple Prep at that time. Store and share this file only in a location you trust.</p>
        <p>When you use backup, PDF, CSV, print or share, the selected content is passed to the operating system and then to the app, printer or storage location you choose. From that point, the privacy terms of your chosen recipient also apply. Simple Prep does not automatically upload these exports to a proprietary cloud.</p>
      </section>

      <section>
        <h2>10. Deletion, uninstall and external data</h2>
        <p>Using the deletion function in the app settings, you can delete supplies, consumption history, the shopping list, build-up and planner data, and personal settings from the device after a two-step confirmation. Initial setup then starts again. You must delete previously exported backups, PDF or CSV files and shared content from their respective storage location or recipient yourself.</p>
        <p>The technical configuration excludes local app data from automatic operating-system backups and device transfers. Uninstalling the app removes local app data in accordance with the operating system.</p>
        <p>The local deletion function or uninstall does not delete information already processed by Google or advertising partners under their own responsibility. Where Simple Prep is responsible for processing or a transfer, you may exercise your rights against us. For independent processing by Google or other advertising partners, you may additionally contact the relevant provider directly. We will not reject a request merely because an external provider is involved; we will first assess which controller’s area of responsibility is affected.</p>
      </section>

      <section>
        <h2>11. Recipients and international transfers</h2>
        <p>Depending on the feature used, recipients may include GitHub as hosting provider, Google as provider of email, ML Kit, UMP and Mobile Ads, and share, print or storage providers selected by you. The advertising providers involved and their purposes are additionally displayed in the UMP consent form.</p>
        <p>Apple and Google process their own account, payment, device and usage data under their own responsibility when you access the relevant app store, download the app or manage it. We have no direct control over the scope or duration of that processing.</p>
        <p>Some providers process data outside the European Economic Area. According to GitHub and Google, relevant safeguards may include adequacy decisions under Article 45 GDPR, including the EU–US Data Privacy Framework for certified companies, or the European Commission’s standard contractual clauses under Article 46 GDPR. You can request further information about the safeguards used for a specific transfer and an available copy or reference by emailing the address stated in section 1.</p>
        <ul>
          <li><a href="https://policies.google.com/privacy/frameworks?hl=en" rel="noreferrer">Google – data transfer frameworks</a></li>
          <li><a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" rel="noreferrer">GitHub – international data transfers</a></li>
          <li><a href="https://www.apple.com/legal/privacy/" rel="noreferrer">Apple – Privacy</a></li>
          <li><a href="https://policies.google.com/privacy?hl=en" rel="noreferrer">Google Privacy Policy</a></li>
        </ul>
      </section>

      <section>
        <h2>12. Retention</h2>
        <ul>
          <li>Local app data: until you delete it in the app or uninstall the app.</li>
          <li>Temporary camera image for OCR: until recognition is complete and the subsequent best-effort deletion; system-side temporary copies may be governed by operating-system rules.</li>
          <li>Exported files: until you delete them from the chosen location or recipient.</li>
          <li>Support emails, call lists and voicemail messages: until the request is resolved, and longer only where required by statutory retention duties or for the establishment, exercise or defence of legal claims.</li>
          <li>Website server logs: GitHub does not publish one uniform fixed period for GitHub Pages IP logs. GitHub states that retention depends on processing purposes and contractual and legal obligations.</li>
          <li>Advertising, consent and ML Kit metrics data: according to the applicable privacy choices and the retention and deletion rules of Google and the providers listed in the UMP form. Those providers determine the duration of their independent processing; we do not have direct access to their retention settings. Information and deletion options are available in the UMP form and the provider information linked in this policy.</li>
        </ul>
      </section>

      <section>
        <h2>13. Your rights</h2>
        <p>Subject to the statutory requirements, you have rights of access, rectification, erasure, restriction of processing and data portability. You may withdraw consent at any time with future effect. If information exists only locally on your device, we have no technical access to it; you can manage, export or delete it directly in the app.</p>
        <p>To exercise your rights, an informal message to <a href="mailto:simpleprep.info@gmail.com">simpleprep.info@gmail.com</a> is sufficient. We respond without undue delay and generally no later than one month after receipt. Where necessary because of the complexity or number of requests, the period may be extended by a further two months under the statutory requirements; we will inform you within the first month. Requests are generally handled free of charge. We may ask for additional information necessary to confirm your identity only where we have reasonable doubts about it.</p>
        <p><strong>Right to object:</strong> Where processing is based on Article 6(1)(f) GDPR, you may object to that processing at any time on grounds relating to your particular situation. We will then no longer process the information unless we can demonstrate compelling legitimate grounds or the processing is required for the establishment, exercise or defence of legal claims.</p>
        <p><strong>Objection to direct marketing:</strong> Where personal data is processed for direct-marketing purposes, you may object to that processing, including related profiling, at any time and without giving specific reasons. The data will then no longer be processed for those purposes. You can also withdraw consent-based personalised advertising at any time with future effect under “Settings → Privacy &amp; advertising”.</p>
        <p>You may also lodge a complaint with a data protection supervisory authority. The authority particularly responsible for our place of business is:</p>
        <address>
          State Commissioner for Data Protection and Freedom of Information North Rhine-Westphalia<br />
          Kavalleriestraße 2–4<br />
          40213 Düsseldorf, Germany<br />
          <a href="https://www.ldi.nrw.de/" rel="noreferrer">www.ldi.nrw.de</a>
        </address>
      </section>

      <section>
        <h2>14. Required information and automated decisions</h2>
        <p>You do not need to create a user account. Without the local details required for a desired feature, the relevant calculation, plan or reminder cannot be provided. Contact information in a support request is voluntary, but we cannot respond without a reachable return channel.</p>
        <p>Simple Prep does not itself make decisions based solely on automated processing that produce legal or similarly significant effects. If you consent to personalised advertising, advertising providers may derive profiles and interests in order to select advertising. Details are provided in the UMP form and the respective provider information.</p>
      </section>

      <section>
        <h2>15. Version and changes</h2>
        <p>Version of this privacy policy: 19 October 2026.</p>
        <p>We update this privacy policy when Simple Prep’s functions, providers, legal requirements or technical design change. The current version is available at this address.</p>
      </section>
      <p className="document-back"><Link href="/en">← Back to home</Link></p>
    </DocumentPage>
  );
}
