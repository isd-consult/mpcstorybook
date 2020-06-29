import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionStickyBottom.scss'
import Button from 'components/molecules/buttons/Button'
import Text from 'components/atoms/common/Text'
import StringUtils from 'utils/StringUtils'

class SectionStickyBottom extends Component {
  constructor(props) {
    super(props)
    this.state = {isLoading: false}
    this.handleCheckout=this.handleCheckout.bind(this)
  }

  async handleCheckout() {
    const {handleCheckout} = this.props
    this.setState({isLoading: true})
    await handleCheckout()
    this.setState({isLoading: false})
  }

  render () {
    const {
      className,
      theme,
      total
    } = this.props
    const {isLoading} = this.state
    return (
      <div
        className={clsx(
          'section-sticky-bottom',
          className
        )}
      >
        <div className="section-sticky-bottom__section"> 
          <div className="pr-25">
            <Text>
              <span className="section-sticky-bottom__label">Total</span> 
              <span className="section-sticky-bottom__total pl-10">
                {StringUtils.formatPrice(total)}
              </span> 
            </Text>
          </div>
          <div className="pl-25">
            <Button
              theme={theme}
              onClick={this.handleCheckout}
              isLoading={isLoading}
            >
              CHECKOUT NOW
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

SectionStickyBottom.defaultProps = {
  className: '',
  theme: null,
  handleCheckout: null,
  total: 0
}

SectionStickyBottom.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  handleCheckout: PropTypes.func,
  total: PropTypes.number,
}

export default SectionStickyBottom
