import React from 'react'
import { Deck } from 'spectacle'

// Import slides from categories
import intro from './intro'
import examples from './examples'

// Deck want children that are Slides, so we merge the arrays of Slides
const slides = [
  ...intro,
  ...examples
]

const Slides = () => (
  <Deck
    transition={['slide']}
    transitionDuration={500}
  >
    {slides}
  </Deck>
)

export default Slides
