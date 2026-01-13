import { Dado, Nido, Sandia } from '@/assets/D-Dado'

const DadoLecture = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white text-gray-800 leading-relaxed items-center flex flex-col text-3xl">

      {/* Parte superior */}
      <div className="mb-6">
        <span className="inline-flex items-center justify-center rounded-full mx-1">
          <p className='text-5xl'>d</p>
          <img src={Dado} className="w-auto h-32 inline-block" />
          <p className='text-5xl'><span className='text-red-500'>dado</span></p>
        </span>
        <p>
          la usan los <span className='text-red-500'>dados</span>, los dedos, los dias, las damas, los nidos, los nudos, dime donde la usan los mudos y donde las sandias
        </p>

        <p className="mt-2">
          esa es la {' '}
          <span className="inline-flex items-center justify-center rounded mx-1">
            <img src={Sandia} className="w-auto h-16 inline-block" />
          </span>
          ese es un{' '}
          <span className="inline-flex items-center justify-center rounded-full mx-1">
            <img src={Nido} className="w-auto h-16 inline-block" />
          </span>
          menudo, moneda, molido, molino y minino.
        </p>

      </div>


    </div>
  )
}

export default DadoLecture
