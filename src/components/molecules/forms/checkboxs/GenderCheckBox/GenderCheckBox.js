import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './GenderCheckBox.scss'
import noimage from 'assets/images/noimage.png'
import Text from 'components/atoms/common/Text'

class GenderCheckBox extends Component {
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
    this.setState({checked: e.target.checked})
    if (typeof onChange === "function") onChange(e)
  }

  render () {
    const {
      className,
      image,
      name,
      label,
      value,
    } = this.props
    const { checked } = this.state

    return (
      <div
        className={clsx(
          'gender-check-box',
          {'gender-check-box--active': checked},
          {[`gender-check-box--${label && label.toLowerCase()}`]: label},
          className
        )}
      >
        <label htmlFor={name}>
          <input
            type="checkbox"
            name={name}
            id={name}
            value={value}
            onChange={this.onChange}
            checked={checked}
            hidden
          />
          <div
            className="gender-check-box__portion"
          >
            <img 
              src={(image && image!=='None')?image:`${noimage}`}
              style={{height: '40px'}}
              alt={value}
            />
            <Text
              className="mt-10 ml-40 gender-check-box__label"
              size="xxl"
            >
              {label}
            </Text>
          </div>
        </label>
      </div>
    )
  }
}

GenderCheckBox.defaultProps = {
  className: '',
  image: null,
  name: null,
  label: null,
  value: null,
  checked: false,
  onChange: null
}

GenderCheckBox.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
}

export default GenderCheckBox
