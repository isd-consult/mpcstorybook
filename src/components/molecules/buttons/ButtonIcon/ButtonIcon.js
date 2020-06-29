import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './ButtonIcon.scss'

import Icon from 'components/atoms/common/Icon'
import Text from 'components/atoms/common/Text'

class ButtonIcon extends Component {
  render() {
    const {
      className,
      icon,
      iconSize,
      onClick,
      href,
      badge,
      isActive,
      isReversed,
      theme,
      isAutoFit,
      isNoBg,
      isDisabled,
    } = this.props

    const Root = href ? 'a' : 'div'
    return (
      <Root
        className={clsx(
          'button-icon',
          {
            'button-icon--active': isActive,
            'button-icon--reversed': isReversed,
            'button-icon--auto-fit': isAutoFit,
            'button-icon--no-bg': isNoBg,
            'button-icon--disabled': isDisabled,
            [`button-icon--${theme}`]: theme,
          },
          className,
        )}
        role="button"
        href={href || null}
        onClick={onClick}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            if (onClick) onClick(e)
          }
        }}
        tabIndex={0}
      >
        <Icon
          className="button-icon__icon"
          name={icon}
          size={iconSize}
          theme={theme}
        />
        {badge ? (
          <Text
            fw="bold"
            color="white"
            size="xxs"
            className="button-icon__badge"
          >
            {badge}
          </Text>
        ) : null}
      </Root>
    )
  }
}

ButtonIcon.defaultProps = {
  className: '',
  icon: '',
  iconSize: 15,
  onClick: null,
  href: '',
  badge: null,
  isActive: false,
  isReversed: false,
  theme: null,
  isAutoFit: null,
  isNoBg: null,
  isDisabled: false,
}

ButtonIcon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  onClick: PropTypes.func,
  href: PropTypes.string,
  badge: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isActive: PropTypes.bool,
  isReversed: PropTypes.bool,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  isAutoFit: PropTypes.bool,
  isNoBg: PropTypes.bool,
  isDisabled: PropTypes.bool,
}

export default ButtonIcon
