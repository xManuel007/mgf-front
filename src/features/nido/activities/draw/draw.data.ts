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
    id: 'nido-draw-1',
    title: 'Dibuja la letra n',
    description: 'Practica dibujando la letra n mayúscula',
    letter: 'N',
    instructions: 'Sigue la letra que se muestra en la esquina como guía. Intenta hacer trazos firmes y precisos.',
    difficulty: 'easy',
  },
  {
    id: 'nido-draw-2',
    title: 'Dibuja la letra n',
    description: 'Practica dibujando la letra n minúscula',
    letter: 'n',
    instructions: 'Sigue la letra que se muestra en la esquina como guía. Intenta hacer trazos firmes y precisos.',
    difficulty: 'easy',
  },
];
