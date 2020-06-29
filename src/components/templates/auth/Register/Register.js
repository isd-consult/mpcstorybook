import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Register.scss'
import SectionRegister from 'components/organisms/sections/auth/SectionRegister'
import Container from 'components/atoms/layout/Container'

class Register extends Component {
  render () {
    const {
      className,
      checkUser,
      signUp,
      confirmCode,
      setIdentificationNumber,
      resendCode,
      facebookSignIn,
      googleSignIn,
      error,
      step,
      isLoading
    } = this.props

    return (
      <Container>
        <SectionRegister
          className={className}
          checkUser={checkUser}
          signUp={signUp}
          confirmCode={confirmCode}
          setIdentificationNumber={setIdentificationNumber}
          resendCode={resendCode}
          facebookSignIn={facebookSignIn}
          googleSignIn={googleSignIn}
          error={error}
          step={step}
          isLoading={isLoading}
        />
      </Container>
    )
  }
}

Register.defaultProps = {
  className: '',
  checkUser: null,
  signUp: null,
  confirmCode:null,
  setIdentificationNumber:null,
  resendCode:null,
  facebookSignIn: null,
  googleSignIn: null,
  error: null,
  isLoading: false,
  step:null
}

Register.propTypes = {
  className: PropTypes.string,
  checkUser: PropTypes.func,
  signUp: PropTypes.func,
  isLoading: PropTypes.bool,
  confirmCode: PropTypes.func,
  setIdentificationNumber: PropTypes.func,
  resendCode: PropTypes.func,
  facebookSignIn: PropTypes.func,
  googleSignIn: PropTypes.func,
  error: PropTypes.string,
  step: PropTypes.string
}

export default Register
