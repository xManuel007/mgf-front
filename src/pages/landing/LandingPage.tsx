import { NavLink } from 'react-router'

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50 font-sans">

      {/* HERO */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 max-w-3xl leading-tight">
          Aprende a leer con un método claro, estructurado y acompañado.
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          Una experiencia digital basada en el método global fonético,
          diseñada para que el adulto guíe y el niño avance con seguridad.
        </p>

        <NavLink
          to="/login"
          className="mt-10 px-10 py-5 text-lg rounded-2xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform"
        >
          Iniciar sesión
        </NavLink>

      </section>

      {/* INFO SECTION */}
      <section className="max-w-5xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-2 gap-10">

          <div className="space-y-3">
            <h2 className="font-semibold text-gray-800 text-xl">
              Metodología estructurada
            </h2>
            <p className="text-gray-600">
              Cada lección sigue una secuencia progresiva.
              El adulto acompaña el proceso y la app refuerza el aprendizaje
              mediante lectura guiada y actividades prácticas.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-semibold text-gray-800 text-xl">
              Aprendizaje en contexto
            </h2>
            <p className="text-gray-600">
              Las letras se presentan dentro de palabras e historias,
              favoreciendo la comprensión antes que la memorización aislada.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-semibold text-gray-800 text-xl">
              Motivación constante
            </h2>
            <p className="text-gray-600">
              Ilustraciones y dinámicas interactivas mantienen la atención
              y fortalecen la asociación entre sonido y significado.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-semibold text-gray-800 text-xl">
              Refuerzo visual y práctico
            </h2>
            <p className="text-gray-600">
              Se destacan sílabas clave y se integran ejercicios
              que consolidan el aprendizaje de manera natural.
            </p>
          </div>

        </div>

      </section>

    </main>
  )
}

export default LandingPage
