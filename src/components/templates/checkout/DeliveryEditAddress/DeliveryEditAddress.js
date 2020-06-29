import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './DeliveryEditAddress.scss'
import BaseLayout from 'components/layouts/BaseLayout'
import ProgressBar 
  from 'components/molecules/panels/ProgressBar'
import SectionDeliveryHeader
  from 'components/organisms/sections/delivery/SectionDeliveryHeader'
import SectionPricesCard 
  from 'components/organisms/sections/others/SectionPricesCard'
import SectionDeliveryProducts
  from 'components/organisms/sections/delivery/SectionDeliveryProducts'
import SectionDeliveryFooter
  from 'components/organisms/sections/delivery/SectionDeliveryFooter'
import Container from 'components/atoms/layout/Container'
import SectionAddressForm
  from 'components/organisms/sections/delivery/SectionAddressForm'

class DeliveryEditAddress extends Component {
  render () {
    const {
      stepItems,
      subTotal,
      deliveryCost,
      totalVat,
      totalFbucks,
      totalCost,
      items,
      theme,
      saveAddress,
      address,
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
            title="Edit Address"
            theme={theme}
            saveAddress={saveAddress}
            address={address}
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

DeliveryEditAddress.defaultProps = {
  theme: null,
  className: '',
  stepItems: null,
  saveAddress: null,
  subTotal: null,
  deliveryCost: null,
  totalVat: null,
  totalFbucks: null,
  totalCost: null,
  items: null,
  address: null
}

DeliveryEditAddress.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  stepItems: PropTypes.array,
  saveAddress: PropTypes.func,
  subTotal: PropTypes.number,
  deliveryCost: PropTypes.number,
  totalVat: PropTypes.number,
  totalFbucks: PropTypes.number,
  totalCost: PropTypes.number,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image_url: PropTypes.string,
      name: PropTypes.string,
      href: PropTypes.string,
    }),
  ),
  address: PropTypes.object
}

export default DeliveryEditAddress
