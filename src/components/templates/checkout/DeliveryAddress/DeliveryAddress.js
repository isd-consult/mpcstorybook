import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './DeliveryAddress.scss'
import BaseLayout from 'components/layouts/BaseLayout'
import ProgressBar 
  from 'components/molecules/panels/ProgressBar'
import SectionDeliveryHeader
  from 'components/organisms/sections/delivery/SectionDeliveryHeader'
import SectionPricesCard 
  from 'components/organisms/sections/others/SectionPricesCard'
import SectionAddressForm 
  from 'components/organisms/sections/delivery/SectionAddressForm'
import SectionDeliveryProducts
  from 'components/organisms/sections/delivery/SectionDeliveryProducts'
import SectionDeliveryFooter
  from 'components/organisms/sections/delivery/SectionDeliveryFooter'
import Container from 'components/atoms/layout/Container'

class DeliveryAddress extends Component {
  render () {
    const {
      className,
      stepItems,
      subTotal,
      deliveryCost,
      totalFbucks,
      totalVat,
      totalCost,
      items,
      theme,
      saveAddress,
      ...others
    } = this.props

    const prices = [
      { label: "Subtotal", value: subTotal },
      { label: "Delivery", value: deliveryCost },
      { label: "Fbucks", value: totalFbucks },
    ]
    
    return (
      <BaseLayout
        isHeader={false}
        isFooter={false}
        {...others}
      >
        <SectionDeliveryHeader />
        <ProgressBar
          stepItems={stepItems}
          current={0}
        />
        <Container>
          <SectionAddressForm
            title="Add new address:"
            theme={theme}
            saveAddress={saveAddress}
          />
          <SectionPricesCard
            className="mt-20"
            data={prices}
            total={totalCost}
            vat={totalVat}
          />
        </Container>
        <SectionDeliveryProducts
          items={items}
        />
        <SectionDeliveryFooter />
      </BaseLayout>
    )
  }
}

DeliveryAddress.defaultProps = {
  theme: null,
  className: '',
  stepItems: null,
  saveAddress: null,
  subTotal: 0,
  deliveryCost: 0,
  totalFbucks: 0,
  totalVat: 0,
  totalCost: 0,
  items: null,
}

DeliveryAddress.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  stepItems: PropTypes.array,
  saveAddress: PropTypes.func,
  subTotal: PropTypes.number,
  deliveryCost: PropTypes.number,
  totalFbucks: PropTypes.number,
  totalVat: PropTypes.number,
  totalCost: PropTypes.number,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image_url: PropTypes.string,
      name: PropTypes.string,
      href: PropTypes.string,
    }),
  ),
}

export default DeliveryAddress
