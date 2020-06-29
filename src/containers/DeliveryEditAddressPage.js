import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import DeliveryEditAddress 
    from 'components/templates/checkout/DeliveryEditAddress'
import Transition from 'containers/Transition'

import {stepItems} from 'constants/delivery'

import {
  getDeliveryAddresses,
  getCheckoutInfo,
  editDeliveryAddress
} from 'redux/modules/checkout/actions'

class DeliveryEditAddressPage extends Component {

  componentDidMount(){
    const {getDeliveryAddressList, getCheckoutData} = this.props
    getDeliveryAddressList()
    getCheckoutData()
  }

  render() {
    const {
        match,
        deliveryAddressList,
        items,
        deliveryCost,
        totalVat,
        currentSubTotal,
        totalDue,
        editAddress,
        ...others
    } = this.props
    const {hash} = match.params
    const address = deliveryAddressList
      && deliveryAddressList.find((item)=>{return item.hash === hash})
    
    let totalFbucks = 0
    if (items) {
      items.forEach(item=>{
        totalFbucks += item.fbucks * item.qty_added
      })
    }
    return (
      <Transition>
        <DeliveryEditAddress
          stepItems={stepItems}
          subTotal={parseFloat(currentSubTotal.toFixed(2))}
          deliveryCost={parseFloat(deliveryCost.toFixed(2))}
          totalFbucks={parseFloat(totalFbucks.toFixed(2))}
          totalVat={parseFloat(totalVat.toFixed(2))}
          totalCost={parseFloat(totalDue.toFixed(2))}
          items={items}
          saveAddress={editAddress}
          address={address}
          {...others}
        />
      </Transition>
    )
  }
}

const mapStateToProps = state => {
  return {
    // checkout
    items: state.checkout.checkout_items,
    originalSubTotal: state.checkout.original_subtotal,
    currentSubTotal: state.checkout.current_subtotal,
    deliveryCost: state.checkout.delivery_cost,
    totalVat: state.checkout.current_subtotal_vat_amount,
    totalDue: state.checkout.total_due,
    deliveryAddressList: state.checkout.delivery_addresses
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getCheckoutData: () =>  dispatch(getCheckoutInfo()),
    getDeliveryAddressList:() => dispatch(getDeliveryAddresses()),
    editAddress: (data) => dispatch(editDeliveryAddress(data))
  }
}


DeliveryEditAddressPage.defaultProps = {
    match: null,
    items: null,
    originalSubTotal: 0,
    currentSubTotal: 0,
    deliveryCost: 0,
    totalVat: 0,
    totalDue: 0,
    deliveryAddressList: null,
    getCheckoutData: null,
    getDeliveryAddressList: null,
    editAddress: null,
}
  
DeliveryEditAddressPage.propTypes = { 
    match: PropTypes.object,
    items: PropTypes.array,
    originalSubTotal: PropTypes.number,
    currentSubTotal: PropTypes.number,
    deliveryCost: PropTypes.number,
    totalVat: PropTypes.number,
    totalDue: PropTypes.number,
    deliveryAddressList: PropTypes.array,
    getCheckoutData: PropTypes.func,
    getDeliveryAddressList: PropTypes.func,
    editAddress: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeliveryEditAddressPage)