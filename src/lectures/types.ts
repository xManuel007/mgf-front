export type LectureToken =
  | { type: 'word'; text: string; highlight?: boolean }
  | { type: 'image'; src: string }
  | { type: 'space' }

export type LectureData = {
  letter: string
  mainImage: string
  content: LectureToken[][]
}
