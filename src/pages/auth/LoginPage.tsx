import Button from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { NavLink, useNavigate } from 'react-router'
import { useAuth } from '@/context/useAuth'

const LoginPage = () => {
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = () => {
    login()
    navigate('/home', { replace: true })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-100 via-sky-100 to-indigo-100 px-4">

      <div className="w-full max-w-sm space-y-6">

        {/* Ilustración / Mascota */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center text-4xl">
            <img alt='logo' src='/mgfLogo.png'/>
          </div>
          <h1 className="text-2xl font-bold mt-4 text-center text-blue-700">
            ¡Hola!
          </h1>
          <p className="text-sm text-blue-600 text-center">
            Vamos a aprender juntos
          </p>
        </div>

        <Card className="rounded-3xl shadow-xl border-0">
          <CardContent className="space-y-5 p-6">

            <div className="space-y-2">
              <Label htmlFor="email" className="text-blue-700">
                Correo
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="correo@ejemplo.com"
                className="rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-blue-700">
                Contraseña
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="rounded-xl"
              />
            </div>

            <Button
              onClick={handleLogin}
              className="w-full mt-2 h-12 rounded-2xl text-lg bg-green-400 hover:bg-green-500 transition-transform hover:scale-105"
            >
              Entrar 🚀
            </Button>

            <p className="text-center text-sm text-blue-600">
              ¿No tienes cuenta?{' '}
              <NavLink to="/register" className="underline font-medium">
                Regístrate
              </NavLink>
            </p>

          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default LoginPage
