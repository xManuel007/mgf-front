import { nidoLecture } from './activities/lecture/lecture.data'
import { drawActivities } from './activities/draw/draw.data'

export const nidoFeature = {
  slug: 'nido',
  activities: {
    lecture: nidoLecture,
    draw: drawActivities
  }
}
