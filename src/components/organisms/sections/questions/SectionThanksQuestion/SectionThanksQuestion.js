import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionThanksQuestion.scss'
import Text from 'components/atoms/common/Text'
import Button from 'components/molecules/buttons/Button'

class SectionThanksQuestion extends Component {
  render () {
    const {
      className,
      name
    } = this.props

    return (
      <div
        className={clsx(
          'section-thanks-question',
          className
        )}
      >
        <Text
          size="h2"
          fw="bold"
        >
          {`Thank you for sharing, ${name || ''}!`}
        </Text>
        <Text
          className="mt-10"
          size="xxl"
          fw="bold"
        >
          Here is your R100 off coupon:
        </Text>
        <div className="section-thanks-question__r100">
          <Text
            size="h1"
            fw="bold"
          >
            R100 off
          </Text>
          <Text
            size="h2"
            fw="bold"
          >
            your first order
          </Text>
          <Text
            className="mt-10"
            size="xxl"
            fw="bold"
          >
            Your coupon has been added to your cart
          </Text>
        </div>
        <div style={{marginTop: `-20px`, padding: `0 60px`}}>
          <Button
            className="section-thanks-question__shopbtn"
            href="/"
            tag="a"
          >
            Start Shopping
          </Button>
        </div>
        <Text
          className="mt-20"
          size="xl"
          fw="bold"
          align="center"
        >
          Minimum spend R400
        </Text>
      </div>
    )
  }
}

SectionThanksQuestion.defaultProps = {
  className: '',
  name: null
}

SectionThanksQuestion.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string
}

export default SectionThanksQuestion
