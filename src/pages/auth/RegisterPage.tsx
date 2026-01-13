import React from 'react'
import Button from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { NavLink } from 'react-router'

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <Card className="w-full max-w-sm shadow-lg rounded-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            Crea tu cuenta ✨
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Es rápido y sencillo
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              type="text"
              placeholder="Tu nombre"
            />
          </div>

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

          <div className="space-y-1">
            <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
            />
          </div>

          <Button className="w-full mt-2">
            Registrarse
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            ¿Ya tienes cuenta?{' '}
            <span className="underline cursor-pointer">
              <NavLink to="/login">
                Inicia sesión
              </NavLink>
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default RegisterPage
