import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import iconPrimary from 'assets/images/logos/icon-primary.png'
import iconSecondary from 'assets/images/logos/icon-secondary.png'
import iconTertiary from 'assets/images/logos/icon-tertiary.png'
import logo from 'assets/images/logos/logo.png'
import './Logo.scss'

class Logo extends Component {
  render () {
    const {
      className,
      type,
      category,
      size,
      align,
    } = this.props

    let image =  logo
    if (type==='logo') {
      image = logo
    } else {
      switch (category) {
        case 'primary':
          image = iconPrimary
          break
        case 'secondary':
          image = iconSecondary
          break
        case 'tertiary':
          image = iconTertiary
          break
        default:
          break
      }
    }

    return (
      <div
        className={clsx(
          'logo',
          {[`logo--${size}`]: size},
          {[`logo--${align}`]: align},
          className
        )}
      >
        <img 
          className="logo__image"
          src={image}
          alt="flex"
        />
      </div>
    )
  }
}

Logo.defaultProps = {
  className: '',
  type: 'logo',
  category: 'primary',
  size: 'normal',
  align: null
}

Logo.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['logo', 'icon']),
  category: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['xxs', 'xs', 'small', 'normal', 'large', 'xl', 'xxl']),
  align: PropTypes.oneOf([null, 'left', 'center', 'right'])
}

export default Logo
