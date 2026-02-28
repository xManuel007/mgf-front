import { solLecture } from './activities/lecture/lecture.data'
import { drawActivities } from './activities/draw/draw.data'

export const solFeature = {
  slug: 'sol',
  activities: {
    lecture: solLecture,
    draw: drawActivities
  }
}
