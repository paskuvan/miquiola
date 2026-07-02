import Link from 'next/link';
import Image from 'next/image';

export default function TarjetaPieza({ pieza }) {
  return (
    <Link href={`/ceramica/${pieza.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <article style={{ cursor: 'pointer' }}>
        {/* Imagen */}
        <div style={{
          position: 'relative',
          marginBottom: '1rem',
          aspectRatio: '4/5',
          overflow: 'hidden',
          backgroundColor: 'var(--crema-2)',
        }}>
          {pieza.imagenes?.[0] ? (
            <Image
              src={pieza.imagenes[0]}
              alt={pieza.nombre}
              fill
              style={{ objectFit: 'cover', objectPosition: pieza.imagenPosicion || 'center' }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div style={{ backgroundColor: '#DDD5C8', aspectRatio: '1', width: '100%' }} />
          )}

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
              ? `$${pieza.precio.toLocaleString('es-CL')}${pieza.precioLabel ? ` ${pieza.precioLabel}` : ''}`
              : 'Sin stock'}
          </p>
        </div>
      </article>
    </Link>
  );
}
