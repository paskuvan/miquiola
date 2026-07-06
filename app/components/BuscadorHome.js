'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BuscadorHome() {
  const [busqueda, setBusqueda] = useState('');
  const router = useRouter();

  function submit(e) {
    e.preventDefault();
    const q = busqueda.trim();
    router.push(q ? `/coleccion?q=${encodeURIComponent(q)}` : '/coleccion');
  }

  return (
    <form onSubmit={submit} style={{ position: 'relative', width: '100%', maxWidth: '340px' }}>
      <svg
        width="15" height="15" viewBox="0 0 24 24" fill="none"
        stroke="var(--gris)" strokeWidth="2" strokeLinecap="round"
        style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}
      >
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.5" y2="16.5" />
      </svg>
      <input
        type="search"
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}
        placeholder="Buscar una pieza…"
        style={{
          width: '100%',
          padding: '0.6rem 0 0.6rem 1.7rem',
          border: 'none',
          borderBottom: '1px solid var(--carbon)',
          backgroundColor: 'transparent',
          fontFamily: 'var(--font-serif)',
          fontSize: '1rem',
          fontStyle: 'italic',
          color: 'var(--carbon)',
          outline: 'none',
        }}
      />
    </form>
  );
}
