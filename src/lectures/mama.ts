import { Casa, Lima, Maiz, Mama, Memo } from '@/assets/M-Mama'
import type { LectureData } from './types'

export const mamaLecture: LectureData = {
  letter: 'm',
  mainImage: Mama,
  content: [

    [
      { type: 'word', text: 'mama', highlight: true },
    ],

    [
      { type: 'word', text: 'amasa' },
      { type: 'space' },
      { type: 'word', text: 'mamá' },
      { type: 'space' },
      { type: 'word', text: 'su' },
      { type: 'space' },
      { type: 'word', text: 'masa' },
      { type: 'space' },
    ],
    [
      { type: 'word', text: 'mimi' },
      { type: 'space' },
      { type: 'word', text: 'asa' },
      { type: 'space' },
      { type: 'word', text: 'más' },
      { type: 'space' },
      { type: 'image', src: Maiz },
      { type: 'space' },
    ],
    [
      { type: 'word', text: 'memo' },
      { type: 'space' },
      { type: 'word', text: 'se' },
      { type: 'space' },
      { type: 'word', text: 'asoma' },
      { type: 'space' },
      { type: 'word', text: 'a' },
      { type: 'space' },
      { type: 'word', text: 'su' },
      { type: 'space' },
      { type: 'image', src: Casa },
      { type: 'space' },
    ],
    [
      { type: 'word', text: 'y' },
      { type: 'space' },
      { type: 'word', text: 'ese' },
      { type: 'space' },
      { type: 'word', text: 'es' },
      { type: 'space' },
      { type: 'word', text: 'su' },
      { type: 'space' },
      { type: 'image', src: Memo }, //Comenta
      { type: 'space' },
    ],
    [
      { type: 'word', text: 'ema' },
      { type: 'space' },
      { type: 'word', text: 'mima' },
      { type: 'space' },
      { type: 'word', text: 'a' },
      { type: 'space' },
      { type: 'word', text: 'mimi' },
      { type: 'space' },
    ],
    [
      { type: 'word', text: 'esa' },
      { type: 'space' },
      { type: 'image', src: Lima },
      { type: 'space' },
      { type: 'word', text: 'es' },
      { type: 'space' },
      { type: 'word', text: 'mia' },
      { type: 'space' },
    ],
    [
      { type: 'word', text: 'mi' },
      { type: 'space' },
      { type: 'word', text: 'mesa' },
      { type: 'space' },
    ],
    [
      { type: 'word', text: 'mi' },
      { type: 'space' },
      { type: 'word', text: 'masa' },
      { type: 'space' },
    ],

  ],
}
