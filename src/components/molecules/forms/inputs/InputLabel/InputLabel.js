import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './InputLabel.scss'
import Text from 'components/atoms/common/Text'
import Input from 'components/molecules/forms/inputs/Input/Input'

class InputLabel extends Component {
  
  constructor(props) {
    super(props)
    this.state = { value: null }
    this.onChange = this.onChange.bind(this)
  }
  
  componentDidMount() {
    const {value} = this.props
    this.setState({value})
  }

  componentWillReceiveProps(nextProps) {
    const {value} = this.props
    if (value !== nextProps.value) {
      this.setState({value: nextProps.value})
    }
  }
  
  onChange(e) {
    const {onChange} = this.props
    this.setState({value: e.target.value})
    onChange(e)
  }

  render () {
    const {
      className,
      label,
      name,
      type,
      placeholder,
      validationError,
      required,
      hidden,
    } = this.props

    const { value } = this.state
    
    return (
      <div
        className={clsx(
          'input-label',
          {[`input-label--error`]: validationError},
          className
        )}
      >
        <Text
          className="input-label__label"
          fw='bold'
          size='xs'
        >
          {label}
          {required?<span style={{color:'red'}}>*</span>:''}
        </Text>
        <Input
          className="input-label__input"
          name={name}
          type={type}
          placeholder={validationError || placeholder}
          value={value}
          onChange={this.onChange}
          hidden={hidden}
        />
      </div>
    )
  }
}

InputLabel.defaultProps = {
  className: '',
  label: '',
  name: null,
  type: null,
  placeholder: 'place holder',
  onChange: null,
  value: '',
  validationError: null,
  required: false,
  hidden: false,
}

InputLabel.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf([null, 'password', 'text']),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  validationError: PropTypes.string,
  required: PropTypes.bool,
  hidden: PropTypes.bool
}

export default InputLabel
