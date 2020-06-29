import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './Checkbox.scss'
import Text from 'components/atoms/common/Text'

class Checkbox extends Component {
  constructor(props) {
    super(props)
    this.state={ checked: props.checked }
    this.onChange = this.onChange.bind(this)
  }

  static getDerivedStateFromProps(props, state) {
    if (props.checked !== state.checked) {
      return {
        checked: props.checked,
      }
    }
    return null
  }

  onChange(e) {
    const { onChange } = this.props
    this.setState({ checked: e.target.checked })
    if (onChange) onChange(e)
  }

  render() {
    const {
      className,
      id,
      name,
      label,
      value,
      theme,
      type,
      disabled,
    } = this.props
    const { checked } = this.state

    return (
      <div
        className={clsx(
          'checkbox',
          {
            [`checkbox--${theme}`]: theme,
            [`checkbox--active`]: checked,
            [`checkbox--disabled`]: disabled,
          },
          className,
        )}
      >
        <label htmlFor={id + name + label}>
          <input
            type="checkbox"
            name={name}
            id={id + name + label}
            hidden
            onChange={this.onChange}
            checked={checked}
            value={value}
            disabled={disabled}
          />
          <div
            className={clsx('checkbox__icon mt-5', {
              [`checkbox__icon--${type}`]: type,
            })}
          />
          <Text
            className={clsx('checkbox__label ml-10')}
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

Checkbox.defaultProps = {
  className: '',
  id: null,
  name: null,
  label: null,
  value: null,
  checked: false,
  onChange: null,
  type: 'round',
  theme: null,
  disabled: false,
}

Checkbox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['round', 'rect']),
  theme: PropTypes.oneOf([null, 'men', 'women']),
  disabled: PropTypes.bool,
}

export default Checkbox
