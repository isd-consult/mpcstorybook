import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import DeliveryAddress 
    from 'components/templates/checkout/DeliveryAddress'
import {stepItems} from 'constants/delivery'

import {
  addDeliveryAddress,
  getCheckoutInfo
} from 'redux/modules/checkout/actions'

class DeliveryAddAddressPage extends Component {

  componentDidMount(){
    const {getCheckoutData} = this.props
    getCheckoutData()
  }

  render() {
    const {
        items,
        currentSubTotal,
        deliveryCost,
        totalVat,
        totalDue,
        addAddress,
        ...others
    } = this.props

    let totalFbucks = 0
    if (items) {
      items.forEach(item=>{
        totalFbucks += item.fbucks * item.qty_added
      })
    }

    return (
      <DeliveryAddress
        stepItems={stepItems}
        items={items}
        subTotal={parseFloat(currentSubTotal.toFixed(2))}
        deliveryCost={parseFloat(deliveryCost.toFixed(2))}
        totalFbucks={parseFloat(totalFbucks.toFixed(2))}
        totalVat={parseFloat(totalVat.toFixed(2))}
        totalCost={parseFloat(totalDue.toFixed(2))}
        saveAddress={addAddress}
        {...others}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    // checkout
    items: state.checkout.checkout_items,
    currentSubTotal: state.checkout.current_subtotal,
    deliveryCost: state.checkout.delivery_cost,
    totalVat: state.checkout.current_subtotal_vat_amount,
    totalDue: state.checkout.total_due,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getCheckoutData: () =>  dispatch(getCheckoutInfo()),
    addAddress: (data) => dispatch(addDeliveryAddress(data))
  }
}

DeliveryAddAddressPage.defaultProps = {
    items: null,
    currentSubTotal: 0,
    deliveryCost: 0,
    totalVat: 0,
    totalDue: 0,
    getCheckoutData: null,
    addAddress: null
}
  
DeliveryAddAddressPage.propTypes = {
    items: PropTypes.array,
    currentSubTotal: PropTypes.number,
    deliveryCost: PropTypes.number,
    totalVat: PropTypes.number,
    totalDue: PropTypes.number,
    getCheckoutData: PropTypes.func,
    addAddress: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeliveryAddAddressPage)