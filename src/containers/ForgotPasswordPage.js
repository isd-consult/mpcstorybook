import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import ForgotPassword from 'components/templates/auth/ForgotPassword'
import Auth from '@aws-amplify/auth'
import { showNotification }
  from 'redux/modules/mpc/reducer'
import './global.scss'
import { connect } from 'react-redux'

class ForgotPasswordPage extends Component {
  constructor(props) {
    super(props)
    this.state = {isLoading: false}
    this.forgotPassword=this.forgotPassword.bind(this)
    this.forgotPasswordConfirm=this.forgotPasswordConfirm.bind(this)
  }

  componentDidMount() {
    const { match, isConfirmed } = this.props
    if(isConfirmed){
      const { token, code } = match.params
      if( token !== null && token !== '')
        this.setState({token, code})
    }
  }

  /** ***************************
  ******* Forgot Password ******
  **************************** */

  /**
  * forgotPassword
  * @param {string} email
  */
  async forgotPassword(email) {
    this.setState({isLoading: true})
    await Auth.forgotPassword(email)
    this.setState({isLoading: false})
  }

  /**
  * forgot Password Confirm
  * @param {string} newPassword
  */
  async forgotPasswordConfirm(newPassword) {
    const { token, code } = this.state
    this.setState({isLoading: true})
    await Auth.forgotPasswordSubmit(token, code, newPassword)
    this.setState({isLoading: false})
  }

  render() {
    const {isAuthenticated,
      isConfirmed, showMsg, ...others} = this.props
    const {isLoading} = this.state
    if (isAuthenticated) return <Redirect to='/' />
    return (
      <ForgotPassword
        isLoading={isLoading}
        forgotPassword={this.forgotPassword}
        forgotPasswordConfirm={this.forgotPasswordConfirm}
        isConfirmed={isConfirmed}
        showNotification={showMsg}
        {...others}
      />
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showMsg:
      (notification) => dispatch(showNotification(notification))
  }
}

ForgotPasswordPage.defaultProps = {
  isAuthenticated: false,
  isConfirmed: false,
  match: null,
  history: null,
  showMsg: null,
}
ForgotPasswordPage.propTypes = {
  isAuthenticated: PropTypes.bool,
  isConfirmed: PropTypes.bool,
  match: PropTypes.object,
  history: PropTypes.object,
  showMsg: PropTypes.func,
}
export default connect(
  null,
  mapDispatchToProps,
)(ForgotPasswordPage)
