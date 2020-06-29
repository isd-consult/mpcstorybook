import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './OpenCloseBox.scss'
import Icon from 'components/atoms/common/Icon'

class OpenCloseBox extends Component {
  constructor(props) {
    super(props)
    this.state={ checked: props.checked }
    this.onChange = this.onChange.bind(this)
  }

  static getDerivedStateFromProps(props, state) {
    if (props.checked !== state.checked) {
      return {checked: props.checked}
    }
    return null
  }

  onChange(e) {
    const {onChange} = this.props
    this.setState({checked: e.target.checked})
    if (typeof onChange === "function") onChange(e)
  }

  render () {
    const {
      className,
      iconSize,
      openImage,
      closeImage,
      name,
      value,
      theme
    } = this.props
    const { checked } = this.state
    return (
      <div
        className={clsx(
          'open-close-box',
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
          {checked && (
          <Icon
            size={iconSize}
            name={closeImage}
            theme={theme}
          />
)}
          {!checked && (
          <Icon
            size={iconSize}
            name={openImage}
            theme={theme}
          />
)}
        </label>
      </div>
    )
  }
}

OpenCloseBox.defaultProps = {
  className: '',
  closeImage: null,
  openImage: null,
  iconSize: null,
  checked: false,
  onChange: null,
  name: null,
  value: '',
  theme: null,
}

OpenCloseBox.propTypes = {
  className: PropTypes.string,
  openImage: PropTypes.string,
  closeImage: PropTypes.string,
  iconSize: PropTypes.number,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women'])
}

export default OpenCloseBox
