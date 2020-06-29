import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import StringUtils from 'utils/StringUtils'
import './Price.scss'
import Text from 'components/atoms/common/Text'

class Price extends Component {
  render () {
    const {
      className,
      // price,
      discount,
      isCenter,
      isVertical,
      credit,
    } = this.props

    // const isDiscount = !!discount

    return (
      <div
        className={clsx(
          'price',
          {
            'price--center': isCenter,
            'price--vertical': isVertical,
          },
          className,
        )}
      >
        <div>
          {/* <Text
            className="price__value mr-5"
            size={isDiscount ? 'xl' : 'xxl'}
            color={isDiscount ? 'silver-chalice' : ''}
            isLineThrough={isDiscount}
            fw={isDiscount ? 'light' : 'bold'}
          >
            {StringUtils.formatPrice(price)}
          </Text> */}
          <Text
            className="price__discount"
            color="bright-chico"
            size="xxl"
            fw="bold"
          >
            {StringUtils.formatPrice(discount)}
          </Text>
        </div>
        {credit ? (
          <Text
            className="price__fbucks ml-5"
            theme="women"
          >
            {`EARN R${credit} FBUCKS`}
          </Text>
        ) : null}
      </div>
    )
  }
}

Price.defaultProps = {
  className: '',
  // price: null,
  discount: null,
  credit: null,
  isCenter: null,
  isVertical: null,
}

Price.propTypes = {
  className: PropTypes.string,
  // price: PropTypes.number,
  discount: PropTypes.number,
  credit: PropTypes.number,
  isCenter: PropTypes.bool,
  isVertical: PropTypes.bool,
}

export default Price
