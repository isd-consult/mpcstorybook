import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { Link } from 'react-router-dom'
import Icon from '../../common/Icon'
import Text from '../../common/Text'

import './QuestionsButton.scss'

class QuestionsButton extends Component {
  render() {
    const {
      className,
      isSecondary,
      isSmall,
      children,
      icon,
      to,
      href,
      tag,
      isBlackYellow,
      isTertiary,
      ...other
    } = this.props

    // eslint-disable-next-line no-nested-ternary
    const Root = to ? Link : tag || 'a'
    return (
      <Root
        to={to}
        href={href}
        className={clsx(
          'questions-button',
          {
            'questions-button--secondary': isSecondary,
            'questions-button--black-yellow': isBlackYellow,
            'questions-button--small': isSmall,
            'questions-button--tertiary': isTertiary,
          },
          className,
        )}
        {...other}
      >
        {icon && !isTertiary && (
          <Icon className="questions-button__icon mr-5" name={icon} size={7} />
        )}
        {
          <Text
            fw={isBlackYellow || isTertiary ? 'medium' : null}
            color={isSecondary && isSmall ? 'white' : null}
            size={isSmall ? 'l' : 'xl'}
          >
            {children}
          </Text>
        }
        {icon && isTertiary && (
          <Icon className="questions-button__icon ml-5" name={icon} size={13} />
        )}
      </Root>
    )
  }
}

QuestionsButton.defaultProps = {
  className: '',
  isSecondary: false,
  isSmall: false,
  isBlackYellow: false,
  icon: null,
  to: null,
  href: null,
  tag: null,
  isTertiary: false,
  children: 'Question button',
}

QuestionsButton.propTypes = {
  className: PropTypes.string,
  isSecondary: PropTypes.bool,
  icon: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
  tag: PropTypes.string,
  isSmall: PropTypes.bool,
  isTertiary: PropTypes.bool,
  isBlackYellow: PropTypes.bool,
  children: PropTypes.any,
}

export default QuestionsButton
