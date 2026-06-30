import Link from 'next/link';

export const metadata = {
  title: 'Nosotras — Miquiola',
  description: 'El taller, el proceso y la historia detrás de Miquiola.',
};

const PROCESO = [
  {
    num: '01',
    titulo: 'Diseño',
    texto: 'Cada pieza parte de un boceto o de una intuición en el taller. No hay producción en serie: si una forma no me convence en las manos, no sale.',
  },
  {
    num: '02',
    titulo: 'Modelado',
    texto: 'Trabajo principalmente al torno y a mano. El gres me permite grosor, peso y textura que no se pueden fingir. La porcelana es para cuando quiero blanco y silencio.',
  },
  {
    num: '03',
    titulo: 'Secado y biscocido',
    texto: 'Primera cocción a 950°C. La pieza se endurece y queda lista para recibir el esmalte. En esta etapa suelo romper lo que no me convence.',
  },
  {
    num: '04',
    titulo: 'Esmaltado',
    texto: 'Mezclo mis propios esmaltes o trabajo con minerales naturales como ceniza volcánica. El resultado final en el horno siempre tiene algo de sorpresa.',
  },
  {
    num: '05',
    titulo: 'Horneado final',
    texto: 'Segunda cocción entre 1260°C y 1300°C. A esa temperatura el gres vitrifica y los esmaltes se funden al cuerpo. Lo que sale del horno es permanente.',
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
          backgroundColor: '#DDD5C8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px',
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.1em',
            color: 'var(--gris)',
          }}>
            FOTO TALLER
          </span>
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
            El taller
          </p>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 300,
            lineHeight: 1.15,
          }}>
            Hecho en Santiago,<br />
            <em>con las manos</em>
          </h1>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.9rem',
            color: 'var(--carbon-2)',
            lineHeight: 1.8,
            fontWeight: 300,
            maxWidth: '400px',
          }}>
            Miquiola es un taller de cerámica unipersonal en Santiago de Chile. Trabajo con gres y porcelana desde 2019, haciendo piezas funcionales con carácter: para la mesa, la cocina y la casa.
          </p>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.9rem',
            color: 'var(--carbon-2)',
            lineHeight: 1.8,
            fontWeight: 300,
            maxWidth: '400px',
          }}>
            Cada pieza es única. Las diferencias de tono, textura o forma no son defectos — son la evidencia de que fue hecha a mano, en un taller real, en una quema real.
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
            Del boceto al horno
          </p>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontWeight: 300,
            fontStyle: 'italic',
          }}>
            El proceso
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {PROCESO.map((paso, i) => (
            <div key={paso.num} style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr',
              gap: '2rem',
              padding: '2.5rem 0',
              borderBottom: i < PROCESO.length - 1 ? '1px solid var(--crema-2)' : 'none',
            }}>
              <div>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--gris)',
                  letterSpacing: '0.1em',
                }}>
                  {paso.num}
                </span>
              </div>
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
          ¿Te interesa una pieza o encargar algo especial?
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
