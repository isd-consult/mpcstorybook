import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './Container.scss'

class Container extends Component {
  render() {
    const { className, children, isFluid } = this.props

    return (
      <div
        className={clsx(
          'a-container',
          { 'a-container--fluid': isFluid },
          className,
        )}
      >
        {children}
      </div>
    )
  }
}

Container.defaultProps = {
  children: '',
  className: '',
  isFluid: false,
}
Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  isFluid: PropTypes.bool,
}

export default Container
