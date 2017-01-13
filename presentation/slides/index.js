import React from 'react'
import { Deck } from 'spectacle'

// Import slides from categories
import intro from './intro'

const Slides = () => (
  <Deck
    transition={['slide']}
    transitionDuration={500}
  >
    {intro}
  </Deck>
)

export default Slides
