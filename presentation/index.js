import React from 'react'
import { Spectacle } from 'spectacle'
import preloader from 'spectacle/lib/utils/preloader'
import createTheme from 'spectacle/lib/themes/default'
import Slides from './slides'

require('normalize.css')
require('spectacle/lib/themes/default/index.css')

const images = {
  robocop: require('../assets/robocop.jpg'),
}
preloader(images)

const theme = createTheme({
  primary: '#bada55'
})

const Presentation = () => (
  <Spectacle theme={theme}>
    <Slides />
  </Spectacle>
)

export default Presentation
