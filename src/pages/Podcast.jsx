import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getPodcastById } from '../services/podcasts'

function Podcast() {
  const [podcast, setpodcast] = useState({})
  const { podcastId } = useParams()

  useEffect(() => {
    async function updatePodcast() {
      const podcastData = await getPodcastById(podcastId)
      setpodcast(podcastData)
    }
    updatePodcast()
  }, [])

  return <div>{JSON.stringify(podcast)}</div>
}

export default Podcast
