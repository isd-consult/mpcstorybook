import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SlideNavigatorItem.scss'

class SlideNavigatorItem extends Component {
  render () {
    const {
      className,
      theme,
      active,
      onClick,
    } = this.props

    return (
      <span
        className={clsx(
          'slide-navigator-item',
          {[`slide-navigator-item--active`]: active},
          {[`slide-navigator-item--${theme}`]: theme},
          className
        )}
        onClick={()=>onClick()}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            if (onClick) onClick(e)
          }
        }}
        role="button"
        tabIndex="0"
      >
        <div className="slide-navigator-item__outer" />
        <div className="slide-navigator-item__inner" />
      </span>
    )
  }
}

SlideNavigatorItem.defaultProps = {
  className: '',
  active: false,
  onClick: null,
  theme: null,
}

SlideNavigatorItem.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  theme: PropTypes.oneOf([null, 'men', 'women'])
}

export default SlideNavigatorItem
