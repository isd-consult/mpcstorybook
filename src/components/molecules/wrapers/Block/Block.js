import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './Block.scss'

class Block extends Component {
  render () {
    const {
      className,
      children,
      theme
    } = this.props

    return (
      <div
        className={clsx(
          'block',
          {[`block--${theme}`]: theme},
          className
        )}
      >
        {children}
      </div>
    )
  }
}

Block.defaultProps = {
  className: '',
  children: null,
  theme: null,
}

Block.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default Block
