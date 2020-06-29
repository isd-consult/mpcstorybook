import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ArrayUtils from 'utils/ArrayUtils'
import CartList from 'components/templates/CartList'
import { menuInfo } from 'constants/header'
import Transition from 'containers/Transition'
import {
  fetchNextTierInfo
} from 'redux/modules/mpc/actions'
import { 
  fetchPopularItems,
  removeFromCart, 
  updateQty 
} from 'redux/modules/cart/actions'
import {initCheckout} from 'redux/modules/checkout/actions'

class CartListPage extends Component {

  componentDidMount() {
    const {getNextTierInfo, getPopularItems} = this.props
    getNextTierInfo()
    getPopularItems()
  }

  render() {
    const {
      theme, 
      isLoading,
      nextTierInfo,
      items,
      originalSubTotal,
      currentSubTotal,
      availableFbucks,
      totalVat,
      removeProduct,
      setProductQty,
      handleCheckout,
      popularItems,
      ...others
    } = this.props
    
    let totalCount = 0
    let totalFbucks = 0

    if (items) {
      items.forEach((item) =>{
        totalCount += item.qty_added
        totalFbucks += item.fbucks * item.qty_added
      })
    }
    const maxDtd = ArrayUtils.getMaxDate(items)

    return (
      <Transition>
        <CartList
          theme={theme}
          isLoading={isLoading}
          menuInfo={menuInfo}
          cartList={items}
          popularItems={popularItems}
          totalCount={totalCount}
          availableFbucks={availableFbucks}
          totalFbucks={totalFbucks}
          totalVat={totalVat}
          nextTierInfo={nextTierInfo}
          originalSubTotal={originalSubTotal}
          currentSubTotal={currentSubTotal}
          saveSubTotal={originalSubTotal-currentSubTotal}
          removeProduct={removeProduct}
          setProductQty={setProductQty}
          handleCheckout={handleCheckout}
          isScrollTop={false}
          dtd={maxDtd && maxDtd.dtd}
          {...others}
        />
      </Transition>
    )
  }
}

const mapStateToProps = state => {
  return {
    // cart
    isLoading: state.cart.isLoading,
    nextTierInfo: state.mpc.nextTierInfo,
    items: state.cart.items,
    originalSubTotal: state.cart.original_subtotal,
    currentSubTotal: state.cart.current_subtotal,
    totalVat: state.cart.current_subtotal_vat_amount,
    availableFbucks: state.cart.available_fbucks_amount,
    popularItems: state.cart.popularItems
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getNextTierInfo: () => dispatch(fetchNextTierInfo()),
    getPopularItems: () => dispatch(fetchPopularItems()),
    removeProduct: (sku) => dispatch(removeFromCart(sku)),
    setProductQty: (sku, qty) => dispatch(updateQty(sku, qty)),
    handleCheckout: () => dispatch(initCheckout())
  }
}

CartListPage.defaultProps = {
    theme: null,
    isLoading: false,
    nextTierInfo: null,
    items: [],
    popularItems: null,
    originalSubTotal: 0,
    currentSubTotal: 0,
    totalVat: 0,
    availableFbucks: 0,

    removeProduct: null,
    setProductQty: null,
    handleCheckout: null,
    getNextTierInfo: null,
    getPopularItems: null
}

CartListPage.propTypes = {
    theme: PropTypes.oneOf([null, 'men', 'women']),
    isLoading: PropTypes.bool,
    nextTierInfo: PropTypes.object,
    items: PropTypes.array,
    popularItems: PropTypes.array,
    originalSubTotal: PropTypes.number,
    currentSubTotal: PropTypes.number,
    totalVat: PropTypes.number,
    availableFbucks: PropTypes.number,

    removeProduct: PropTypes.func,
    setProductQty: PropTypes.func,
    handleCheckout: PropTypes.func,
    getNextTierInfo: PropTypes.func,
    getPopularItems: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartListPage)
