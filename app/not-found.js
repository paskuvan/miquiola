import Link from 'next/link';

export default function NotFound() {
  return (
    <section style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '4rem 2rem',
      gap: '1.5rem',
    }}>
      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        letterSpacing: '0.15em',
        color: 'var(--gris)',
        textTransform: 'uppercase',
      }}>
        Error 404
      </p>
      <h1 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
        fontWeight: 300,
        fontStyle: 'italic',
      }}>
        Esta pieza no existe
      </h1>
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '0.9rem',
        color: 'var(--carbon-2)',
        fontWeight: 300,
        maxWidth: '400px',
        lineHeight: 1.8,
      }}>
        Quizás se vendió, cambió de nombre o nunca salió del taller. Pero hay muchas otras esperándote.
      </p>
      <Link href="/coleccion" style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--crema)',
        backgroundColor: 'var(--carbon)',
        padding: '0.9rem 2rem',
        textDecoration: 'none',
        marginTop: '0.5rem',
      }}>
        Ver colección
      </Link>
    </section>
  );
}
