import Header from '@/components/layout/Header'
import Navbar from '@/components/layout/Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='flex justify-between flex-col h-screen'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Navbar />
    </div>
  )
}

export default MainLayout
