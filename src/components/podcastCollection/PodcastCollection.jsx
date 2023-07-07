import { useContext, useEffect, useState } from 'react'
import { FilterContext } from '../../contexts/filterContext'
import { PodcastsContext } from '../../contexts/podcastsContext'
import PodcastCard from '../podcastCard/PodcastCard'

import './PodcastCollection.css'
import { Link } from 'react-router-dom'

function PodcastCollection() {
  const [podcastFilteredData, setPodcastFilteredData] = useState([])
  const { filter, updateFilteredElements } = useContext(FilterContext)
  const { podcastsData } = useContext(PodcastsContext)

  useEffect(() => {
    showPodcasts()
  }, [filter, podcastsData])

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
        <Link
          to={`podcast/${podcast.id.attributes['im:id']}`}
          key={podcast.id.attributes['im:id']}
          style={{ textDecoration: 'none' }}
        >
          <PodcastCard
            image={podcast['im:image'][2].label}
            name={podcast['im:name'].label}
            artist={podcast['im:artist'].label}
          />
        </Link>
      )
    })
  }

  function showPodcasts() {
    const filteredPodcasts = filterPodcasts(podcastsData)
    const podcastsComponents = mapPodcasts(filteredPodcasts)
    setPodcastFilteredData(podcastsComponents)
    updateFilteredElements(podcastsComponents)
  }

  return <div className="collection-container">{podcastFilteredData}</div>
}

export default PodcastCollection
