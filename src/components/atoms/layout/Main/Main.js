import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './Main.scss'

class Main extends Component {
  render() {
    const { className, children, ...otherProps } = this.props

    return (
      <div className={clsx('l-main', className)} {...otherProps}>
        {children}
      </div>
    )
  }
}

Main.defaultProps = {
  className: '',
  children: null,
}

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Main
