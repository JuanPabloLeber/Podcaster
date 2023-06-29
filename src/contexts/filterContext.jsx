import { createContext, useState } from 'react'

export const FilterContext = createContext()

function FilterContextProvider({ children }) {
  const [filter, setFilter] = useState('')
  const [filteredElements, setFilteredElements] = useState(100)

  function updateFilter(value) {
    setFilter(value)
  }

  function updateFilteredElements(elements) {
    setFilteredElements(elements.length)
  }

  return (
    <FilterContext.Provider
      value={{ filter, updateFilter, updateFilteredElements, filteredElements }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export default FilterContextProvider
