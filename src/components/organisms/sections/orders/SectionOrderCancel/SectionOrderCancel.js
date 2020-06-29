import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionOrderCancel.scss'
import Block from 'components/molecules/wrapers/Block'
import Button from 'components/molecules/buttons/Button'
import Text from 'components/atoms/common/Text'
import Number from 'components/molecules/forms/Number'
import Checkbox from 'components/molecules/forms/checkboxs/Checkbox'
import Image from 'components/atoms/common/Image'
import PaymentMethods from 'components/molecules/forms/PaymentMethods'
import TextArea from 'components/molecules/forms/inputs/TextArea'
import StringUtils from 'utils/StringUtils'

class CancelItemCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      qty: props.item.qty_can_cancel,
      isSelected: false
    }
    this.onCheckBoxChange = this.onCheckBoxChange.bind(this)
    this.onQtyChange = this.onQtyChange.bind(this)
  }
  
  onCheckBoxChange(e) {
    const { item, onAddItem, onRemoveItem} = this.props
    const { qty } = this.state
    const isSelected = e.target.checked
    this.setState({isSelected})
    if (e.target.checked) {
      onAddItem({simple_sku: item.simple_sku, qty})
    } else {
      onRemoveItem({ simple_sku: item.simple_sku, qty})
    }
  }

  onQtyChange(qty) {
    const {item, onAddItem, onRemoveItem} = this.props
    this.setState({qty})
    if (qty>0) {
      onAddItem({simple_sku: item.simple_sku, qty})
    } else {
      onRemoveItem({simple_sku: item.simple_sku,qty})
    }
  }

  render() {
    const {
      item,
      theme
    } = this.props
    const { qty, isSelected } = this.state

    const result =  item && item.costs.find((data)=>{
      return data.qty === qty
    })
    const price = result ? result.cost : 0

    return (
      <div className='cancel-item-card'>
        <Checkbox    
          className='cancel-item-card__checkbox'
          id={`${item.simple_sku}`}
          theme={theme}
          name={item.simple_sku}
          value={item.simple_sku}
          onChange={this.onCheckBoxChange}
          checked={isSelected}
        />
        <Image
          className="cancel-item-card__img"
          src={item.img_url}
          isThumb
        />
        <Text className="cancel-item-card__product-name">
          {item.product_name}
        </Text>
        <Text className='cancel-item-card__price' align="center">
          {StringUtils.formatPrice(price, 2)}
        </Text>
        <Number
          maxValue={item.qty_can_cancel}
          small
          value={qty}
          onChange={this.onQtyChange}
          disabled={!isSelected}
        />
      </div>
    )
  }
}

CancelItemCard.defaultProps = {
  item: null,
  theme: null,
  onAddItem: null,
  onRemoveItem: null
}

CancelItemCard.propTypes = {
  item: PropTypes.object,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  onAddItem: PropTypes.func,
  onRemoveItem: PropTypes.func
}

class SectionOrderCancel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      selectedItems: [],
      selectedPayment: null,
      additionalComment: null
    }
    this.onPaymentChange = this.onPaymentChange.bind(this)
    this.onCommentChange = this.onCommentChange.bind(this)
    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.submit = this.submit.bind(this)
  }

  onPaymentChange(data) {
    this.setState({selectedPayment: data})
  }

  onCommentChange(e) {
    this.setState({additionalComment: e.target.value})
  }
  
  addItem(data) {
    const {selectedItems} = this.state
    const pos = selectedItems
      .map(item=>{ return item.simple_sku })
      .indexOf(data.simple_sku)

    if (pos < 0)
      selectedItems.push(data)
    else
      selectedItems[pos] = data
    this.setState({selectedItems})
  }
  
  removeItem(data) {
    const {selectedItems} = this.state
    const pos = selectedItems
      .map(item=>{ return item.simple_sku })
      .indexOf(data.simple_sku)
    if (pos < 0)
      selectedItems.push(data)
    else
      selectedItems[pos] = data
    this.setState({selectedItems})
  }

  async submit() {
    const {orderNumber, submit} = this.props
    const {
      selectedItems, 
      selectedPayment, 
      additionalComment 
    } = this.state
    if (submit) {
      this.setState({isLoading: true})
      await submit({
        order_number: orderNumber,
        items: selectedItems,
        refund_method: selectedPayment,
        additional_comment: additionalComment
      })
      this.setState({isLoading: false})
    }
  }

  render () {
    const {
      className,
      refundMethods,
      items
    } = this.props
    const {additionalComment, isLoading} = this.state

    return (
      <div
        className={clsx(
          'section-order-cancel',
          className
        )}
      >
        <Block className="pt-10 pl-10 pr-10 pb-10">
          <Text size="xl" fw="bold">
            Select Order Items to Cancel
          </Text>
          <Text className="mt-10 mb-10">
            Select which items on the order you want to cancel
          </Text>
          <div className="section-order-cancel__table-head">
            <Text className="section-order-cancel__table-head-choose">
              Choose
            </Text>
            <Text className="section-order-cancel__table-head-product">
              Product/Order
            </Text>
            <Text>
              Qty
            </Text>
          </div>
          {items && items.map((item, idx)=>(
            <CancelItemCard
              key={idx.toString()}
              item={item}
              onAddItem={this.addItem}
              onRemoveItem={this.removeItem}
            />
          ))}
        </Block>
        <Text className="mt-15 mb-10" size="xl" fw="bold">
          Select payment to Cancel
        </Text>
        <PaymentMethods
          methods={refundMethods}
          onChange={this.onPaymentChange}
        />
        <Text className="mt-15" size="xl" fw="bold">
          Additional Information
        </Text>
        <TextArea
          className="section-return-item-edit__comment"
          value={additionalComment}
          onChange={this.onCommentChange}
        />
        <Button
          className="mt-10 mb-10"
          category="grey"
          onClick={this.submit}
          isLoading={isLoading}
        >
          Continue
        </Button>
      </div>
    )
  }
}

SectionOrderCancel.defaultProps = {
  className: '',
  orderNumber: null,
  items: null,
  refundMethods: null,
  submit: null
}

SectionOrderCancel.propTypes = {
  className: PropTypes.string,
  orderNumber: PropTypes.string,
  items: PropTypes.array,
  refundMethods: PropTypes.array,
  submit: PropTypes.func
}

export default SectionOrderCancel
