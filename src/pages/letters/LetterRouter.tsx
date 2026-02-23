import { useParams } from 'react-router'
import { lecturesMap } from '@/lectures'
import { LecturePage } from '@/components/lecture/LecturePage'

export default function LetterRouter() {
  const { slug } = useParams()

  const lectureData = lecturesMap[slug as keyof typeof lecturesMap]

  if (!lectureData) {
    return <div>No existe esta práctica</div>
  }

  return <LecturePage data={lectureData} />
}
