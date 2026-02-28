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
    id: 'mama-draw-1',
    title: 'Dibuja la letra m',
    description: 'Practica dibujando la letra m mayúscula',
    letter: 'M',
    instructions: 'Sigue la letra que se muestra en la esquina como guía. Intenta hacer trazos firmes y precisos.',
    difficulty: 'easy',
  },
  {
    id: 'mama-draw-2',
    title: 'Dibuja la letra m',
    description: 'Practica dibujando la letra m minúscula',
    letter: 'm',
    instructions: 'Sigue la letra que se muestra en la esquina como guía. Intenta hacer trazos firmes y precisos.',
    difficulty: 'easy',
  },
];
