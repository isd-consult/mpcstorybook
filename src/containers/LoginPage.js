import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Login from 'components/templates/auth/Login'
import './global.scss'

import { waitForInit, signIn, facebookSignIn, googleSignIn }
  from 'redux/modules/auth/actions'
import Transition from './Transition'

class LoginPage extends Component {

  async componentDidMount() {
    const {init} = this.props
    init()
  }

  render() {
    const {
      loginUser,
      loginViaGoogle,
      loginViaFacebook,
      ...others
    } = this.props

    return (
      <Transition>
        <Login
          signIn={loginUser}
          googleSignIn={loginViaGoogle}
          facebookSignIn={loginViaFacebook}
          {...others}
        />
      </Transition>
    )
  }
}
const mapStateToProps = state => {
  return {
    isLoading: state.auth.isLoading,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    init: () => dispatch(waitForInit()),
    loginUser: (email, password) => dispatch(signIn(email, password)),
    loginViaFacebook:() => dispatch(facebookSignIn()),
    loginViaGoogle:() => dispatch(googleSignIn())
  }
}

LoginPage.defaultProps = {
  isLoading: false,
  init: null,
  loginUser: null,
  loginViaFacebook: null,
  loginViaGoogle: null,

}
LoginPage.propTypes = {
  isLoading: PropTypes.bool,
  init: PropTypes.func,
  loginUser: PropTypes.func,
  loginViaFacebook: PropTypes.func,
  loginViaGoogle: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage)
