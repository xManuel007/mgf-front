import PracticeCard from '@/components/ui/practiceCard'
import React from 'react'
import { Sol } from '@/assets/S-Sol'
import { Mama } from '@/assets/M-Mama';
import { Lola } from '@/assets/L-Lola';
import { Dado, Nido } from '@/assets/D-Dado';
import { Papa } from '@/assets/P-Papa';
import { TioTian } from '@/assets/T-TioTian';

const PracticesList = () => {
  const letters = [
    { letter: 'S', color: 'bg-amber-100', url: '/practices/sol', name: 'Sol', image: Sol },
    { letter: 'M', color: 'bg-red-100', url: '/practices/mama', name: 'Mamà', image: Mama },
    { letter: 'L', color: 'bg-blue-100', url: '/practices/lola', name: 'Lola', image: Lola },
    { letter: 'N', color: 'bg-amber-600', url: '/practices/nido', name: 'Nido', image: Nido },
    { letter: 'D', color: 'bg-orange-100', url: '/practices/dado', name: 'Dado', image: Dado },
    { letter: 'P', color: 'bg-red-100', url: '/practices/papa', name: 'Papà', image: Papa },
    { letter: 'T', color: 'bg-green-100', url: '/practices/tiotian', name: 'Tio Tian', image: TioTian },
  ];
  return (
    [...letters].map(({letter, url, name, image, color}) => (
      <PracticeCard
        key={letter}
        url={url}
        word={name}
        color={color}
        image={<img src={image} alt={name} className='h-full object-contain'/>}
      />
    ))
  )
}


const PracticesPage = () => {



  return (
    <div className='w-screen h-full flex flex-wrap gap-4 p-4 justify-center'>
      <PracticesList />
    </div>
  )
}

export default PracticesPage
