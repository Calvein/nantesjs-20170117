import preloader from 'spectacle/lib/utils/preloader'

// Preload images
const images = {
  robocop: require('../assets/robocop.jpg'),
}
preloader(images)

// Replace /
for (const name in images) {
  images[name] = images[name].replace('/', '')
}

export default images
