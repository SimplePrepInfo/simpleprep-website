import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DocumentPage } from '../../components/DocumentPage';

export const metadata: Metadata = {
  title: 'Nutzungsbedingungen (AGB) – Arbeitsentwurf',
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  notFound();

  return (
    <DocumentPage
      language="de"
      kicker="Fair und verständlich"
      title="Nutzungsbedingungen (AGB)"
      intro="Diese Allgemeinen Geschäftsbedingungen regeln die Nutzung der Simple-Prep-App und ergänzen die Bedingungen des jeweiligen App-Stores."
      notice="AGB-Arbeitsentwurf vom 19.10.2026 – noch nicht veröffentlichen. Anbieterangaben, Zielmärkte, Werbekonfiguration sowie Haftungs- und Verbraucherinformationen müssen vor dem Release fachlich geprüft und freigegeben werden."
    >
      <section>
        <h2>1. Anbieter und Geltungsbereich</h2>
        <p>Anbieter der App ist:</p>
        <address>
          Maximilian Taag, Einzelunternehmen<br />
          Hömicker Weg 1<br />
          51643 Gummersbach<br />
          Deutschland<br />
          E-Mail: <a href="mailto:simpleprep.info@gmail.com">simpleprep.info@gmail.com</a><br />
          Telefon: <a href="tel:+491601260993">+49 160 1260993</a> (montags 18:00–19:00 Uhr)
        </address>
        <p>Diese Nutzungsbedingungen gelten für die mobile Simple-Prep-App für Android und iOS. Für die Website gelten sie nur, soweit dort ausdrücklich darauf verwiesen wird. Zusätzlich gelten die Nutzungs- und Zahlungsbedingungen des Stores, über den du die App beziehst. Zwingende gesetzliche Verbraucherrechte bleiben unberührt.</p>
        <p>Simple Prep richtet sich ausschließlich an volljährige Personen ab 18 Jahren. Personen unter 18 Jahren dürfen die App nicht nutzen.</p>
      </section>

      <section>
        <h2>2. Vertrag und Nutzungslizenz</h2>
        <p>Mit dem Download erhältst du ein einfaches, nicht ausschließliches, nicht übertragbares und widerrufliches Recht, die App auf Geräten zu nutzen, die du besitzt oder kontrollierst, soweit die Regeln des jeweiligen App-Stores dies erlauben. Die App wird lizenziert und nicht verkauft. Du darfst sie nicht unzulässig vervielfältigen, weiterverkaufen, unterlizenzieren, verändern, zurückentwickeln oder Schutzmaßnahmen umgehen; gesetzlich zwingende Ausnahmen bleiben unberührt.</p>
        <p>Auf iOS gelten ergänzend die anwendbaren Apple-Media-Services-Bedingungen und, sofern keine wirksame individuelle Vereinbarung vorgeht, Apples Standard-EULA. Auf Android gelten ergänzend die Google-Play-Nutzungsbedingungen.</p>
        <ul>
          <li><a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" rel="noreferrer">Apple Standard-EULA</a></li>
          <li><a href="https://play.google.com/intl/ALL_de/about/play-terms/" rel="noreferrer">Google-Play-Nutzungsbedingungen</a></li>
        </ul>
      </section>

      <section>
        <h2>3. Funktionsumfang</h2>
        <p>Simple Prep unterstützt unter anderem die lokale Verwaltung von Vorräten und Ausrüstung, Mindesthaltbarkeits-Erinnerungen, Bedarfsplanung, Einkaufsliste, Aufbauplan, Nährwert-Texterkennung sowie bewusst ausgelöste Exporte und Backups. Der genaue Funktionsumfang ergibt sich aus der jeweils installierten Version und der Store-Beschreibung.</p>
        <p>Für die Kernfunktionen ist kein Simple-Prep-Konto und keine eigene Simple-Prep-Cloud erforderlich. Daten werden grundsätzlich lokal auf deinem Gerät gespeichert. Einzelne Funktionen benötigen eine Internetverbindung oder Dienste von Apple, Google oder von dir ausgewählten Apps, insbesondere Werbung, Einwilligungsverwaltung, Modellaktualisierungen, Teilen und Drucken.</p>
      </section>

      <section>
        <h2>4. Deine Eingaben und Verantwortung</h2>
        <p>Du bist dafür verantwortlich, dass deine Eingaben richtig und rechtmäßig sind und dass du erforderliche Rechte an eingegebenen, fotografierten, exportierten oder geteilten Inhalten besitzt. Die App darf nicht missbräuchlich, rechtswidrig oder zur Beeinträchtigung von Geräten, Diensten oder Dritten verwendet werden.</p>
        <p>Kontrolliere Mengen, Preise, Einheiten, Nährwerte, Mindesthaltbarkeitsdaten, Lagerbedingungen und Erinnerungen regelmäßig. OCR-Ergebnisse können fehlerhaft oder unvollständig sein und müssen mit dem Produktetikett abgeglichen werden.</p>
      </section>

      <section>
        <h2>5. Planungen, Berechnungen und fachliche Hinweise</h2>
        <p>Reichweiten-, Kalorien-, Wasser-, Mengen-, Budget- und Ausrüstungsberechnungen sind unverbindliche Planungshilfen auf Grundlage deiner Eingaben und allgemeiner Modellannahmen. Sie garantieren weder eine vollständige Versorgung noch Sicherheit in einer konkreten Notlage.</p>
        <p>Simple Prep ersetzt keine medizinische, ernährungswissenschaftliche, lebensmittelrechtliche, behördliche oder professionelle Notfallberatung. Individuelle Bedürfnisse können unter anderem durch Alter, Gesundheit, Schwangerschaft, Klima, Aktivität, Medikamente, Allergien und besondere Krisenlagen erheblich abweichen. Beachte Produktetiketten, behördliche Hinweise und fachkundigen Rat.</p>
        <p>Ein Mindesthaltbarkeitsdatum ist nicht mit einem Verbrauchsdatum gleichzusetzen. Prüfe Lebensmittelzustand und Lagerung selbst und entsorge Produkte bei Zweifeln an der Sicherheit.</p>
      </section>

      <section>
        <h2>6. Kamera, Benachrichtigungen und Berechtigungen</h2>
        <p>Kamera, Fotoauswahl und Benachrichtigungen werden nur im Zusammenhang mit der jeweiligen Funktion angefragt. Du kannst Berechtigungen in den Betriebssystemeinstellungen ablehnen oder später widerrufen; die betroffene Funktion steht dann möglicherweise nicht oder nur eingeschränkt zur Verfügung.</p>
        <p>Benachrichtigungen können durch Betriebssystemeinstellungen, Energiesparfunktionen, Zeitzonenwechsel, Gerätehersteller oder technische Störungen verspätet oder gar nicht erscheinen. Verlasse dich bei sicherheitsrelevanten Entscheidungen nicht ausschließlich auf eine App-Erinnerung.</p>
      </section>

      <section>
        <h2>7. Lokale Daten, Backup und Löschen</h2>
        <p>Du bist selbst für eine angemessene Sicherung deiner lokalen Daten verantwortlich. Das App-Backup ist eine unverschlüsselte, menschenlesbare JSON-Datei und kann sämtliche lokalen App-Werte enthalten. Bewahre sie geschützt auf und teile sie nur mit vertrauenswürdigen Empfängern. Eine Wiederherstellung ersetzt die zu diesem Zeitpunkt vorhandenen App-Daten.</p>
        <p>Die Löschfunktion entfernt nach zweistufiger Bestätigung Vorräte, Verbrauchshistorie, Einkaufsliste, Planerdaten und persönliche Einstellungen vom Gerät. Bereits exportierte Dateien bleiben bestehen und müssen gegebenenfalls am jeweiligen Speicherort separat verwaltet werden. Weitere Einzelheiten stehen in der <Link href="/de/datenschutz">Datenschutzerklärung</Link>.</p>
      </section>

      <section>
        <h2>8. Werbung und Datenschutzwahl</h2>
        <p>Die kostenlose Version kann Werbung enthalten. Ob und welche Anzeigen angefordert werden, hängt von Region, Verfügbarkeit, Store-Version, Werbekonfiguration und deiner Datenschutzwahl ab. Soweit erforderlich, wird vor nicht notwendigen Endgerätezugriffen oder personalisierter Werbung eine Einwilligung eingeholt. Verfügbare Datenschutzoptionen kannst du in den App-Einstellungen erneut öffnen.</p>
        <p>Die Darstellung einer Anzeige bedeutet keine Empfehlung oder Gewährleistung für das beworbene Produkt. Für Inhalte, Angebote und Websites des Werbetreibenden ist der jeweilige Drittanbieter verantwortlich.</p>
      </section>

      <section>
        <h2>9. Verfügbarkeit, Änderungen und Updates</h2>
        <p>Wir bemühen uns um einen zuverlässigen Betrieb, schulden aber keine jederzeit unterbrechungs- oder fehlerfreie Verfügbarkeit. Funktionen können aus technischen, rechtlichen, sicherheitsbezogenen oder wirtschaftlichen Gründen geändert werden. Wesentliche Einschränkungen werden, soweit möglich und erforderlich, rechtzeitig erläutert.</p>
        <p>Updates können notwendig sein, um Sicherheit, Kompatibilität oder rechtliche Anforderungen zu erhalten. Wenn du ein erforderliches Update nicht installierst oder dein Betriebssystem nicht mehr unterstützt wird, können Funktionen eingeschränkt sein. Gesetzliche Aktualisierungs- und Gewährleistungspflichten bleiben unberührt.</p>
      </section>

      <section>
        <h2>10. Rechte an App und Inhalten</h2>
        <p>App, Marke, Gestaltung, Texte, Datenbankstruktur, Grafiken und sonstige Inhalte sind nach Maßgabe der gesetzlichen Vorschriften geschützt. Rechte Dritter und Lizenzen von Open-Source-Bestandteilen bleiben unberührt. Die Nutzung der App überträgt dir keine darüber hinausgehenden Rechte.</p>
      </section>

      <section>
        <h2>11. Haftung</h2>
        <p>Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit, bei Verletzung von Leben, Körper oder Gesundheit, nach dem Produkthaftungsgesetz sowie im Umfang ausdrücklich übernommener Garantien.</p>
        <p>Bei leicht fahrlässiger Verletzung einer wesentlichen Vertragspflicht ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Wesentliche Vertragspflichten sind solche, deren Erfüllung die ordnungsgemäße Nutzung der App erst ermöglicht und auf deren Einhaltung du regelmäßig vertrauen darfst. Im Übrigen ist die Haftung für leichte Fahrlässigkeit ausgeschlossen, soweit dies gesetzlich zulässig ist.</p>
        <p>Diese Regelung beschränkt keine zwingenden Verbraucher-, Gewährleistungs- oder Datenschutzrechte. Die Klausel ist vor Veröffentlichung fachlich zu prüfen.</p>
      </section>

      <section>
        <h2>12. Laufzeit und Beendigung</h2>
        <p>Du kannst die kostenlose Nutzung jederzeit durch Deinstallation beenden. Wir können die Nutzung bei einem erheblichen Verstoß gegen diese Bedingungen im gesetzlich zulässigen Umfang beschränken oder beenden.</p>
      </section>

      <section>
        <h2>13. Anwendbares Recht und Streitbeilegung</h2>
        <p>Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Wenn du Verbraucher bist und deinen gewöhnlichen Aufenthalt in einem anderen Staat hast, bleiben zwingende Verbraucherschutzvorschriften dieses Staates unberührt. Für Verbraucher wird kein ausschließlicher Gerichtsstand vereinbart.</p>
        <p>Der Anbieter ist weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Die frühere EU-Plattform zur Online-Streitbeilegung wurde 2025 eingestellt und wird daher nicht verlinkt.</p>
      </section>

      <section>
        <h2>14. Änderungen, Kontakt und Stand</h2>
        <p>Änderungen dieser Bedingungen gelten für die Zukunft. Soweit eine Änderung deine bestehende Vertragsposition wesentlich berührt, informieren wir dich in angemessener Weise und holen eine Zustimmung ein, sofern dies gesetzlich erforderlich ist. Individuelle Abreden und zwingendes Recht gehen vor.</p>
        <p>Fragen zu diesen Bedingungen kannst du an <a href="mailto:simpleprep.info@gmail.com">simpleprep.info@gmail.com</a> richten. Stand des Arbeitsentwurfs: 19.10.2026.</p>
      </section>
      <p className="document-back"><Link href="/">← Zur Startseite</Link></p>
    </DocumentPage>
  );
}
