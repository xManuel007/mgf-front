export type LectureToken =
  | { type: 'word'; text: string; highlight?: boolean }
  | { type: 'image'; src: string }
  | { type: 'space' }

export type LectureData = {
  letter: string
  mainImage: string
  content: LectureToken[][]
}

export interface DrawActivity {
  id: string
  title: string
  description: string
  letter: string
  instructions: string
  difficulty: 'easy' | 'medium' | 'hard'
}

export type Feature = {
  slug: string
  activities: {
    lecture: LectureData
    draw?: DrawActivity[]
  }
}
