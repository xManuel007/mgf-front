import { useNavigate } from 'react-router'
import Button from '@/components/ui/button'

function App() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-linear-to-br from-sky-100 via-blue-100 to-indigo-100 flex flex-col items-center justify-center px-6 text-center">

      {/* Icono / Mascota */}
      <div className="w-28 h-28 bg-white rounded-full shadow-lg flex items-center justify-center text-5xl mb-6">
        📖
      </div>

      {/* Título */}
      <h1 className="text-3xl font-bold text-blue-700 mb-3">
        ¡Vamos a aprender!
      </h1>

      <p className="text-blue-600 max-w-sm mb-8">
        Practica lectura con el método global fonético de forma divertida.
      </p>

      {/* Botón principal */}
      <Button
        onClick={() => navigate('/practices')}
        className="h-14 px-8 rounded-2xl text-lg bg-green-400 hover:bg-green-500 transition-transform hover:scale-105 shadow-md"
      >
        Comenzar a practicar 🚀
      </Button>

    </div>
  )
}

export default App
