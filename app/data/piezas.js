export const MOODS = [
  { slug: 'cocina-calida',   label: 'Cocina cálida' },
  { slug: 'mesa-desnuda',    label: 'Mesa desnuda' },
  { slug: 'jardin-interior', label: 'Jardín interior' },
  { slug: 'pieza-statement', label: 'Pieza statement' },
];

export const PIEZAS = [
  {
    slug: 'jarro-amapola-13',
    nombre: 'Jarro amapola',
    subtitulo: 'Cerámica pintada a mano con esmalte transparente',
    precio: 17000,
    disponible: true,
    unidades: 1,
    moods: ['jarro', 'floral'],
    imagenes: ['/piezas/pieza_13.png', '/piezas/pieza_13.png'],
    descripcion: 'Jarro de cerámica pintado a mano con diseño floral inspirado en la flora nativa.',
  },
  {
    slug: 'taza-terrosa-02',
    nombre: 'Taza terrosa',
    subtitulo: 'Gres con esmalte mate tierra',
    precio: 22000,
    disponible: true,
    unidades: 3,
    moods: ['cocina-calida'],
    imagenes: ['/piezas/pieza_02.png', '/piezas/pieza_02.png'],
    paleta: ['#B5A090', '#7A6558', '#E8DDD4'],
    descripcion: 'Taza de café pensada para la mañana lenta. El gres retiene el calor más tiempo que la loza común. Asidero grueso, cómodo para ambas manos.',
    dimensiones: '8 cm diámetro · 9 cm alto · 280 ml',
    cuidado: 'Apto lavavajillas y microondas.',
    proceso: 'Torneado → Biscocido → Esmaltado mate → Horneado a 1260°C',
  },
  {
    slug: 'florero-cuello-03',
    nombre: 'Florero de cuello',
    subtitulo: 'Porcelana sin esmaltar con textura de piel',
    precio: 45000,
    disponible: true,
    unidades: 1,
    moods: ['jardin-interior', 'pieza-statement'],
    imagenes: ['/piezas/pieza_03.png', '/piezas/pieza_03.png'],
    paleta: ['#EDE8E0', '#D4CCC2', '#C5BDB4'],
    descripcion: 'Porcelana sin vidriar que revela la textura natural del material. El cuello estrecho sostiene ramas, flores secas o simplemente aire.',
    dimensiones: '8 cm base · 22 cm alto',
    cuidado: 'Solo exterior. No sumergir.',
    proceso: 'Torneado en porcelana → Texturizado → Horneado único a 1300°C',
  },
  {
    slug: 'plato-hondo-04',
    nombre: 'Plato hondo',
    subtitulo: 'Gres con esmalte litio en azul pálido',
    precio: 35000,
    disponible: false,
    unidades: 0,
    moods: ['mesa-desnuda', 'pieza-statement'],
    imagenes: ['/piezas/pieza_04.png', '/piezas/pieza_04.png'],
    paleta: ['#A8B8C4', '#7A94A4', '#D4E0E8'],
    descripcion: 'El esmalte con litio produce cristalizaciones azules que varían según la posición en el horno. Ningún plato sale exactamente igual.',
    dimensiones: '20 cm diámetro · 5 cm hondo',
    cuidado: 'Apto lavavajillas.',
    proceso: 'Torneado → Biscocido → Esmalte de litio → Horneado controlado a 1280°C',
  },
];

export function getPiezaBySlug(slug) {
  return PIEZAS.find(p => p.slug === slug) ?? null;
}

export function getPiezasByMood(moodSlug) {
  return PIEZAS.filter(p => p.moods.includes(moodSlug));
}
