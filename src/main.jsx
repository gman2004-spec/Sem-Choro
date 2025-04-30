import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom" // Corrigido: "react-router" -> "react-router-dom"
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import App from './App.jsx'
import Contact from './Contact.jsx'
import Calcs from './Calcs.jsx'
import Req from './Req.jsx'

// ❌ Corrigir ou remover se você não tem esse componente
// import { Analytics } from '@vercel/analytics/react'
const Analytics = () => null // Corrigido para placeholder; substitua com import real se necessário

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/calcs",
    element: <Calcs />,
  },
  {
    path: "/requisicao",
    element: <Req />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Analytics />
    <RouterProvider router={router} />
  </StrictMode>
)

     <Analytics/>
     <RouterProvider router={router} />
  </StrictMode>,
)
