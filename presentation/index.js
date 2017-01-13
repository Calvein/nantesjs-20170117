import React, { Component } from 'react'
import { Spectacle } from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'
import solarized from './solarized'
import Slides from './slides'

// Import theme
require('normalize.css')
require('spectacle/lib/themes/default/index.css')

// Solarized themes
const darkTheme = createTheme({
  primary: solarized.base03,
  secondary: solarized.base1,
  tertiary: solarized.base1,
  quartenary: solarized.base1,
  link: solarized.blue,
}, {
  secondary: 'Open Sans Condensed',
})

const lightTheme = createTheme({
  primary: solarized.base3,
  secondary: solarized.base01,
  tertiary: solarized.base01,
  quartenary: solarized.base01,
  link: solarized.blue,
}, {
  secondary: 'Open Sans Condensed',
})

// Can't be stateless for HMR
class Presentation extends Component {
  constructor() {
    super()

    this.state = {
      themeLabel: 'dark',
      theme: darkTheme,
    }
  }

  render() {
    return (
      <Spectacle theme={this.state.theme}>
        <Slides />
      </Spectacle>
    )
  }

  componentDidMount() {
    // Toggle light/dark theme on alt+t
    document.addEventListener('keydown', (e) => {
      if (e.altKey && e.keyCode === 84) {
        let themeLabel
        let theme
        if (this.state.themeLabel === 'dark') {
          themeLabel = 'light'
          theme = lightTheme
        } else {
          themeLabel = 'dark'
          theme = darkTheme
        }

        this.setState({
          themeLabel,
          theme,
        })
      }
    })
  }
}

export default Presentation
