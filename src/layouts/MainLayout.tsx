import Header from '@/components/layout/Header'
import Navbar from '@/components/layout/Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className="h-screen">
      <Header />

      <main className="pt-14 pb-20 overflow-y-auto h-full">
        <Outlet />
      </main>

      <Navbar />
    </div>
  )
}

export default MainLayout
