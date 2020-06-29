import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ArrayUtils from 'utils/ArrayUtils'
import Delivery 
    from 'components/templates/checkout/Delivery'
import {stepItems} from 'constants/delivery'
import Transition from 'containers/Transition'
import { Redirect } from 'react-router-dom'

import {
  getDeliveryAddresses,
  setDeliveryAddress,
  getCheckoutInfo
} from 'redux/modules/checkout/actions'



class DeliveryPage extends Component {
  
  componentDidMount(){
    const {getDeliveryAddressList, getCheckoutData} = this.props
    getDeliveryAddressList()
    getCheckoutData()
  }

  render() {
    const {
      theme,
      items,
      originalSubTotal,
      currentSubTotal,
      totalVat,
      deliveryCost,
      deliveryAddress,
      isFetchedAddresses,
      deliveryAddressList,
      setDeliveryAddressInfo,
      ...others
    } = this.props
    const maxDtd = ArrayUtils.getMaxDate(items)
    let totalFbucks = 0
    if (items) {
      items.forEach(item=>{
        totalFbucks += item.fbucks * item.qty_added
      })
    }
    
    if (!isFetchedAddresses) {
      return null
    } 
    if (deliveryAddressList && deliveryAddressList.length)
    { return (
      <Transition>
        <Delivery
          theme={theme}
          stepItems={stepItems}
          subTotal={currentSubTotal}
          deliveryCost={deliveryCost}
          totalCost={currentSubTotal+deliveryCost}
          totalFbucks={totalFbucks}
          totalVat={totalVat}
          items={items}
          addressInfos={deliveryAddressList}
          setAddress={setDeliveryAddressInfo}
          dtd={maxDtd && maxDtd.dtd}
          {...others}
        />
      </Transition>
      )
    } 
      return (<Redirect to="/checkout/delivery/add" />)
    
    
  }
}

const mapStateToProps = state => {
  return {
    // checkout
    isFetchedAddresses: state.checkout.isFetchedAddresses,
    items: state.checkout.checkout_items,
    originalSubTotal: state.checkout.original_subtotal,
    currentSubTotal: state.checkout.current_subtotal,
    totalVat: state.checkout.current_subtotal_vat_amount,
    deliveryCost: state.checkout.delivery_cost,
    deliveryAddress: state.checkout.delivery_address,
    deliveryAddressList: state.checkout.delivery_addresses
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getDeliveryAddressList: () =>  dispatch(getDeliveryAddresses()),
    setDeliveryAddressInfo:(hash) => dispatch(setDeliveryAddress(hash)),
    getCheckoutData: () =>  dispatch(getCheckoutInfo()),
  }
}

DeliveryPage.defaultProps = {
  theme: null,
  isFetchedAddresses: false,
  items: [],
  originalSubTotal: 0,
  currentSubTotal: 0,
  deliveryCost: 0,
  totalVat: 0,
  deliveryAddress: null,
  deliveryAddressList: null,
  getDeliveryAddressList: null,
  setDeliveryAddressInfo: null,
  getCheckoutData: null
}

DeliveryPage.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
  isFetchedAddresses: PropTypes.bool,
  items: PropTypes.array,
  originalSubTotal: PropTypes.number,
  currentSubTotal: PropTypes.number,
  deliveryCost: PropTypes.number,
  totalVat: PropTypes.number,
  deliveryAddress: PropTypes.object,
  deliveryAddressList: PropTypes.array,
  getDeliveryAddressList: PropTypes.func,
  setDeliveryAddressInfo: PropTypes.func,
  getCheckoutData: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeliveryPage)