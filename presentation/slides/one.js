import React from 'react'
import { Slide, Heading, Image, Link, Text } from 'spectacle'
import image from '../images'

const One = () => (
  <Slide>
    <Heading fit caps textColor="secondary">
      Introduction à D3
    </Heading>
    <Image
      src={image.robocop}
      margin="40px auto 60px"
      height="293px"
    />
    <Link href="https://github.com/Calvein">
      <Text bold textColor="link">
        Par François Robichet (@Calvein)
      </Text>
    </Link>
  </Slide>
)

export default One
