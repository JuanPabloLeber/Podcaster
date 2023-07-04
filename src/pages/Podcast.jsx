import { useParams } from 'react-router-dom'

function Podcast() {
  const id = useParams()
  return <div>{id.podcastId}</div>
}

export default Podcast
