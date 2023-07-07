import { useState, useContext, useEffect } from 'react'
import LeftBar from '../../components/podcastDetail/leftBar/LeftBar'
import { PodcastsContext } from '../../contexts/podcastsContext'
PodcastsContext
import { useParams, useLocation } from 'react-router-dom'
import Detail from '../../components/episodeDetail/Detail'
import './Episode.css'
function Episode() {
  const [filteredPodcast, setFilteredPodcast] = useState(null)
  const { podcastsData } = useContext(PodcastsContext)
  const { podcastId } = useParams()
  const { state } = useLocation()
  useEffect(() => {
    const podcast = podcastsData.filter((podcast) => {
      return podcast.id.attributes['im:id'] === podcastId
    })

    setFilteredPodcast(podcast[0])
  }, [podcastsData])

  function components() {
    if (filteredPodcast !== null && filteredPodcast !== undefined) {
      return (
        <div className="episode-container">
          <LeftBar filteredPodcast={filteredPodcast} />
          <Detail podcast={state.podcast} />
        </div>
      )
    } else {
      return null
    }
  }

  return components()
}

export default Episode
