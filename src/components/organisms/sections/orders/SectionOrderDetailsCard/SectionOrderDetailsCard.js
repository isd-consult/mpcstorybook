import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SectionOrderDetailsCard.scss'
import Text from 'components/atoms/common/Text'
import SectionOrderItems 
  from 'components/organisms/sections/orders/SectionOrderItems'
import SectionPricesCard 
  from 'components/organisms/sections/others/SectionPricesCard'
import Block from 'components/molecules/wrapers/Block'
import Button from 'components/molecules/buttons/Button'

class SectionOrderDetailsCard extends Component {
  getAddressFormat(address) {
    if (!address) return ''
    const result =
      `${address.street_address?`${address.street_address}, `:''}
      ${address.suburb?`${address.suburb}, `:'' }
      ${address.postal_code?`${address.postal_code}, `:''}
      ${address.city?`${address.city}, `:''}
      ${address.province?`${address.province}, `:''}`
    return result
  }

  render () {
    const {
      className,
      history,
      order,
      theme
    } = this.props

    const prices = [
      {
        label: "Subtotal", 
        value: order && order.subtotal
      },
      {
        label: "Delivery Amount",
        value: order && order.delivery_cost
      },
      {
        label: "Credit Used", 
        value: order && order.credits_spent
      },
    ]

    return (
      order && (
      <Block className="pt-20 pl-10 pr-10 pb-20">
        <div className='section-order-details-card__info-item'>
          <Text className='section-order-details-card__label'>
            Order Date:
          </Text>
          <Text className='section-order-details-card__desc'>
            {order.created_at}
          </Text>
        </div>
        <div className='section-order-details-card__info-item'>
          <Text className='section-order-details-card__label'>
            Delivery Status:
          </Text>
          <div className='section-order-details-card__desc'>
            <Text theme={theme} isUnderline>
              {order.status && order.status.label}
            </Text>
          </div>
        </div>
        <div className='section-order-details-card__info-item'>
          <Text className='section-order-details-card__label'>
            Billing Address:
          </Text>
          <Text className='section-order-details-card__desc'>
            {this.getAddressFormat(order.delivery_address)}
          </Text>
        </div>
        <div className='section-order-details-card__info-item'>
          <Text className='section-order-details-card__label'>
            Shipping Address:
          </Text>
          <Text className='section-order-details-card__desc'>
            {this.getAddressFormat(order.delivery_address)}
          </Text>
        </div>
        <SectionOrderItems
          className={className}
          orderItems={order.order_items}
        />        
        <SectionPricesCard
          className='mt-10'
          data={prices}
          total={order && order.total_ordered}
          vat={order && order.subtotal_vat_amount}
        />
        <Button
          className="mt-10"
          theme={theme}
          onClick={
            !!order && order.is_cancellable
            ? ()=>history.push(`/orders/cancel/${order.order_number}`)
            : null
          }
          isDisabled={!!order && !order.is_cancellable}
        >
          Cancel Order
        </Button>
      </Block>
)
    )
  }
}

SectionOrderDetailsCard.defaultProps = {
  className: '',
  order: null,
  history: null,
  theme: null,
}

SectionOrderDetailsCard.propTypes = {
  className: PropTypes.string,
  order: PropTypes.object,
  history: PropTypes.object,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default SectionOrderDetailsCard
