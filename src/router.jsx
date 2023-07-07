import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import AppLayout from './layout/AppLayout'
import Podcast from './pages/Podcast'
import PodcastDetailContextProvider from './contexts/podcastDetailContext'
import PodcastsContextProvider from './contexts/podcastsContext'
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PodcastsContextProvider>
        <AppLayout />
      </PodcastsContextProvider>
    ),
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: 'podcast/:podcastId',
        element: (
          <PodcastDetailContextProvider>
            <Podcast />
          </PodcastDetailContextProvider>
        )
      }
    ]
  }
])

export default router
