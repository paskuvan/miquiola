export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--crema-2)',
      padding: '3rem 2rem',
      marginTop: '6rem',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        alignItems: 'start',
      }}>
        <div>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontStyle: 'italic', fontWeight: 300 }}>
            miquiola
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--gris)', marginTop: '0.5rem', lineHeight: 1.6 }}>
            Cerámica hecha a mano<br />Santiago, Chile
          </p>
        </div>

        <div>
          <Label>Tienda</Label>
          <FooterLink href="/coleccion">Colección</FooterLink>
          <FooterLink href="/coleccion?mood=mesa">Mesa</FooterLink>
          <FooterLink href="/coleccion?mood=jarro">Jarro</FooterLink>
        </div>

        <div>
          <Label>Información</Label>
          <FooterLink href="/nosotras">Sobre nosotras</FooterLink>
          <FooterLink
            href="https://wa.me/56944600260"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </FooterLink>
        </div>

        <div>
          <Label>Sobre Miquiola</Label>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--gris)', lineHeight: 1.8 }}>
            Piezas hechas a mano para hogares con alma 🌿
          </p>
        </div>
      </div>

      <div style={{
        maxWidth: '1400px',
        margin: '2rem auto 0',
        paddingTop: '1.5rem',
        borderTop: '1px solid var(--crema-2)',
      }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.08em', color: 'var(--gris)' }}>
          © {new Date().getFullYear()} MIQUIOLA — HECHO A MANO EN CHILE
        </p>
      </div>
    </footer>
  );
}

function Label({ children }) {
  return (
    <p style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '0.6rem',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--gris)',
      marginBottom: '0.75rem',
    }}>
      {children}
    </p>
  );
}

function FooterLink({ href, children, ...props }) {
  return (
    <a href={href} {...props} style={{
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.8rem',
      color: 'var(--carbon)',
      textDecoration: 'none',
      marginBottom: '0.4rem',
    }}>
      {children}
    </a>
  );
}
