# Zufällige Zitate-Webseite 🌟

Hallo und willkommen zu meinem Projekt! Diese kleine Webseite zeigt ein zufälliges Zitat an und zählt die Besucher. Ich habe sie im Rahmen einer Probearbeit erstellt und dabei meine Kenntnisse in Next.js, Tailwind und Prisma angewendet.

## Funktionen 🛠️

- **Zufällige Zitate**: Die Webseite nutzt die [Chuck Norris API](https://api.chucknorris.io/), um bei jedem Laden ein neues Zitat aus der Kategorie „dev“ anzuzeigen.
- **Button für neue Zitate**: Ein Klick auf den Button lädt ein neues zufälliges Zitat.
- **Besucherzähler**: Im Footer wird die Gesamtanzahl der Besucher angezeigt, die die Seite aufgerufen haben.

## Verwendete Technologien 📋

- **Next.js**: Als Framework für die React-basierte Webentwicklung.
- **Tailwind CSS**: Für modernes und schnelles Styling.
- **Prisma**: Für die Verwaltung und Speicherung der Besucheranzahl in einer SQLite-Datenbank.

## Installation und Ausführung 🚀

### Voraussetzungen

- Node.js sollte installiert sein.

### Schritte

1. **Repository klonen**

   ```bash
   git clone https://github.com/dein-benutzername/probearbeit-webseite.git
   cd probearbeit-webseite
   ```

2. **Abhängigkeiten installieren**

   ```bash
   npm install
   ```

3. **Datenbank einrichten**

   ```bash
   npx prisma migrate dev
   ```

4. **Entwicklungsserver starten**

   ```bash
   npm run dev
   ```

5. **Webseite aufrufen**
   Öffne [http://localhost:3000](http://localhost:3000) in deinem Browser.

Falls du die Webseite für den Live-Betrieb exportieren möchtest:

```bash
npm run build
npm run export
```

## Aufbau der Webseite 📂

```
/pages
  |_ index.js         # Hauptseite
/prisma
  |_ schema.prisma    # Prisma-Schema für die Datenbank
/styles
  |_ globals.css      # Globale CSS-Datei
/components
  |_ Header.js        # Header-Bereich
  |_ Footer.js        # Footer mit Besucherzähler
  |_ Quote.js         # Zitate-Komponente
```

## Persönliche Gedanken 💬

Ich habe bei diesem Projekt viel gelernt, vor allem in Bezug auf die API-Integration und die Datenbankverwaltung mit Prisma. Es hat Spaß gemacht, die Besucherzählung und die Zitatlogik zu implementieren. Wenn du Feedback oder Anregungen hast, freue ich mich darauf!

## Deployment 🌐

Das Projekt wurde als statische Webseite exportiert und ist auf GitHub Pages verfügbar. Du kannst es dir [hier](https://github.com/dein-benutzername/probearbeit-webseite) anschauen. 😊
