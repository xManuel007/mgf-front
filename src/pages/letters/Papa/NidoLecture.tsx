import { Palma, Papa, Pina, Pino } from '@/assets/P-Papa'
import React from 'react'

const PapaLecture
 = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white text-gray-800 leading-relaxed items-center flex flex-col text-3xl">

      {/* Parte superior */}
      <div className="mb-6">
        <span className="inline-flex items-center justify-center rounded-full mx-1">
          <img src={Papa} className="w-auto h-32 inline-block" /> <p className='text-5xl'>p</p>
        </span>
        <p>
          <span className='text-red-500'>papá</span>
        </p>

        <p className="mt-2">
          el <span className='text-red-500'>papá</span> de pepe poda los {' '}
          <span className="inline-flex items-center justify-center rounded mx-1">
            <img src={Pino} className="w-auto h-16 inline-block" />
          </span>
          los nenes le piden{' '}
          <span className="inline-flex items-center justify-center rounded-full mx-1">
            <img src={Pina} className="w-auto h-16 inline-block" />
          </span>
          y pepinos
        </p>

        <p className="mt-2">
          una paloma posó en una{' '}
          <span className="inline-flex items-center justify-center rounded mx-1">
            <img src={Palma} className="w-auto h-16 inline-block" />
          </span>
        </p>
        <p>
          al perro le pidio mil pelos de su piel, el puma se los dio al sapo
          le pidio dos mil no el el sapito, el pelo no sale en su piel.
        </p>
      </div>



    </div>
  )
}

export default PapaLecture
