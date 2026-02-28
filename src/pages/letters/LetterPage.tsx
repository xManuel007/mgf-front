import { LecturePage } from "@/components/lecture/LecturePage"
import { DrawPage } from "@/components/draw/DrawPage"
import { featuresMap } from "@/features"
import { useParams, useSearchParams } from "react-router"
import type { LectureData, DrawActivity } from "@/features/types"

export default function LetterPage() {
  const { letter, activity } = useParams()
  const [searchParams] = useSearchParams()

  const normalizedLetter = letter?.toLowerCase()
  const feature = normalizedLetter
    ? featuresMap[normalizedLetter]
    : undefined

  if (!feature) return <div>No existe</div>

  // Obtener el tipo de actividad de params o query params
  const queryActivity = searchParams.get('activity')
  const activityKey =
    (activity as keyof typeof feature.activities) ??
    (queryActivity as keyof typeof feature.activities) ??
    'lecture'

  const activityData = feature.activities[activityKey]

  if (!activityData) return <div>No existe</div>

  // Determinar si es una actividad de lectura o dibujo basándose en la estructura de datos
  if (activityKey === 'draw' && Array.isArray(activityData)) {
    // Es un array de DrawActivity
    const drawActivity = activityData[0] as DrawActivity
    return <DrawPage activity={drawActivity} />
  }

  // Por defecto, tratar como LectureData
  return <LecturePage data={activityData as LectureData} />
}
