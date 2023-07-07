import React from 'react'
import { Link } from 'react-router-dom'
import './PodcastList.css'
function PodcastList({ podcastEpisodes }) {
  function generateList() {
    const list = podcastEpisodes.slice(1).map((podcast) => {
      const date = getDate(podcast.releaseDate)
      const time = milliToMin(podcast.trackTimeMillis)
      return (
        <div className="podcast-element" key={podcast.trackId}>
          <Link to={`episode/${podcast.trackId}`} state={{ podcast }}>
            <p>{podcast.trackName}</p>
          </Link>
          <div>
            <p>{date}</p>
            <p>{time}</p>
          </div>
        </div>
      )
    })
    return list
  }

  function getDate(dateString) {
    const stringToDate = new Date(dateString)
    const day = stringToDate.getUTCDate()
    const month = stringToDate.getUTCMonth()
    const year = stringToDate.getUTCFullYear()
    const date = day + '/' + month + '/' + year
    return date
  }

  function milliToMin(millis) {
    const minutes = Math.floor(millis / 60000)
    const seconds = ((millis % 60000) / 1000).toFixed(0)
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
  }

  return (
    <div className="podcast-list-container">
      <div className="podcast-element">
        <p>Title</p>
        <div>
          <p>Date</p>
          <p>Duration</p>
        </div>
      </div>

      {generateList()}
    </div>
  )
}

export default PodcastList
