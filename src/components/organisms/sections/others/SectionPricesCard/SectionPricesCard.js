import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionPricesCard.scss'
import Text from 'components/atoms/common/Text'
import Divider from 'components/atoms/common/Divider'
import StringUtils from 'utils/StringUtils'

class SectionPricesCard extends Component {

  render() {
    const {
      className,
      data,
      total,
      vat,
      isHidden
    } = this.props

    return (
      !isHidden && (
      <div className={clsx('section-prices-card', className)}>
        <Text size="xl" fw="bold" align="center" isUppercase>
          Order Summary
        </Text>
        {data && data.map((item, index)=>(
          <div
            key={index.toString()} 
            className="section-prices-card__row"
          >
            <Text color="grey">{item.label}</Text>
            <Text color="grey">
              {StringUtils.formatPrice(item.value, 2)}
            </Text>
          </div>
        ))}
        <Divider className="mt-10 mb-10" />
        <div className="section-prices-card__row">
          <Text fw="bold">Total</Text>
          <Text fw="bold" size="xl">
            {StringUtils.formatPrice(total, 2)}
          </Text>
        </div>
        {!!vat && (
        <>
          <Divider className="mt-10 mb-10" />
          <Text color="grey">
            {`*Includes VAT amount( ${StringUtils.formatPrice(vat, 2)} )`}
          </Text>
        </>
)}
      </div>
)
    )
  }
}

SectionPricesCard.defaultProps = {
  className: '',
  data: null,
  total: null,
  vat: null,
  isHidden: false
}

SectionPricesCard.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  total: PropTypes.number,
  vat: PropTypes.number,
  isHidden: PropTypes.bool
}

export default SectionPricesCard
