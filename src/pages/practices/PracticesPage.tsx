import { useState } from 'react'
import PracticeCard from '@/components/ui/practiceCard'
import { ActivitySelector } from '@/components/practices/ActivitySelector'
import { Sol } from '@/features/sol/assets'
import { Mama } from '@/features/mama/assets';
import { Lola } from '@/features/lola/assets';
import { Dado, Nido } from '@/features/dado/assets';
import { Papa } from '@/features/papa/assets';
import { TioTian } from '@/features/tioTian/assets';
import { featuresMap } from '@/features'

const PracticesList = ({ onSelectLetter }: { onSelectLetter: (letter: string) => void }) => {
  const letters = [
    { letter: 'S', color: 'bg-amber-100', slug: 'sol', name: 'Sol', image: Sol },
    { letter: 'M', color: 'bg-red-100', slug: 'mama', name: 'Mamà', image: Mama },
    { letter: 'L', color: 'bg-blue-100', slug: 'lola', name: 'Lola', image: Lola },
    { letter: 'N', color: 'bg-amber-600', slug: 'nido', name: 'Nido', image: Nido },
    { letter: 'D', color: 'bg-orange-100', slug: 'dado', name: 'Dado', image: Dado },
    { letter: 'P', color: 'bg-red-100', slug: 'papa', name: 'Papà', image: Papa },
    { letter: 'T', color: 'bg-green-100', slug: 'tiotian', name: 'Tio Tian', image: TioTian },
  ];
  return (
    [...letters].map(({letter, slug, name, image, color}) => (
      <div
        key={letter}
        onClick={() => onSelectLetter(slug)}
        className="cursor-pointer transition-transform hover:scale-105"
      >
        <PracticeCard
          url=""
          word={name}
          color={color}
          image={<img src={image} alt={name} className='h-full object-contain'/>}
        />
      </div>
    ))
  )
}


const PracticesPage = () => {
  const [selectedLetterSlug, setSelectedLetterSlug] = useState<string | null>(null)
  const [showSelector, setShowSelector] = useState(false)

  const handleSelectLetter = (slug: string) => {
    setSelectedLetterSlug(slug)
    setShowSelector(true)
  }

  const handleCloseSelector = () => {
    setShowSelector(false)
    setSelectedLetterSlug(null)
  }

  const selectedFeature = selectedLetterSlug ? featuresMap[selectedLetterSlug] : null
  const selectedLetter = selectedLetterSlug ? selectedLetterSlug.charAt(0).toUpperCase() : ''

  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50'>
      {/* Header */}
      <div className='bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 shadow-lg'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex items-center gap-3 mb-2'>
            <span className='text-4xl'>🎓</span>
            <h1 className='text-4xl font-bold'>Mis Prácticas</h1>
          </div>
          <p className='text-blue-100 mt-2 text-lg'>Selecciona una letra y elige entre lectura o escritura</p>
        </div>
      </div>

      {/* Contenido */}
      <div className='max-w-6xl mx-auto p-8'>
        {/* Grid de letras */}
        <div className='mb-12'>
          <div className='flex flex-wrap gap-4 justify-center'>
            <PracticesList onSelectLetter={handleSelectLetter} />
          </div>
        </div>

        {/* Tarjeta informativa */}
        <div className='bg-white rounded-2xl shadow-lg p-8 border-2 border-blue-100'>
          <div className='grid md:grid-cols-3 gap-6'>
            <div className='flex gap-4'>
              <div className='text-4xl'>1️⃣</div>
              <div>
                <h3 className='font-bold text-lg text-gray-800 mb-1'>Elige una letra</h3>
                <p className='text-gray-600'>Selecciona cualquier letra de arriba</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='text-4xl'>2️⃣</div>
              <div>
                <h3 className='font-bold text-lg text-gray-800 mb-1'>Escoge actividad</h3>
                <p className='text-gray-600'>Lectura (📖) o Escritura (✏️)</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='text-4xl'>3️⃣</div>
              <div>
                <h3 className='font-bold text-lg text-gray-800 mb-1'>¡A practicar!</h3>
                <p className='text-gray-600'>O usa 🎲 para elegir aleatoria</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de selector de actividad */}
      {showSelector && selectedFeature && (
        <ActivitySelector
          feature={selectedFeature}
          letter={selectedLetter}
          onClose={handleCloseSelector}
        />
      )}
    </div>
  )
}

export default PracticesPage
