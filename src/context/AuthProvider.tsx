import React, { useState } from 'react'
import { AuthContext } from './auth-context'
import type { User } from './auth-context'

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  const login = () => {
    setUser({ id: 1, name: 'User User' })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
