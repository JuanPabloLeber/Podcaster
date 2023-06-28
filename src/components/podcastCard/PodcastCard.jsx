import './PodcastCard.css'

function PodcastCard({ image, name, artist }) {
  return (
    <div className="podcast-card">
      <img src={image}></img>
      <div className="card-info">
        <h1>{name}</h1>
        <h2>Author: {artist}</h2>
      </div>
    </div>
  )
}

export default PodcastCard
