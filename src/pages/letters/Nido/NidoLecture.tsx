import { Nido } from '@/assets/D-Dado'
import { Antena, Campana, Cuna } from '@/assets/N-Nido'

const NidoLecture = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white text-gray-800 leading-relaxed items-center flex flex-col text-3xl">

      {/* Parte superior */}
      <div className="mb-6">
        <p className='text-5xl'>n</p>
        <p className='text-5xl'><span className='text-red-500'>nido</span></p>
        <span className="inline-flex items-center justify-center rounded-full mx-1">
          <img src={Nido} className="w-auto h-32 inline-block" />
        </span>

        <p className="mt-2">
          La {' '}
          <span className="inline-flex items-center justify-center rounded mx-1">
            <img src={Campana} className="w-auto h-16 inline-block" />
          </span>
          suena{' '}
          en la loma se asoma la luna{' '}
          salen susana y elena{' '}
          y el nene mama en su{' '}
          <span className="inline-flex items-center justify-center rounded-full mx-1">
            <img src={Cuna} className="w-auto h-16 inline-block" />
          </span>
        </p>

        <p className="mt-2">
          Ese es el lino{' '}
          ese es su{' '}
          <span className="inline-flex items-center justify-center rounded mx-1">
            <img src={Antena} className="w-auto h-16 inline-block" />
          </span>
        </p>
        <p>
          elena usa limon{' '}
          los monos y los enanos{' '}
        </p>
        <p>mano   salon  lima</p>
        <p>minino   mono  mina</p>
        <p>alon   lana  melon</p>
        <p>limon   leon  linon</p>
      </div>

    </div>
  )
}

export default NidoLecture
