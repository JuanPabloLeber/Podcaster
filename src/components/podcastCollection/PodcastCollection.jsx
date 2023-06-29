import { useContext, useEffect, useState } from 'react'
import { FilterContext } from '../../contexts/filterContext'

import PodcastCard from '../podcastCard/PodcastCard'
import { getHundredPodcasts } from '../../services/podcasts'

import './PodcastCollection.css'

function PodcastCollection() {
  const [podcastData, setPodcastData] = useState([])
  const [podcastFilteredData, setPodcastFilteredData] = useState([])
  const { filter, updateFilteredElements } = useContext(FilterContext)

  useEffect(() => {
    async function updatePodcastData() {
      const podcasts = await getHundredPodcasts()
      setPodcastData(podcasts.feed.entry)
    }
    updatePodcastData()
  }, [])

  useEffect(() => {
    showPodcasts()
  }, [filter, podcastData])

  function filterPodcasts(data) {
    return data.filter((podcast) => {
      const condition =
        podcast['im:name'].label.toLowerCase().includes(filter.toLowerCase()) ||
        podcast['im:artist'].label.toLowerCase().includes(filter.toLowerCase())
      return condition
    })
  }

  function mapPodcasts(data) {
    return data.map((podcast) => {
      return (
        <PodcastCard
          key={podcast.id.attributes['im:id']}
          image={podcast['im:image'][2].label}
          name={podcast['im:name'].label}
          artist={podcast['im:artist'].label}
        />
      )
    })
  }

  function showPodcasts() {
    const filteredPodcasts = filterPodcasts(podcastData)
    const podcastsComponents = mapPodcasts(filteredPodcasts)
    setPodcastFilteredData(podcastsComponents)
    updateFilteredElements(podcastsComponents)
  }

  return <div className="collection-container">{podcastFilteredData}</div>
}

export default PodcastCollection
