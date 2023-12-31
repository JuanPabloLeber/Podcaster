import { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/podcastDetail/header/Header'
import LeftBar from '../../components/podcastDetail/leftBar/LeftBar'
import { PodcastsContext } from '../../contexts/podcastsContext'

import { PodcastDetailContext } from '../../contexts/podcastDetailContext'
import './Podcast.css'
import PodcastList from '../../components/podcastDetail/podcastList/PodcastList'
function Podcast() {
  const { podcastData, updatePodcast } = useContext(PodcastDetailContext)
  const { podcastsData } = useContext(PodcastsContext)
  const [filteredPodcast, setFilteredPodcast] = useState(null)
  const { podcastId } = useParams()

  useEffect(() => {
    updatePodcast({ podcastId })
  }, [])

  useEffect(() => {
    const podcast = podcastsData.filter((podcast) => {
      return podcast.id.attributes['im:id'] === podcastId
    })

    setFilteredPodcast(podcast[0])
  }, [podcastsData])

  function components() {
    if (
      filteredPodcast !== null &&
      filteredPodcast !== undefined &&
      podcastData !== null
    ) {
      return (
        <div className="podcast-detail-container">
          <LeftBar filteredPodcast={filteredPodcast} />
          <section>
            <Header
              podcastEpisodes={podcastData.podcastInfo.results[0].trackCount}
            />
            <PodcastList podcastEpisodes={podcastData.podcastInfo.results} />
          </section>
          {/* <pre style={{ textWrap: 'wrap' }}>
            {JSON.stringify(podcastData, null, 4)}
          </pre> */}
        </div>
      )
    } else {
      return null
    }
  }

  return components()
}

export default Podcast
