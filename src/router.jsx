import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import AppLayout from './layout/AppLayout'
import Podcast from './pages/Podcast'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: 'podcast/:podcastId',
        element: <Podcast />
      }
    ]
  }
])

export default router
