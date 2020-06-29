import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './Row.scss'

class Row extends Component {
  render () {
    const {
      className,
      children,
      isDebug,
      isNoWrap,
      isReverse,
      tag
    } = this.props

    const Root = `${tag}`

    return (
      <Root
        className={clsx(
          'row',
          {
            'row--reverse': isReverse,
            'row--debug': isDebug,
            'row--no-wrap': isNoWrap
          },
          className
        )}
      >
        {children}
      </Root>
    )
  }
}

Row.defaultProps = {
  tag: 'div',
  children: '',
  className: '',
  isReverse: false,
  isNoWrap: false,
  isDebug: false
}

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  isReverse: PropTypes.bool,
  tag: PropTypes.string,
  isNoWrap: PropTypes.bool,
  isDebug: PropTypes.bool
}

export default Row
