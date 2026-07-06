'use client';

import { useRef } from 'react';
import TarjetaPieza from './TarjetaPieza';

export default function CarruselPiezas({ piezas }) {
  const ref = useRef(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });

  function onMouseDown(e) {
    drag.current = { active: true, startX: e.pageX - ref.current.offsetLeft, scrollLeft: ref.current.scrollLeft };
    ref.current.style.cursor = 'grabbing';
  }

  function onMouseUp() {
    drag.current.active = false;
    ref.current.style.cursor = 'grab';
  }

  function onMouseMove(e) {
    if (!drag.current.active) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - drag.current.startX) * 1.5;
    ref.current.scrollLeft = drag.current.scrollLeft - walk;
  }

  return (
    <div
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onMouseMove={onMouseMove}
      style={{
        display: 'flex',
        overflowX: 'auto',
        gap: '1.5rem',
        padding: '0 max(2rem, calc((100vw - 1400px) / 2 + 2rem)) 1.5rem',
        scrollPaddingLeft: 'max(2rem, calc((100vw - 1400px) / 2 + 2rem))',
        scrollSnapType: 'x mandatory',
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none',
        cursor: 'grab',
        userSelect: 'none',
      }}
    >
      {piezas.map(pieza => (
        <div key={pieza.slug} style={{
          flexShrink: 0,
          width: 'clamp(260px, 28vw, 380px)',
          scrollSnapAlign: 'start',
        }}>
          <TarjetaPieza pieza={pieza} />
        </div>
      ))}
    </div>
  );
}
