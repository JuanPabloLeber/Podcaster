import { useContext } from 'react'
import { FilterContext } from '../../contexts/filterContext'

import './PodcastFilter.css'

function PodcastFilter() {
  const { filteredElements, updateFilter } = useContext(FilterContext)

  return (
    <div className="filter-container">
      <div className="elements-counter">{filteredElements}</div>
      <input
        title="Filter podcasts"
        type="text"
        placeholder="Filter podcasts..."
        onChange={(e) => updateFilter(e.target.value)}
      ></input>
    </div>
  )
}

export default PodcastFilter
