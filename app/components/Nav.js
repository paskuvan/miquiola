'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{
      position: 'relative',
      zIndex: 50,
      backgroundColor: 'var(--crema)',
      borderBottom: '1px solid var(--crema-2)',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '25px auto',
        padding: '0 2rem',
        height: '60px',
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', lineHeight: 0, margin: '0 20px' }}>
          <Image
            src="/logo-light.png"
            alt="Miquiola"
            width={100}
            height={34}
            style={{ objectFit: 'contain', display: 'block' }}
            className="nav-logo"
            priority
          />
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
      href="https://wa.me/56944600260?text=Hola,%20me%20interesa%20una%20pieza%20de%20Miquiola"
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
