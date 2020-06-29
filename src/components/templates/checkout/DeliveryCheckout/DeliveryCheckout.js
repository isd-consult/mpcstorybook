import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './DeliveryCheckout.scss'

import BaseLayout from 'components/layouts/BaseLayout'
import Container from 'components/atoms/layout/Container'
import Text from 'components/atoms/common/Text'

import ProgressBar 
  from 'components/molecules/panels/ProgressBar'
import SectionDeliveryHeader
  from 'components/organisms/sections/delivery/SectionDeliveryHeader'
import SectionPricesCard 
  from 'components/organisms/sections/others/SectionPricesCard'
import SectionPayment 
  from 'components/organisms/sections/delivery/SectionPayment'
import SectionDeliveryProducts
  from 'components/organisms/sections/delivery/SectionDeliveryProducts'
import SectionDeliveryFooter
  from 'components/organisms/sections/delivery/SectionDeliveryFooter'
import SectionCreditPayment
  from 'components/organisms/sections/delivery/SectionCreditPayment'

class DeliveryCheckout extends Component {
  render () {
    const {
      className,
      onBack,
      stepItems,
      subTotal,
      deliveryCost,
      totalFbucks,
      totalVat,
      totalCost,
      creditsAvailable,
      creditsInUse,
      totalDue,
      items,
      creditCards,
      cardApproval,
      theme,
      useCredits,
      removeCard,
      handlePay,
      isCheckout,
      dtd,
      ...others
    } = this.props

    const prices = [
      { label: "Subtotal", value: subTotal },
      { label: "Delivery", value: deliveryCost },
      { label: "Fbucks", value: totalFbucks },
    ]
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
          current={1}
        />
        <Container>
          <Text className="mb-15" size="xxl">
            Select a payment method
          </Text>
          <SectionCreditPayment
            creditsAvailable={creditsAvailable}
            creditsInUse={creditsInUse}
            useCredits={useCredits}
          />
          <SectionPayment
            className="mt-15"
            theme={theme}
            totalDue={totalDue}
            creditCards={creditCards}
            removeCard={removeCard}
            handlePay={handlePay}
            cardApproval={cardApproval}
            isCheckout={isCheckout}
            dtd={dtd}
          />
          <SectionPricesCard
            className='mt-10'
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

DeliveryCheckout.defaultProps = {
  theme: null,
  className: '',
  onBack: null,
  stepItems: null,
  subTotal: 0,
  deliveryCost: 0,
  totalCost: 0,
  creditsAvailable: 0,
  creditsInUse: 0,
  totalDue: 0,
  totalFbucks: 0,
  totalVat: 0,
  items: null,
  useCredits: null,
  creditCards: null,
  cardApproval: null,
  removeCard: null,
  handlePay: null,
  isCheckout: null,
  dtd: null
}

DeliveryCheckout.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  onBack: PropTypes.func,
  stepItems: PropTypes.array,
  subTotal: PropTypes.number,
  deliveryCost: PropTypes.number,
  totalCost: PropTypes.number,
  creditsAvailable: PropTypes.number,
  creditsInUse: PropTypes.number,
  totalDue: PropTypes.number,
  totalFbucks: PropTypes.number,
  totalVat: PropTypes.number,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image_url: PropTypes.string,
      name: PropTypes.string,
      href: PropTypes.string,
    }),
  ),
  useCredits: PropTypes.func,
  creditCards: PropTypes.array,
  cardApproval: PropTypes.object,
  removeCard: PropTypes.func,
  handlePay: PropTypes.func,
  isCheckout: PropTypes.bool,
  dtd: PropTypes.object
}

export default DeliveryCheckout
