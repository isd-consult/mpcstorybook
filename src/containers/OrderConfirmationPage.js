import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ArrayUtils from 'utils/ArrayUtils'
import Transition from 'containers/Transition'
import OrderConfirmation 
    from 'components/templates/checkout/OrderConfirmation'
import {stepItems} from 'constants/delivery'

import { getOrderDetail } from 'redux/modules/order/actions'

class OrderConfirmationPage extends Component {
  
  componentDidMount(){
    const {match, getOrderInfo} = this.props
    const {orderNumber} = match.params
    getOrderInfo(orderNumber)
  }
  
  render() {
    const { 
      theme,
      order,
      ...others 
    } = this.props

    const subTotal = order && order.subtotal
      ? parseFloat(order.subtotal.toFixed(2))
      : 0
    const deliveryTotal = order && order.delivery_cost
      ? parseFloat(order.delivery_cost.toFixed(2))
      : 0
    const total = parseFloat((subTotal+deliveryTotal).toFixed(2))
    const maxDtd = ArrayUtils.getMaxDate(order && order.order_items)

    let totalFbucks = 0
    
    if (order && order.order_items) {
      order.order_items.forEach(item=>{
        totalFbucks += item.fbucks * item.qty
      })
    }

    return (
      <Transition>
        <OrderConfirmation
          theme={theme}
          stepItems={stepItems}
          orderNumber={order && order.order_number}
          subTotal={subTotal}
          deliveryTotal={deliveryTotal}
          total={total}
          totalFbucks={totalFbucks}
          totalVat={
            parseFloat((
              order && order.subtotal_vat_amount
              ? order.subtotal_vat_amount
              : 0
              ).toFixed(2))
          }
          saveTotal={0}
          items={order && order.order_items}
          dtd={maxDtd && maxDtd.dtd}
          deliveryAddress={order && order.delivery_address}
          paymentMethod={order && order.payment_method}
          {...others}
        />
      </Transition>
    )
  }
}

const mapStateToProps = state => {
  return {
    // order
    // isLoading: state.order.isLoading,
    order: state.order.order,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getOrderInfo:(number) => dispatch(getOrderDetail(number))
  }
}

OrderConfirmationPage.defaultProps = {
    history: null,
    theme: null,
    order: null,
    match: null,
    getOrderInfo: null
}
  
OrderConfirmationPage.propTypes = {
    history: PropTypes.object,
    theme: PropTypes.oneOf([null, 'men', 'women']),
    order: PropTypes.object,
    match: PropTypes.object,
    getOrderInfo: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderConfirmationPage)