import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './Number.scss'

class Number extends Component {
  constructor(props){
    super(props)
    this.state = {value:0}
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.feed = this.feed.bind(this)
  }

  componentDidMount(){
    const {value} = this.props
    this.setState({value})
  }

  componentWillReceiveProps(nextProps){
    const {value} = this.props
    if (value !== nextProps.value) {
      this.setState({value: nextProps.value})
    }
  }

  increment(e) {
    e.preventDefault()
    const {onChange, maxValue, disabled} = this.props
    if (disabled) return

    let {value} = this.state
    value += 1
    if (value > maxValue) {
      value -= 1
      this.setState({value})
    }
    else{
      this.setState({value})
    }

    if (onChange) onChange(value)
  }

  decrement(e) {
    e.preventDefault()
    const {onChange, disabled} = this.props
    if (disabled) return

    let {value} = this.state
    value -= 1
    if(value >= 0){
      this.setState({value})
      if (onChange) onChange(value)
    }else{
      this.setState({value: 0})
    }
  }

  feed(e) {
    e.preventDefault()
    const {onChange} = this.props
    this.setState({value: e.target.value})
    onChange(e.target.value)
  }

  render () {
    const {
      className,
      small,
      disabled
    } = this.props
    const { value } = this.state
    return (
      <div
        className={clsx(
          'number',
          {
            [`number--disabled`]: disabled,
            [`number--small`]: small
          },
          className
        )}
      >
        <a
          href="/"
          className="number__control"
          onClick={(e) => this.decrement(e)}
        >
          –
        </a>
        <input
          type="number"
          className="number__quantity"
          value={value}
          onChange={(e)=>this.feed(e)}
          disabled={disabled}
        />
        <a
          href="/"
          className="number__control"
          onClick={(e) => this.increment(e)}
        >
          +
        </a>
      </div>
    )
  }
}

Number.defaultProps = {
  className: '',
  onChange: null,
  value: 0,
  maxValue: 0,
  disabled: false,
  small: false
}

Number.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.number,
  maxValue: PropTypes.number,
  disabled: PropTypes.bool,
  small: PropTypes.bool
}

export default Number
