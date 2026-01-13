import { Pato, Tehuacan, TioTian } from '@/assets/T-TioTian'

const TioTianLecture = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white text-gray-800 leading-relaxed items-center flex flex-col text-3xl">

      {/* Parte superior */}
      <div className="mb-6">
        <span className="inline-flex items-center justify-center rounded-full mx-1">
          <img src={TioTian} className="w-auto h-32 inline-block" /> <p className='text-5xl'>t</p>
        </span>
        <p>
          El <span className='text-red-500'>tio tian</span>
        </p>

        <p className="mt-2">
          tin tan tin tan, {' '}
          los patitos del tio tian,
          <span className="inline-flex items-center justify-center rounded mx-1">
            <img src={Pato} className="w-auto h-16 inline-block" />
          </span>
          tiene sed y no les dan{' '}
          ni tantito{' '}
          <span className="inline-flex items-center justify-center rounded-full mx-1">
            <img src={Tehuacan} className="w-auto h-16 inline-block" />
          </span>
          {'(tehuacan)'}
        </p>

        <p className="mt-2">
          el <span className='text-red-500'>tio tian</span> tenia un patito pinto el patito salia a paseo todos los dias
          ese patito es tonto, no nada, no nada.
        </p>
        <p>el <span className='text-red-500'>tio tian</span> lo puso en una tina</p>
        <p>¡si nada! ¡si nada!</p>
        <p>tiene unas telitas en las patas</p>
        <p>toma una tuna patito</p>

        <p>patito - paleta - petate</p>
        <p>elote - tapete - metate</p>
      </div>


    </div>
  )
}

export default TioTianLecture
