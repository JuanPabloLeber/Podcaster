import PodcastCard from '../podcastCard/PodcastCard'
import data from '../../../podcastDataSet.json'

import './PodcastCollection.css'

function PodcastCollection() {
  return (
    <div className="collection-container">
      {data.feed.entry.map((podcast) => {
        return (
          <PodcastCard
            key={podcast.id.attributes['im:id']}
            image={podcast['im:image'][2].label}
            name={podcast['im:name'].label}
            artist={podcast['im:artist'].label}
          />
        )
      })}
    </div>
  )
}

export default PodcastCollection
