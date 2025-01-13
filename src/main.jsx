import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './output.css';
import { createBrowserRouter } from 'react-router-dom'
import Sobre from './assets/pages/sobre.jsx'
import Diferenciais from './assets/pages/diferenciais.jsx'
import { RouterProvider } from 'react-router-dom'



const router = createBrowserRouter([
  {
    path: "/",
    element: < App />,
  },
  {
    path: "Sobre",
    element: < Sobre />,
  },
  {
    path: "Diferenciais",
    element: < Diferenciais />,
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
