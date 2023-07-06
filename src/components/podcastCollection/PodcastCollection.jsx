import { useContext, useEffect, useState } from 'react'
import { FilterContext } from '../../contexts/filterContext'

import PodcastCard from '../podcastCard/PodcastCard'
import { getHundredPodcasts } from '../../services/podcasts'

import './PodcastCollection.css'
import { Link } from 'react-router-dom'

function PodcastCollection() {
  const [podcastData, setPodcastData] = useState([])
  const [podcastFilteredData, setPodcastFilteredData] = useState([])
  const { filter, updateFilteredElements } = useContext(FilterContext)

  useEffect(() => {
    async function updatePodcastData() {
      if (checkLocalStorage()) {
        const podcasts = await getHundredPodcasts()
        setPodcastData(podcasts.feed.entry)
        localStorage.setItem('podcastsLastUpdated', new Date())
        localStorage.setItem('podcasts', JSON.stringify(podcasts))
      } else {
        setPodcastData(JSON.parse(localStorage.getItem('podcasts')).feed.entry)
      }
    }
    updatePodcastData()
  }, [])

  useEffect(() => {
    showPodcasts()
  }, [filter, podcastData])

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
    const filteredPodcasts = filterPodcasts(podcastData)
    const podcastsComponents = mapPodcasts(filteredPodcasts)
    setPodcastFilteredData(podcastsComponents)
    updateFilteredElements(podcastsComponents)
  }

  return <div className="collection-container">{podcastFilteredData}</div>
}

export default PodcastCollection
