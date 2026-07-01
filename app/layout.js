import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

export const metadata = {
  title: 'Miquiola — Cerámica artesanal',
  description: 'Piezas únicas hechas a mano en Chile. Gres y porcelana con carácter.',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
