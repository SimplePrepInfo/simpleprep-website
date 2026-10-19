# Simple Prep Website

Öffentlich bereitgestellte zweisprachige Vorabwebsite für `simpleprep.de`.

## Enthalten

- deutsche und englische Startseite,
- Supportseiten mit `simpleprep.info@gmail.com`,
- deutsche und englische Datenschutzerklärung als technisch und inhaltlich geprüfter Veröffentlichungskandidat vom 19. Oktober 2026 einschließlich der festgelegten V1-Zielgruppe ab 18 Jahren,
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

1. Erneut prüfen, ob inzwischen eine Registereintragung, Umsatzsteuer-ID oder Wirtschafts-ID vorliegt; nur dann die entsprechende Angabe ins Impressum aufnehmen.
2. Nach inhaltlichen oder technischen Änderungen den statischen Export und die ausgelieferte Seite erneut auf Cookies, Speicherzugriffe und externe Verbindungen prüfen.
3. Finalen App-Build und alle SDK-Datenflüsse erneut prüfen und mit der Datenschutzerklärung abgleichen.
4. Nutzungsbedingungen vor dem App-Release fertigstellen und erst anschließend in der öffentlichen Navigation verlinken. Die Datenschutzerklärung wurde ohne externe juristische Prüfung erstellt; die Entscheidung über eine zusätzliche fachliche Prüfung liegt beim Betreiber.
5. Google-UMP-Nachricht und Anbieter-/Partnerliste mit der öffentlich erreichbaren Datenschutz-URL konfigurieren.
6. Nach Bereitstellung des GitHub-Zertifikats HTTPS erzwingen und die öffentliche Domain abschließend technisch prüfen.

Hosting: GitHub Pages mit öffentlichem Repository und eigener STRATO-Domain.

Prüfstand Datenschutz und Veröffentlichung der Vorabwebsite: 19. Oktober 2026.
