import { LecturePage } from '@/components/lecture/LecturePage'
import { lecturesMap } from '@/lectures'

type Props = {
  slug: keyof typeof lecturesMap
}

export const LetterPage = ({ slug }: Props) => {
  const lectureData = lecturesMap[slug]

  if (!lectureData) {
    return <div>No existe la lección</div>
  }

  return <LecturePage data={lectureData} />
}
