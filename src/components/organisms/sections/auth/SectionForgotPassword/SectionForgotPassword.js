import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionForgotPassword.scss'
import Text from 'components/atoms/common/Text'
import InputIcon from 'components/molecules/forms/inputs/InputIcon'
import Button from 'components/molecules/buttons/Button'
import Step from 'components/molecules/panels/Step'
import Icon from 'components/atoms/common/Icon'
import Logo from 'components/atoms/common/Logo'
import ButtonBack from 'components/molecules/buttons/ButtonBack'
import { Link } from 'react-router-dom'


class SectionForgotPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      password2: '',
      step: 0,
    }
    this.onChange = this.onChange.bind(this)
    this.forgotPassword = this.forgotPassword.bind(this)
    this.forgotPasswordConfirm = this.forgotPasswordConfirm.bind(this)
    this.renderResetPasswordForm = this.renderResetPasswordForm.bind(this)
    this.renderEmailSent = this.renderEmailSent.bind(this)
    this.renderSubmitForm = this.renderSubmitForm.bind(this)
    this.onBack = this.onBack.bind(this)
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  onBack() {
    const { step } = this.state
    if (step > 0) this.setState({ step: step - 1 })
    else window.history.back()
  }

  async forgotPassword() {
    const { forgotPassword, showNotification } = this.props
    const { email } = this.state
    this.setState({ isLoading: true })
    try {
      await forgotPassword(email)
      this.setState({ step: 1 })
    } catch (error) {
      if(error.code === "UserNotFoundException")
        showNotification({
          message: "We can't find this email address." 
            + "Please enter a valid email",
          category: 'danger',
          icon: 'warning',
        })  
      else
        showNotification({
          message: error.message,
          category: 'danger',
          icon: 'warning',
        })
    }
    this.setState({ isLoading: false })
  }

  async forgotPasswordConfirm() {
    const { forgotPasswordConfirm, showNotification, history } = this.props
    const { password, password2 } = this.state
    if(password !== password2){
      showNotification({
        message: "Oops! These passwords don't match!",
        category: 'danger',
        icon: 'warning',
      })
      return
    }
    this.setState({ isLoading: true })
    try {
      await forgotPasswordConfirm(password)
      showNotification({
        message: "Your password has been changed." +
          "Sign in now.",
        category: 'success',
      })
      history.push("/login")
    } catch (error) {
      showNotification({
        message: error.message,
        category: 'danger',
        icon: 'warning',
      })
    }
    this.setState({ isLoading: false })
  }

  renderResetPasswordForm() {
    const { email, isLoading } = this.state
    return (
      <>
        <Text size="h2" fw="bold">
          Reset Password
        </Text>
        <Text className="mt-20" size="normal" lh="1-6">
          Please enter your email address and we will send you instructions on
          how to reset your password
        </Text>
        <InputIcon
          className="mt-20"
          icon="arroba"
          placeholder="Email:"
          name="email"
          onChange={this.onChange}
          value={email}
        />
        <Button
          className="mt-30"
          icon="arrow-long"
          onClick={this.forgotPassword}
          isLoading={isLoading}
        >
          Send
        </Button>
      </>
    )
  }

  renderEmailSent() {
    const { email } = this.state
    return (
      <>
        <Icon
          name="checkmark"
          theme="women"
          size={70}
          style={{ width: '100%' }}
        />
        <Text size="h2" fw="bold">
          Your Password Reset Email was sent
        </Text>
        <Text className="mt-20" size="normal" lh="1-6">
          {`If there is an account associated with ${email} ` +
            `you will receive an email with instructions on how to` + 
            ` reset your password`}
        </Text>
      </>
    )
  }

  renderSubmitForm() {
    const { password, password2, isLoading } = this.state
    return (
      <>
        <Text size="h2" fw="bold">
          New Password
        </Text>
        <Text className="mt-20" size="normal" lh="1-6">
          Please fill out new password
        </Text>
        <InputIcon
          className="mt-20"
          icon="key"
          placeholder="New Password:"
          name="password"
          type="password"
          onChange={this.onChange}
          value={password}
        />
        <InputIcon
          className="mt-20"
          icon="key"
          placeholder="Confirm New Password:"
          name="password2"
          type="password"
          onChange={this.onChange}
          value={password2}
        />
        <Button
          className="mt-30"
          icon="arrow-long"
          onClick={this.forgotPasswordConfirm}
          isLoading={isLoading}
        >
          Save
        </Button>
      </>
    )
  }

  render() {
    const { className, isConfirmed } = this.props
    const { step } = this.state
    return (
      <div className={clsx('section-forgot-password pl-20 pr-20', className)}>
        <div className="section-forgot-password__logo">
          <ButtonBack className="mr-20" onClick={this.onBack} />
          <Link to="/"><Logo size="xxl" /></Link>
        </div>
        <div className="pl-20 pr-20">
          <Step active={!isConfirmed && step === 0}>
            {this.renderResetPasswordForm()}
          </Step>
          <Step active={!isConfirmed && step === 1}>
            {this.renderEmailSent()}
          </Step>
          <Step active={isConfirmed}>{this.renderSubmitForm()}</Step>
          <Button
            className="mt-20"
            icon="arrow-long"
            leftIcon
            isIconFilpH
            onClick={() => (window.location.href = '/login')}
          >
            Back to login
          </Button>
        </div>
      </div>
    )
  }
}

SectionForgotPassword.defaultProps = {
  className: '',
  forgotPassword: null,
  forgotPasswordConfirm: null,
  isConfirmed: false,
  showNotification: null,
  history: null,
}

SectionForgotPassword.propTypes = {
  className: PropTypes.string,
  forgotPassword: PropTypes.func,
  forgotPasswordConfirm: PropTypes.func,
  isConfirmed: PropTypes.bool,
  showNotification: PropTypes.func,
  history: PropTypes.object,
}

export default SectionForgotPassword
