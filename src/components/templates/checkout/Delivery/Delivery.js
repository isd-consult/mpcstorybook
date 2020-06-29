import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Delivery.scss'
import BaseLayout from 'components/layouts/BaseLayout'
import ProgressBar 
  from 'components/molecules/panels/ProgressBar'
import SectionDeliveryHeader
  from 'components/organisms/sections/delivery/SectionDeliveryHeader'
import SectionDeliveryAddress
  from 'components/organisms/sections/delivery/SectionDeliveryAddress'
import SectionPricesCard 
  from 'components/organisms/sections/others/SectionPricesCard'
import SectionDeliveryProducts
  from 'components/organisms/sections/delivery/SectionDeliveryProducts'
import SectionDeliveryFooter
  from 'components/organisms/sections/delivery/SectionDeliveryFooter'
import Container from 'components/atoms/layout/Container'

class Delivery extends Component {
  
  render () {
    const {
      className,
      stepItems,
      subTotal,
      deliveryCost,
      totalCost,
      totalFbucks,
      totalVat,
      items,
      theme,
      addressInfos,
      setAddress,
      dtd,
      ...others
    } = this.props
    
    const prices = [
      { label: "Subtotal", value: subTotal },
      { label: "Delivery", value: deliveryCost},
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
          <SectionDeliveryAddress
            className="mt-20"
            addressInfos={addressInfos}
            theme={theme}
            setAddress={setAddress}
            dtd={dtd}
          />
          <SectionPricesCard
            className="mt-15"
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

Delivery.defaultProps = {
  className: '',
  stepItems: null,
  subTotal: 0,
  deliveryCost: 0,
  totalCost: 0,
  totalFbucks: 0,
  totalVat: 0,
  items: null,
  theme: null,
  addressInfos: null,
  setAddress:null,
  dtd: null,
}

Delivery.propTypes = {
  className: PropTypes.string,
  stepItems: PropTypes.array,
  subTotal: PropTypes.number,
  deliveryCost: PropTypes.number,
  totalCost: PropTypes.number,
  totalFbucks: PropTypes.number,
  totalVat: PropTypes.number,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image_url: PropTypes.string,
      name: PropTypes.string,
      href: PropTypes.string,
    }),
  ),
  theme: PropTypes.oneOf([null, 'men', 'women']),
  addressInfos: PropTypes.arrayOf(
    PropTypes.shape({
      addressNickname: PropTypes.string, 
      recipientName: PropTypes.string, 
      mobileNumber: PropTypes.string, 
      businessName: PropTypes.string, 
      complexBuilding: PropTypes.string, 
      streetAddress: PropTypes.string, 
      suburb: PropTypes.string,
      postalCode: PropTypes.string,
      city: PropTypes.string,
      province: PropTypes.string,
      specialInstructions: PropTypes.string,
      addressType: PropTypes.string,
      hash:PropTypes.string
    })
  ),
  setAddress: PropTypes.func,
  dtd: PropTypes.object,
}

export default Delivery
