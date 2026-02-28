import { DrawCanvas } from './DrawCanvas';
import type { DrawActivity } from '../../features/types';

interface DrawPageProps {
  activity: DrawActivity;
  onNext?: () => void;
  onPrevious?: () => void;
}

export function DrawPage({ activity, onNext, onPrevious }: DrawPageProps) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-orange-50 to-white px-3 sm:px-6 lg:px-8 pt-6 pb-28">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">{activity.title}</h1>
          <p className="text-base sm:text-lg text-gray-600 mb-4">{activity.description}</p>
          <p className="text-base text-gray-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            📝 {activity.instructions}
          </p>
        </div>

        {/* Canvas de dibujo */}
        <div className="bg-white rounded-lg shadow-lg p-3 sm:p-6 mb-8">
          <DrawCanvas letter={activity.letter} width={600} height={400} />
        </div>

        {/* Controles de navegación */}
        <div className="flex gap-4 justify-between">
          <button
            onClick={onPrevious}
            disabled={!onPrevious}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            ← Anterior
          </button>

          <button
            onClick={onNext}
            disabled={!onNext}
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Siguiente →
          </button>
        </div>
      </div>
    </div>
  );
}
