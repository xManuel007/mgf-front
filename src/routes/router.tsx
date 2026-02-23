import { createBrowserRouter } from 'react-router'

import MainLayout from '@/layouts/MainLayout'
import AuthLayout from '@/layouts/AuthLayout'

import App from '@/App'
import PracticesPage from '@/pages/practices/PracticesPage'

import LoginPage from '@/pages/auth/LoginPage'
import RegisterPage from '@/pages/auth/RegisterPage'

import ProtectedRoute from './ProtectedRoutes'
import LandingPageLayout from '@/layouts/LandingPageLayout'
import LandingPage from '@/pages/landing/LandingPage'
import LetterRouter from '@/pages/letters/LetterRouter'

export const router = createBrowserRouter([
  {
    element: <LandingPageLayout />,
    children: [
      { path: '/', element: <LandingPage /> },
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

      {
        path: '/practices/:slug',
        element: <LetterRouter />
      },
    ],
  },

])
