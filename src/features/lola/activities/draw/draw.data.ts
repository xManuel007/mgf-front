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
    id: 'lola-draw-1',
    title: 'Dibuja la letra l',
    description: 'Practica dibujando la letra l mayúscula',
    letter: 'L',
    instructions: 'Sigue la letra que se muestra en la esquina como guía. Intenta hacer trazos firmes y precisos.',
    difficulty: 'easy',
  },
  {
    id: 'lola-draw-2',
    title: 'Dibuja la letra l',
    description: 'Practica dibujando la letra l minúscula',
    letter: 'l',
    instructions: 'Sigue la letra que se muestra en la esquina como guía. Intenta hacer trazos firmes y precisos.',
    difficulty: 'easy',
  },
];
