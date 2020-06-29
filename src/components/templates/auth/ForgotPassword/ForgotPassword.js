import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './ForgotPassword.scss'
import SectionForgotPassword
  from 'components/organisms/sections/auth/SectionForgotPassword'

class ForgotPassword extends Component {
  render () {
    const {
      className,
      forgotPassword,
      forgotPasswordConfirm,
      isConfirmed,
      showNotification,
      ...others
    } = this.props

    return (
      <div
        className={clsx(
          'forgot-password',
          className
        )}
      >
        <SectionForgotPassword
          forgotPassword={forgotPassword}
          forgotPasswordConfirm={forgotPasswordConfirm}
          isConfirmed={isConfirmed}
          showNotification={showNotification}
          {...others}
        />
      </div>
    )
  }
}

ForgotPassword.defaultProps = {
  className: '',
  forgotPassword: null,
  forgotPasswordConfirm: null,
  showNotification: null,
  isConfirmed: false,
}

ForgotPassword.propTypes = {
  className: PropTypes.string,
  forgotPassword: PropTypes.func,
  forgotPasswordConfirm: PropTypes.func,
  showNotification: PropTypes.func,
  isConfirmed: PropTypes.bool,
}

export default ForgotPassword
