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
    id: 'sol-draw-1',
    title: 'Dibuja la letra s',
    description: 'Practica dibujando la letra s mayúscula',
    letter: 'S',
    instructions: 'Sigue la letra que se muestra en la esquina como guía. Intenta hacer trazos firmes y precisos.',
    difficulty: 'easy',
  },
  {
    id: 'sol-draw-2',
    title: 'Dibuja la letra s',
    description: 'Practica dibujando la letra s minúscula',
    letter: 's',
    instructions: 'Sigue la letra que se muestra en la esquina como guía. Intenta hacer trazos firmes y precisos.',
    difficulty: 'easy',
  },
];
