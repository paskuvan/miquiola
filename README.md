<div align="center">

# 🏺 Miquiola

**Cerámica pintada a mano · Santiago, Chile**

Tienda editorial para exhibir y vender piezas de cerámica únicas, pintadas a mano con esmalte cerámico. Catálogo estático + venta por WhatsApp, sin carrito.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2023-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

</div>

---

## ✨ Características

- **Catálogo de piezas** — 31 piezas gestionadas desde un único archivo de datos, sin CMS ni base de datos.
- **Buscador** — en la página principal y en la colección, con normalización de acentos y filtrado por nombre, subtítulo y descripción.
- **Filtros por mood** — Mesa, Cocina, Decoración, Figuras y Ediciones.
- **Ficha de producto** — imagen, descripción, medidas, piezas relacionadas y consulta directa por WhatsApp.
- **Carrusel** con arrastre (drag-to-scroll) en desktop y deslizamiento táctil en móvil.
- **SEO completo** — metadatos Open Graph y Twitter, datos estructurados schema.org (`Product`), `sitemap.xml` y `robots.txt` generados automáticamente.
- **Diseño responsivo** — 3 columnas en desktop, 2 en móvil; navegación con menú hamburguesa.
- **Botón "volver arriba"** y página 404 personalizada.

---

## 🛠️ Stack

| Tecnología | Uso |
|---|---|
| **Next.js 16** (App Router) | Framework, renderizado estático, rutas dinámicas |
| **React 19** | Componentes de servidor y cliente |
| **Tailwind CSS 4** | Estilos base y tokens de diseño |
| **JavaScript (ES2023)** | Lógica de la aplicación |
| **ESLint 9** | Calidad de código |

### Tipografía
Cormorant Garamond (serif) · DM Sans (sans) · IBM Plex Mono (mono)

---

## 🚀 Puesta en marcha

```bash
# Instalar dependencias
npm install

# Entorno de desarrollo (http://localhost:3000)
npm run dev

# Build de producción
npm run build && npm start

# Linter
npm run lint
```

---

## 📁 Estructura

```
app/
├── page.js                 # Home (hero, moods, destacadas, manifiesto)
├── layout.js               # Layout raíz + metadatos globales
├── globals.css             # Variables de diseño y tipografía
├── sitemap.js / robots.js  # SEO
├── not-found.js            # Página 404
├── coleccion/              # Catálogo con filtros y buscador
├── ceramica/[slug]/        # Ficha de cada pieza
├── nosotras/               # Sobre la marca
├── components/             # Nav, Footer, TarjetaPieza, CarruselPiezas,
│                           # BuscadorHome, ScrollTop
└── data/piezas.js          # Catálogo de piezas (única fuente de datos)
```

---

## 📝 Agregar una pieza

Edita `app/data/piezas.js` y añade un objeto al arreglo `PIEZAS`:

```js
{
  slug: 'nombre-unico',
  nombre: 'Nombre de la pieza',
  subtitulo: 'Cerámica pintada bajo cubierta',
  precio: 15000,
  precioLabel: 'c/u',           // opcional: "c/u", "par"…
  disponible: true,
  moods: ['mesa', 'cocina'],    // mesa · cocina · decoracion · figuras · ediciones
  imagenes: ['/piezas/mi-foto.png'],
  descripcion: 'Descripción de la pieza.',
  dimensiones: '20 cm largo · 8 cm ancho',
  cuadrado: true,               // opcional: recorte cuadrado
  imagenPosicion: 'center top', // opcional: encuadre de la imagen
}
```

Las fotos van en `public/piezas/`.

---

<div align="center">

Hecho a mano en Chile 🇨🇱

</div>
