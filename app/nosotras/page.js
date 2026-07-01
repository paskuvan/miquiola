import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Miquiola — Sobre mí',
  description: 'Cerámica pintada a mano. Una persona, un pincel, cada pieza distinta.',
};

const PROCESO = [
  {
    num: '01',
    titulo: 'Elijo la pieza',
    texto: 'Trabajo con cerámica de calidad ya formada. La elijo por su forma, su peso, cómo se siente en la mano. Si no me convence vacía, no me va a convencer pintada.',
  },
  {
    num: '02',
    titulo: 'Diseño el motivo',
    texto: 'Boceto el diseño pensando en la pieza específica: su curva, su tamaño, hacia dónde mira. Ningún motivo se repite exactamente porque ninguna pieza es igual a otra.',
  },
  {
    num: '03',
    titulo: 'Pinto a mano',
    texto: 'Uso esmalte cerámico aplicado con pincel. Es un trabajo lento, de capas, de correcciones. La mano tiembla un poco y eso se nota — y está bien que se note.',
  },
  {
    num: '04',
    titulo: 'La pieza queda lista',
    texto: 'El esmalte seca y queda fijo. Lo que ves es permanente: el color, el trazo, la imperfección. No hay dos piezas iguales y no las va a haber.',
  },
];

export default function Nosotras() {
  return (
    <>
      {/* Hero */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '60vh',
      }} className="nosotras-grid">
        <div style={{
          position: 'relative',
          minHeight: '400px',
          backgroundColor: '#DDD5C8',
        }}>
          <Image
            src="/piezas/pieza_14.png"
            alt="Miquiola cerámica pintada a mano"
            fill
            style={{ objectFit: 'cover' }}
            sizes="50vw"
          />
        </div>

        <div style={{
          padding: '4rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '1.5rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.15em',
            color: 'var(--gris)',
            textTransform: 'uppercase',
          }}>
            Sobre mí
          </p>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 300,
            lineHeight: 1.15,
          }}>
            Un pincel,<br />
            <em>cada pieza distinta</em>
          </h1>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.9rem',
            color: 'var(--carbon-2)',
            lineHeight: 1.8,
            fontWeight: 300,
            maxWidth: '400px',
          }}>
            Miquiola soy yo. Pinto cerámica a mano con esmalte cerámico — cada pieza tiene su propio motivo, su propio trazo, su propio tiempo.
          </p>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.9rem',
            color: 'var(--carbon-2)',
            lineHeight: 1.8,
            fontWeight: 300,
            maxWidth: '400px',
          }}>
            No trabajo en serie. Cada pieza la pienso, la dibujo y la pinto sola. Lo que llega a tus manos no existía antes y no va a existir igual después.
          </p>
        </div>
      </section>

      {/* Proceso */}
      <section style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '6rem 2rem',
      }}>
        <div style={{ marginBottom: '3rem' }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.15em',
            color: 'var(--gris)',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>
            Cómo trabajo
          </p>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontWeight: 300,
            fontStyle: 'italic',
          }}>
            Del boceto a tus manos
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {PROCESO.map((paso, i) => (
            <div key={paso.num} style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr',
              gap: '2rem',
              padding: '2.5rem 0',
              borderBottom: i < PROCESO.length - 1 ? '1px solid var(--crema-2)' : 'none',
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--gris)',
                letterSpacing: '0.1em',
              }}>
                {paso.num}
              </span>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.1rem',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '0.75rem',
                }}>
                  {paso.titulo}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  color: 'var(--carbon-2)',
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}>
                  {paso.texto}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        backgroundColor: 'var(--crema-2)',
        padding: '5rem 2rem',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
          fontWeight: 300,
          fontStyle: 'italic',
          marginBottom: '2rem',
        }}>
          ¿Te interesa una pieza o algo especial?
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://wa.me/56912345678?text=Hola,%20me%20interesa%20una%20pieza%20de%20Miquiola"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--crema)',
              backgroundColor: 'var(--carbon)',
              padding: '0.9rem 2rem',
              textDecoration: 'none',
            }}
          >
            Escribir por WhatsApp
          </a>
          <Link href="/coleccion" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--carbon)',
            border: '1px solid var(--carbon)',
            padding: '0.9rem 2rem',
            textDecoration: 'none',
          }}>
            Ver colección
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .nosotras-grid { grid-template-columns: 1fr !important; }
          .nosotras-grid > div:last-child { padding: 2.5rem 1.5rem !important; }
        }
      `}</style>
    </>
  );
}
