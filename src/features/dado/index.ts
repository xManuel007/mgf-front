import { dadoLecture } from './activities/lecture/lecture.data'
import { drawActivities } from './activities/draw/draw.data'

export const dadoFeature = {
  slug: 'dado',
  activities: {
    lecture: dadoLecture,
    draw: drawActivities
  }
}
