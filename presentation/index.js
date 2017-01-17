import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { Spectacle } from 'spectacle'
// Too much hard coded values
import createTheme from './theme'
import solarized from './solarized'
import humanize from 'humanize-number'
import Slides from './slides'

// Import theme
require('normalize.css')
require('spectacle/lib/themes/default/index.css')
// Import theme
require('./theme/index.css')

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

    // Check every 3s the number of stargazers of d3 and update an element
    // It's not passed through the props because the slides have to be an array
    // And they can't be overridden
    const getD3Stargazers = () => {
      // Get the element, if it exists
      const el = findDOMNode(this).querySelector('#stargazers-count')
      if (!el) return

      fetch('https://api.github.com/repos/d3/d3')
        .then((res) => res.json())
        .then((data) => {
          const total = humanize(data.stargazers_count, { delimiter: '' })
          // Flash the element if the number changes
          if (el.textContent !== total) {
            el.classList.remove('flash')
            // Trigger reflow
            void el.offsetWidth
            el.classList.add('flash')
          }
          el.textContent = total
        })
    }
    setInterval(getD3Stargazers, 5e3)
  }
}

export default Presentation
