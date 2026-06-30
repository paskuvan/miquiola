'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backgroundColor: 'var(--crema)',
      borderBottom: '1px solid var(--crema-2)',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.5rem',
          fontWeight: 300,
          letterSpacing: '0.08em',
          color: 'var(--carbon)',
          textDecoration: 'none',
          fontStyle: 'italic',
        }}>
          miquiola
        </Link>

        {/* Nav desktop */}
        <nav style={{
          display: 'flex',
          gap: '2.5rem',
          alignItems: 'center',
        }} className="nav-desktop">
          <NavLink href="/coleccion">Colección</NavLink>
          <NavLink href="/nosotras">Nosotras</NavLink>
          <ContactLink />
        </nav>

        {/* Hamburger mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="nav-mobile-btn"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
          aria-label="Menú"
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--carbon)' }}>
            {open ? 'CERRAR' : 'MENÚ'}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          backgroundColor: 'var(--crema)',
          borderTop: '1px solid var(--crema-2)',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}>
          <NavLink href="/coleccion" onClick={() => setOpen(false)}>Colección</NavLink>
          <NavLink href="/nosotras" onClick={() => setOpen(false)}>Nosotras</NavLink>
          <ContactLink />
        </div>
      )}

      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile-btn { display: none; }
        @media (max-width: 768px) {
          .nav-desktop { display: none; }
          .nav-mobile-btn { display: block; }
        }
      `}</style>
    </header>
  );
}

function NavLink({ href, children, onClick }) {
  return (
    <Link href={href} onClick={onClick} style={{
      fontFamily: 'var(--font-sans)',
      fontSize: '0.75rem',
      fontWeight: 300,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--carbon)',
      textDecoration: 'none',
    }}>
      {children}
    </Link>
  );
}

function ContactLink() {
  return (
    <a
      href="https://wa.me/56912345678?text=Hola,%20me%20interesa%20una%20pieza%20de%20Miquiola"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        letterSpacing: '0.1em',
        color: 'var(--acento)',
        textDecoration: 'none',
        border: '1px solid var(--acento)',
        padding: '0.4rem 1rem',
      }}
    >
      CONTACTO
    </a>
  );
}
