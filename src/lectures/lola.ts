import type { LectureData } from './types'
import { Laguna, Lola, Luna, Pala } from '@/assets/L-Lola'

export const lolaLecture: LectureData = {
  letter: 'l',
  mainImage: Lola,
  content: [

    [
      { type: 'word', text: 'lola', highlight: true },
    ],
    [
      { type: 'word', text: 'lola', highlight: true },
      { type: 'space' },
      { type: 'word', text: 'lee' },
    ],

    [
      { type: 'word', text: 'el' },
      { type: 'space' },
      { type: 'word', text: 'sol' },
      { type: 'space' },
      { type: 'word', text: 'y' },
      { type: 'space' },
      { type: 'word', text: 'la' },
      { type: 'space' },
      { type: 'image', src: Luna }, // luna
      { type: 'space' },
    ],

    [
      { type: 'word', text: 'la' },
      { type: 'space' },
      { type: 'word', text: 'loma' },
      { type: 'space' },
      { type: 'word', text: 'y' },
      { type: 'space' },
      { type: 'word', text: 'la' },
      { type: 'space' },
      { type: 'image', src: Laguna},
      { type: 'space' },
    ],

    [
      { type: 'word', text: 'memo' },
      { type: 'space' },
      { type: 'word', text: 'y' },
      { type: 'space' },
      { type: 'word', text: 'su' },
      { type: 'space' },
      { type: 'image', src: Pala }, // objeto genérico
      { type: 'space' },
    ],

    [
      { type: 'word', text: 'lila' },
      { type: 'space' },
      { type: 'word', text: 'y' },
      { type: 'space' },
      { type: 'word', text: 'lalo' },
      { type: 'space' },
    ],

    [
      { type: 'word', text: 'la' },
      { type: 'space' },
      { type: 'word', text: 'ola' },
      { type: 'space' },
      { type: 'word', text: 'y' },
      { type: 'space' },
      { type: 'word', text: 'la' },
      { type: 'space' },
      { type: 'word', text: 'ala' },
      { type: 'space' },
    ],

    [
      { type: 'word', text: 'la' },
      { type: 'space' },
      { type: 'word', text: 'mula' },
      { type: 'space' },
      { type: 'word', text: 'la' },
      { type: 'space' },
      { type: 'word', text: 'miel' },
      { type: 'space' },
    ],

  ],
}
