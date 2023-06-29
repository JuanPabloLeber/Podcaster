import NavBar from './components/navBar/NavBar'
import PodcastCollection from './components/podcastCollection/PodcastCollection'

import './App.css'
import FilterContextProvider from './contexts/filterContext'
import PodcastFilter from './components/podcastFilter/PodcastFilter'

function App() {
  return (
    <>
      <NavBar />
      <FilterContextProvider>
        <div className="container">
          <PodcastFilter />
          <PodcastCollection />
        </div>
      </FilterContextProvider>
    </>
  )
}

export default App
