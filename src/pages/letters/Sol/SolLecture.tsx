import { Bolso, Oso, Reboso, Rosa, Sol, Sombrero } from '@/assets/S-Sol'

const SolLecture = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white text-gray-800 leading-relaxed items-center flex flex-col text-3xl">

      {/* Parte superior */}
      <div className="mb-6">
        <span className="inline-flex items-center justify-center rounded-full mx-1">
          <img src={Sol} className="w-auto h-32 inline-block" /> <p className='text-5xl'>s</p>
        </span>
        <p>
          El{' '}

          <span className='text-red-500'>sol</span> sale y alumbra.
        </p>

        <p className="mt-2">
          Usa {' '}
          <span className="inline-flex items-center justify-center rounded mx-1">
            <img src={Bolso} className="w-auto h-16 inline-block" />
          </span>
          esa osa y su{' '}
          <span className="inline-flex items-center justify-center rounded-full mx-1">
            <img src={Sombrero} className="w-auto h-16 inline-block" />
          </span>
          ese oso.
        </p>

        <p className="mt-2">
          Así es esa{' '}
          <span className="inline-flex items-center justify-center rounded mx-1">
            <img src={Rosa} className="w-auto h-16 inline-block" />
          </span>
        </p>
        <p>
          y así ese.
          <span className="inline-flex items-center justify-center rounded mx-1">
            <img src={Reboso} className="w-auto h-16 inline-block" />
          </span>
        </p>
      </div>

      {/* Bloque inferior tipo ilustración */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-20 h-20 bg-orange-200 rounded-lg flex items-center justify-center">
          <img src={Oso} className="w-auto h-32 inline-block" />
        </div>
        <div className="flex-1">
          <p>La osa se asea.</p>
          <p>Esa osa se asea.</p>
        </div>
      </div>

      {/* Repetición tipo lectura */}
      <div className="space-y-1">
        <p>La la la</p>
        <p>Ese oso se asea</p>
        <p>Esa osa se asea</p>
        <p>Oso osa isa</p>
        <p>Ese oso esa osa</p>
      </div>

    </div>
  )
}

export default SolLecture
