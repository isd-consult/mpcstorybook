import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './Input.scss'

class Input extends Component {
  render () {
    const {
      className,
      type,
      placeHolder,
      onChange,
      ...others
    } = this.props

    return (
      <input
        className={clsx(
          'input',
          className
        )}
        placeholder={placeHolder}
        onChange={onChange}
        type={type}
        {...others}
      />
    )
  }
}

Input.defaultProps = {
  className: '',
  type: 'text',
  placeHolder: 'Type something...',
  id: null,
  onChange: null,
}

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  placeHolder: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
}

export default Input
