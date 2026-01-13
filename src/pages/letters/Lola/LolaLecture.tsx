import { Laguna, Lola, Luna, Pala } from '@/assets/L-Lola'
import React from 'react'

const LolaLecture
 = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white text-gray-800 leading-relaxed items-center flex flex-col text-3xl">

      {/* Parte superior */}
      <div className="mb-6">
        <p><span className='text-red-500'>lola</span> </p>
        <span className="inline-flex items-center justify-center rounded-full mx-1">
          <img src={Lola} className="w-auto h-32 inline-block" /> <p className='text-5xl'>l</p>
        </span>
        <p>
          <span className='text-red-500'>lola{''}</span> lee:
        </p>

        <p className="mt-2">
          el sol y la  {' '}
          <span className="inline-flex items-center justify-center rounded mx-1">
            <img src={Luna} className="w-auto h-16 inline-block" />
          </span>
          la lima y la sala{' '}

          la loma y la{''}
          <span className="inline-flex items-center justify-center rounded-full mx-1">
            <img src={Laguna} className="w-auto h-16 inline-block" />
          </span>
        </p>

        <p className="mt-2">
          memo y su{' '}
          <span className="inline-flex items-center justify-center rounded mx-1">
            <img src={Pala} className="w-auto h-16 inline-block" />
          </span>
        </p>
        <p>
          lila y lalo{' '}
          la ola y la ala{' '}
          la mula, la miel{' '}
        </p>
      </div>


    </div>
  )
}

export default LolaLecture
