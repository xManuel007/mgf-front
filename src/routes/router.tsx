import { createBrowserRouter } from 'react-router'

import MainLayout from '@/layouts/MainLayout'
import AuthLayout from '@/layouts/AuthLayout'

import App from '@/App'
import PracticesPage from '@/pages/practices/PracticesPage'

import LoginPage from '@/pages/auth/LoginPage'
import RegisterPage from '@/pages/auth/RegisterPage'

import SolLecture from '@/pages/letters/Sol/SolLecture'
import MamaLecture from '@/pages/letters/Mama/MamaLecture'
import LolaLecture from '@/pages/letters/Lola/LolaLecture'
import NidoLecture from '@/pages/letters/Nido/NidoLecture'
import DadoLecture from '@/pages/letters/Dado/DadoLecture'
import PapaLecture from '@/pages/letters/Papa/NidoLecture'
import TioTianLecture from '@/pages/letters/TioTian/TioTianLecture'
import ProtectedRoute from './ProtectedRoutes'

export const router = createBrowserRouter([
  {
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: '/home', element: <App /> },
      { path: '/practices', element: <PracticesPage /> },
      { path: '/config', element: <App /> },

      { path: '/practices/sol', element: <SolLecture /> },
      { path: '/practices/mama', element: <MamaLecture /> },
      { path: '/practices/lola', element: <LolaLecture /> },
      { path: '/practices/nido', element: <NidoLecture /> },
      { path: '/practices/dado', element: <DadoLecture /> },
      { path: '/practices/papa', element: <PapaLecture /> },
      { path: '/practices/tiotian', element: <TioTianLecture /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
    ],
  },
])
