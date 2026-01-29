import { Header } from '@/components/common/Header'
import { Hero } from '@/components/Home/Hero'
import { ScrollToTop } from '@/utils/Scroll'
import { Footer } from '@/components/common/Footer'
import { Outlet, useLocation } from 'react-router'

export const LayoutIndex = () => {
  const { pathname } = useLocation()
  return (
    <>
      <ScrollToTop />
      <section className="min-h-screen flex flex-col justify-center">
        <div>{pathname === '/' ? <Hero /> : <Header color="change" />}</div>
        <div className="flex-1">
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
      </section>
    </>
  )
}
