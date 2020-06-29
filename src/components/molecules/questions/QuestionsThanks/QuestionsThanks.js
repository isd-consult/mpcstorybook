import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import Text from 'components/atoms/common/Text'
import Button from 'components/atoms/questions/QuestionsButton'
import './QuestionsThanks.scss'

class QuestionsThanks extends Component {
  render() {
    const { className } = this.props

    return (
      <div className={clsx('questions-thanks', className)}>
        <div className="questions-thanks__content">
          <Text size="h1" fw="bold">
            R100 off
          </Text>
          <Text size="xxxl" fw="bold">
            your first order
          </Text>
          <Text className="mt-15 questions-thanks__text">
            your coupon has been added to your cart
          </Text>
          <Button to="/" className="questions-thanks__button" isBlackYellow>
            Start shopping
          </Button>
        </div>
        <Text className="mt-30">Minimum spend R400</Text>
      </div>
    )
  }
}

QuestionsThanks.defaultProps = {
  className: '',
}

QuestionsThanks.propTypes = {
  className: PropTypes.string,
}

export default QuestionsThanks
