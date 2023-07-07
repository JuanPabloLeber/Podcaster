import { createContext, useState } from 'react'
import { getPodcastById } from '../services/podcasts'
export const PodcastDetailContext = createContext()

function PodcastDetailContextProvider({ children }) {
  const [podcastData, setPodcastData] = useState(null)

  async function updatePodcast({ podcastId }) {
    if (checkLocalStorage({ podcastId })) {
      const podcastData = await getPodcastById(podcastId)
      setPodcastData({ podcastInfo: podcastData })
      generateLocalStorageData({ podcastId, podcastInfo: podcastData })
    } else {
      const podcastData = getLocalStorageData({ podcastId })
      setPodcastData(podcastData)
    }
  }

  function checkLocalStorage({ podcastId }) {
    if (
      !JSON.parse(localStorage.getItem('podcastsDetails'))?.[
        `podcast-${podcastId}`
      ]
    ) {
      return true
    }
    if (
      new Date() -
        JSON.parse(localStorage.getItem('podcastsDetails'))[
          `podcast-${podcastId}`
        ].date <
      86400
    ) {
      return false
    }

    return false
  }

  function generateLocalStorageData({ podcastId, podcastInfo }) {
    const localStorageObj =
      JSON.parse(localStorage.getItem('podcastsDetails')) || {}

    const data = {
      podcastInfo: podcastInfo,
      date: new Date()
    }

    localStorageObj[`podcast-${podcastId}`] = data
    localStorage.setItem('podcastsDetails', JSON.stringify(localStorageObj))
  }

  function getLocalStorageData({ podcastId }) {
    const data = JSON.parse(localStorage.getItem('podcastsDetails'))
    return data[`podcast-${podcastId}`]
  }

  return (
    <PodcastDetailContext.Provider value={{ podcastData, updatePodcast }}>
      {children}
    </PodcastDetailContext.Provider>
  )
}

export default PodcastDetailContextProvider
