import React from 'react'
import { Deck } from 'spectacle'

// Import slides
import One from './one'

const Slides = () => (
  <Deck
    transition={['slide']}
    transitionDuration={500}
  >
    {/* The Deck expect its children to be Slide, so we have to do this */}
    {One()}
  </Deck>
)

export default Slides
