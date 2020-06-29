import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './InputField.scss'
import Input from 'components/molecules/forms/inputs/Input'
import Text from 'components/atoms/common/Text'

class InputField extends Component {
  render () {
    const {
      className,
      name,
      placeholder,
      type,
      onChange,
      onBlur,
      value,
      label,
      required,
      validationError,
      readOnly,
      theme
    } = this.props

    return (
      <div
        className={clsx(
          'input-field',
          {[`input-field--${theme}`]: theme},
          className
        )}
      >
        {
          label && (
          <Text className="mt-20 mb-5" fw="bold">
            {label}
            {
              required
              ? <Text tag="span" color="red">*</Text>
              : <Text tag="span" fw="medium">(Optional)</Text>
            }
          </Text>
)}
        <Input
          className="input-field__text pl-10"
          placeholder={placeholder}
          name={name}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          readOnly={readOnly}
        />
        { 
        validationError && (
        <Text className="input-field__error mt-5">
          {validationError}
        </Text>
)}
      </div>
    )
  }
}

InputField.defaultProps = {
  className: '',
  theme: null,
  name: null,
  type: null,
  placeholder: null,
  onChange: null,
  onBlur: null,
  value: '',
  label: '',
  required: false,
  validationError: null,
  readOnly: false,
}

InputField.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  name: PropTypes.string,
  type: PropTypes.oneOf([null, 'text', 'password', 'number']),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  validationError: PropTypes.string,
  readOnly: PropTypes.bool,
}

export default InputField
