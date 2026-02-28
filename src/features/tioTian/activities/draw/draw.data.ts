export interface DrawActivity {
  id: string;
  title: string;
  description: string;
  letter: string; // La letra a dibujar
  instructions: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const drawActivities: DrawActivity[] = [
  {
    id: 'tiotian-draw-1',
    title: 'Dibuja la letra t',
    description: 'Practica dibujando la letra t mayúscula',
    letter: 'T',
    instructions: 'Sigue la letra que se muestra en la esquina como guía. Intenta hacer trazos firmes y precisos.',
    difficulty: 'easy',
  },
  {
    id: 'tiotian-draw-2',
    title: 'Dibuja la letra t',
    description: 'Practica dibujando la letra t minúscula',
    letter: 't',
    instructions: 'Sigue la letra que se muestra en la esquina como guía. Intenta hacer trazos firmes y precisos.',
    difficulty: 'easy',
  },
];
