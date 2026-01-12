import React from 'react'
import { NavLink } from 'react-router'

interface PracticeCardProps {
  url: string;
  image?: React.ReactNode;
  word: string;
}

const PracticeCard = ({url, image, word = 'Proximamente...'}: PracticeCardProps) => {
  return (
    <NavLink to={url} className='flex flex-col h-50 w-40 bg-white shadow-2xl p-3 justify-between rounded-lg items-center'>
      <div className='bg-slate-300 h-10/12 w-11/12 flex justify-center items-center'>
        {image}
      </div>
      <div>{word}</div>
    </NavLink>
  )
}

export default PracticeCard
