import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './OrderConfirmation.scss'
import BaseLayout from 'components/layouts/BaseLayout'
import ProgressBar 
  from 'components/molecules/panels/ProgressBar'
import SectionOrderSummary 
  from 'components/organisms/sections/delivery/SectionOrderSummary'
import SectionDeliveryHeader
  from 'components/organisms/sections/delivery/SectionDeliveryHeader'
import SectionDeliveryFooter
  from 'components/organisms/sections/delivery/SectionDeliveryFooter'
import SectionPoPRequest
  from 'components/organisms/sections/delivery/SectionPoPRequest'

class OrderConfirmation extends Component {
  render () {
    const {
      theme,
      stepItems,
      subTotal,
      deliveryTotal,
      total,
      saveTotal,
      totalFbucks,
      totalVat,
      items,
      orderNumber,
      deliveryAddress,
      paymentMethod,
      dtd,
      history,
      ...others
    } = this.props

    return (
      <BaseLayout
        theme={theme}
        isHeader={false}
        isFooter={false}
        {...others}
      >
        <SectionDeliveryHeader />
        <ProgressBar
          stepItems={stepItems}
          current={2}
        />
        <SectionPoPRequest
          orderNumber={orderNumber}
          dtd={dtd}
          total={total}
          totalFbucks={totalFbucks}
          totalVat={totalVat}
        />
        <SectionOrderSummary
          className="mt-20"
          theme={theme}
          subTotal={subTotal}
          deliveryTotal={deliveryTotal}
          total={total}
          totalVat={totalVat}
          items={items}
          deliveryAddress={deliveryAddress}
          paymentMethod={paymentMethod}
          dtd={dtd}
          history={history}
        />
        <SectionDeliveryFooter />
      </BaseLayout>
    )
  }
}

OrderConfirmation.defaultProps = {
  theme: null,
  stepItems: null,
  subTotal: 0,
  deliveryTotal: 0,
  total: 0,
  saveTotal: 0,
  totalFbucks: 0,
  totalVat: 0,
  items: null,
  orderNumber: null,
  deliveryAddress: null,
  paymentMethod: null,
  dtd: null,
  history: null,
}

OrderConfirmation.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
  stepItems: PropTypes.array,
  subTotal: PropTypes.number,
  deliveryTotal: PropTypes.number,
  total: PropTypes.number,
  saveTotal: PropTypes.number,
  totalFbucks: PropTypes.number,
  totalVat: PropTypes.number,
  items: PropTypes.array,
  orderNumber: PropTypes.string,
  deliveryAddress: PropTypes.object,
  paymentMethod: PropTypes.object,
  dtd: PropTypes.object,
  history: PropTypes.object,
}

export default OrderConfirmation
