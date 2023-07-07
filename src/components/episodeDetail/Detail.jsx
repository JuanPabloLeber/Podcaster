import React from 'react'
import { Link } from 'react-router-dom'
import './Detail.css'
function Detail({ podcast }) {
  return (
    <div className="detail-container">
      <Link to={`/podcast/${podcast.collectionId}`}>
        <h1>{podcast.trackName}</h1>
      </Link>
      <p dangerouslySetInnerHTML={{ __html: podcast.description }}></p>
      <audio src={podcast.episodeUrl} controls></audio>
    </div>
  )
}

export default Detail
