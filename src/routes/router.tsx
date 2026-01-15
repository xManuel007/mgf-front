import { createBrowserRouter } from 'react-router'

import MainLayout from '@/layouts/MainLayout'
import AuthLayout from '@/layouts/AuthLayout'

import App from '@/App'
import PracticesPage from '@/pages/practices/PracticesPage'

import LoginPage from '@/pages/auth/LoginPage'
import RegisterPage from '@/pages/auth/RegisterPage'

import SolPage from '@/pages/letters/Sol/SolPage'
import MamaPage from '@/pages/letters/Mama/MamaPage'
import LolaPage from '@/pages/letters/Lola/LolaPage'
import NidoPage from '@/pages/letters/Nido/NidoPage'
import PapaPage from '@/pages/letters/Papa/PapaPage'
import TioTianPage from '@/pages/letters/TioTian/TioTianPage'
import ProtectedRoute from './ProtectedRoutes'
import DadoPage from '@/pages/letters/Dado/DadoPage'
import LandingPageLayout from '@/layouts/LandingPageLayout'
import LandingPage from '@/pages/landing/LandingPage'

export const router = createBrowserRouter([
  {
    element: <LandingPageLayout />,
    children: [
      {path: '/', element: <LandingPage />},
    ]
  },
  {
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
    ],
  },
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

      { path: '/practices/sol', element: <SolPage /> },
      { path: '/practices/mama', element: <MamaPage /> },
      { path: '/practices/lola', element: <LolaPage /> },
      { path: '/practices/nido', element: <NidoPage /> },
      { path: '/practices/dado', element: <DadoPage /> },
      { path: '/practices/papa', element: <PapaPage /> },
      { path: '/practices/tiotian', element: <TioTianPage /> },
    ],
  },

])
