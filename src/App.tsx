
import { useRoutes,  useLocation } from 'react-router-dom'
import { Home } from '@pages/Home'
import { Reservations } from '@pages/Reservations'
import { Fields } from '@pages/Fields'
import { Events } from '@pages/Events'
import { Contact } from '@pages/Contact'
import { NotFound } from '@pages/NotFound'
import { Footer } from '@components/common/Footer'
import { DetailsField } from './pages/DetailsField'
import { Header } from './components/common/Header'
import { Hero } from './components/Home/Hero'

const AppRoutes = () => {
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
      element: <Events />
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
      {pathname === '/' ? <Hero /> : <Header color="change"/>}
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
