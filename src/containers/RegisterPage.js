import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import './global.scss'
import Register from 'components/templates/auth/Register'

import {
  waitForInit,
  checkUserIfExist,
  signUp,
  confirmCode,
  setIdentificationNumber,
  facebookSignIn,
  googleSignIn
}
  from 'redux/modules/auth/actions'

class RegisterPage extends Component {

  async componentDidMount() {
    const {init} = this.props
    init()
  }

  render() {
    const {
      isAuthenticated,
      checkUser,
      register,
      confirmCodeAndSignIn,
      setIDNumber,
      loginViaFacebook,
      loginViaGoogle,
      isLoading
    } = this.props

    if (isAuthenticated) return <Redirect to='/' />

    return (
      <Register
        checkUser={checkUser}
        signUp={register}
        confirmCode={confirmCodeAndSignIn}
        setIdentificationNumber={setIDNumber}
        facebookSignIn={loginViaFacebook}
        googleSignIn={loginViaGoogle}
        isLoading={isLoading}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.auth.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    init: () => dispatch(waitForInit()),
    checkUser: (email) => dispatch(checkUserIfExist(email)),
    confirmCodeAndSignIn: (email, code, password) =>
      dispatch(confirmCode(email, code, password)),
    setIDNumber: (email, idNumber) =>
      dispatch(setIdentificationNumber(email, idNumber)),
    register: (email, password) => dispatch(signUp(email, password)),
    loginViaFacebook:() => dispatch(facebookSignIn()),
    loginViaGoogle:() => dispatch(googleSignIn())
  }
}

RegisterPage.defaultProps = {
  isAuthenticated: false,
  init: null,
  checkUser: null,
  confirmCodeAndSignIn: null,
  setIDNumber: null,
  register: null,
  loginViaFacebook: null,
  loginViaGoogle: null,
  isLoading: false,
}

RegisterPage.propTypes = {
  isAuthenticated: PropTypes.bool,
  init: PropTypes.func,
  checkUser: PropTypes.func,
  confirmCodeAndSignIn: PropTypes.func,
  setIDNumber: PropTypes.func,
  register: PropTypes.func,
  loginViaFacebook: PropTypes.func,
  loginViaGoogle: PropTypes.func,
  isLoading: PropTypes.bool,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterPage)
