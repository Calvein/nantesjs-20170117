import preloader from 'spectacle/lib/utils/preloader'

// Preload images
const images = {
  d3: require('../assets/d3.svg'),
  project1: require('../assets/patseq.gif'),
  project2: require('../assets/speeches.png'),
  project3: require('../assets/nature.png'),
  project4: require('../assets/powerof1.gif'),
  blocks: require('../assets/blocks.png'),
}
preloader(images)

export default images
