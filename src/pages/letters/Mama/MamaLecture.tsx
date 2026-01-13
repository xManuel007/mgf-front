import { Casa, Lima, Maiz, Mama, Memo, Mina } from '@/assets/M-Mama'
import React from 'react'

const MamaLecture = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white text-gray-800 leading-relaxed items-center flex flex-col text-3xl">

      {/* Parte superior */}
      <div className="mb-6">
        <span className="inline-flex items-center justify-center rounded-full mx-1">
          <img src={Mina} className="w-auto h-32 inline-block" /> <p className='text-5xl'>m</p>
        </span>
        <span className="inline-flex items-center justify-center rounded-full mx-1">
          <img src={Mama} className="w-auto h-32 inline-block" /> <p className='text-5xl'><span className='text-red-500'>mamá</span></p>
        </span>
        <p>
          amasa <span className='text-red-500'>mamá</span> su masa
        </p>

        <p className="mt-2">
          mimi asa mas {' '}
          <span className="inline-flex items-center justify-center rounded mx-1">
            <img src={Maiz} className="w-auto h-16 inline-block" />
          </span>
          memo se asoma a su{' '}
          <span className="inline-flex items-center justify-center rounded-full mx-1">
            <img src={Casa} className="w-auto h-16 inline-block" />
          </span>
          y ese es su{''}
          <span className="inline-flex items-center justify-center rounded-full mx-1">
            <img src={Memo} className="w-auto h-16 inline-block" />
          </span>
        </p>

        <p className="mt-2">
          <span className='text-red-500'>mamá</span> ama a memo{' '}
          ema mima a mimi{' '}
          esa{' '}
          <span className="inline-flex items-center justify-center rounded mx-1">
            <img src={Lima} className="w-auto h-16 inline-block" />
          </span>
          es mia
        </p>
        <p>
          mi mesa{' '}
          mi masa
        </p>
      </div>


    </div>
  )
}

export default MamaLecture
