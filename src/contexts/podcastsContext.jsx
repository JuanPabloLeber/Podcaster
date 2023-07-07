import { createContext, useEffect, useState } from 'react'
import { getHundredPodcasts } from '../services/podcasts'
export const PodcastsContext = createContext()

function PodcastsContextProvider({ children }) {
  const [podcastsData, setPodcastsData] = useState([])

  useEffect(() => {
    updatePodcastData()
  }, [])

  async function updatePodcastData() {
    if (checkLocalStorage()) {
      const podcasts = await getHundredPodcasts()
      setPodcastsData(podcasts.feed.entry)
      localStorage.setItem('podcastsLastUpdated', new Date())
      localStorage.setItem('podcasts', JSON.stringify(podcasts.feed.entry))
    } else {
      setPodcastsData(JSON.parse(localStorage.getItem('podcasts')))
    }
  }

  function checkLocalStorage() {
    if (!localStorage.getItem('podcastsLastUpdated')) {
      return true
    }
    if (
      new Date() - Date.parse(localStorage.getItem('podcastsLastUpdated')) <
      86400
    ) {
      return false
    }
    return false
  }

  return (
    <PodcastsContext.Provider value={{ podcastsData }}>
      {children}
    </PodcastsContext.Provider>
  )
}

export default PodcastsContextProvider
