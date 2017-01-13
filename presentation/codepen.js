import React, { PropTypes } from 'react'

// <Codepen id="bpZJLK" tabs="html,result" />
const Codepen = ({ id, tabs }) => (
  <iframe
    height="400"
    width="1000"
    scrolling="no"
    frameBorder="no"
    allowTransparency="true"
    allowFullScreen="true"
    src={`//codepen.io/Calvein/embed/${id}/?height=400&theme-id=23802&default-tab=${tabs}&embed-version=2`} // eslint-disable-line
  />
)

Codepen.propTypes = {
  id: PropTypes.string,
  tabs: PropTypes.string,
}

export default Codepen
