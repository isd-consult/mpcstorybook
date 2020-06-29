import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './Divider.scss'

class Divider extends Component {
  render () {
    const {
      className,
      width
    } = this.props

    return (
      <hr
        className={clsx(
          'divider',
          {[`divider--${width}`]: width},
          className
        )}
      />
    )
  }
}

Divider.defaultProps = {
  className: '',
  width: null
}

Divider.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOf([null, 'thick', 'medium', 'strong']),
}

export default Divider
