
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Home } from '@pages/Home'
import { Reservations } from '@pages/Reservations'
import { Fields } from '@pages/Fields'
import { Events } from '@pages/Events'
import { Contact } from '@pages/Contact'
import { NotFound } from '@pages/NotFound'
import { Footer } from '@/components/common/Footer'

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
      path: '/field',
      element: <Fields />
    },
    {
      path: '/events',
      element: <Events />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '*',
      element: <NotFound />
    }

  ])
  return routes
    
}

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
