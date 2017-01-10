import React, { Component } from 'react'
import { Spectacle } from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'
import Slides from './slides'

// Import theme
require('normalize.css')
require('spectacle/lib/themes/default/index.css')

const theme = createTheme({
  // Roughly, D3's orange
  primary: '#f5864a',
  // Google
  link: '#4285f4',
}, {
  secondary: 'Open Sans Condensed',
})

// Can't be stateless for HMR
class Presentation extends Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Slides />
      </Spectacle>
    )
  }
}

export default Presentation
