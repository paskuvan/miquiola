import Link from 'next/link';

export default function TarjetaPieza({ pieza }) {
  return (
    <Link href={`/ceramica/${pieza.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <article style={{ cursor: 'pointer' }}>
        {/* Imagen */}
        <div style={{
          backgroundColor: '#DDD5C8',
          aspectRatio: '3/4',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '1rem',
        }}>
          {!pieza.disponible && (
            <div style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              backgroundColor: 'var(--carbon)',
              color: 'var(--crema)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.55rem',
              letterSpacing: '0.1em',
              padding: '0.3rem 0.6rem',
              textTransform: 'uppercase',
            }}>
              Agotada
            </div>
          )}

          {/* Paleta de color */}
          <div style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            display: 'flex',
            gap: '0.3rem',
          }}>
            {pieza.paleta.map((color, i) => (
              <div
                key={i}
                style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  backgroundColor: color,
                  border: '1px solid rgba(0,0,0,0.1)',
                }}
              />
            ))}
          </div>

          {/* Placeholder imagen */}
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.08em',
              color: 'var(--gris)',
            }}>
              {pieza.slug.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Info */}
        <div>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.1em',
            color: 'var(--gris)',
            textTransform: 'uppercase',
            marginBottom: '0.3rem',
          }}>
            {pieza.subtitulo}
          </p>
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.2rem',
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: '0.4rem',
          }}>
            {pieza.nombre}
          </h3>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.85rem',
            color: pieza.disponible ? 'var(--carbon)' : 'var(--gris)',
            fontWeight: 300,
          }}>
            {pieza.disponible
              ? `$${pieza.precio.toLocaleString('es-CL')}`
              : 'Sin stock'}
          </p>
        </div>
      </article>
    </Link>
  );
}
