# 🧠 Robert Schulz – Portfolio

Willkommen im Repository meines persönlichen Portfolios: [robert-schulz.info](https://robert-schulz.info)  
Ein moderner, mehrsprachiger Webauftritt, der meine Arbeit als Entwickler, kreativer Denker und Musiker präsentiert.

## ✨ Features

- **Frameworks & Technologien**:  
  - [Next.js](https://nextjs.org/) 15+ mit App Router  
  - [Tailwind CSS](https://tailwindcss.com/)  
  - [TypeScript](https://www.typescriptlang.org/)  
  - [Lucide Icons](https://lucide.dev/)  
  - [i18n](https://nextjs.org/docs/app/building-your-application/routing/internationalization) mit dynamischem Middleware-Routing

- **Internationalisierung**:  
  - Unterstützung für Deutsch und Englisch  
  - Automatische Spracherkennung via Middleware  
  - Sprachumschalter in der Navigation

- **Responsive Design**:  
  - Optimiert für Mobilgeräte, Tablets und Desktops  
  - Mobile Navigation mit halbtransparentem Overlay (`bg-white/90`)

- **Strukturierte Inhalte**:  
  - Startseite mit persönlicher Vorstellung  
  - Über mich, Erfahrung, Bildung, Projekte und Kontaktseiten  
  - Downloadbare Lebensläufe im PDF-Format für jede Sprache

- **Barrierefreiheit & Performance**:  
  - Semantisches HTML  
  - Fokus auf Zugänglichkeit und schnelle Ladezeiten

## 🚀 Lokale Entwicklung

1. Repository klonen:

   ```bash
   git clone https://github.com/WhatsMusic/portfolio.git
   ```

2. Abhängigkeiten installieren:

   ```bash
   npm install
   ```

3. Entwicklungsserver starten:

   ```bash
   npm run dev
   ```

4. Im Browser öffnen: [http://localhost:3000](http://localhost:3000)

## 📁 Projektstruktur

```bash
├── app/
│   ├── [lang]/
│   │   ├── page.tsx
│   │   ├── about/
│   │   ├── experience/
│   │   ├── education/
│   │   ├── projects/
│   │   └── contact/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── LanguageSwitcher.tsx
├── public/
│   ├── cv-robert-2025-de.pdf
│   └── cv-robert-2025-en.pdf
├── middleware.ts
├── tailwind.config.ts
└── i18n-config.ts
```

## 📄 Lizenz

Dieses Projekt steht unter der [MIT-Lizenz](LICENSE).

## 🙌 Dank & Inspiration

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
