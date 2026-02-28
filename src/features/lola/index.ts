import { lolaLecture } from './activities/lecture/lecture.data'
import { drawActivities } from './activities/draw/draw.data'

export const lolaFeature = {
  slug: 'lola',
  activities: {
    lecture: lolaLecture,
    draw: drawActivities
  }
}
