# Kişisel Web Sitesi (React + Vite)

Workintech Sprint Challenge için geliştirilen, çok bölümlü ve veri odaklı kişisel portfolio uygulaması.

## Özellikler

- Section bazlı component mimarisi
- `Context API` ile global state yönetimi
- `localStorage` ile tema/dil kalıcılığı
- TR/EN içerik geçişi (paketsiz JSON tabanlı)
- Light/Dark tema değişimi
- Responsive tasarım (mobil/tablet/desktop)
- Axios ile Reqres API demo (`GET` + `POST`)

## Kullanılan Teknolojiler

- React 19
- Vite 8
- Axios
- React Toastify
- ESLint

## Kurulum

1. Bağımlılıkları yükle:

	`npm install`

2. Geliştirme ortamını başlat:

	`npm run dev`

3. Tarayıcıdan aç:

	`http://localhost:5173`

## Scriptler

- `npm run dev` → geliştirme sunucusu
- `npm run build` → production build
- `npm run preview` → build çıktısını lokal önizleme
- `npm run lint` → ESLint kontrolü

## Proje Yapısı

- [src/components](src/components): Section componentleri
- [src/context](src/context): `AppContext` + `AppProvider`
- [src/data/content.json](src/data/content.json): TR/EN içerikler
- [src/hooks/useLocalStorage.js](src/hooks/useLocalStorage.js): Kalıcılık hook’u
- [src/services/api.js](src/services/api.js): Axios servis katmanı

## Kalite Kontrolleri

Projede aşağıdaki kontroller temiz geçer:

- `npm run lint`
- `npm run build`

## Deploy

### Vercel

1. Projeyi GitHub’a push et.
2. Vercel’de **New Project** ile repo bağla.
3. Framework: `Vite` (otomatik algılanır).
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Deploy.

### Render (Static Site)

1. Projeyi GitHub’a push et.
2. Render’da **New + > Static Site** seç.
3. Repo bağla.
4. Build Command: `npm run build`
5. Publish Directory: `dist`
6. Deploy.
