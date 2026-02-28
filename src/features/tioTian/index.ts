import { tioTianLecture } from "./activities/lecture/lecture..data";
import { drawActivities } from './activities/draw/draw.data'

export const tioTianFeature = {
  slug: 'tioTian',
  activities: {
    lecture: tioTianLecture,
    draw: drawActivities
  }
}
