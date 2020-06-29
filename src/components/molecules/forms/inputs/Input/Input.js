import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './Input.scss'

class Input extends Component {
  render () {
    const {
      className,
      name,
      type,
      placeholder,
      onChange,
      value,
      readOnly,
      hidden,
    } = this.props

    return (
      <input
        className={clsx(
          'input',
          className
        )}
        name={name}
        type={type}
        readOnly={readOnly}
        placeholder={placeholder}
        onChange={onChange}
        value={value || ''}
        hidden={hidden}
      />
    )
  }
}

Input.defaultProps = {
  className: '',
  name: null,
  type: null,
  placeholder: 'Input Text',
  onChange: null,
  readOnly: false,
  value: '',
  hidden: false
}

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf([null, 'text', 'password']),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  readOnly: PropTypes.bool,
  hidden: PropTypes.bool
}

export default Input
