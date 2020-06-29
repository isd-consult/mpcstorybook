import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionChangePassword.scss'
import InputField from 'components/molecules/forms/inputs/InputField'
import Button from 'components/molecules/buttons/Button'
import ValidationUtils from 'utils/ValidationUtils'

class SectionChangePassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      validationError: {
        oldPassword: null,
        newPassword: null,
        confirmPassword: null
      },
      isLoading: false
    }
    this.onChange = this.onChange.bind(this)
    this.savePassword = this.savePassword.bind(this)
    this.validate = this.validate.bind(this)
  }
  
  onChange(event) {
    const {validationError} = this.state
    this.setState({
      [event.target.name]: event.target.value,
      validationError: {
        ...validationError,
        [event.target.name]: null
      }
    })
  }
  
  validate() {
    const {
      oldPassword, 
      newPassword, 
      confirmPassword,
    } = this.state

    let valError = false
    let validationError = null
    if (oldPassword===null || oldPassword===''){
      validationError= {...validationError, oldPassword: 'It must be not empty'}
      valError = true
    }
    if (!newPassword || newPassword===''){
      validationError= {
        ...validationError, 
        newPassword: 'It must be not empty'
      }
      valError= true
    }
    if (!ValidationUtils.checkPassword(newPassword)){
      validationError= {...validationError, newPassword: 'at least one number, '
      +'one lowercase and one uppercase letter at least six characters'}
      valError = true
    }
    if (!confirmPassword || confirmPassword===''){
      validationError= {
        ...validationError, 
        confirmPassword: 'It must be not empty'
      }
      valError= true
    }
    if (newPassword !== confirmPassword){
      validationError= {
        ...validationError, 
        confirmPassword: 'It must be same with new password'
      }
      valError= true
    }
    this.setState({validationError})
    return !valError
  }
  
  async savePassword() {
    const {
      onSavePassword
    } = this.props
    const {
      oldPassword, 
      newPassword
    } = this.state
    if (this.validate() && onSavePassword) {
      this.setState({isLoading: true})
      await onSavePassword(oldPassword, newPassword)
      this.setState({isLoading: false})
    }
  }

  render () {
    const {
      className,
      theme
    } = this.props
    const {
      oldPassword,
      newPassword,
      confirmPassword,
      validationError,
      isLoading
    } = this.state

    return (
      <div
        className={clsx(
          'section-change-password',
          className
        )}
      >
        <InputField
          className="mt-10"
          label="Current Password"
          required
          placeholder="Current Password"
          name="oldPassword"
          onChange={this.onChange}
          value={oldPassword}
          type="password"
          validationError={validationError && validationError.oldPassword}
          theme={theme}
        />
        <InputField
          className="mt-10"
          label="New Password"
          required
          placeholder="New Password"
          name="newPassword"
          onChange={this.onChange}
          value={newPassword}
          type="password"
          validationError={validationError && validationError.newPassword}
          theme={theme}
        />
        <InputField
          className="mt-10"
          label="Confirm New Password"
          required
          placeholder="Confirm New Password"
          name="confirmPassword"
          onChange={this.onChange}
          value={confirmPassword}
          type="password"
          validationError={validationError && validationError.confirmPassword}
          theme={theme}
        />
        <Button
          className="mt-20"
          onClick={this.savePassword}
          isLoading={isLoading}
          theme={theme}
        >
          SAVE
        </Button>
      </div>
    )
  }
}

SectionChangePassword.defaultProps = {
  className: '',
  onSavePassword: null,
  theme: null
}

SectionChangePassword.propTypes = {
  className: PropTypes.string,
  onSavePassword: PropTypes.func,
  theme: PropTypes.oneOf([null, 'men', 'women'])
}

export default SectionChangePassword
