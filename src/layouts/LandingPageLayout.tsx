import { Outlet } from 'react-router'

const LandingPageLayout = () => {
  return (
    <div className="h-screen">
      <main className="pt-14  h-full">
        <Outlet />
      </main>
    </div>
  )
}

export default LandingPageLayout
