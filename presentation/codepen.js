import React, { PropTypes } from 'react'

const Codepen = ({ id, tabs, height = 450 }) => (
  <iframe
    height={height}
    width="1000"
    scrolling="no"
    frameBorder="no"
    allowTransparency="true"
    allowFullScreen="true"
    src={`//codepen.io/Calvein/embed/${id}/?height=${height}&theme-id=23802&default-tab=${tabs}&embed-version=2`} // eslint-disable-line
  />
)

Codepen.propTypes = {
  id: PropTypes.string,
  tabs: PropTypes.string,
  height: PropTypes.number,
}

export default Codepen
