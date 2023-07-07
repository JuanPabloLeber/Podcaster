import './Header.css'

function Header({ podcastEpisodes }) {
  return (
    <div className="header-container">
      <h1>Episodes: {podcastEpisodes}</h1>
    </div>
  )
}

export default Header
