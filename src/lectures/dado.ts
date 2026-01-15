import { Dado, Nido, Sandia } from '@/assets/D-Dado'
import type { LectureData } from './types'

export const dadoLecture: LectureData = {
  letter: 'd',
  mainImage: Dado,
  content: [

    // ─────────────────────────────
    // Línea 1: encabezado visual "d + dado"
    // (esto lo puedes renderizar especial después si quieres)
    // ─────────────────────────────
    [
      { type: 'word', text: 'dado', highlight: true },
    ],

    // ─────────────────────────────
    // Línea 2
    // "la usan los dados, los dedos..."
    // ─────────────────────────────
    [
      { type: 'word', text: 'la' },
      { type: 'space' },
      { type: 'word', text: 'usan' },
      { type: 'space' },
      { type: 'word', text: 'los' },
      { type: 'space' },
      { type: 'word', text: 'dados', highlight: true },
      { type: 'word', text: ',' },
      { type: 'space' },
      { type: 'word', text: 'los' },
      { type: 'space' },
      { type: 'word', text: 'dedos' },
      { type: 'word', text: ',' },
      { type: 'space' },
      { type: 'word', text: 'los' },
      { type: 'space' },
      { type: 'word', text: 'dias' },
      { type: 'word', text: ',' },
      { type: 'space' },
      { type: 'word', text: 'las' },
      { type: 'space' },
      { type: 'word', text: 'damas' },
      { type: 'word', text: ',' },
      { type: 'space' },
      { type: 'word', text: 'los' },
      { type: 'space' },
      { type: 'word', text: 'nidos' },
      { type: 'word', text: ',' },
      { type: 'space' },
      { type: 'word', text: 'los' },
      { type: 'space' },
      { type: 'word', text: 'nudos' },
      { type: 'word', text: ',' },
      { type: 'space' },
      { type: 'word', text: 'dime' },
      { type: 'space' },
      { type: 'word', text: 'donde' },
      { type: 'space' },
      { type: 'word', text: 'la' },
      { type: 'space' },
      { type: 'word', text: 'usan' },
      { type: 'space' },
      { type: 'word', text: 'los' },
      { type: 'space' },
      { type: 'word', text: 'mudos' },
      { type: 'space' },
      { type: 'word', text: 'y' },
      { type: 'space' },
      { type: 'word', text: 'donde' },
      { type: 'space' },
      { type: 'word', text: 'las' },
      { type: 'space' },
      { type: 'word', text: 'sandias' },
    ],

    // ─────────────────────────────
    // Línea 3
    // "esa es la sandia ese es un nido..."
    // ─────────────────────────────
    [
      { type: 'word', text: 'esa' },
      { type: 'space' },
      { type: 'word', text: 'es' },
      { type: 'space' },
      { type: 'word', text: 'la' },
      { type: 'space' },
      { type: 'image', src: Sandia },
      { type: 'space' },
      { type: 'word', text: 'ese' },
      { type: 'space' },
      { type: 'word', text: 'es' },
      { type: 'space' },
      { type: 'word', text: 'un' },
      { type: 'space' },
      { type: 'image', src: Nido },
      { type: 'space' },
      { type: 'word', text: 'menudo' },
      { type: 'word', text: ',' },
      { type: 'space' },
      { type: 'word', text: 'moneda' },
      { type: 'word', text: ',' },
      { type: 'space' },
      { type: 'word', text: 'molido' },
      { type: 'word', text: ',' },
      { type: 'space' },
      { type: 'word', text: 'molino' },
      { type: 'space' },
      { type: 'word', text: 'y' },
      { type: 'space' },
      { type: 'word', text: 'minino' },
      { type: 'word', text: '.' },
    ],
  ],
}
