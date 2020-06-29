import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './TextArea.scss'

class TextArea extends Component {
  render () {
    const {
      className,
      name,
      placeholder,
      onChange,
      onBlur,
      value,
      block
    } = this.props

    return (
      <textarea
        className={clsx(
          'text-area',
          {[`text-area--block`]: block},
          className
        )}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value || ''}
      />
    )
  }
}

TextArea.defaultProps = {
  className: '',
  name: null,
  placeholder: '',
  onChange: null,
  onBlur: null,
  value: '',
  block: false
}

TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  block: PropTypes.bool
}

export default TextArea
