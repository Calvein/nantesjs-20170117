import preloader from 'spectacle/lib/utils/preloader'

// Preload images
const images = {
  d3: require('../assets/d3.svg'),
  project1: require('../assets/patseq.gif'),
  project2: require('../assets/speeches.png'),
  project3: require('../assets/nature.png'),
  project4: require('../assets/powerof1.gif'),
  blocks: require('../assets/blocks.png'),
  roboderp: require('../assets/roboderp.gif'),
  robokay: require('../assets/robokay.gif'),
  diagonal: require('../assets/diagonal.png'),
  treemap: require('../assets/treemap.png'),
  partition: require('../assets/partition.png'),
  bubble: require('../assets/bubble.png'),
  pack: require('../assets/pack.png'),
  cluster: require('../assets/cluster.png'),
}
preloader(images)

export default images
