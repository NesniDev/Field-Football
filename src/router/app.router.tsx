import { createBrowserRouter } from "react-router-dom"
import { LayoutIndex } from "../layouts/LayoutIndex"
import { Home } from "../pages/Home"
import { Reservations } from "../pages/Reservations"
import { Fields } from "../pages/Fields"
import { Tournaments } from "../pages/Tournaments"
import { Contact } from "../pages/Contact"
import { FAQ } from "../pages/FAQ"
import { Payment } from "../pages/Payment"
import { Receipt } from "../pages/Receipt"
import { DetailsField } from "../pages/DetailsField"

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <LayoutIndex />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'reservations',
        element: <Reservations />
      },
      {
        path: 'fields',
        element: <Fields />
      },
      {
        path: 'tournaments',
        element: <Tournaments />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'faq',
        element: <FAQ />
      },
      {
        path: 'payment',
        element: <Payment />
      },
      {
        path: 'receipt',
        element: <Receipt />
      },
      {
        path: 'fields/:slug',
        element: <DetailsField />
      },
    ]
  }
])