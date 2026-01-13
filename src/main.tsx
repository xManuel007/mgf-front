import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.tsx'
import AuthLayout from './layouts/AuthLayout.tsx';
import LoginPage from './pages/auth/LoginPage.tsx';
import RegisterPage from './pages/auth/RegisterPage.tsx';
import MainLayout from './layouts/MainLayout.tsx';
import PracticesPage from './pages/practices/PracticesPage.tsx';
import SolLecture from './pages/letters/Sol/SolLecture.tsx';
import DadoLecture from './pages/letters/Dado/DadoLecture.tsx';
import MamaLecture from './pages/letters/Mama/MamaLecture.tsx';
import LolaLecture from './pages/letters/Lola/LolaLecture.tsx';
import NidoLecture from './pages/letters/Nido/NidoLecture.tsx';
import PapaLecture from './pages/letters/Papa/NidoLecture.tsx';
import TioTianLecture from './pages/letters/TioTian/TioTianLecture.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/home" element={<App />} />
          <Route path="/practices" element={<PracticesPage />} />
          <Route path="/config" element={<App />} />

          <Route path="/practices/sol" element={<SolLecture />} />
          <Route path="/practices/mama" element={<MamaLecture />} />
          <Route path="/practices/lola" element={<LolaLecture />} />
          <Route path="/practices/nido" element={<NidoLecture />} />
          <Route path="/practices/dado" element={<DadoLecture />} />
          <Route path="/practices/papa" element={<PapaLecture />} />
          <Route path="/practices/tiotian" element={<TioTianLecture />} />

        </Route>

        <Route element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>,
  </StrictMode>,
)
