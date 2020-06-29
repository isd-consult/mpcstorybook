import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Login.scss'
import SectionLogin from 'components/organisms/sections/auth/SectionLogin'
import Container from 'components/atoms/layout/Container'

class Login extends Component {
  render () {
    const {
      className,
      signIn,
      googleSignIn,
      facebookSignIn,
      ...others
    } = this.props

    return (
      <Container>
        <SectionLogin
          className={className}
          signIn={signIn}
          googleSignIn={googleSignIn}
          facebookSignIn={facebookSignIn}
          {...others}
        />
      </Container>
    )
  }
}

Login.defaultProps = {
  className: '',
  signIn:null,
  googleSignIn: null,
  facebookSignIn: null,
}

Login.propTypes = {
  className: PropTypes.string,
  signIn: PropTypes.func,
  googleSignIn: PropTypes.func,
  facebookSignIn: PropTypes.func,
}

export default Login
