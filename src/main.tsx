import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layouts/Main'
import Index from './Pages/Index'
import NotFound from './Pages/NotFound'
import JpegGallery from './Pages/JpegGallery'

const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Index />
      },
      {
        path: "hl",
        element: <JpegGallery />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
