import { Navigate } from 'react-router'
import { useAuth } from '@/context/useAuth'
import type { ReactNode } from 'react'

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth()

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute
