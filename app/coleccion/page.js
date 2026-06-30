'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { PIEZAS, MOODS } from '../data/piezas';
import TarjetaPieza from '../components/TarjetaPieza';
import Link from 'next/link';

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

  const piezasFiltradas = moodActivo
    ? PIEZAS.filter(p => p.moods.includes(moodActivo))
    : PIEZAS;

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

      {/* Filtros mood */}
      <div style={{
        display: 'flex',
        gap: '0.75rem',
        flexWrap: 'wrap',
        marginBottom: '3rem',
        paddingBottom: '2rem',
        borderBottom: '1px solid var(--crema-2)',
      }}>
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

      {/* Grid */}
      {piezasFiltradas.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--gris)' }}>
            No hay piezas en este mood todavía.
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '2rem 1.5rem',
        }}>
          {piezasFiltradas.map(pieza => (
            <TarjetaPieza key={pieza.slug} pieza={pieza} />
          ))}
        </div>
      )}
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
