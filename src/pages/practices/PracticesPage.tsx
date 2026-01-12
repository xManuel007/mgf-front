import PracticeCard from '@/components/ui/practiceCard'
import React from 'react'


const PracticesList = () => {
  const letters = [
    { letter: 'S', color: 'yellow', url: '/practices/sol', name: 'Sol', image: '/images/sol.png' },
    { letter: 'M', color: 'yellow', url: '/practices/mama', name: 'Mamà', image: '/images/sol.png' },
    { letter: 'L', color: 'yellow', url: '/practices/lola', name: 'Lola', image: '/images/sol.png' },
    { letter: 'N', color: 'yellow', url: '/practices/nido', name: 'Nido', image: '/images/sol.png' },
    { letter: 'D', color: 'yellow', url: '/practices/dado', name: 'Dado', image: '/images/sol.png' },
    { letter: 'P', color: 'yellow', url: '/practices/papa', name: 'Papà', image: '/images/sol.png' },
    { letter: 'T', color: 'yellow', url: '/practices/tiotia', name: 'Tio Tian', image: '/images/sol.png' },
  ];
  return (
    [...letters].map(({letter, url, name, image}) => (
      <PracticeCard
        key={letter}
        url={url}
        word={name}
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
