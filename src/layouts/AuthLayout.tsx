import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  )
}

export default AuthLayout
