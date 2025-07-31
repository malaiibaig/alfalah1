import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Navbar from '@/components/common/navbar'
import Footer from '@/components/common/footer'
import Newsletter from '@/components/common/newsletter'

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet />
      <Newsletter />
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
})
