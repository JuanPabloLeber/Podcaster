import './LeftBar.css'

function LeftBar({ filteredPodcast }) {
  return (
    <div className="left-bar-container">
      <img src={filteredPodcast?.['im:image'][2].label}></img>
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
