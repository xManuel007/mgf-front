import PracticeCard from '@/components/ui/practiceCard'
import { Sol } from '@/features/sol/assets'
import { Mama } from '@/features/mama/assets';
import { Lola } from '@/features/lola/assets';
import { Dado, Nido } from '@/features/dado/assets';
import { Papa } from '@/features/papa/assets';
import { TioTian } from '@/features/tioTian/assets';

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
