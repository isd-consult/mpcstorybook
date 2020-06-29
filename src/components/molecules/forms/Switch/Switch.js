import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './Switch.scss'

class Switch extends Component {
  constructor(props){
    super(props)
    this.state = {active: false}
    this.onChange = this.onChange.bind(this)
  }
  
  componentWillReceiveProps(nextProps) {
    const {active} = this.props
    if (active !== nextProps.active) {
      this.setState({active: nextProps.active})
    }
  }

  onChange() {
    const {active} = this.state
    this.setState({active: !active})
  }

  render () {
    const {
      className,
      id,
      name
    } = this.props
    const { active } = this.state
    return (
      <div
        className={clsx(
          'switch',
          {[`switch--active`]: active},
          className
        )}
      >
        <label className="switch__label" htmlFor={id}>
          <input
            className="switch__input"
            role="switch"
            type="checkbox"
            id={id}
            name={name}
            checked={active}
            onChange={this.onChange}  
          />
          <span className="switch__track" />
          <span className="switch__handle" />
        </label>
      </div>
    )
  }
}

Switch.defaultProps = {
  className: '',
  active: false,
  id: null,
  name: null
}

Switch.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string
}

export default Switch
