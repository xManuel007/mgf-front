/**
 * EJEMPLO DE INTEGRACIÓN - ACTIVITY DRAW
 *
 * Este archivo muestra cómo integrar la nueva activity "Draw" en tu aplicación.
 * Puedes copiarlo como base para crear una ruta que maneje las actividades de dibujo.
 */

import { useState } from 'react';
import { useParams } from 'react-router';
import { DrawPage } from '@/components/draw/DrawPage';
import { DrawCanvas } from '@/components/draw/DrawCanvas';
import { dadoFeature, lolaFeature, mamaFeature } from '@/features';
import type { DrawActivity } from '@/features/types';

/**
 * Ejemplo 1: Página simple con una actividad de dibujo
 */
export function DrawActivityPageExample() {
  // Obtienes la actividad de draw del feature
  const drawActivities = dadoFeature.activities.draw || [];
  const currentActivity = drawActivities[0];

  if (!currentActivity) {
    return <div>No hay actividades de dibujo disponibles</div>;
  }

  return (
    <DrawPage
      activity={currentActivity}
      onNext={() => console.log('Siguiente actividad')}
      onPrevious={() => console.log('Anterior actividad')}
    />
  );
}

/**
 * Ejemplo 2: Página con navegación entre múltiples actividades de dibujo
 */
export function DrawActivityCarouselExample() {
  const drawActivities = dadoFeature.activities.draw || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  if (drawActivities.length === 0) {
    return <div>No hay actividades de dibujo disponibles</div>;
  }

  const currentActivity = drawActivities[currentIndex];
  const isLastActivity = currentIndex === drawActivities.length - 1;
  const isFirstActivity = currentIndex === 0;

  const handleNext = () => {
    if (!isLastActivity) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (!isFirstActivity) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      {/* Indicador de progreso */}
      <div className="text-center mb-4 text-gray-600">
        Actividad {currentIndex + 1} de {drawActivities.length}
      </div>

      <DrawPage
        activity={currentActivity}
        onNext={!isLastActivity ? handleNext : undefined}
        onPrevious={!isFirstActivity ? handlePrevious : undefined}
      />
    </div>
  );
}

/**
 * Ejemplo 3: Usar DrawCanvas directamente (sin DrawPage)
 * Útil si quieres crear una interfaz personalizada
 */
export function CustomDrawInterfaceExample() {
  const activity: DrawActivity = {
    id: 'custom-1',
    title: 'Mi actividad personalizada',
    description: 'Esta es una actividad de dibujo personalizada',
    letter: 'A',
    instructions: 'Dibuja la letra A en el lienzo',
    difficulty: 'easy',
  };

  return (
    <div className="p-8 bg-white">
      <h1>{activity.title}</h1>
      <p>{activity.instructions}</p>

      {/* Solo el lienzo sin la página completa */}
      <DrawCanvas
        letter={activity.letter}
        width={800}
        height={500}
        strokeWidth={4}
        strokeColor="#000000"
        watermarkOpacity={0.2}
      />
    </div>
  );
}

/**
 * Ejemplo 4: Integración con routing dinámico
 *
 * Para usar en router.tsx, podrías hacer algo como:
 *
 * {
 *   path: '/letters/:letterSlug/draw/:activityId',
 *   element: <DrawActivityDynamicPage />
 * }
 */
const featuresMapForExample = {
  dado: dadoFeature,
  lola: lolaFeature,
  mama: mamaFeature,
  // ... más features
};

export function DrawActivityDynamicPage() {
  const { letterSlug, activityId } = useParams<{
    letterSlug: string;
    activityId: string;
  }>();

  const feature =
    featuresMapForExample[letterSlug as keyof typeof featuresMapForExample];
  const drawActivities = feature?.activities.draw || [];
  const activity = drawActivities.find((a: DrawActivity) => a.id === activityId);

  if (!activity) {
    return <div>Actividad no encontrada</div>;
  }

  return (
    <DrawPage
      activity={activity}
      onNext={() => console.log('Siguiente')}
      onPrevious={() => console.log('Anterior')}
    />
  );
}
