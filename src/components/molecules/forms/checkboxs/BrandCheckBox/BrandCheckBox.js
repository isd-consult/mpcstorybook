import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './BrandCheckBox.scss'
import noimage from 'assets/images/noimage.png'

class BrandCheckBox extends Component {
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
      value,
    } = this.props
    const { checked } = this.state
    return (
      <div
        className={clsx(
          'brand-check-box',
          {'brand-check-box--active': checked},
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
          <img
            className="brand-check-box__image"
            src={(image && image!=='None')?image:`${noimage}`}
            alt={value}
          />
        </label>
      </div>
    )
  }
}

BrandCheckBox.defaultProps = {
  className: '',
  image: null,
  name: null,
  value: null,
  checked: false,
  onChange: null
}

BrandCheckBox.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
}

export default BrandCheckBox
