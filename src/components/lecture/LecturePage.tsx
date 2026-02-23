import { useEffect, useMemo, useState } from 'react'
import type { LectureData, LectureToken } from '@/features/types'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'
import PauseRoundedIcon from '@mui/icons-material/PauseRounded'
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded'

type FlatWordIndex = {
  line: number
  index: number
}

export const LecturePage = ({ data }: { data: LectureData }) => {

  const tokensFlat = useMemo<FlatWordIndex[]>(() => {
    const result: FlatWordIndex[] = []
    data.content.forEach((line, li) =>
      line.forEach((t, ti) => {
        if (t.type === 'word' || t.type === 'image') {
          result.push({ line: li, index: ti })
        }
      })
    )
    return result
  }, [data])

  const [currentWord, setCurrentWord] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState(700)
  const [showSpeed, setShowSpeed] = useState(false)

  const SPEED_PRESETS = [
    { label: '🐢', wpm: 60 },
    { label: '🐇', wpm: 90 },
    { label: '🚀', wpm: 120 },
  ]

  const speedFromWPM = (wpm: number) => Math.round(60000 / wpm)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentWord(w => {
        if (w + 1 >= tokensFlat.length) {
          setIsPlaying(false)
          return w
        }
        return w + 1
      })
    }, speed)

    return () => clearInterval(interval)
  }, [isPlaying, speed, tokensFlat.length])

  return (
    <div className="max-w-md mx-auto text-3xl flex flex-col items-center relative">

      {/* Barra de progreso sticky */}
      <div className="sticky top-0 w-full bg-white z-20">
        <div className="h-1 bg-gray-200">
          <div
            className="h-1 bg-blue-500 transition-all duration-300"
            style={{ width: `${(currentWord / tokensFlat.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Header */}
      <div className="p-6 flex items-center gap-3">
        <p className="text-5xl">{data.letter}</p>
        <img src={data.mainImage} className="h-32" />
      </div>

      {/* Contenido lectura */}
      <div className="px-6 pb-32 w-full">
        {data.content.map((line, li) => (
          <p key={li} className="mb-3">
            {line.map((token, ti) =>
              renderToken({
                token,
                lineIndex: li,
                tokenIndex: ti,
                tokensFlat,
                currentWord,
              })
            )}
          </p>
        ))}
      </div>

      {/* Panel velocidad flotante */}
      {showSpeed && (
        <div className="fixed bottom-24 right-6 bg-white shadow-lg rounded-xl p-3 flex gap-2 z-40">
          {SPEED_PRESETS.map(({ label, wpm }) => {
            const isSelected = speed === speedFromWPM(wpm)

            return (
              <button
                key={label}
                onClick={() => {
                  setSpeed(speedFromWPM(wpm))
                  setShowSpeed(false)
                }}
                className={`
            text-2xl px-3 py-1 rounded-lg transition-all
            ${isSelected
                    ? 'bg-blue-500 text-white scale-110 shadow-md'
                    : 'hover:bg-gray-100'}
          `}
              >
                {label}
              </button>
            )
          })}
        </div>
      )}

      {/* Menú inferior fijo */}
      <div className="fixed bottom-10 left-0 right-0 bg-white/90 backdrop-blur-md border-t py-3 z-30">
        <div className="max-w-md mx-auto px-4 flex items-center gap-3">

          {/* PLAY 80% */}
          <button
            onClick={() => setIsPlaying(p => !p)}
            className={`
              flex-1 h-14 rounded-full flex items-center justify-center
              text-white text-lg font-semibold transition
              ${isPlaying ? 'bg-red-300' : 'bg-green-300'}
            `}
          >
            {isPlaying ? <PauseRoundedIcon color='error' fontSize='large' /> : <PlayArrowRoundedIcon color='success' fontSize='large' />}
          </button>

          {/* RESET 10% */}
          <button
            onClick={() => {
              setCurrentWord(0)
              setIsPlaying(false)
            }}
            className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600"
          >
            <ReplayRoundedIcon />
          </button>

          {/* CONFIG / SPEED 10% */}
          <button
            onClick={() => setShowSpeed(s => !s)}
            className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-2xl"
          >
            {
              SPEED_PRESETS.find(p => speed === speedFromWPM(p.wpm))?.label
            }
          </button>

        </div>
      </div>
    </div>
  )
}

const renderToken = ({
  token,
  lineIndex,
  tokenIndex,
  tokensFlat,
  currentWord,
}: {
  token: LectureToken
  lineIndex: number
  tokenIndex: number
  tokensFlat: { line: number; index: number }[]
  currentWord: number
}) => {

  const flatIndex = tokensFlat.findIndex(
    t => t.line === lineIndex && t.index === tokenIndex
  )

  const isActive = flatIndex === currentWord
  const isRead = flatIndex < currentWord

  if (token.type === 'word') {
    return (
      <span
        key={`${lineIndex}-${tokenIndex}`}
        className={`
          inline-block transition-all duration-200
          ${isActive ? 'text-blue-600 bg-blue-100 rounded-md px-1 scale-110' : ''}
          ${isRead ? 'text-gray-400' : ''}
          ${token.highlight ? 'font-bold' : ''}
        `}
      >
        {token.text}
      </span>
    )
  }

  if (token.type === 'image') {
    return (
      <span
        key={`${lineIndex}-${tokenIndex}`}
        className={`
          inline-block rounded-lg p-1 transition
          ${isActive ? 'bg-blue-100 scale-110' : ''}
        `}
      >
        <img
          src={token.src}
          className={`
            inline h-16 mx-1 transition-all duration-200
            ${isActive ? 'scale-125 drop-shadow-lg' : ''}
            ${isRead ? 'opacity-50' : ''}
          `}
        />
      </span>
    )
  }

  return <span key={`${lineIndex}-${tokenIndex}`}> </span>
}
