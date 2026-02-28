export interface DrawActivity {
  id: string;
  title: string;
  description: string;
  letter: string; // La letra a dibujar (e.g., "D", "d")
  instructions: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const drawActivities: DrawActivity[] = [
  {
    id: 'dado-draw-1',
    title: 'Dibuja la letra d',
    description: 'Practica dibujando la letra d mayúscula',
    letter: 'D',
    instructions: 'Sigue la letra que se muestra en la esquina como guía. Intenta hacer trazos firmes y precisos.',
    difficulty: 'easy',
  },
  {
    id: 'dado-draw-2',
    title: 'Dibuja la letra d',
    description: 'Practica dibujando la letra d minúscula',
    letter: 'd',
    instructions: 'Sigue la letra que se muestra en la esquina como guía. Intenta hacer trazos firmes y precisos.',
    difficulty: 'easy',
  },
];
