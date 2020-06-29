import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './PhoneLink.scss'

class PhoneLink extends Component {
  render () {
    const {
      className,
      to,
      children
    } = this.props

    return (
      <div
        className={clsx(
          'phone-link',
          className
        )}
      >
        <a href={`tel:${to}`}>
          {children || to}
        </a>
      </div>
    )
  }
}

PhoneLink.defaultProps = {
  className: '',
  to: '',
  children: null
}

PhoneLink.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node
}

export default PhoneLink
