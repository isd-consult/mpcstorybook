import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './ButtonBack.scss'
import Icon from 'components/atoms/common/Icon'
import {Link} from 'react-router-dom'

class ButtonBack extends Component {

  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    const {onClick} = this.props
    if (onClick) 
      onClick()
    else
      window.history.back()
  }

  render () {
    const {
      className,
      theme,
      size
    } = this.props
    return (
      <Link
        to={{state:{exit: true}}}
        className={clsx(
          'button-back',
          className
        )}
        onClick={this.onClick}
      >
        <Icon 
          className="button-back__icon" 
          name="arrow"
          flipH
          size={size}
          theme={theme}
        />
      </Link>
    )
  }
}

ButtonBack.defaultProps = {
  className: '',
  theme: null,
  size: 20,
  onClick: null
}

ButtonBack.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  size: PropTypes.number,
  onClick: PropTypes.func
}

export default ButtonBack