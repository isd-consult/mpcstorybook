import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionLogin.scss'

import Text from 'components/atoms/common/Text'
import InputIcon from 'components/molecules/forms/inputs/InputIcon'
import Button from 'components/molecules/buttons/Button'
import HrText from 'components/molecules/texts/HrText'
import Logo from 'components/atoms/common/Logo'
import ButtonBack from 'components/molecules/buttons/ButtonBack'

import { Formik } from 'formik'
import { SignInSchema } from 'utils/formikValidation'
import { Link } from 'react-router-dom'

class SectionLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(values) {
    const { signIn } = this.props
    try {
      await signIn(values.email, values.password)
    } catch (error) {
      this.setState({ error: error.message })
    }
  }

  renderForm() {
    const { theme, isLoading } = this.props
    const { error } = this.state

    return (
      <Formik
        initialValues={{ email: '', password: '' }}
        enableReinitialize
        validationSchema={SignInSchema}
        onSubmit={this.handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          // isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Text size="h2" fw="bold">
              Log In:
            </Text>
            <InputIcon
              className="mt-20"
              icon="arroba"
              placeholder="Email:"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              validationError={
                errors.email && touched.email ? errors.email : null
              }
            />
            <InputIcon
              className="mt-20"
              icon="key"
              placeholder="Password:"
              name="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              forgotPassword={() =>
                (window.location.href = '/auth/forgotpassword')
              }
              validationError={
                errors.password && touched.password ? errors.password : null
              }
            />
            {
              error && (
                <Text
                  className="mt-20 section-login__error"
                  size="small"
                  align="center"
                >
                  {error}
                </Text>
              )
            }
            <Button
              tag="button"
              type="submit"
              className="mt-30"
              icon="arrow-long"
              theme={theme}
              isLoading={isLoading}
            >
              Log in
            </Button>
          </form>
        )}
      </Formik>
    )
  }

  render() {
    const { className, googleSignIn, facebookSignIn, theme } = this.props

    return (
      <div className={clsx('section-login', className)}>
        <div className="section-login__logo">
          <ButtonBack className="mr-20" />
          <Link to="/">
            <Logo size="xxl" />
          </Link>
        </div>
        <div className="section-login__navigator pl-20 pr-20 mb-30">
          <a
            href="/login"
            className={clsx(
              'section-register__logintab pt-15 pb-15',
              'section-register__logintab--active',
            )}
          >
            Log In
          </a>
          <a
            href="/register"
            className="section-register__registertab pt-15 pb-15"
          >
            Sign Up
          </a>
        </div>
        <div className="pl-20 pr-20">{this.renderForm()}</div>
        <HrText className="mt-20" title="or login with" />
        <Button
          className="mt-20 section-login__facebook"
          icon="facebook"
          theme={theme}
          isCentered
          onClick={facebookSignIn}
          leftIcon
        >
          Facebook
        </Button>
        <Button
          className="mt-20 section-login__google"
          icon="google-plus"
          theme={theme}
          isCentered
          onClick={googleSignIn}
          leftIcon
        >
          Google
        </Button>
      </div>
    )
  }
}

SectionLogin.defaultProps = {
  className: '',
  isLoading: false,
  googleSignIn: null,
  facebookSignIn: null,
  theme: null,
  signIn: null,
}

SectionLogin.propTypes = {
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  googleSignIn: PropTypes.func,
  facebookSignIn: PropTypes.func,
  signIn: PropTypes.func,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default SectionLogin
