import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './InputIcon.scss'
import Icon from 'components/atoms/common/Icon'
import icons from 'components/atoms/common/Icon/icons.json'
import Input from 'components/molecules/forms/inputs/Input'
import Text from 'components/atoms/common/Text'
import PasswordMeter from 'components/atoms/common/PasswordMeter'

class InputIcon extends Component {
  render () {
    const {
      className,
      icon,
      name,
      placeholder,
      type,
      onChange,
      onBlur,
      value,
      forgotPassword,
      validationError,
      isMeter
    } = this.props

    return (
      <div
        className={clsx(
          'input-icon',
          {
            'input-icon--error': validationError
          },
          className
        )}
      >
        <Icon className="input-icon__icon" name={icon} size={16} />
        <Input
          className="input-icon__text pl-35"
          placeholder={placeholder}
          name={name}
          type={type}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
        />
        <span className="input-icon__underline" />
        {isMeter && (
          <div className='d-flex jc-flex-end mt-5'>
            <PasswordMeter
              className='input-icon__meter'
              password={value}
            />
          </div>

        )}
        {
          forgotPassword && (
          <Text
            className="input-icon__forgot"
            onClick={forgotPassword}
          >
            Forgot?
          </Text>
        )}
        {
          validationError && (
          <Text className="input-icon__error mt-5">
            {validationError}
          </Text>
        )}
      </div>
    )
  }
}

InputIcon.defaultProps = {
  className: '',
  icon: null,
  name: null,
  type: null,
  placeholder: null,
  onChange: null,
  onBlur: null,
  forgotPassword: null,
  value:'',
  validationError: null,
  isMeter: false
}

InputIcon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(Object.keys(icons)),
  name: PropTypes.string,
  type: PropTypes.oneOf([null, 'text', 'password']),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  forgotPassword: PropTypes.func,
  value: PropTypes.string,
  validationError: PropTypes.string,
  isMeter: PropTypes.bool
}

export default InputIcon
