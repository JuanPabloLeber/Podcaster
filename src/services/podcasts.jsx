export async function getHundredPodcasts() {
  const data = await fetch(
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
  )
  const jsonData = await data.json()
  return jsonData
}
