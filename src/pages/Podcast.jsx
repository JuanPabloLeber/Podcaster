import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getPodcastById } from '../services/podcasts'

function Podcast() {
  const [podcast, setPodcast] = useState({})
  const { podcastId } = useParams()

  useEffect(() => {
    async function updatePodcast() {
      if (checkLocalStorage()) {
        const podcastData = await getPodcastById(podcastId)
        setPodcast(podcastData)
        generateLocalStorageData({ podcastId, podcastInfo: podcastData })
      } else {
        const podcastData = getLocalStorageData({ podcastId })
        setPodcast(podcastData)
      }
    }
    updatePodcast()
  }, [])

  function checkLocalStorage() {
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
    <div>
      <pre style={{ textWrap: 'wrap' }}>{JSON.stringify(podcast, null, 4)}</pre>
    </div>
  )
}

export default Podcast
