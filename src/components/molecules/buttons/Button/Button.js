import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import './Button.scss'

import Icon from 'components/atoms/common/Icon'
import Text from 'components/atoms/common/Text'
import Spinner from 'components/molecules/spinners/Spinner'

class Button extends Component {
  render() {
    const {
      auto,
      full,
      category,
      children,
      className,
      icon,
      onClick,
      isCentered,
      tag,
      fw,
      isSmall,
      isLoading,
      isIconLeft,
      isIconRight,
      isIconFilpV,
      isIconFilpH,
      leftIcon,
      theme,
      backgroundColor,
      isDisabled,
      ...other
    } = this.props

    const Root = `${tag}`

    return (
      <Root
        className={clsx(
          'button',
          {
            [`button--${category}`]: category,
            [`button--${theme}`]: theme,
            'button--auto': auto,
            'button--full': full,
            'button--centered': isCentered,
            'button--small': isSmall,
            'button--disabled': isDisabled,
          },
          className,
        )}
        style={{backgroundColor}}
        onClick={!isDisabled && !isLoading ?onClick:null}
        {...other}
      >
        {icon && leftIcon && (
          <Icon
            size={15}
            className="mr-10 button__icon"
            name={icon}
            left={isIconLeft}
            right={isIconRight}
            flipV={isIconFilpV}
            flipH={isIconFilpH}
          />
        )}
        <Text size={isSmall ? 'xs' : 'normal'} className="button__text" fw={fw}>
          {children}
        </Text>
        {icon && !leftIcon && !isLoading && (
          <Icon
            size={14}
            className="ml-10 button__icon"
            name={icon}
            left={isIconLeft}
            right={isIconRight}
            flipV={isIconFilpV}
            flipH={isIconFilpH}
          />
        )}
        {isLoading && <Spinner className="button__loading" size="small" />}
      </Root>
    )
  }
}

Button.defaultProps = {
  children: '',
  className: '',
  category: null,
  tag: 'div',
  full: false,
  auto: false,
  fw: null,
  icon: '',
  isIconLeft: false,
  isIconRight: false,
  leftIcon: false,
  isIconFilpV: false,
  isIconFilpH: false,
  isCentered: false,
  isDisabled: false,
  onClick: null,
  isSmall: false,
  isLoading: false,
  theme: null,
  backgroundColor: null,
}

Button.propTypes = {
  auto: PropTypes.bool,
  full: PropTypes.bool,
  fw: PropTypes.oneOf([null, 'bold', 'light', 'medium']),
  category: PropTypes.oneOf([null, 'secondary', 'tertiary', 'grey']),
  theme: PropTypes.oneOf([null, 'men', 'women']),
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.string,
  isIconLeft: PropTypes.bool,
  isIconRight: PropTypes.bool,
  isIconFilpV: PropTypes.bool,
  isIconFilpH: PropTypes.bool,
  leftIcon: PropTypes.bool,
  isCentered: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  tag: PropTypes.string,
  isSmall: PropTypes.bool,
  isLoading: PropTypes.bool,
  backgroundColor: PropTypes.string,
}

export default Button
