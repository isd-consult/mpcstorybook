import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SizeCheckBox.scss'
import Text from 'components/atoms/common/Text'

class SizeCheckBox extends Component {
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
    onChange(e)
  }

  render () {
    const {
      name,
      className,
      label,
      value,
    } = this.props
    const {
      checked
    } = this.state
    return (
      <div
        className={clsx(
          'size-check-box pt-5 pb-5',
          {'size-check-box--active': checked}, 
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
          />
          <Text
            className={clsx('size-check-box__label')}
            size="small"
            fw="bold"
          >
            {label}
          </Text>
        </label>
      </div>
    )
  }
}

SizeCheckBox.defaultProps = {
  className: '',
  name:null,
  label: null,
  value: null,
  checked: false,
  onChange: null,
}

SizeCheckBox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
}

export default SizeCheckBox
