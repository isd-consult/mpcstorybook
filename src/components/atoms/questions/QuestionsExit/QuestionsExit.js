import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { Link } from 'react-router-dom'
import Icon from 'components/atoms/common/Icon'
import Text from 'components/atoms/common/Text'
import './QuestionsExit.scss'

class QuestionsExit extends Component {
  render() {
    const { className, to, href, onClick } = this.props
    // eslint-disable-next-line no-nested-ternary
    const Root = to ? Link : href ? 'a' : 'div'
    return (
      <Root
        to={to}
        href={href}
        onClick={() => {
          if (onClick) {
            onClick(true)
          }
        }}
        className={clsx('questions-exit d-flex ai-center p-10', className)}
      >
        <Text color="white" isUppercase size="xxs" fw='medium'>
          Exit
        </Text>
        <Icon className="ml-5 questions-exit__icon" name="close" size={13} />
      </Root>
    )
  }
}

QuestionsExit.defaultProps = {
  className: '',
  to: null,
  href: null,
  onClick: null
}

QuestionsExit.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
}

export default QuestionsExit
