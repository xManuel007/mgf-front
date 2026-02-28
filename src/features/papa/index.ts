import { papaLecture } from './activities/lecture/lecture.data'
import { drawActivities } from './activities/draw/draw.data'

export const papaFeature = {
  slug: 'papa',
  activities: {
    lecture: papaLecture,
    draw: drawActivities
  }
}
