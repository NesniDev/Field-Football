
import { useRoutes,  useLocation } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { Reservations } from '@/pages/Reservations'
import { Fields } from '@/pages/Fields'
import { Tournaments } from '@/pages/Tournaments'
import { Contact } from '@/pages/Contact'
import { NotFound } from '@/pages/NotFound'
import { Footer } from '@/components/common/Footer'
import { DetailsField } from '@/pages/DetailsField'
import { Header } from '@/components/common/Header'
import { Hero } from '@/components/Home/Hero'
import { FAQ } from '@/pages/FAQ'
import { ScrollToTop } from './utils/Scroll.ts'
import { Payment } from './pages/Payment'
import { Receipt } from '@/pages/Receipt.tsx'
import { useEffect } from 'react'
import useFieldsFetchStore from './store/useFieldsFetch.store.ts'
import useTournamentStore from './store/useTournament.store.ts'

const AppRoutes = () => {
  const {fetchData} = useFieldsFetchStore()
  const {fetchData: fetchTournamentData} = useTournamentStore()

  useEffect(()=>{
    fetchData()
  }, [fetchData])
  
  useEffect(()=>{
    fetchTournamentData()
  }, [fetchTournamentData])
 
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/reservations',
      element: <Reservations />
    },
    {
      path: '/fields',
      element: <Fields />
    },
    {
      path: '/tournaments',
      element: <Tournaments />
    },
    {
      path: '/payment',
      element: <Payment />
    },
    {
      path: '/receipt',
      element: <Receipt />
    },
    {
      path: '/faq',
      element: <FAQ />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '*',
      element: <NotFound />
    },
    {
      path: '/field/:slug',
      element: <DetailsField />
    }
    

  ])
  
  return routes
    
}

function App() {
  const {pathname} = useLocation();
  return (
    <>
      <ScrollToTop />
      <section className='min-h-screen flex flex-col justify-center'>
        <div>
          {pathname === '/' ? <Hero /> : <Header color="change"/>}
        </div>
        <div className='flex-1'>
          <AppRoutes />
        </div>
        <div>
          <Footer />
        </div>
      </section>
    </>
  )
}

export default App
