import { LecturePage } from "@/components/lecture/LecturePage"
import { featuresMap } from "@/features"
import { useParams } from "react-router"

export default function LetterPage() {
  const { letter, activity } = useParams()

  const normalizedLetter = letter?.toLowerCase()
  const feature = normalizedLetter
    ? featuresMap[normalizedLetter]
    : undefined

  if (!feature) return <div>No existe</div>

  const activityKey =
    (activity as keyof typeof feature.activities) ?? 'lecture'

  const activityData = feature.activities[activityKey]

  if (!activityData) return <div>No existe</div>

  return <LecturePage data={activityData} />
}
