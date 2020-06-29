import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './Placeholder.scss'

class Placeholder extends React.Component {
  render() {
    const { className, height, width, isCentered } = this.props

    const stylesObject = {}

    if (height) stylesObject.height = `${height}px`
    if (width) stylesObject.width = `${width}px`

    return (
      <div
        className={clsx(
          'placeholder',
          isCentered ? 'placeholder--centered' : null,
          className,
        )}
        style={stylesObject}
      />
    )
  }
}

Placeholder.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  isCentered: PropTypes.bool,
}

Placeholder.defaultProps = {
  className: '',
  height: null,
  width: null,
  isCentered: false,
}

export default Placeholder
