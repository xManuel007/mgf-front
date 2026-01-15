import { NavLink } from 'react-router'

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6 font-sans">
      <section className="max-w-3xl bg-white rounded-2xl shadow-lg p-8 space-y-8">

        <header className="text-center space-y-3">
          <h1 className="text-3xl font-bold text-gray-800">
            Una app para aprender a leer, paso a paso
          </h1>
          <p className="text-gray-600 text-lg">
            Basada en metodologías clásicas de lecto-escritura, adaptadas al mundo digital.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="space-y-3">
            <h2 className="font-semibold text-gray-800 text-xl">
              Metodología
            </h2>
            <p className="text-gray-600">
              Cada lección está pensada como una experiencia guiada.
              El adulto acompaña, la app apoya y el niño avanza a su ritmo,
              reforzando la lectura y la escritura de forma natural.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-semibold text-gray-800 text-xl">
              Motivación
            </h2>
            <p className="text-gray-600">
              Las historias, palabras e imágenes despiertan curiosidad.
              Las vocales y consonantes se presentan dentro de narraciones
              vivas, para que leer se sienta espontáneo y divertido.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-semibold text-gray-800 text-xl">
              Práctica
            </h2>
            <p className="text-gray-600">
              No se memoriza una letra aislada: se descubre en contexto.
              Las actividades están diseñadas para que el niño identifique,
              repita y use lo aprendido de forma activa.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-semibold text-gray-800 text-xl">
              Refuerzo del aprendizaje
            </h2>
            <p className="text-gray-600">
              Las letras y sílabas clave se destacan visualmente.
              Las ilustraciones y ejercicios fomentan la participación,
              la creatividad y la consolidación del aprendizaje.
            </p>
          </div>

        </div>

        <footer className="pt-6 flex justify-center">
          <NavLink
            to="/login"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Comenzar
          </NavLink>
        </footer>

      </section>
    </main>
  )
}

export default LandingPage
