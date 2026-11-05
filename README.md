# Simple Prep Website

Öffentlich bereitgestellte zweisprachige Vorabwebsite für `simpleprep.de`.

## Enthalten

- deutsche und englische Startseite,
- Supportseiten mit `simpleprep.info@gmail.com`,
- deutsche und englische Datenschutzerklärung vom 5. November 2026 mit iOS-NPA, Backup-Grenzen, Betroffenenrechten, Anbieterrollen und Erläuterung der Partnergruppen; Veröffentlichung dieser belegten Korrekturen am selben Tag vom Betreiber freigegeben, abschließende fachliche Prüfung weiterhin offen,
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
3. Finalen App-Build und alle SDK-Datenflüsse erneut prüfen und mit der Datenschutzerklärung abgleichen.
4. Für iOS ist zuletzt Apples Standard-EULA hinterlegt. Bewusst festlegen, ob dieser zusammen mit erforderlichen ergänzenden Informationen beibehalten oder durch fachlich geprüfte eigene Bedingungen ersetzt werden soll. Eigene Arbeitsentwürfe nicht ungeprüft verlinken. Die Datenschutzerklärung ersetzt keine fachliche Prüfung von Rechtsgrundlagen, Verbraucherpflichten und Zielländern.
5. Google-UMP-Nachricht und Anbieter-/Partnerliste bei Änderungen erneut gegen die öffentlich erreichbare Datenschutz-URL abgleichen. Der vollständige technische Partnerabgleich am 5. November erklärt 198 ausgewählte Gruppen und 210 Vorschau-Einträge; daraus folgt keine pauschale rechtliche Freigabe.
6. HTTPS ist laut lesender GitHub-Pages-Prüfung vom 5. November erzwungen. Die öffentliche Domain nach jedem Deployment auf den tatsächlich ausgelieferten Stand prüfen.

Hosting: GitHub Pages mit öffentlichem Repository und eigener STRATO-Domain.

Datenschutzfassung dieses Veröffentlichungsstands: 5. November 2026; zuvor öffentlich: 19. Oktober 2026. Pages-Produktionsbuild einschließlich TypeScript und Exportprüfung erfolgreich; beide Sprachfassungen bei 319 Pixeln ohne horizontale Überbreite geprüft. Lange Wörter und Links in Dokumentseiten können umbrechen. Keine neuen externen Ressourcen oder Speicherzugriffe ergänzt; eigene AGB-Entwürfe bleiben aus dem Export entfernt.

Die tatsächlich anwendbaren Anbietervereinbarungen und Apples ausdrückliche Anforderung an gleichwertigen Drittanbieter-Schutz bleiben vor der abschließenden App-Freigabe zu belegen; die quellengestützte Erläuterung öffentlicher Google-Bedingungen schließt diesen Punkt nicht ab. App-Backuphinweis und Lizenzzugang wurden im App-Projekt bereits in Build 2 umgesetzt und auf dem iPhone bestätigt. Store-Compliance und Android-Restprüfungen bleiben getrennte Arbeiten. Die Website-Veröffentlichung ist keine App-Store-Einreichung oder umfassende Rechtsfreigabe.
