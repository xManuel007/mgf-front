import type { LectureData, LectureToken } from "@/lectures/types"

export const LecturePage = ({ data }: { data: LectureData }) => {
  return (
    <div className="max-w-md mx-auto p-6 text-3xl flex flex-col items-center">
      <div className="flex items-center gap-3 mb-6">
        <p className="text-5xl">{data.letter}</p>
        <img src={data.mainImage} className="h-32" />
      </div>

      {data.content.map((line, i) => (
        <p key={i} className="mb-2">
          {line.map((token, j) => renderToken(token, j))}
        </p>
      ))}
    </div>
  )
}

const renderToken = (token: LectureToken, key: number) => {
  if (token.type === 'word') {
    return (
      <span key={key} className={token.highlight ? 'text-red-500' : ''}>
        {token.text}
      </span>
    )
  }

  if (token.type === 'image') {
    return <img key={key} src={token.src} className="inline h-16 mx-1" />
  }

  return <span key={key}> </span>
}
