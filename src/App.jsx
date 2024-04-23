
import './App.css'


import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ListaPublicaciones } from './pages/ListaPublicaciones'
import { PublicacionesAuthor } from './pages/PublicacionesAuthor'
import { VistaPublicacion } from './pages/VistaPublicacion'
import { Plantilla } from './pages/Plantilla'

function App() {
  const rutas = createBrowserRouter([
    {
      path: 'padre',
      element: <Plantilla />,
      children: [
        {
          // /padre/publicaciones
          path: 'publicaciones',
          element: <ListaPublicaciones />
        },
        {
          // /padre/publicacion
          path: 'publicacion/:id',
          element: <VistaPublicacion />
        },
        {
          // /padre/autor
          path: 'autor/:id',
          element: <PublicacionesAuthor />
        }
      ]
    },
  ])

  return (
    <>
      <RouterProvider router={rutas} />
    </>
  )

}

export default App
