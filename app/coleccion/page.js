'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import { PIEZAS, MOODS } from '../data/piezas';
import TarjetaPieza from '../components/TarjetaPieza';
import Link from 'next/link';

function normalizar(texto) {
  return texto.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

export default function ColeccionPage() {
  return (
    <Suspense>
      <Coleccion />
    </Suspense>
  );
}

function Coleccion() {
  const params = useSearchParams();
  const moodActivo = params.get('mood');
  const [busqueda, setBusqueda] = useState('');

  const porMood = moodActivo
    ? PIEZAS.filter(p => p.moods.includes(moodActivo))
    : PIEZAS;

  const piezasFiltradas = busqueda.trim()
    ? porMood.filter(p =>
        normalizar(`${p.nombre} ${p.descripcion ?? ''} ${p.subtitulo ?? ''}`).includes(normalizar(busqueda.trim()))
      )
    : porMood;

  const moodLabel = moodActivo
    ? MOODS.find(m => m.slug === moodActivo)?.label
    : null;

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '3rem 2rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '3rem' }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          letterSpacing: '0.12em',
          color: 'var(--gris)',
          textTransform: 'uppercase',
          marginBottom: '0.75rem',
        }}>
          {moodLabel ? `Mood: ${moodLabel}` : 'Toda la colección'}
        </p>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 300,
          fontStyle: 'italic',
        }}>
          {moodLabel ?? 'Colección'}
        </h1>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.8rem',
          color: 'var(--gris)',
          marginTop: '0.5rem',
        }}>
          {piezasFiltradas.length} {piezasFiltradas.length === 1 ? 'pieza' : 'piezas'}
        </p>
      </div>

      {/* Filtros mood + buscador */}
      <div style={{
        display: 'flex',
        gap: '0.75rem',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '3rem',
        paddingBottom: '2rem',
        borderBottom: '1px solid var(--crema-2)',
      }}>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <MoodChip href="/coleccion" activo={!moodActivo} label="Todas" />
          {MOODS.map(mood => (
            <MoodChip
              key={mood.slug}
              href={`/coleccion?mood=${mood.slug}`}
              activo={moodActivo === mood.slug}
              label={mood.label}
            />
          ))}
        </div>

        <div style={{ position: 'relative', minWidth: '220px' }} className="buscador">
          <svg
            width="14" height="14" viewBox="0 0 24 24" fill="none"
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
            placeholder="Buscar pieza…"
            style={{
              width: '100%',
              padding: '0.5rem 0 0.5rem 1.6rem',
              border: 'none',
              borderBottom: '1px solid var(--carbon)',
              backgroundColor: 'transparent',
              fontFamily: 'var(--font-serif)',
              fontSize: '0.95rem',
              fontStyle: 'italic',
              color: 'var(--carbon)',
              outline: 'none',
            }}
          />
        </div>
      </div>

      {/* Grid */}
      {piezasFiltradas.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--gris)' }}>
            {busqueda.trim()
              ? `No encontramos piezas para "${busqueda.trim()}".`
              : 'No hay piezas en este mood todavía.'}
          </p>
          <Link href="/coleccion" style={{
            display: 'inline-block',
            marginTop: '1.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--carbon)',
            textDecoration: 'none',
            borderBottom: '1px solid var(--carbon)',
          }}>
            Ver toda la colección
          </Link>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem 1.5rem',
        }} className="coleccion-grid">
          {piezasFiltradas.map(pieza => (
            <TarjetaPieza key={pieza.slug} pieza={pieza} />
          ))}
        </div>
      )}
      <style>{`
        @media (max-width: 768px) {
          .coleccion-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 1rem 0.75rem !important; }
          .buscador { width: 100%; }
        }
      `}</style>
    </div>
  );
}

function MoodChip({ href, activo, label }) {
  return (
    <Link href={href} style={{
      fontFamily: 'var(--font-serif)',
      fontSize: '0.9rem',
      fontStyle: 'italic',
      fontWeight: 300,
      color: activo ? 'var(--crema)' : 'var(--carbon)',
      backgroundColor: activo ? 'var(--carbon)' : 'transparent',
      border: '1px solid var(--carbon)',
      padding: '0.4rem 1rem',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
    }}>
      {label}
    </Link>
  );
}
