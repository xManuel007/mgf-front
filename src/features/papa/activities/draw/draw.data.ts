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
    id: 'papa-draw-1',
    title: 'Dibuja la letra p',
    description: 'Practica dibujando la letra p mayúscula',
    letter: 'P',
    instructions: 'Sigue la letra que se muestra en la esquina como guía. Intenta hacer trazos firmes y precisos.',
    difficulty: 'easy',
  },
  {
    id: 'papa-draw-2',
    title: 'Dibuja la letra p',
    description: 'Practica dibujando la letra p minúscula',
    letter: 'p',
    instructions: 'Sigue la letra que se muestra en la esquina como guía. Intenta hacer trazos firmes y precisos.',
    difficulty: 'easy',
  },
];
