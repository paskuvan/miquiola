import { PIEZAS } from './data/piezas';

export default function sitemap() {
  const base = 'https://miquiola.cl';

  const piezas = PIEZAS.map(p => ({
    url: `${base}/ceramica/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/coleccion`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/nosotras`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    ...piezas,
  ];
}
