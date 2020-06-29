import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionCreditPayment.scss'
import Text from 'components/atoms/common/Text'
import Button from 'components/molecules/buttons/Button'
import Block from 'components/molecules/wrapers/Block'
import StringUtils from 'utils/StringUtils'

class SectionCreditPayment extends Component {
  constructor(props) {
    super(props)
    this.state ={isLoading: false}
    this.useCredits = this.useCredits.bind(this)
  }

  async useCredits() {
    const {useCredits} = this.props
    this.setState({isLoading: true})
    await useCredits()
    this.setState({isLoading: false})
  }

  render () {
    const {
      className,
      creditsAvailable,
      creditsInUse,
    } = this.props
    const {isLoading} = this.state
    return (
      (!!creditsAvailable || !!creditsInUse) && (
      <Block
        className={clsx(
          'section-credit-payment',
          className
        )}
      >
        <div className="section-credit-payment__available-credit">
          <Text size="xs" fw="bold">Available fBucks</Text>
          <Text size="normal">
            {StringUtils.formatPrice(creditsAvailable)}
          </Text>
        </div>
          
        <Button 
          className="section-credit-payment__spend-btn"
          category="grey"
          onClick={this.useCredits}
          isLoading={isLoading}
        >
          {
          creditsInUse
            ? `Remove ${StringUtils.formatPrice(creditsInUse)}`
            : `Spend`
        }
        </Button>
      </Block>
    )
    )
  }
}

SectionCreditPayment.defaultProps = {
  className: '',
  creditsAvailable: 0,
  creditsInUse: 0,
  useCredits: null
}

SectionCreditPayment.propTypes = {
  className: PropTypes.string,
  creditsAvailable: PropTypes.number,
  creditsInUse: PropTypes.number,
  useCredits: PropTypes.func
}

export default SectionCreditPayment
