import Button from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <Card className="w-full max-w-sm shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            Bienvenido 👋
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Inicia sesión para continuar
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="email">Correo</Label>
            <Input
              id="email"
              type="email"
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
            />
          </div>

          <Button onClick={handleLogin} className="w-full mt-2">
            Iniciar sesión
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            ¿No tienes cuenta?{' '}
            <span className="underline cursor-pointer">
              <NavLink to="/register">
                Regístrate
              </NavLink>
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginPage
