import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './StepText.scss'
import Text from 'components/atoms/common/Text'

class StepText extends Component {
  render () {
    const {
      className,
      total,
      current,
      auto
    } = this.props

    return (
      <div
        className={clsx(
          'step-text',
          {'step-text--auto': auto},
          className
        )}
      >
        <Text className="step-text__step" size="xxl">
          Step
        </Text>
        <Text
          className="step-text__current ml-10"
          size="xxl"
          fw="bold"
        >
          {current.toString().padStart(2, "0")}
        </Text>
        <Text 
          className="step-text__total"
          size="xxs"
        >
          {`/ ${total.toString().padStart(2, "0")}`}
        </Text>
      </div>
    )
  }
}

StepText.defaultProps = {
  className: '',
  total: 0,
  current: 0,
  auto: false,
}

StepText.propTypes = {
  className: PropTypes.string,
  total: PropTypes.number,
  current: PropTypes.number,
  auto: PropTypes.bool
}

export default StepText
