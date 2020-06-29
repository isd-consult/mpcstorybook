import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './RadioBox.scss'
import Text from 'components/atoms/common/Text'

class RadioBox extends Component {
  constructor(props) {
    super(props)
    this.state = { checked: false }
    this.onChange = this.onChange.bind(this)
  }
  
  componentDidMount(){
    const {checked} = this.props
    this.setState({ checked })
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
      id,
      label,
      name,
      value,
      fw,
      disabled,
    } = this.props
    const {
      checked
    } = this.state
    return (
      <div
        className={clsx(
          'radiobox',
          {
            'radiobox--active': checked,
            'radiobox--disabled': disabled
          }, 
          className
        )}
      >
        <label htmlFor={id+name+label} className="radiobox__label-form">
          <input
            type='radio'
            name={name}
            id={id+name+label}
            hidden
            onChange={(e)=>this.onChange(e)}
            checked={checked}
            value={value}
            disabled={disabled}
          />
          <div
            className='radiobox__icon'
          />

          <Text
            className='radiobox__label ml-10'
            size="xl"
            fw={fw}
          >
            {label}
          </Text>
        </label>
      </div>
    )
  }
}

RadioBox.defaultProps = {
  className: '',
  name: null,
  id: null,
  label: null,
  value: null,
  checked: false,
  disabled: false,
  onChange: null,
  fw: 'light',
}

RadioBox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.number
  ]),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  fw: PropTypes.oneOf(['light', 'bold']),
}

export default RadioBox
