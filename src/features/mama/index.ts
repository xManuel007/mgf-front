import { mamaLecture } from './activities/lecture/lecture.data'
import { drawActivities } from './activities/draw/draw.data'

export const mamaFeature = {
  slug: 'mama',
  activities: {
    lecture: mamaLecture,
    draw: drawActivities
  }
}
