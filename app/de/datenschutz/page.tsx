import type { Metadata } from 'next';
import Link from 'next/link';
import { DocumentPage } from '../../components/DocumentPage';

export const metadata: Metadata = { title: 'Datenschutzerklärung' };

export default function PrivacyPage() {
  return (
    <DocumentPage
      language="de"
      kicker="Transparenz"
      title="Daten&shy;schutz&shy;erklärung"
      intro="Hier erfährst du, welche Daten bei der Nutzung der Simple-Prep-Website und der Simple-Prep-App verarbeitet werden."
    >
      <section>
        <h2>1. Verantwortlicher</h2>
        <address>
          Maximilian Taag, Einzelunternehmen<br />
          Hömicker Weg 1<br />
          51643 Gummersbach<br />
          Deutschland<br />
          E-Mail: <a href="mailto:support@simpleprep.de">support@simpleprep.de</a><br />
          Telefon: <a href="tel:+491601260993">+49 160 1260993</a>
        </address>
        <p>Ein Datenschutzbeauftragter wurde nicht bestellt. Datenschutzanfragen kannst du direkt an die oben genannte E-Mail-Adresse richten.</p>
      </section>

      <section>
        <h2>2. Geltungsbereich und Grundprinzip</h2>
        <p>Diese Erklärung gilt für die Website simpleprep.de und die mobile Simple-Prep-App für Android und iOS. Die App ist lokal aufgebaut: Für die Kernfunktionen ist weder ein Benutzerkonto noch eine eigene Simple-Prep-Cloud erforderlich. Vorrats-, Verbrauchs-, Planungs-, Einkaufs- und Einstellungsdaten werden grundsätzlich auf deinem Gerät gespeichert.</p>
        <p>Simple Prep erhält diese lokalen Kerndaten nicht automatisch. Daten können jedoch verarbeitet oder an Dritte übergeben werden, wenn du selbst einen Export, eine Freigabe, einen Druckvorgang oder eine Supportanfrage auslöst oder wenn die nachfolgend beschriebenen Drittanbieter-SDKs technische Daten verarbeiten.</p>
        <p>Die aktuelle App wird kostenlos mit Werbung angeboten. Sie enthält keine In-App-Käufe oder Abonnements und keine eigene Zahlungs- oder Kaufberechtigungsprüfung.</p>
        <p>Simple Prep richtet sich ausschließlich an volljährige Personen ab 18 Jahren und ist nicht für Kinder oder minderjährige Personen bestimmt. Die App soll daher nicht von Personen unter 18 Jahren verwendet werden.</p>
      </section>

      <section>
        <h2>3. Aufruf der Website und Hosting</h2>
        <p>Die Website wird als statische Website über GitHub Pages bereitgestellt. GitHub nennt für seine Dienste GitHub B.V., Prins Bernhardplein 200, 1097 JB Amsterdam, Niederlande, sowie GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. Nach der Dokumentation von GitHub wird beim Besuch einer GitHub-Pages-Website die IP-Adresse unabhängig davon zu Sicherheitszwecken protokolliert und gespeichert, ob die besuchende Person bei GitHub angemeldet ist. GitHub kann außerdem Verbindungs- und Nutzungsdaten wie Geräteinformationen, Datum und Uhrzeit einer Anfrage, aufgerufene Seiten, Referrer sowie Browser- und Betriebssysteminformationen verarbeiten.</p>
        <p>Die Bereitstellung der Website erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der sicheren, zuverlässigen und wirtschaftlichen Bereitstellung unseres Internetauftritts. GitHub verarbeitet Daten auch in den USA und anderen Ländern und nennt hierfür insbesondere Standardvertragsklauseln der Europäischen Kommission und das EU-US Data Privacy Framework.</p>
        <p>Der eigene Website-Code setzt keine Cookies oder vergleichbaren Speicherobjekte, bindet keine Analysewerkzeuge, Werbetracker, externen Schriftarten oder Kontaktformulare ein und greift nicht auf Browser-Speicher zu. Sollte sich dies ändern, werden wir diese Erklärung und gegebenenfalls den Einwilligungsablauf vor dem Einsatz anpassen.</p>
        <ul>
          <li><a href="https://docs.github.com/de/pages/getting-started-with-github-pages/what-is-github-pages" rel="noreferrer">GitHub Pages – Funktionsweise und IP-Protokollierung</a></li>
          <li><a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement" rel="noreferrer">Datenschutzerklärung von GitHub</a></li>
        </ul>
      </section>

      <section>
        <h2>4. Kontakt per E-Mail und Telefon</h2>
        <p>Wenn du uns per E-Mail kontaktierst, verarbeiten wir deine E-Mail-Adresse, den Inhalt deiner Nachricht, technische Metadaten der E-Mail und alle freiwillig übermittelten Angaben, um dein Anliegen zu bearbeiten. Je nach Inhalt beruht dies auf Art. 6 Abs. 1 lit. b DSGVO zur Durchführung vorvertraglicher oder vertraglicher Maßnahmen oder auf Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse ist die Bearbeitung von Fragen, Fehlermeldungen und Feedback. Gesetzliche Aufbewahrungspflichten können zusätzlich auf Art. 6 Abs. 1 lit. c DSGVO beruhen.</p>
        <p>Für den Empfang, Versand und die Speicherung der Nachrichten an unsere Supportadresse verwenden wir ein E-Mail-Postfach bei der STRATO GmbH, Otto-Ostrowski-Straße 7, 10249 Berlin, Deutschland. STRATO verarbeitet die dabei anfallenden Kommunikationsinhalte und technischen Metadaten für uns als Auftragsverarbeiter auf Grundlage einer Vereinbarung nach Art. 28 DSGVO.</p>
        <p>Zum Abrufen und Bearbeiten der Nachrichten verwenden wir außerdem die Gmail-App von Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Das Postfach wird weiterhin bei STRATO geführt. Google beschreibt für Gmail zusätzlich die Verarbeitung technischer Leistungs- und Absturzdaten; weitere Informationen enthalten die unten verlinkten Datenschutzhinweise. Bestehende Korrespondenz in unserem bisherigen Gmail-Postfach wird nach den in Abschnitt 12 genannten Kriterien weiter bearbeitet und aufbewahrt.</p>
        <p>Bitte sende keine sensiblen Vorrats-, Gesundheits-, Zahlungs- oder Kontodaten, wenn sie für dein Anliegen nicht erforderlich sind.</p>
        <p>Soweit wir deine Anfrage zur Ausübung von Datenschutzrechten bearbeiten, beruht die dafür erforderliche Verarbeitung auf Art. 6 Abs. 1 lit. c DSGVO in Verbindung mit unseren Pflichten insbesondere aus Art. 12 bis 22 DSGVO.</p>
        <p>Wenn du uns telefonisch kontaktierst oder eine Mailboxnachricht hinterlässt, verarbeiten wir insbesondere deine Telefonnummer, Zeitpunkt und Dauer des Kontakts sowie die von dir mitgeteilten Angaben. Eine Gesprächsaufzeichnung findet nicht statt. Die Verarbeitung dient der Bearbeitung deines Anliegens und beruht je nach Inhalt auf Art. 6 Abs. 1 lit. b oder lit. f DSGVO. Der eingesetzte Telekommunikationsanbieter kann Verbindungs- und Mailboxdaten in eigener Verantwortung verarbeiten.</p>
        <ul>
          <li><a href="https://www.strato.de/datenschutz/" rel="noreferrer">STRATO – Datenschutz</a></li>
          <li><a href="https://www.strato.de/agb/avv/" rel="noreferrer">STRATO – Vereinbarung zur Auftragsverarbeitung</a></li>
          <li><a href="https://support.google.com/mail/answer/10434152?hl=de" rel="noreferrer">Google – Datenschutz und Sicherheit in Gmail</a></li>
          <li><a href="https://policies.google.com/privacy?hl=de" rel="noreferrer">Datenschutzerklärung von Google</a></li>
        </ul>
      </section>

      <section>
        <h2>5. Lokal gespeicherte App-Daten</h2>
        <p>Je nach Nutzung speichert die App insbesondere folgende Angaben lokal auf deinem Gerät:</p>
        <ul>
          <li>Sprache, Land, Währung, Einheiten, Design, Textgröße und weitere persönliche Einstellungen,</li>
          <li>Vorräte, Teilmengen, Mengen, Kategorien, Lagerorte, Notizen, Nährwerte und Mindesthaltbarkeitsdaten,</li>
          <li>Verbrauchshistorie und Planungsangaben wie Personen, Zeitraum, Kalorien und Wasser,</li>
          <li>Einkaufslisten, Preise, Budgets, geplante Einkäufe und Erledigt-Status,</li>
          <li>Erinnerungs- und Benachrichtigungseinstellungen.</li>
        </ul>
        <p>Die lokale Verarbeitung ist erforderlich, um die von dir ausgewählten App-Funktionen bereitzustellen. Soweit sie unserer datenschutzrechtlichen Verantwortung unterliegt, erfolgt sie gemäß Art. 6 Abs. 1 lit. b DSGVO. Die technisch notwendige Speicherung auf deinem Endgerät und der Zugriff durch die App stützen sich auf § 25 Abs. 2 Nr. 2 TDDDG. Wir haben keinen Fernzugriff auf diese Daten.</p>
        <p>Frei eingegebene Bezeichnungen und Notizen können je nach Inhalt sensible Informationen, etwa über Gesundheit oder religiöse Überzeugungen, erkennen lassen. Simple Prep ist nicht für die Dokumentation medizinischer Befunde oder die Erstellung von Gesundheits- oder Religionsprofilen vorgesehen. Die App übergibt die Inhalte deiner Vorräte, Notizen und Planungen nicht an die Werbe-SDKs. Wenn du solche Angaben selbst exportierst, teilst oder an den Support sendest, können sie den jeweils von dir gewählten Empfänger erreichen; beachte dazu die Abschnitte 4 und 9.</p>
      </section>

      <section>
        <h2>6. Kamera, Fotos und Nährwert-Texterkennung</h2>
        <p>Die Kamera oder Fotoauswahl wird nur geöffnet, wenn du die Nährwert-Texterkennung aktiv startest. Soweit das Betriebssystem für den gewählten Weg eine Berechtigung verlangt, musst du diese zuvor erteilen. Eine geschützte Systemauswahl kann auch ohne allgemeinen Zugriff auf deine Fotomediathek funktionieren. Ein mit der Kamera neu aufgenommenes Bild wird als temporäre Datei verarbeitet. Beim Abschluss des Erkennungsvorgangs, auch bei einem Erkennungsfehler, schließt die App die Texterkennung und versucht anschließend unmittelbar, diese Datei zu löschen. Verhindert das Betriebssystem die Löschung oder wird die App vorher beendet, kann eine temporäre Datei verbleiben; eine sichere vollständige Löschung aller systemseitigen Kopien wird nicht zugesagt. Ein von dir aus der Fotomediathek ausgewähltes Original wird nicht verändert oder gelöscht. Das Bild wird nicht als Bestandteil deines Vorrats gespeichert.</p>
        <p>Für die Texterkennung wird Google ML Kit verwendet. Nach den Herstellerangaben werden Eingabebilder, erkannte Texte und Ergebnisse vollständig auf dem Gerät verarbeitet und nicht an Google-Server übermittelt. ML Kit kann Google-Server jedoch für Fehlerbehebungen, Modellaktualisierungen und Informationen zur Hardware-Kompatibilität kontaktieren. Außerdem werden technische Nutzungs- und Leistungsmetriken verarbeitet, zum Beispiel Geräte- und App-Informationen, Installationskennungen, API-Konfiguration, Ereignistypen, Ein- und Ausgabegrößen sowie Fehlercodes. Google verwendet diese Daten nach eigenen Angaben zur Leistungsmessung, Fehlerbehebung, Wartung, Verbesserung sowie Missbrauchserkennung.</p>
        <p>Mit Ein- und Ausgabegrößen sind technische Größenangaben gemeint, nicht der Inhalt deines Bildes oder des erkannten Textes. Bei Netzwerkverbindungen wird außerdem die für die Verbindung erforderliche IP-Adresse an den angesprochenen Server übermittelt. Die Texterkennung und ihre technischen SDK-Metriken sind von der Werbeeinwilligung getrennt: Eine Ablehnung oder ein Widerruf im Werbedialog schaltet diese Metriken bei Nutzung der Texterkennung nicht ab.</p>
        <p>Die Bereitstellung der von dir gestarteten Texterkennung erfolgt, soweit sie unserer Verantwortung unterliegt, auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Die Einbindung des Dienstes und die damit verbundenen technisch erforderlichen Diagnose- und Kompatibilitätsvorgänge stützen wir auf Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in einer zuverlässigen, sicheren und mit unterschiedlichen Geräten kompatiblen Texterkennung. Google kann technische Daten für eigene Zwecke in eigener datenschutzrechtlicher Verantwortung verarbeiten.</p>
        <ul>
          <li><a href="https://developers.google.com/ml-kit/terms" rel="noreferrer">Google ML Kit – Terms &amp; Privacy</a></li>
          <li><a href="https://developers.google.com/ml-kit/ios-data-disclosure" rel="noreferrer">Google ML Kit – technische Datenerhebung auf iOS</a></li>
        </ul>
      </section>

      <section>
        <h2>7. Lokale Benachrichtigungen</h2>
        <p>Wenn du Erinnerungen aktivierst und die Betriebssystemberechtigung erteilst, plant Simple Prep Ablauf- und Bestandsbenachrichtigungen lokal auf deinem Gerät. Simple Prep betreibt keine eigene Push-Infrastruktur und überträgt die Inhalte dieser Erinnerungen nicht an einen eigenen Server. Du kannst Benachrichtigungen in den Einstellungen der App oder des Betriebssystems ändern und deaktivieren.</p>
      </section>

      <section>
        <h2>8. Werbung, Einwilligung und Datenschutzoptionen</h2>
        <p>Simple Prep finanziert die kostenlose App durch Banner- und Vollbildwerbung. Dafür verwenden wir Google Mobile Ads (AdMob) und Googles User Messaging Platform (UMP). Empfänger sind Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, verbundene Google-Unternehmen und – abhängig von deiner Auswahl – die im Einwilligungsdialog aufgeführten Werbepartner.</p>
        <p>Simple Prep ist für die Auswahl und Einbindung dieser Dienste sowie für Datenübermittlungen verantwortlich, die dadurch in unserem Einflussbereich ausgelöst werden. Google und einzelne Werbepartner können für ihre anschließende Verarbeitung, etwa für eigene Mess-, Sicherheits-, Betrugspräventions- oder Werbezwecke, eigenständig datenschutzrechtlich Verantwortliche sein. Welche Anbieter beteiligt sind und welche Zwecke und Rechtsgrundlagen sie angeben, kannst du im UMP-Dialog einsehen.</p>
        <p>Die aktuelle Partnerliste mit den einzelnen Anbietern, ihren Zwecken und Datenschutzlinks findest du im Google-Datenschutzdialog. Eine in Googles Partnerauswahl zusammengefasste Gruppe kann dort durch mehrere Anbieter oder Registrierungen vertreten sein; die Anzahl der Listeneinträge muss deshalb nicht mit der Anzahl der ausgewählten Gruppen übereinstimmen. Die Liste kann sich durch Aktualisierungen ändern. Ein Listeneintrag bedeutet nicht, dass dieser Anbieter bei jeder Nutzung Daten von dir erhält. Weitere Informationen bietet Google zur <a href="https://support.google.com/admob/answer/9012903?hl=de" rel="noreferrer">Verwaltung der Werbepartner</a>.</p>
        <p>UMP ruft bei jedem App-Start den anwendbaren Datenschutzstatus ab und zeigt, wenn erforderlich, einen Dialog mit Zwecken, Rechtsgrundlagen und beteiligten Werbepartnern. Die App fordert Anzeigen erst an, wenn UMP meldet, dass Anzeigen angefordert werden dürfen. Eine solche technische Freigabe ersetzt keine gesetzlich erforderliche Einwilligung.</p>
        <p>Die Verarbeitung des Einwilligungsstatus zur Erfüllung gesetzlicher Einwilligungs- und Nachweispflichten beruht, soweit dafür erforderlich, auf Art. 6 Abs. 1 lit. c DSGVO, insbesondere in Verbindung mit Art. 5 Abs. 2 und Art. 7 Abs. 1 DSGVO. Für die technische Bereitstellung und Aktualisierung der Datenschutzwahl stützen wir die erforderliche Verarbeitung im Übrigen auf Art. 6 Abs. 1 lit. f DSGVO; unser Interesse ist, deine Auswahl zuverlässig anzuwenden und unzulässige Anzeigenanfragen zu verhindern. Technisch notwendige Speicherungen und Zugriffe zur Anwendung deiner Datenschutzwahl stützen sich, soweit die Voraussetzungen vorliegen, auf § 25 Abs. 2 Nr. 2 TDDDG. Diese Grundlagen betreffen die Einwilligungsverwaltung und erlauben keine darüber hinausgehende einwilligungsbedürftige Werbung. Googles europäische Einwilligungsregeln beziehen den Europäischen Wirtschaftsraum, das Vereinigte Königreich und die Schweiz ein.</p>
        <p>Auf iOS fordert Simple Prep ausschließlich nicht personalisierte Anzeigen an. Das gilt auch dann, wenn du im Google-Dialog einer weitergehenden Werbeverarbeitung zustimmst. Auf Android hängt der mögliche Anzeigenmodus – personalisierte, nicht personalisierte oder eingeschränkte Werbung – weiterhin von Region, Verfügbarkeit, deiner Datenschutzwahl und den Einstellungen der beteiligten Anbieter ab. Auch auf iOS können je nach Auswahl und Verfügbarkeit eingeschränkte oder vorübergehend keine Anzeigen erscheinen.</p>
        <p>Die lokalen Kernfunktionen der App bleiben auch nutzbar, wenn du eine Einwilligung ablehnst, UMP keine Anzeigenanfragen erlaubt oder der Datenschutzstatus vorübergehend nicht abgerufen werden kann. Solange UMP keine Anzeigenanfragen erlaubt, fordert Simple Prep keine Werbung an. Eine Ablehnung bedeutet nicht automatisch, dass keine technischen Daten mehr an Google übermittelt werden.</p>
        <p>Google Mobile Ads, UMP und die im Dialog genannten Partner können je nach Auswahl insbesondere IP-Adresse und daraus abgeleiteten ungefähren Standort, Geräte- und App-Informationen, Werbe- oder andere Gerätekennungen, Einwilligungsdaten, App- und Werbeinteraktionen, angezeigte Werbung sowie Absturz-, Leistungs- und weitere Diagnosedaten verarbeiten. Dies dient insbesondere der Werbeauslieferung, Reichweiten- und Erfolgsmessung, Häufigkeitsbegrenzung, Analyse, Sicherheit und Betrugsprävention.</p>
        <p>Die aktuelle App fordert keinen Standortzugriff des Betriebssystems an. Die Ableitung einer ungefähren Region aus der IP-Adresse ist davon unabhängig und kann auch ohne Standortberechtigung stattfinden.</p>
        <p>Personalisierte Werbung auf Android und nicht unbedingt erforderliche Speicherungen oder Zugriffe auf deinem Endgerät erfolgen nur, soweit eine wirksame Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG vorliegt. Nicht personalisierte Anzeigen werden nicht anhand deines bisherigen Verhaltens für eine interessenbezogene Ansprache ausgewählt. Dabei können dennoch technische Daten und Kennungen etwa zur Häufigkeitsbegrenzung, Messung und Betrugsprävention verarbeitet werden. Nicht personalisierte Werbung bedeutet daher weder, dass keine Kennungen verarbeitet werden, noch, dass keine Einwilligung erforderlich ist.</p>
        <p>Für erforderliche Vorgänge der grundlegenden Anzeigenauslieferung, Sicherheit und Betrugsprävention in unserem Verantwortungsbereich stützen wir uns nur insoweit auf Art. 6 Abs. 1 lit. f DSGVO, als dafür keine Einwilligung erforderlich ist und unsere Interessen nicht durch deine schutzwürdigen Interessen überwogen werden. Unser Interesse ist die sichere, gegen Missbrauch geschützte Finanzierung der kostenlosen App. Einwilligungsbedürftige Verarbeitungen und Endgerätezugriffe werden dadurch nicht erlaubt; für Zugriffe gilt § 25 TDDDG.</p>
        <p>Google und einzelne Partner können für im Dialog bezeichnete Sicherheits-, Betrugspräventions-, Mess- oder technische Zwecke eigene berechtigte Interessen geltend machen. Die tatsächlich verwendeten Zwecke und Rechtsgrundlagen sowie Möglichkeiten zum Widerspruch werden im UMP-Dialog angezeigt. Deine Auswahl wird für die weitere Anzeigenauslieferung berücksichtigt.</p>
        <p>Auf iOS fordert Simple Prep keine App-Tracking-Transparency-Berechtigung an, greift nicht gezielt auf die IDFA zu und hat die Google-Publisher-First-Party-ID deaktiviert. Simple Prep beabsichtigt auf iOS kein appübergreifendes Tracking. Die übrigen beschriebenen technischen Werbe-, Nutzungs- und Diagnosedaten können dennoch verarbeitet werden. Auf Android kann das Google-Mobile-Ads-SDK abhängig von Betriebssystemeinstellungen, Datenschutzwahl und Werbemodus die Android-Werbe-ID oder andere Gerätekennungen verarbeiten.</p>
        <p>Der Bereich „Einstellungen → Datenschutz &amp; Werbung“ ist in der App jederzeit erreichbar. Über „Datenschutz &amp; Werbung verwalten“ öffnest du den Google-Dialog und kannst Einwilligungen mit Wirkung für die Zukunft ändern oder widerrufen; eine Kontaktaufnahme mit uns ist dafür nicht erforderlich. Meldet Google derzeit keine änderbaren Optionen, bietet derselbe Bereich „Datenschutzstatus aktualisieren“ an. Bei einem Ladefehler wird eine Fehlermeldung angezeigt; bitte versuche es mit einer funktionierenden Internetverbindung erneut. Bei Problemen erreichst du uns zusätzlich über die Kontaktadresse in Abschnitt 1. Die Rechtmäßigkeit der Verarbeitung bis zum Widerruf bleibt unberührt.</p>
        <ul>
          <li><a href="https://developers.google.com/admob/flutter/privacy" rel="noreferrer">Google AdMob – UMP für Flutter</a></li>
          <li><a href="https://developers.google.com/admob/flutter/privacy/ad-serving-modes" rel="noreferrer">Google AdMob – Anzeigenmodi</a></li>
          <li><a href="https://www.google.com/about/company/user-consent-policy/" rel="noreferrer">Google – europäische Einwilligungsregeln</a></li>
          <li><a href="https://policies.google.com/technologies/partner-sites?hl=de" rel="noreferrer">Wie Google Daten von Partnerdiensten verwendet</a></li>
          <li><a href="https://policies.google.com/privacy?hl=de" rel="noreferrer">Datenschutzerklärung von Google</a></li>
        </ul>
      </section>

      <section>
        <h2>9. Backup, PDF, Drucken und Teilen</h2>
        <p>Ein Backup wird nur erstellt, wenn du die Funktion aktiv auswählst. Die App erzeugt dabei eine nicht verschlüsselte, menschenlesbare JSON-Datei. Sie kann die zu diesem Zeitpunkt in Simple Prep gespeicherten Vorrats-, Verbrauchs-, Einkaufs-, Planungs- und Einstellungsdaten enthalten. Speichere und teile diese Datei daher nur an einem Ort, dem du vertraust.</p>
        <p>Bei Backup, PDF, CSV, Drucken oder Teilen werden die ausgewählten Inhalte an das Betriebssystem und anschließend an die von dir gewählte App, Druckfunktion oder Speicherstelle übergeben. Ab diesem Zeitpunkt gelten zusätzlich die Datenschutzbestimmungen des von dir ausgewählten Empfängers. Simple Prep lädt diese Exporte nicht automatisch in eine eigene Cloud hoch.</p>
      </section>

      <section>
        <h2>10. Löschen, Deinstallation und externe Daten</h2>
        <p>Über die Löschfunktion in den App-Einstellungen kannst du nach zweistufiger Bestätigung Vorräte, Verbrauchshistorie, Einkaufsliste, Aufbau- und Planerdaten sowie persönliche Einstellungen auf dem Gerät löschen. Danach startet die Ersteinrichtung erneut. Bereits exportierte Backups, PDF- oder CSV-Dateien und geteilte Inhalte musst du an ihrem jeweiligen Speicherort beziehungsweise beim Empfänger selbst löschen.</p>
        <p>Simple Prep ist so konfiguriert, dass lokale App-Daten nach den vorgesehenen Mechanismen des jeweiligen Betriebssystems von automatischen Backups und Geräteübertragungen ausgeschlossen werden sollen. Ob und in welchem Umfang das Betriebssystem oder der Gerätehersteller diese Einstellungen berücksichtigt, liegt jedoch nicht vollständig in unserem Einflussbereich. Ein vollständiger Ausschluss aller Sicherungs- und Übertragungswege kann nicht garantiert werden.</p>
        <p>Eine Deinstallation entfernt die lokalen App-Daten nach Maßgabe des Betriebssystems. Bereits bestehende externe Sicherungen werden durch die lokale Löschfunktion oder Deinstallation nicht automatisch entfernt; du musst sie gegebenenfalls separat verwalten und löschen.</p>
        <p>Die lokale Löschfunktion oder Deinstallation löscht keine Daten, die Google oder Werbepartner bereits in eigener Verantwortung verarbeitet haben. Soweit Simple Prep für eine Verarbeitung oder Übermittlung verantwortlich ist, kannst du deine Rechte uns gegenüber geltend machen. Für eigenständige Verarbeitungen durch Google oder andere Werbepartner kannst du dich zusätzlich unmittelbar an den jeweiligen Anbieter wenden. Wir weisen eine Anfrage nicht allein deshalb zurück, weil ein externer Anbieter beteiligt ist, sondern prüfen zunächst, welcher Verantwortungsbereich betroffen ist.</p>
      </section>

      <section>
        <h2>11. Empfänger und internationale Übermittlungen</h2>
        <p>Die von uns zur Bereitstellung der hier beschriebenen App-Funktionen eingebundenen Drittanbieter gewährleisten denselben oder einen gleichwertigen Schutz der App-Nutzerdaten, wie er in dieser Datenschutzerklärung beschrieben und durch die Datenschutzvorgaben des App Stores verlangt wird. Dies gilt auch für ihre verbundenen Unternehmen und Unterauftragnehmer, soweit diese Zugriff auf App-Nutzerdaten erhalten.</p>
        <p>Empfänger können – abhängig von der verwendeten Funktion – GitHub als Hostinganbieter, STRATO als Anbieter unseres Supportpostfachs, Google als Anbieter der Gmail-App, für bestehende Gmail-Korrespondenz sowie als ML-Kit-, UMP- und Mobile-Ads-Anbieter sowie von dir ausgewählte Share-, Druck- oder Speicheranbieter sein. Die für Werbung beteiligten Anbieter und ihre Zwecke werden zusätzlich im UMP-Einwilligungsdialog angezeigt.</p>
        <p>Die datenschutzrechtliche Rolle eines Anbieters richtet sich nach dem jeweiligen Dienst und der tatsächlichen Verarbeitung. Informationen zu Googles Werbediensten enthalten die unten verlinkten Datenschutzbedingungen und die zugehörige Diensteliste. Die Verantwortung von Simple Prep für die durch unsere Einbindung ausgelöste Verarbeitung wird durch diese Verweise nicht ausgeschlossen.</p>
        <p>Apple und Google verarbeiten beim Aufruf des jeweiligen App-Stores, beim Download und bei der Verwaltung der App eigene Konto-, Zahlungs-, Geräte- und Nutzungsdaten in eigener Verantwortung. Auf Umfang und Dauer dieser Verarbeitung haben wir keinen unmittelbaren Einfluss.</p>
        <p>Einige Anbieter verarbeiten Daten auch außerhalb des Europäischen Wirtschaftsraums. Nach den Angaben von GitHub und Google werden hierfür je nach Empfänger insbesondere Angemessenheitsbeschlüsse nach Art. 45 DSGVO, einschließlich des EU-US Data Privacy Framework für zertifizierte Unternehmen, oder Standardvertragsklauseln der Europäischen Kommission nach Art. 46 DSGVO eingesetzt. Weitere Informationen zu den für eine konkrete Übermittlung eingesetzten Garantien und eine verfügbare Kopie beziehungsweise Fundstelle kannst du über die in Abschnitt 1 genannte E-Mail-Adresse anfordern.</p>
        <ul>
          <li><a href="https://business.safety.google/adscontrollerterms/" rel="noreferrer">Google – Datenschutzbedingungen für eigenständig Verantwortliche</a></li>
          <li><a href="https://business.safety.google/adsservices/" rel="noreferrer">Google – Einordnung der Werbedienste</a></li>
          <li><a href="https://policies.google.com/privacy/frameworks?hl=de" rel="noreferrer">Google – Rahmenbedingungen für Datenübermittlungen</a></li>
          <li><a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement" rel="noreferrer">GitHub – internationale Datenübermittlungen</a></li>
          <li><a href="https://www.apple.com/de/legal/privacy/" rel="noreferrer">Apple – Datenschutz</a></li>
          <li><a href="https://policies.google.com/privacy?hl=de" rel="noreferrer">Google – Datenschutzerklärung</a></li>
        </ul>
      </section>

      <section>
        <h2>12. Speicherdauer</h2>
        <ul>
          <li>Lokale App-Daten: bis du sie in der App löschst oder die App nach Maßgabe des Betriebssystems deinstallierst. Etwaige Kopien in externen Sicherungen können darüber hinaus bestehen bleiben; beachte die Grenzen und Löschhinweise in Abschnitt 10.</li>
          <li>Temporäre Kameraaufnahme für OCR: Löschversuch unmittelbar nach Abschluss der Texterkennung; bei einem Abbruch oder einer blockierten Löschung können temporäre Dateien verbleiben. Einzelheiten und Grenzen stehen in Abschnitt 6.</li>
          <li>Exportierte Dateien: bis du sie am gewählten Speicherort oder beim gewählten Empfänger löschst.</li>
          <li>Support-E-Mails, Anruflisten und Mailboxnachrichten: bis dein Anliegen abgeschlossen ist; länger nur bei gesetzlichen Aufbewahrungspflichten oder soweit dies zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.</li>
          <li>Website-Serverprotokolle: GitHub veröffentlicht für GitHub-Pages-IP-Protokolle keine einheitliche feste Frist. Laut GitHub richtet sich die Dauer nach Verarbeitungszweck sowie vertraglichen und gesetzlichen Pflichten.</li>
          <li>Werbe-, Einwilligungs- und ML-Kit-Metrikdaten: nach der jeweiligen Datenschutzwahl sowie den Speicher- und Löschregeln von Google und den im UMP-Dialog genannten Anbietern. Diese Anbieter legen die Dauer ihrer eigenständigen Verarbeitung fest; wir haben auf ihre Speicherdauer keinen unmittelbaren Zugriff. Informationen und Löschmöglichkeiten findest du im UMP-Dialog und in den in dieser Erklärung verlinkten Anbieterinformationen.</li>
        </ul>
        <p>Google erläutert die Kriterien seiner Speicherung und Löschung in den <a href="https://policies.google.com/technologies/retention?hl=de" rel="noreferrer">Informationen zur Datenspeicherung</a>. Dort genannte Beispiele sind keine einheitlichen Löschfristen für sämtliche in Simple Prep eingesetzten SDKs oder Werbepartner.</p>
      </section>

      <section>
        <h2>13. Deine Rechte</h2>
        <p>Unter den gesetzlichen Voraussetzungen hast du Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit. Eine Einwilligung kannst du jederzeit mit Wirkung für die Zukunft widerrufen. Wenn Daten ausschließlich lokal auf deinem Gerät liegen, haben wir keinen technischen Zugriff darauf; du kannst sie unmittelbar in der App verwalten, exportieren oder löschen.</p>
        <p>Zur Ausübung deiner Rechte genügt eine formlose Nachricht an <a href="mailto:support@simpleprep.de">support@simpleprep.de</a>. Wir beantworten Anfragen unverzüglich und grundsätzlich spätestens innerhalb eines Monats nach Eingang. Wenn dies wegen der Komplexität oder Anzahl von Anträgen erforderlich ist, kann die Frist unter den gesetzlichen Voraussetzungen um weitere zwei Monate verlängert werden; darüber informieren wir innerhalb des ersten Monats. Die Bearbeitung ist grundsätzlich kostenlos. Nur wenn begründete Zweifel an deiner Identität bestehen, dürfen wir zusätzliche Informationen anfordern, die zur Bestätigung deiner Identität erforderlich sind.</p>
        <p><strong>Widerspruchsrecht:</strong> Soweit eine Verarbeitung auf Art. 6 Abs. 1 lit. f DSGVO beruht, kannst du aus Gründen, die sich aus deiner besonderen Situation ergeben, jederzeit Widerspruch gegen die Verarbeitung einlegen. Wir verarbeiten die betroffenen Daten dann nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe nachweisen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</p>
        <p><strong>Widerspruch gegen Direktwerbung:</strong> Soweit personenbezogene Daten zum Zweck der Direktwerbung verarbeitet werden, kannst du dieser Verarbeitung einschließlich eines damit verbundenen Profilings jederzeit und ohne Angabe besonderer Gründe widersprechen. Die Daten werden anschließend nicht mehr für diese Zwecke verarbeitet. Für den Widerruf deiner Werbeeinwilligungen nutze den in Abschnitt 8 beschriebenen Weg über „Einstellungen → Datenschutz &amp; Werbung“. Auf iOS fordert Simple Prep unabhängig von einer weitergehenden Zustimmung ausschließlich nicht personalisierte Anzeigen an.</p>
        <p>Wenn du der Ansicht bist, dass die Verarbeitung deiner personenbezogenen Daten gegen die DSGVO verstößt, kannst du dich bei einer Datenschutzaufsichtsbehörde beschweren, insbesondere in dem Mitgliedstaat deines gewöhnlichen Aufenthalts, deines Arbeitsplatzes oder des Orts des vermuteten Verstoßes. Du bist nicht auf die Behörde an unserem Sitz beschränkt. Für unseren Sitz ist insbesondere zuständig:</p>
        <address>
          Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen<br />
          Kavalleriestraße 2–4<br />
          40213 Düsseldorf<br />
          <a href="https://www.ldi.nrw.de/" rel="noreferrer">www.ldi.nrw.de</a>
        </address>
      </section>

      <section>
        <h2>14. Pflicht zur Bereitstellung und automatisierte Entscheidungen</h2>
        <p>Du musst kein Benutzerkonto anlegen. Ohne die für eine gewünschte Funktion erforderlichen lokalen Angaben kann die betreffende Berechnung, Planung oder Erinnerung nicht ausgeführt werden. Kontaktangaben bei einer Supportanfrage sind freiwillig, ohne einen erreichbaren Rückkanal können wir jedoch nicht antworten.</p>
        <p>Simple Prep trifft selbst keine ausschließlich automatisierten Entscheidungen mit rechtlicher oder ähnlich erheblicher Wirkung. Wenn du auf Android personalisierter Werbung zustimmst, können Werbeanbieter Profile und Interessen ableiten, um Werbung auszuwählen. Auf iOS fordert Simple Prep ausschließlich nicht personalisierte Anzeigen an; die in Abschnitt 8 beschriebenen technischen Verarbeitungen können dennoch stattfinden. Einzelheiten ergeben sich aus dem UMP-Dialog und den Informationen der jeweiligen Anbieter.</p>
      </section>

      <section>
        <h2>15. Stand und Änderungen</h2>
        <p>Stand dieser Datenschutzerklärung: 20. November 2026.</p>
        <p>Wir passen diese Datenschutzerklärung an, wenn sich Funktionen, Anbieter, Rechtslage oder der technische Aufbau von Simple Prep ändern. Die jeweils aktuelle Fassung ist unter dieser Adresse abrufbar.</p>
      </section>
      <p className="document-back"><Link href="/">← Zur Startseite</Link></p>
    </DocumentPage>
  );
}
