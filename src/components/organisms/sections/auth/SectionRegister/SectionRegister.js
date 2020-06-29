import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { Link } from 'react-router-dom'
import { Formik, Field } from 'formik'
import { SignUpSchema, SignUpFirstStepSchema } from 'utils/formikValidation'

import Text from 'components/atoms/common/Text'
import InputIcon from 'components/molecules/forms/inputs/InputIcon'
import Button from 'components/molecules/buttons/Button'
import Step from 'components/molecules/panels/Step'
import HrText from 'components/molecules/texts/HrText'
import ButtonBack from 'components/molecules/buttons/ButtonBack'
import Logo from 'components/atoms/common/Logo'

import './SectionRegister.scss'

class SectionRegister extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 0,
      error: ''
    }
    this.onBack = this.onBack.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onBack() {
    const { step } = this.state
    if (step > 0) this.setState({ step: step - 1 })
    else window.history.back()
  }

  getValidationSchema() {
    const { step } = this.state

    if (step === 0) return SignUpFirstStepSchema
    if (step === 1) return SignUpSchema

    return null
  }

  async handleSubmit(values, actions) {
    const { step } = this.state
    const { checkUser, signUp, setIdentificationNumber } = this.props
    const { email, password, identificationNumber } = values

    if (step === 0) {
      checkUser(email).then(response => {
        if (!response) {
          this.setState({ step: 1 })
        } else {
          actions.setFieldError('email', response.message)
        }
      })
    }

    if (step === 1) {
      try {
        await signUp(email, password)
        setIdentificationNumber(email, identificationNumber)
      } catch (error) {
        this.setState({ error })
      }
    }
  }

  renderEmailForm() {
    const { facebookSignIn, googleSignIn } = this.props
    const { isLoading } = this.props

    return (
      <>
        <Text size="h2" fw="bold">
          Sign Up:
        </Text>
        <Text className="section-register__subtitle" size="l">
          Sign up with your email address
        </Text>
        <Field name="email">
          {({ field, meta }) => (
            <InputIcon
              className="mt-20"
              icon="arroba"
              placeholder="Email Address:"
              validationError={meta.touched && meta.error ? meta.error : null}
              {...field}
            />
          )}
        </Field>
        <Field name="confirmEmail">
          {({ field, meta }) => (
            <InputIcon
              className="mt-20"
              icon="arroba"
              placeholder="Confirm email:"
              validationError={meta.touched && meta.error ? meta.error : null}
              {...field}
            />
          )}
        </Field>
        <Field name="identificationNumber">
          {({ field, meta }) => (
            <InputIcon
              className="mt-20"
              icon="verification-code"
              placeholder="Identification Number:"
              validationError={meta.touched && meta.error ? meta.error : null}
              {...field}
            />
          )}
        </Field>
        <Button
          className="mt-30"
          icon="arrow-long"
          tag="button"
          type="submit"
          isLoading={isLoading}
        >
          Continue
        </Button>
        <HrText className="mt-20" title="or sign up with" />
        <Button
          className="mt-20 section-register__facebook"
          icon="facebook"
          isCentered
          onClick={facebookSignIn}
          leftIcon
        >
          Facebook
        </Button>
        <Button
          className="mt-20 section-register__google"
          icon="google-plus"
          isCentered
          onClick={googleSignIn}
          leftIcon
        >
          Google
        </Button>
      </>
    )
  }

  renderPasswordForm() {
    const { isLoading } = this.props
    const { error } = this.state

    return (
      <>
        <Text size="h2" fw="bold">
          Sign Up:
        </Text>
        <Text className="section-register__subtitle" size="l">
          Please add a password
        </Text>
        <Field name="password">
          {({ field, meta }) => (
            <InputIcon
              className="mt-20"
              icon="key"
              placeholder="Password:"
              type="password"
              isMeter
              validationError={meta.touched && meta.error ? meta.error : null}
              {...field}
            />
          )}
        </Field>
        {
          error && (
            <Text
              className="mt-20 section-register__error"
              size="small"
              align="center"
            >
              {error}
            </Text>
          )
        }
        <Button
          className="mt-30"
          tag="button"
          type="submit"
          icon="arrow-long"
          isLoading={isLoading}
        >
          Sign up
        </Button>
      </>
    )
  }

  render() {
    const { className } = this.props
    const { step } = this.state

    return (
      <Formik
        className={clsx('section-register', className)}
        initialValues={{
          email: '',
          password: '',
          identificationNumber: '',
          confirmEmail: ''
        }}
        validationSchema={this.getValidationSchema()}
        onSubmit={this.handleSubmit}
      >
        {props => (
          <form onSubmit={props.handleSubmit}>
            <div className="section-register__logo">
              <ButtonBack className="mr-20" onClick={this.onBack} />
              <Link to="/">
                <Logo size="xxl" />
              </Link>
            </div>
            <div className="section-register__navigator pl-20 pr-20 mb-30">
              <a
                href="/login"
                className="section-register__logintab pt-15 pb-15"
              >
                Log In
              </a>
              <a
                href="/register"
                className={clsx(
                  'section-register__registertab pt-15 pb-15',
                  'section-register__registertab--active',
                )}
              >
                Sign Up
              </a>
            </div>
            <div className="pl-20 pr-20">
              <Step active={step === 0}>{this.renderEmailForm(props)}</Step>
              <Step active={step === 1}>{this.renderPasswordForm(props)}</Step>
            </div>
          </form>
        )}
      </Formik>
    )
  }
}

SectionRegister.defaultProps = {
  className: '',
  checkUser: null,
  signUp: null,
  setIdentificationNumber: null,
  facebookSignIn: null,
  googleSignIn: null,
  isLoading: false,
}

SectionRegister.propTypes = {
  className: PropTypes.string,
  checkUser: PropTypes.func,
  signUp: PropTypes.func,
  setIdentificationNumber: PropTypes.func,
  facebookSignIn: PropTypes.func,
  googleSignIn: PropTypes.func,
  isLoading: PropTypes.bool,
}

export default SectionRegister
