import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ArrayUtils from 'utils/ArrayUtils'
import DeliveryCheckout
    from 'components/templates/checkout/DeliveryCheckout'
import {stepItems} from 'constants/delivery'
import Transition from 'containers/Transition'

import {
  getCheckoutInfo,
  fetchCardList,
  handleCredit,
  deleteCard,
  handlePayment
} from 'redux/modules/checkout/actions'

class DeliveryCheckoutPage extends Component {

  componentDidMount(){
    const {getCheckoutData, getCardList} = this.props
    getCheckoutData()
    getCardList()
  }

  render() {
    const {
        items,
        originalSubTotal,
        currentSubTotal,
        deliveryCost,
        creditsAvailable,
        creditsInUse,
        totalDue,
        totalVat,
        useCredits,
        creditCards,
        cardApproval,
        removeCard,
        handlePay,
        ...others
    } = this.props
    const maxDtd = ArrayUtils.getMaxDate(items)
    let totalFbucks = 0
    if (items) {
      items.forEach(item=>{
        totalFbucks += item.fbucks * item.qty_added
      })
    }

    return (
      <Transition>
        <DeliveryCheckout
          stepItems={stepItems}
          subTotal={currentSubTotal}
          deliveryCost={deliveryCost}
          totalFbucks={totalFbucks}
          totalVat={totalVat}
          totalCost={currentSubTotal+deliveryCost}
          creditsAvailable={creditsAvailable}
          creditsInUse={creditsInUse}
          totalDue={totalDue}
          items={items}
          creditCards={creditCards}
          cardApproval={cardApproval}
          dtd={maxDtd && maxDtd.dtd}
          useCredits={useCredits}
          removeCard={removeCard}
          handlePay={handlePay}
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
    creditsAvailable: state.checkout.credits_available,
    creditsInUse: state.checkout.credits_in_use,
    totalDue: state.checkout.total_due,
    totalVat: state.checkout.current_subtotal_vat_amount,
    creditCards: state.checkout.credit_cards,
    cardApproval: state.checkout.credit_cards_checkout_approval
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getCheckoutData: () =>  dispatch(getCheckoutInfo()),
    getCardList: () => dispatch(fetchCardList()),
    useCredits: () => dispatch(handleCredit()),
    removeCard: (id) => dispatch(deleteCard(id)),
    handlePay: (method, params) => dispatch(handlePayment(method, params))
  }
}

DeliveryCheckoutPage.defaultProps = {
  items: null,
  originalSubTotal: 0,
  currentSubTotal: 0,
  deliveryCost: 0,
  creditsAvailable: 0,
  creditsInUse: 0,
  totalDue: 0,
  totalVat: 0,
  creditCards: null,
  cardApproval: null,
  getCheckoutData: null,
  useCredits: null,
  removeCard: null,
  handlePay: null,
  getCardList: null
}

DeliveryCheckoutPage.propTypes = {
  items: PropTypes.array,
  originalSubTotal: PropTypes.number,
  currentSubTotal: PropTypes.number,
  deliveryCost: PropTypes.number,
  creditsAvailable: PropTypes.number,
  creditsInUse: PropTypes.number,
  totalDue: PropTypes.number,
  totalVat: PropTypes.number,
  creditCards: PropTypes.array,
  cardApproval: PropTypes.object,
  getCheckoutData: PropTypes.func,
  useCredits: PropTypes.func,
  removeCard: PropTypes.func,
  handlePay: PropTypes.func,
  getCardList: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeliveryCheckoutPage)