import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './ColorCheckBox.scss'
import Text from 'components/atoms/common/Text'

class ColorCheckBox extends Component {
  constructor(props) {
    super(props)
    this.state={ checked: false }
    this.onChange = this.onChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const {checked} = this.props
    if (checked !== nextProps.checked) {
      this.setState({checked: nextProps.checked})
    }
  }

  onChange(e) {
    const {onChange} = this.props
    this.setState({ checked: e.target.checked})
    if (onChange) onChange(e)
  }

  render () {
    const {
      className,
      name,
      label,
      value,
      theme,
      disabled
    } = this.props
    const {
      checked
    } = this.state

    return (
      <div
        className={clsx(
          'color-check-box',
          {
            [`color-check-box--${theme}`]: theme,
            [`color-check-box--active`]: checked,
            [`color-check-box--disabled`]: disabled
          }, 
          className
        )}
      >
        <label htmlFor={name+label}>
          <input
            type='checkbox'
            name={name}
            id={name+label}
            hidden
            onChange={this.onChange}
            checked={checked}
            value={value}
            disabled={disabled}
          />
          <div className={clsx(
            'color-check-box__icon mt-5',
            {[`color-check-box__icon--${value}`]: value}
          )}
          />
          <Text
            className={clsx('color-check-box__label ml-10')}
            size="normal"
            fw="light"
          >
            {label}
          </Text>
        </label>
      </div>
    )
  }
}

ColorCheckBox.defaultProps = {
  className: '',
  name: null,
  label: null,
  value: null,
  checked: false,
  onChange: null,
  theme: null,
  disabled: false
}

ColorCheckBox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  disabled: PropTypes.bool
}

export default ColorCheckBox
