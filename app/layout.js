import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';

export const metadata = {
  title: 'Miquiola — Tienda de Cerámica',
  description: 'Piezas únicas hechas a mano en Chile. Gres y porcelana con carácter.',
  icons: {
    icon: '/logo-light.png',
    apple: '/logo-light.png',
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
