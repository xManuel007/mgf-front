import { useState } from 'react'
import { useNavigate } from 'react-router'
import type { Feature } from '@/features/types'
import { Sol } from '@/features/sol/assets'
import { Mama } from '@/features/mama/assets'
import { Lola } from '@/features/lola/assets'
import { Dado, Nido } from '@/features/dado/assets'
import { Papa } from '@/features/papa/assets'
import { TioTian } from '@/features/tioTian/assets'

interface ActivitySelectorProps {
  feature: Feature
  letter: string
  onClose?: () => void
}

export function ActivitySelector({ feature, letter, onClose }: ActivitySelectorProps) {
  const navigate = useNavigate()
  const [selectedActivity, setSelectedActivity] = useState<'lecture' | 'draw'>('lecture')

  // Obtener las actividades disponibles
  const hasLecture = !!feature.activities.lecture
  const hasDraw = !!feature.activities.draw && feature.activities.draw.length > 0

  const handleSelectActivity = (activityType: 'lecture' | 'draw') => {
    setSelectedActivity(activityType)
  }

  const handleStart = () => {
    const letterSlug = feature.slug
    navigate(`/practices/${letterSlug}?activity=${selectedActivity}`)
    onClose?.()
  }


  const handleLetterImage = (letter: string) => {
    switch (letter) {
      case 'S':
        return Sol
      case 'M':
        return Mama
      case 'L':
        return Lola
      case 'N':
        return Nido
      case 'D':
        return Dado
      case 'P':
        return Papa
      case 'T':
        return TioTian
      default:
        return ''
    }
  }

  const handleRandomActivity = () => {
    // Seleccionar una actividad aleatoria
    const activities = []
    if (hasLecture) activities.push('lecture')
    if (hasDraw) activities.push('draw')

    if (activities.length === 0) return

    const randomActivity = activities[Math.floor(Math.random() * activities.length)] as 'lecture' | 'draw'
    const letterSlug = feature.slug
    navigate(`/practices/${letterSlug}?activity=${randomActivity}`)
    onClose?.()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        {/* Encabezado */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-3">
            <img alt={`${letter} icon`} src={handleLetterImage(letter)} className="mx-auto h-16 w-auto"/>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">
            Letra {letter}
          </h2>
          <p className="text-gray-600 mt-2">Elige una actividad para practicar</p>
        </div>

        {/* Selección de actividad */}
        <div className="space-y-3 mb-8">
          {/* Opción Lecture */}
          {hasLecture && (
            <button
              onClick={() => handleSelectActivity('lecture')}
              className={`w-full p-4 rounded-xl border-2 transition-all transform hover:scale-105 ${selectedActivity === 'lecture'
                ? 'border-blue-500 bg-blue-100 shadow-lg'
                : 'border-gray-300 bg-white hover:border-blue-400 hover:shadow-md'
                }`}
            >
              <div className="flex items-center gap-3">
                <div className="text-3xl">📖</div>
                <div className="text-left">
                  <div className="font-bold text-gray-800">Lectura</div>
                  <div className="text-sm text-gray-600">Lee e identifica imágenes</div>
                </div>
              </div>
            </button>
          )}

          {/* Opción Draw */}
          {hasDraw && (
            <button
              onClick={() => handleSelectActivity('draw')}
              className={`w-full p-4 rounded-xl border-2 transition-all transform hover:scale-105 ${selectedActivity === 'draw'
                ? 'border-green-500 bg-green-100 shadow-lg'
                : 'border-gray-300 bg-white hover:border-green-400 hover:shadow-md'
                }`}
            >
              <div className="flex items-center gap-3">
                <div className="text-3xl">✏️</div>
                <div className="text-left">
                  <div className="font-bold text-gray-800">Dibujar</div>
                  <div className="text-sm text-gray-600">Practica escribiendo la letra</div>
                </div>
              </div>
            </button>
          )}
        </div>

        {/* Botones de acción */}
        <div className="space-y-3">
          <button
            onClick={handleStart}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-4 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-md"
          >
            ▶️ Comenzar Actividad
          </button>

          <button
            onClick={handleRandomActivity}
            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold py-4 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-md flex items-center justify-center gap-2"
          >
            <span>🎲</span>
            <span>Actividad Aleatoria</span>
          </button>

          <button
            onClick={onClose}
            className="w-full bg-gray-400 text-white font-bold py-3 rounded-xl hover:bg-gray-500 transition-all transform hover:scale-105"
          >
            ✕ Cancelar
          </button>
        </div>

        {/* Info de actividades disponibles */}
        <div className="mt-6 p-4 bg-gray-100 rounded-lg text-sm text-gray-700">
          <p>
            {hasLecture && hasDraw && '✓ Ambas actividades disponibles'}
            {hasLecture && !hasDraw && '✓ Solo lectura disponible'}
            {!hasLecture && hasDraw && '✓ Solo dibujo disponible'}
          </p>
        </div>
      </div>
    </div>
  )
}
