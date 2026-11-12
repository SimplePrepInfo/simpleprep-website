# Simple Prep Website

Öffentlich bereitgestellte zweisprachige Vorabwebsite für `simpleprep.de`.

## Enthalten

- deutsche und englische Startseite,
- Supportseiten mit `simpleprep.info@gmail.com`,
- deutsche und englische Datenschutzerklärung vom 12. November 2026 mit iOS-NPA, Backup-Grenzen, Betroffenenrechten, Anbieterrollen und Erläuterung der Partnergruppen; aktueller Inhalt mit App-Code und Herstellerquellen abgeglichen,
- Impressum/Legal Notice als Bestandteil der Vorabwebsite,
- Nutzungsbedingungen weiterhin als Arbeitsentwurf; die zugehörigen Routen werden aus dem statischen Export entfernt und sind nicht in der öffentlichen Navigation verlinkt,
- responsive Darstellung für Smartphone und Desktop,
- keine Analyse, keine Marketing-Cookies und kein Kontaktformular.

## Lokal starten

```bash
pnpm install
pnpm run dev
```

Die lokale Vorschau läuft anschließend üblicherweise unter `http://localhost:3000/`.

## Statische Vorabversion prüfen

```bash
pnpm run lint
pnpm run build:pages
```

Der für GitHub Pages geeignete statische Export liegt anschließend im Ordner `out/`. Bei einer Änderung auf dem Branch `main` baut und veröffentlicht GitHub Actions diesen Export automatisch.

## Vor der App-Veröffentlichung zwingend

1. Die inzwischen laut Betreiber zugeteilte Umsatzsteuer-ID in beide Impressumsfassungen aufnehmen, sobald der konkrete Wert vorliegt. Keine Nummer erfinden; etwaige weitere Register-/ID-Pflichten separat prüfen.
2. Nach inhaltlichen oder technischen Änderungen den statischen Export und die ausgelieferte Seite erneut auf Cookies, Speicherzugriffe und externe Verbindungen prüfen.
3. Bei Änderungen an App oder SDKs den finalen Build und die dadurch betroffenen Datenflüsse erneut mit der Datenschutzerklärung abgleichen. Der Textabgleich für den derzeitigen iOS-Build 3 ist am 12. November dokumentiert; aus einem Textabgleich folgt kein neuer Netzwerkmessnachweis.
4. Für iOS ist zuletzt Apples Standard-EULA hinterlegt. Bewusst festlegen, ob dieser zusammen mit erforderlichen ergänzenden Informationen beibehalten oder durch fachlich geprüfte eigene Bedingungen ersetzt werden soll. Eigene Arbeitsentwürfe nicht ungeprüft verlinken. Die Datenschutzerklärung ersetzt keine fachliche Prüfung von Rechtsgrundlagen, Verbraucherpflichten und Zielländern.
5. Google-UMP-Nachricht und Anbieter-/Partnerliste bei Änderungen erneut gegen die öffentlich erreichbare Datenschutz-URL abgleichen. Der vollständige technische Partnerabgleich am 5. November erklärt 198 ausgewählte Gruppen und 210 Vorschau-Einträge; daraus folgt keine pauschale rechtliche Freigabe.
6. HTTPS ist laut lesender GitHub-Pages-Prüfung vom 5. November erzwungen. Die öffentliche Domain nach jedem Deployment auf den tatsächlich ausgelieferten Stand prüfen.

Hosting: GitHub Pages mit öffentlichem Repository und eigener STRATO-Domain.

Historischer Veröffentlichungsnachweis vom 5. November 2026; zuvor öffentlich: 19. Oktober 2026. Pages-Produktionsbuild einschließlich TypeScript und Exportprüfung erfolgreich; beide Sprachfassungen damals bei 319 Pixeln ohne horizontale Überbreite geprüft. Lange Wörter und Links in Dokumentseiten können umbrechen. Keine neuen externen Ressourcen oder Speicherzugriffe ergänzt; eigene AGB-Entwürfe bleiben aus dem Export entfernt.

