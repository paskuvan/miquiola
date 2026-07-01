import Link from 'next/link';
import Image from 'next/image';
import { PIEZAS, MOODS } from './data/piezas';
import TarjetaPieza from './components/TarjetaPieza';

export default function Home() {
  const destacadas = PIEZAS.filter(p => p.disponible).slice(0, 3);

  return (
    <>
      <Hero />
      <MoodBar />
      <Destacadas piezas={destacadas} />
      <Manifiesto />
    </>
  );
}

function Hero() {
  return (
    <section style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      minHeight: 'calc(100vh - 64px)',
    }} className="hero-grid">
      <div style={{
        position: 'relative',
        minHeight: '500px',
        backgroundColor: '#DDD5C8',
      }}>
        <Image
          src="/piezas/pieza_14.png"
          alt="Cerámica Miquiola"
          fill
          style={{ objectFit: 'cover' }}
          sizes="50vw"
          priority
        />
      </div>

      <div style={{
        padding: '4rem 4rem 4rem 5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '2rem',
      }}>
        <div>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            color: 'var(--gris)',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            Taller artesanal · Santiago, Chile
          </p>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
          }}>
            Piezas que<br />
            <em>permanecen</em>
          </h1>
        </div>

        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.95rem',
          color: 'var(--carbon-2)',
          lineHeight: 1.8,
          maxWidth: '380px',
          fontWeight: 300,
        }}>
          Cerámica pintada a mano con esmalte cerámico. Cada pieza tiene su propio motivo y no se repite exactamente.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/coleccion" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--crema)',
            backgroundColor: 'var(--carbon)',
            padding: '0.9rem 2rem',
            textDecoration: 'none',
          }}>
            Ver colección
          </Link>
          <a
            href="https://wa.me/56912345678?text=Hola,%20me%20interesa%20una%20pieza%20de%20Miquiola"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--carbon)',
              border: '1px solid var(--carbon)',
              padding: '0.9rem 2rem',
              textDecoration: 'none',
            }}
          >
            WhatsApp
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > div:last-child { padding: 2.5rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}

function MoodBar() {
  return (
    <section style={{
      borderTop: '1px solid var(--crema-2)',
      borderBottom: '1px solid var(--crema-2)',
      padding: '1rem 2rem',
      overflowX: 'auto',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        gap: '2.5rem',
        alignItems: 'center',
        whiteSpace: 'nowrap',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          letterSpacing: '0.1em',
          color: 'var(--gris)',
          textTransform: 'uppercase',
          flexShrink: 0,
        }}>
          Explorar por mood
        </span>
        {MOODS.map(mood => (
          <Link
            key={mood.slug}
            href={`/coleccion?mood=${mood.slug}`}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1rem',
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'var(--carbon)',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            {mood.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

function Destacadas({ piezas }) {
  return (
    <section style={{
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '5rem 2rem',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: '3rem',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
          fontWeight: 300,
          fontStyle: 'italic',
        }}>
          Nuevas en el taller
        </h2>
        <Link href="/coleccion" style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--gris)',
          textDecoration: 'none',
        }}>
          Ver todo →
        </Link>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '2rem',
      }}>
        {piezas.map(pieza => (
          <TarjetaPieza key={pieza.slug} pieza={pieza} />
        ))}
      </div>
    </section>
  );
}

function Manifiesto() {
  return (
    <section style={{
      backgroundColor: 'var(--carbon)',
      color: 'var(--crema)',
      padding: '6rem 2rem',
    }}>
      <div style={{
        maxWidth: '680px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          letterSpacing: '0.15em',
          color: 'var(--gris)',
          textTransform: 'uppercase',
          marginBottom: '2rem',
        }}>
          Del taller
        </p>
        <blockquote style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.4rem, 3vw, 2rem)',
          fontWeight: 300,
          lineHeight: 1.5,
          fontStyle: 'italic',
        }}>
          "Pinto cada pieza sola, con pincel, sin molde. Lo que sale distinto no es un error — es la firma."
        </blockquote>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.8rem',
          color: 'var(--gris)',
          marginTop: '2rem',
          letterSpacing: '0.05em',
        }}>
          — Miquiola
        </p>
       
      </div>
    </section>
  );
}
