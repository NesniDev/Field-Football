
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Home } from './components/pages/Home'
import { Reservations } from './components/pages/Reservations'
import { Field } from './components/pages/Field'
import { Events } from './components/pages/Events'
import { Contact } from './components/pages/Contact'
import { NotFound } from './components/pages/NotFound'
import { Footer } from './components/Footer'

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
      element: <Field />
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
