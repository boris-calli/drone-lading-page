# 🚁 Drone Landing Page

Landing Page moderna y optimizada para promocionar productos tecnológicos como drones. El proyecto está diseñado para tener una estructura clara, rápida y fácilmente personalizable, utilizando tecnologías modernas como Rollup, PostCSS y Bootstrap 5 compilado desde Sass.

---

## 📸 Vista previa

![Vista previa del diseño](./design/preview.png) <!-- Reemplaza con una imagen real si tienes una -->

---

## 📂 Estructura del proyecto
```bash
drone-landing-page/
├── design/ # Recursos de diseño (mockups del disenio)
├── dist/ # Archivos finales listos para producción
│ ├── css/
│ ├── images/
│ ├── js/
│ └── index.html
├── src/ # Archivos fuente
│ ├── css/
│ ├── js/
│ ├── scss/
│ └── index.html
├── htmlminifier.config.js # Configuración para minificar HTML
├── rollup.config.js # Configuración de Rollup para JS
├── postcss.config.js # Configuración de PostCSS
├── package.json
└── README.md
```
---

## 🛠️ Tecnologías utilizadas

- **HTML5**
- **Sass** (compilado manualmente con `sass`)
- **PostCSS** con:
  - Autoprefixer
  - CSSNano
  - Nesting
  - PurgeCSS (optimización)
- **Bootstrap 5.3.5** (personalizado desde Sass)
- **RollupJS** (bundle + minify JS)
- **HTML Minifier** (`html-minifier`)
- **Concurrently + Chokidar** para entorno de desarrollo automatizado

---

## 🚀 Scripts disponibles

En `package.json`:

| Script               | Descripción |
|----------------------|-------------|
| `npm run build`      | Compila HTML, Sass de Bootstrap, CSS y JS para producción. |
| `npm run dev`        | Ejecuta un entorno de desarrollo con watchers para HTML, CSS y JS. |
| `npm run build:html` | Minifica `src/index.html` y lo copia a `dist/`. |
| `npm run build:bootstrap` | Compila Bootstrap desde SCSS. |
| `npm run build:css`  | Procesa `main.css` con PostCSS y exporta a `dist/`. |
| `npm run build:js`   | Bundle y minificación de JS con Rollup. |
| `npm run dev:html`   | Observa cambios en HTML y minifica automáticamente. |
| `npm run dev:css`    | Observa cambios en CSS fuente y los recompila. |
| `npm run dev:js`     | Observa cambios en JS y ejecuta Rollup en modo watch. |

---

## 🔧 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/boris-calli/drone-lading-page.git
cd drone-lading-page
```
2. Instala dependencias:

```bash
npm install
```
3. Ejecuta entorno de desarrollo:

```bash
npm install
npm run dev
```
4. Compila todo para producción:

```bash
npm run build
```
## 📦 Dependencias clave
- `rollup` y plugins (`@rollup/plugin-node-resolve`, `commonjs`, `esbuild-minify`)
- `postcss-cli`, `autoprefixer`, `cssnano`, `postcss-nesting`, `purgecss`
- `html-minifier` para compresión avanzada del HTML
- `sass` para compilar Bootstrap desde SCSS
- `chokidar-cli` y `concurrently` para automatizar el desarrollo

## 🧪 Producción final
El código compilado y minificado se encuentra en la carpeta dist/. Contiene:

- `dist/index.html` (minificado)
- `dist/css/styles.min.css`
- `dist/js/scripts.min.js`

## 📩 Contacto
Si tienes dudas o deseas contactarme para trabajo freelance, puedes escribirme a:

GitHub: @boris-calli

Email: boris.v.calli.r@gmail.com

## 📄 Licencia
Este proyecto está licenciado bajo MIT License.
