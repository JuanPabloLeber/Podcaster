export async function getHundredPodcasts() {
  const data = await fetch(
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
  )
  const jsonData = await data.json()
  return jsonData
}

export async function getPodcastById(podcastId) {
  const data = await fetch(
    `https://api.allorigins.win/raw?url=https://itunes.apple.com/lookup?id=${podcastId}`
  )
  const jsonData = await data.json()
  console.log(jsonData.results[0])
  return jsonData.results[0]
}
