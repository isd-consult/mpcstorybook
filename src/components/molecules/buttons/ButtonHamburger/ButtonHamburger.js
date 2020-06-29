import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './ButtonHamburger.scss'

class ButtonHamburger extends Component {
  render() {
    const { className, isOpened, onClick, theme } = this.props

    return (
      <div
        className={clsx(
          'button-hamburger',
          {
            'button-hamburger--opened': isOpened,
            [`button-hamburger--${theme}`]: theme,
          },
          className,
        )}
        role='button'
        tabIndex={0}
        onClick={onClick}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            if (onClick) onClick(e)
          }
        }}
      >
        <div className="button-hamburger__lines">
          <span className="button-hamburger__line" />
          <span className="button-hamburger__line" />
          <span className="button-hamburger__line" />
        </div>
        <div className="button-hamburger__text">menu</div>
      </div>
    )
  }
}

ButtonHamburger.defaultProps = {
  className: '',
  isOpened: false,
  onClick: null,
  theme: null,
}

ButtonHamburger.propTypes = {
  className: PropTypes.string,
  isOpened: PropTypes.bool,
  onClick: PropTypes.func,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default ButtonHamburger
