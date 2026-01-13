import React from 'react'
import { NavLink } from 'react-router'

interface PracticeCardProps {
  url: string;
  image?: React.ReactNode;
  word: string;
  color: string
}

const PracticeCard = ({url, image, word = 'Proximamente...', color = 'bg-white'}: PracticeCardProps) => {
  return (
    <NavLink to={url} className={`${color} flex flex-col h-50 w-40 p-3 border-2 justify-between rounded-lg items-center hover:bg-slate-100 hover:shadow-2xl duration-250`}>
      <div className='bg-white h-10/12 w-11/12 flex justify-center items-center '>
        {image}
      </div>
      <div>{word}</div>
    </NavLink>
  )
}

export default PracticeCard
