import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './MultiRangeInput.scss'

class MultiRangeInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: {
        min: 0,
        max: 0
      }
    }
    this.onMinChange = this.onMinChange.bind(this)
    this.onMaxChange = this.onMaxChange.bind(this)
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

  onMinChange(e) {
    const {onChange} = this.props
    let {value} = this.state
    const val = parseInt(e.target.value, 10)
    if (val <= value.max)
      value = {...value, min: val}
    else
      value = {...value, max: val}
    this.setState({value})
    if (onChange) onChange(value)
  }
  
  onMaxChange(e) {
    const {onChange} = this.props
    let {value} = this.state
    const val = parseInt(e.target.value, 10)
    if (val < value.min) 
      value = {...value, min: val}
    else
      value = {...value, max: val}
    this.setState({value})
    if (onChange) onChange(value)
  }

  render () {
    const {
      className,
      minValue,
      maxValue,
      step
    } = this.props
    const {value} = this.state
    const marLeft = maxValue > minValue
      ? 100/(maxValue-minValue)*value.min
      : 0
    const width = maxValue > minValue
      ? 100/(maxValue-minValue)*(value.max-value.min)
      : 100
    return (
      <div
        className={clsx(
          'multi-range-input',
          className
        )}
      >
        <div className="multi-range-input__slider">
          <div style={{
            position: "absolute",
            zIndex: `1`,
            backgroundColor: `white`,
            height: `3px`,
            marginLeft: `${marLeft}%`,
            width: `${width}%`
          }}
          />
          <input
            className="multi-range-input__slider-item"
            value={value.min}
            min={minValue}
            max={maxValue}
            step={step}
            type="range"
            onChange={this.onMinChange}
          />
          <input
            className="multi-range-input__slider-item"
            value={value.max}
            min={minValue}
            max={maxValue}
            step={step}
            type="range"
            onChange={this.onMaxChange}
          />
        </div>
      </div>
    )
  }
}

MultiRangeInput.defaultProps = {
  className: '',
  minValue: 0,
  maxValue: 0,
  step: 1,
  value: null,
  onChange: null,
}

MultiRangeInput.propTypes = {
  className: PropTypes.string,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.object,
  onChange: PropTypes.func
}

export default MultiRangeInput
