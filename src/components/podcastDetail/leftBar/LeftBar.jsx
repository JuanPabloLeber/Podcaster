import { Link } from 'react-router-dom'
import './LeftBar.css'

function LeftBar({ filteredPodcast }) {
  return (
    <div className="left-bar-container">
      <Link to={`/podcast/${filteredPodcast.id.attributes['im:id']}`}>
        <img src={filteredPodcast?.['im:image'][2].label}></img>
      </Link>
      <hr />
      <section>
        <h1>{filteredPodcast?.['im:name'].label}</h1>
        <h2>{filteredPodcast?.['im:artist'].label}</h2>
      </section>
      <hr />
      <section>
        <h1>Description:</h1>
        <h2>{filteredPodcast?.summary.label}</h2>
      </section>
    </div>
  )
}
export default LeftBar
