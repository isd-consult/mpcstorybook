import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionRequestReturnOrder.scss'
import Text from 'components/atoms/common/Text'
import Checkbox from 'components/molecules/forms/checkboxs/Checkbox'
import OpenCloseBox from 'components/molecules/forms/checkboxs/OpenCloseBox'
import Number from 'components/molecules/forms/Number'
import Image from 'components/atoms/common/Image'

class ReturnItemCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSelected: false,
      qty: props.item.qty_can_return
    }
    this.onCheckBoxChange = this.onCheckBoxChange.bind(this)
    this.onQtyChange = this.onQtyChange.bind(this)
  }
  
  onCheckBoxChange(e) {
    const {order, item, onAddItem, onRemoveItem} = this.props
    const {qty} = this.state
    const isSelected = e.target.checked
    this.setState({isSelected})

    if (isSelected && qty) {
      onAddItem({
        order_number: order && order.order_number,
        ordered_at: order && order.ordered_at,
        can_be_returned_till: order && order.can_be_returned_till,
        refund_methods: order && order.refund_methods,
        qty,
        ...item
      })
    } else {
      onRemoveItem({
        order_number: order && order.order_number,
        ordered_at: order && order.ordered_at,
        can_be_returned_till: order && order.can_be_returned_till,
        refund_methods: order && order.refund_methods,
        qty,
        ...item
      })
    }
  }

  onQtyChange(qty) {
    const {order, item, onAddItem, onRemoveItem} = this.props
    this.setState({qty})
    if (qty) {
      onAddItem({
        order_number: order && order.order_number,
        ordered_at: order && order.ordered_at,
        can_be_returned_till: order && order.can_be_returned_till,
        refund_methods: order && order.refund_methods,
        qty,
        ...item
      })
    } else {
      onRemoveItem({
        order_number: order && order.order_number,
        ordered_at: order && order.ordered_at,
        can_be_returned_till: order && order.can_be_returned_till,
        refund_methods: order && order.refund_methods,
        qty,
        ...item
      })
    }
  }

  render() {
    const {
      order,
      item,
      theme
    } = this.props
    const { qty, isSelected } = this.state

    const result =  item && item.costs.find((data)=>{
      return data.qty === qty
    })
    const price = result ? result.cost : 0

    return (
      <div className='return-item-card'>
        <Checkbox    
          className='return-item-card__checkbox'
          id={`${order.order_number}-${item.simple_sku}`}
          theme={theme}
          name={item.simple_sku}
          value={JSON.stringify(item)}
          onChange={this.onCheckBoxChange}
          checked={isSelected}
        />
        <Image
          className='return-item-card__img'
          src={item.img_url}
          alt="production"
          isThumb
        />
        <Text className="return-item-card__product-name">
          {item.product_name}
        </Text>
        <Text className='return-item-card__price' align="center">
          {price}
        </Text>
        <Number
          maxValue={item.qty_can_return}
          small
          value={qty}
          onChange={this.onQtyChange}
          disabled={!isSelected}
        />
      </div>
    )
  }
}

ReturnItemCard.defaultProps = {
  order: null,
  item: null,
  theme: null,
  onAddItem: null,
  onRemoveItem: null
}

ReturnItemCard.propTypes = {
  order: PropTypes.object,
  item: PropTypes.object,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  onAddItem: PropTypes.func,
  onRemoveItem: PropTypes.func
}


class SectionRequestReturnOrder extends Component {
  constructor(props) {
    super(props)
    this.state = {isOpen: false}
  }

  render () {
    const {
      className,
      data,
      theme,
      onAddItem,
      onRemoveItem
    } = this.props

    const {
      isOpen
    } = this.state

    return (
      <div
        className={clsx(
          'section-request-return-order',
          {[`section-request-return-order--open`]: isOpen},
          className
        )}
      >
        <Text className='mt-10 ml-20' color="grey">
          {data.ordered_at}
        </Text>
        <div className="mt-10 pl-20 pr-10 
          section-request-return-order__order-head"
        >
          <OpenCloseBox
            className={className}
            openImage='round-plus-button'
            closeImage='round-close-button'
            checked={isOpen}
            onChange={()=>this.setState({isOpen: !isOpen})}
            iconSize={35}
            theme={theme}
          />
          <div
            className="ml-10 pt-10 pl-10 pr-10 pb-10 
            section-request-return-order__item-order-name"
          >
            <Text size="xl" fw="bold">
              {data.order_number}
            </Text>
            <Text color="grey" size="xs">
              {`Items can be refunded till ${data.can_be_returned_till}`} 
            </Text>
            <Text size="xs" theme={theme}>
              Delivered
            </Text>
          </div>
        </div>
        <div className="section-request-return-order__items">
          <div className='pl-20 pr-10 section-request-return-order__head'>
            <Text className='section-request-return-order__head-product'>
              Product
            </Text>
            <Text className='section-request-return-order__head-price'>
              Price
            </Text>
            <Text className='section-request-return-order__head-gty'>
              Qty
            </Text>
          </div>
          <div className='section-request-return-order__body'>
            {data.items && data.items.map((item, index) => {
              return (
                <ReturnItemCard
                  key={index.toString()}
                  order={data}
                  item={item}
                  onAddItem={onAddItem}
                  onRemoveItem={onRemoveItem}
                />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

SectionRequestReturnOrder.defaultProps = {
  className: '',
  data: null,
  theme: null,
  onAddItem: null,
  onRemoveItem: null
}

SectionRequestReturnOrder.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  onAddItem: PropTypes.func,
  onRemoveItem: PropTypes.func
}

export default SectionRequestReturnOrder
