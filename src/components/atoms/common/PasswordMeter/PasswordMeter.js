import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './PasswordMeter.scss'

class PasswordMeter extends Component {
  constructor () {
    super()
    this.state = {
      strength: 0
    }
  }

  static getDerivedStateFromProps (props) {
    const { password } = props

    let strength = 0

    if (password.length >= 6)
      strength += 1

    if (password.match(/(?=.*[0-9])/))
      strength += 1

    if (password.match(/(?=.*[!,%,&,@,#,$,^,*,?,_,~,<,>,])/))
      strength += 1

    if (password.match(/(?=.*[a-z])/))
      strength += 1

    if (password.match(/(?=.*[A-Z])/))
      strength += 1


    return { strength }
  }

  render () {
    const {
      className
    } = this.props

    const { strength } = this.state

    return (
      <div
        className={clsx(
          'password-meter',
          {
            [`password-meter--${strength}`]: strength
          },
          className
        )}
      />
    )
  }
}

PasswordMeter.defaultProps = {
  className: '',
  password: ''
}

PasswordMeter.propTypes = {
  className: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  password: PropTypes.string
}

export default PasswordMeter
