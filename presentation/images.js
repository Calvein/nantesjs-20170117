import preloader from 'spectacle/lib/utils/preloader'

// Preload images
const images = {
  d3: require('../assets/d3.svg'),
}
preloader(images)

// Replace /
// for (const name in images) {
//   images[name] = images[name].replace('/', '')
// }

export default images
