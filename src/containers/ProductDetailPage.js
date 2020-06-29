import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {ApiUtils} from 'utils/ApiUtils'
import API from '@aws-amplify/api'
import ProductDetail from 'components/templates/ProductDetail'
import { menuInfo } from 'constants/header'
import {
  initialize,
  calculateProductDtd
} from 'redux/modules/detail/actions'
import { addToCart } from 'redux/modules/cart/actions'
// import { addToWish, getWishInfo } from 'redux/modules/wish/actions'
import Transition from './Transition'
import 'transition.scss'

class ProductDetailPage extends Component {

  componentDidMount () {
    const {
      match,
      init,
      location
    } = this.props

    const {sku} = match.params
    const {
      version,
      qs, qw,
      rs, rw,
      ts, tw,
      percentageScore,
    } = location.state || {}

    init(sku)

    API.post(
      'mpc',
      ApiUtils.trackProductVisit(),
      {
        body: {
          config_sku: sku,
          version,
          qs, qw,
          rs, rw,
          ts, tw,
          percentage_score: percentageScore,
        }
      }
    )
  }

  render() {
    const {
      product,
      dtd,
      availableItems,
      similarItems,
      recentlyViewedItems,
      lookItems,
      // wishItems,

      getProductDtd,
      addProductToCart,
      // addProductToWish,
      ...others
    } = this.props

    // let isInWish = false
    // for(let i = 0; wishItems && i < wishItems.length; i++) {
    //   if(product && product.rs_sku === wishItems[i].sku) {
    //     isInWish = true
    //     break;
    //   }
    // }

    return (
      <Transition>
        <ProductDetail
          menuInfo={menuInfo}
          product={product}
          getProductDtd={getProductDtd}
          dtd={dtd}
          onAddCartClick={addProductToCart}
          // onAddToWishClick={addProductToWish}
          // addedToWish={isInWish}
          availableItems={availableItems}
          lookItems={lookItems}
          similarItems={similarItems}
          recentlyViewedItems={recentlyViewedItems}
          {...others}
        />
      </Transition>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.detail.isLoading,
    product: state.detail.product,
    dtd: state.detail.dtd,
    availableItems: state.detail.availableItems,
    similarItems: state.detail.similarItems,
    recentlyViewedItems: state.detail.recentlyViewedItems,
    lookItems: state.detail.lookItems,
    // wishItems: state.wish.items,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    init: (sku)=>dispatch(initialize(sku)),
    getProductDtd: (sku, qty) => dispatch(calculateProductDtd(sku, qty)),
    addProductToCart: (sku, qty) => dispatch(addToCart(sku, qty)),
    // getWishList: () => dispatch(getWishInfo()),
    // addProductToWish: (sku) => dispatch(addToWish(sku)),
  }
}

ProductDetailPage.defaultProps = {
  match: null,
  location: null,
  isLoading: false,
  init: null,
  product: null,
  dtd: null,
  availableItems: null,
  similarItems: null,
  recentlyViewedItems: null,
  lookItems: null,
  getProductDtd: null,
  addProductToCart: null,
  // addProductToWish: null,
  // wishItems: null,
  // getWishList: null,
}

ProductDetailPage.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  isLoading: PropTypes.bool,
  init: PropTypes.func,
  product: PropTypes.object,
  dtd: PropTypes.object,
  availableItems: PropTypes.array,
  similarItems: PropTypes.array,
  recentlyViewedItems: PropTypes.array,
  lookItems: PropTypes.array,
  getProductDtd: PropTypes.func,
  addProductToCart: PropTypes.func,
  // addProductToWish: PropTypes.func,
  // wishItems: PropTypes.array,
  // getWishList: PropTypes.func,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetailPage)
