export async function getHundredPodcasts() {
  const data = await fetch(
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
  )
  const jsonData = await data.json()
  return jsonData
}

export async function getPodcastById(podcastId) {
  const data = await fetch(
    `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/lookup?id=${podcastId}`
  )
  const jsonData = await data.json()
  return jsonData.results[0]
}