Die anschließende Prüfung einer vom Betreiber eingebrachten KI-Rückmeldung ergänzt am selben Tag die Zwecke und Grundlagen der Einwilligungsverwaltung, den konkreten Einstellungs-/Widerrufsweg, Googles EWR-/UK-/Schweiz-Regeln, die Bearbeitung von Datenschutzanfragen und die freie Wahl der zuständigen Beschwerdebehörde. Lokale sensible Freitextinhalte und tatsächliche Grenzen der Kamerabild-Löschung werden präzisiert. Keine Kauf-/Abo-Funktion vorhanden; überholte Ernährungsoptionen aus der Funktionsaufzählung entfernt. Die Anbieterrollenpassage verweist vereinfacht auf die Quellen und schließt eigene Verantwortung ausdrücklich nicht aus.

Der Betreiber bestätigt für den Support bislang ausschließlich Gmail. Für private Gmail-Dienste stellt Google nach eigener Auskunft keinen AV-Vertrag bereit. Ein für den tatsächlichen geschäftlichen Betrieb passendes Postfach samt geklärtem Vertrags-/Schutzumfang bleibt daher offen; eine Domain-Adresse oder ein EU-Standort allein sind kein ausreichender Nachweis. Kein Postfach oder Vertrag durch diese Textänderung angelegt.

Die tatsächlich anwendbaren Anbietervereinbarungen und Apples ausdrückliche Anforderung an gleichwertigen Drittanbieter-Schutz bleiben vor der abschließenden App-Freigabe zu belegen; die quellengestützte Erläuterung öffentlicher Google-Bedingungen schließt diesen Punkt nicht ab. App-Backuphinweis und Lizenzzugang wurden im App-Projekt bereits in Build 2 umgesetzt und auf dem iPhone bestätigt. Store-Compliance und Android-Restprüfungen bleiben getrennte Arbeiten. Die Website-Veröffentlichung ist keine App-Store-Einreichung oder umfassende Rechtsfreigabe.

## Textabschluss der Datenschutzerklärung, 12. November 2026

Beide Sprachfassungen sind für die derzeitige Konfiguration nochmals abgeglichen und auf den 12. November datiert. Gmail ist als tatsächlich genutzter Dienst konkret benannt, ohne einen Workspace-Vertrag zu behaupten. Geschützte Fotoauswahl und erforderliche Betriebssystemberechtigungen werden unterschieden. ML-Kit-Metriken sind von lokal verarbeiteten Bild-/Textinhalten und der separaten Werbeeinwilligung abgegrenzt. Kein angeforderter Standortzugriff bedeutet weiterhin nicht, dass Werbedienste keinen ungefähren Standort aus der IP-Adresse ableiten können. Google-Speicherregeln sind direkt verlinkt, ohne feste SDK-Fristen zu erfinden. Die deutsche Überschrift besitzt passende optionale Worttrennungen.

Produktionsbuild einschließlich TypeScript und statischem Export, ESLint sowie die vollständige Folge der 15 Abschnitte und alle internen Links geprüft. DE-/EN-Vorschau im Browser gelesen und visuell geprüft. Keine neue mobile Bildschirmbreite oder Netzwerkaufzeichnung als aktueller Nachweis behauptet. Website-Code erhält keine neuen externen Ressourcen oder Speicherzugriffe; keine App-Funktionen geändert. App und Store verwenden weiter die bestehenden Datenschutzadressen. Umstellung des Postfachs und anwendbarer Anbieter-Vertragsumfang bleiben getrennte, tatsächlich noch nicht abgeschlossene Betriebsaufgaben. Dafür werden weder neue Verträge noch technische Eigenschaften durch den Text unterstellt. Eine spätere Anbieteränderung erfordert die passende Textanpassung.
