import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './Link.scss'

class Link extends Component {
  render () {
    const {
      className,
      to,
      label,
      children,
    } = this.props

    return (
      <a
        className={clsx(
          'link',
          className
        )}
        href={to||null}
      >
        {
          label || children
        }
      </a>
    )
  }
}

Link.defaultProps = {
  className: '',
  to: null,
  label: null,
  children: null,
}

Link.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node
}

export default Link
