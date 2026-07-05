import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';

export const metadata = {
  title: {
    default: 'Miquiola — Cerámica pintada a mano',
    template: '%s — Miquiola',
  },
  description: 'Cerámica pintada a mano con esmalte. Piezas únicas hechas en Santiago, Chile. Cada pieza tiene su propio motivo, trazo y tiempo.',
  keywords: ['cerámica', 'cerámica pintada a mano', 'esmalte cerámico', 'Santiago', 'Chile', 'piezas únicas', 'decoración', 'mesa', 'regalo'],
  authors: [{ name: 'Miquiola' }],
  creator: 'Miquiola',
  metadataBase: new URL('https://miquiola.cl'),
  openGraph: {
    title: 'Miquiola — Cerámica pintada a mano',
    description: 'Cerámica pintada a mano con esmalte. Piezas únicas hechas en Santiago, Chile.',
    url: 'https://miquiola.cl',
    siteName: 'Miquiola',
    locale: 'es_CL',
    type: 'website',
    images: [{ url: '/piezas/pieza_26.png', width: 1200, height: 630, alt: 'Miquiola cerámica pintada a mano' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miquiola — Cerámica pintada a mano',
    description: 'Cerámica pintada a mano con esmalte. Piezas únicas hechas en Santiago, Chile.',
    images: ['/piezas/pieza_26.png'],
  },
  icons: {
    icon: '/logo-light.png',
    apple: '/logo-light.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
