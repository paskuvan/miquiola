import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { PIEZAS, MOODS, getPiezaBySlug } from '../../data/piezas';
import TarjetaPieza from '../../components/TarjetaPieza';
import CarruselPiezas from '../../components/CarruselPiezas';

export async function generateStaticParams() {
  return PIEZAS.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pieza = getPiezaBySlug(slug);
  if (!pieza) return {};
  return {
    title: `${pieza.nombre} — Miquiola`,
    description: pieza.descripcion,
  };
}

export default async function PDP({ params }) {
  const { slug } = await params;
  const pieza = getPiezaBySlug(slug);
  if (!pieza) notFound();

  const porMood = PIEZAS.filter(
    p => p.slug !== pieza.slug && p.moods.some(m => pieza.moods.includes(m))
  );
  const resto = PIEZAS.filter(
    p => p.slug !== pieza.slug && !porMood.includes(p)
  );
  const relacionadas = [...porMood, ...resto].slice(0, 4);

  const waUrl = `https://wa.me/56944600260?text=${encodeURIComponent(
    `Hola, me interesa la pieza "${pieza.nombre}" de Miquiola. ¿Está disponible?`
  )}`;

  return (
    <>
      {/* PDP 50/50 */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: '55% 45%',
        minHeight: 'calc(100vh - 64px)',
      }} className="pdp-grid">
        {/* Imagen */}
        <div style={{ position: 'relative', backgroundColor: '#DDD5C8', minHeight: '600px' }}>
          {pieza.imagenes?.[0] && (
            <Image
              src={pieza.imagenes[0]}
              alt={pieza.nombre}
              fill
              style={{ objectFit: 'cover' }}
              sizes="55vw"
              priority
            />
          )}

          
        </div>

        {/* Info */}
        <div style={{
          padding: '4rem 3.5rem',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}>
          {/* Breadcrumb */}
          <nav style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <Link href="/coleccion" style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.1em',
              color: 'var(--gris)',
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}>
              Colección
            </Link>
            <span style={{ color: 'var(--gris)', fontSize: '0.7rem' }}>—</span>
            {pieza.moods.slice(0, 1).map(m => {
              const mood = MOODS.find(mo => mo.slug === m);
              return (
                <Link key={m} href={`/coleccion?mood=${m}`} style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.1em',
                  color: 'var(--gris)',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                }}>
                  {mood?.label}
                </Link>
              );
            })}
          </nav>

          {/* Nombre y precio */}
          <div>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.12em',
              color: 'var(--gris)',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
            }}>
              {pieza.subtitulo}
            </p>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              lineHeight: 1.1,
              marginBottom: '1rem',
            }}>
              {pieza.nombre}
            </h1>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.1rem',
              color: pieza.disponible ? 'var(--carbon)' : 'var(--gris)',
            }}>
              {pieza.disponible
                ? `$${pieza.precio.toLocaleString('es-CL')} CLP${pieza.precioLabel ? ` ${pieza.precioLabel}` : ''}`
                : 'Sin stock'}
            </p>
          </div>

          {/* Descripción */}
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.9rem',
            color: 'var(--carbon-2)',
            lineHeight: 1.8,
            fontWeight: 300,
          }}>
            {pieza.descripcion}
          </p>

          {/* Medidas */}
          {pieza.dimensiones && (
            <div style={{
              borderTop: '1px solid var(--crema-2)',
              paddingTop: '1.25rem',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.55rem',
                letterSpacing: '0.1em',
                color: 'var(--gris)',
                textTransform: 'uppercase',
                marginBottom: '0.4rem',
              }}>
                Medidas
              </p>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                color: 'var(--carbon-2)',
                fontWeight: 300,
              }}>
                {pieza.dimensiones}
              </p>
            </div>
          )}

          {/* CTA */}
          <div style={{ marginTop: '1rem' }}>
            {pieza.disponible ? (
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  width: '100%',
                  backgroundColor: 'var(--carbon)',
                  color: 'var(--crema)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '1.1rem 2rem',
                  textDecoration: 'none',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Consultar por WhatsApp
              </a>
            ) : (
              <div style={{
                width: '100%',
                backgroundColor: 'var(--crema-2)',
                color: 'var(--gris)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '1.1rem 2rem',
                textAlign: 'center',
              }}>
                Sin stock
              </div>
            )}
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              color: 'var(--gris)',
              marginTop: '0.75rem',
              textAlign: 'center',
              lineHeight: 1.6,
            }}>
              
            </p>
          </div>
        </div>
      </section>

      {/* Piezas relacionadas */}
      {relacionadas.length > 0 && (
        <section style={{ padding: '5rem 0' }}>
          <div style={{
            paddingLeft: '2rem',
            paddingRight: '2rem',
            marginBottom: '2.5rem',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.5rem',
              fontWeight: 300,
              fontStyle: 'italic',
            }}>
              También te puede gustar
            </h2>
          </div>
          <CarruselPiezas piezas={relacionadas} />
        </section>
      )}

      <style>{`
        @media (max-width: 768px) {
          .pdp-grid { grid-template-columns: 1fr !important; }
          .pdp-grid > div:last-child { padding: 2rem 1.5rem !important; }
        }
      `}</style>
    </>
  );
}

function MetaDato({ label, valor }) {
  return (
    <div>
      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.55rem',
        letterSpacing: '0.1em',
        color: 'var(--gris)',
        textTransform: 'uppercase',
        marginBottom: '0.25rem',
      }}>
        {label}
      </p>
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '0.8rem',
        color: 'var(--carbon-2)',
        lineHeight: 1.5,
        fontWeight: 300,
      }}>
        {valor}
      </p>
    </div>
  );
}
