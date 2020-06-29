import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SingleRangeInput.scss'

class SingleRangeInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    const {value} = this.props
    this.setState({value})
  }
  
  componentWillReceiveProps(nextProps) {
    const {value} = this.props
    if (JSON.stringify(value) !== JSON.stringify(nextProps.value)) {
      this.setState({value: nextProps.value})
    }
  }
    
  onChange(e) {
    const {onChange} = this.props
    this.setState({value: parseInt(e.target.value, 10)})
    if (onChange) onChange(e)
  }

  render () {
    const {
      className,
      minValue,
      maxValue,
      step,
      orient,
      name
    } = this.props
    const {value} = this.state
    return (
      <input
        className={clsx(
          'single-range-input',
          {[`single-range-input--${orient}`]: orient},
          className
        )}
        value={value}
        min={minValue}
        max={maxValue}
        step={step}
        type="range"
        orient={orient}
        name={name}
        onChange={this.onChange}
      />
    )
  }
}

SingleRangeInput.defaultProps = {
  className: '',
  minValue: 0,
  maxValue: 0,
  name: null,
  step: 1,
  value: 0,
  onChange: null,
  orient: null
}

SingleRangeInput.propTypes = {
  className: PropTypes.string,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  name: PropTypes.string,
  step: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
  orient: PropTypes.string
}

export default SingleRangeInput
