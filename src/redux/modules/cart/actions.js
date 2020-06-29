import API from '@aws-amplify/api'
import { ApiUtils } from 'utils/ApiUtils'
import { analyticsAddToCart, analyticsRemoveFromCart } from 'analytics'
import {
  setLoading,
  setCartInfo,
  setPopularItems,
  setCartCount,
  setError
} from './reducer'
import { showNotification } from '../mpc/reducer'
/**
 * get Cart Info
 */
export const getCartInfo = () => {
  return async (dispatch, getState) => {
    return new Promise(async resolve => {
      const {cart: {cartCount}} = getState()
      if (!cartCount) dispatch(setLoading(true))
      API.get('mpc', ApiUtils.getCartList())
        .then((response) => {
          if(response.items)
            dispatch(setCartCount(getCartCount(response.items)))
          else
            dispatch(setCartCount(0))
          dispatch(setLoading(false))
          dispatch(setCartInfo(response))
          resolve(response)
        })
        .catch((error)=>{
          dispatch(setLoading(false))
          dispatch(setError(error))
          resolve(error)
        })
    })
  }
}

export const fetchPopularItems = () => {
  return async (dispatch, getState) => {
    return new Promise(async resolve => {
      const {cart: {popularItems}} = getState()
      if (!popularItems) {
        API.post(
          'mpc',
          ApiUtils.productList(1, 4),
          { body: {} },
        ).then(response=>{
          dispatch(setPopularItems(response.products))
          resolve(response)
        }).catch(error=>{
          dispatch(setPopularItems(null))
          dispatch(setError(error))
          resolve(error)
        })
      }
    })
  }
}

export const addToCart = (sku, qty) => {
  return dispatch => {
    return new Promise(resolve => {
      API.post(
        'mpc',
        ApiUtils.addCart(),
        {body:  {simple_sku: sku, qty}}
      ).then(response=>{
        if(response.items)
          dispatch(setCartCount(getCartCount(response.items)))
        else
          dispatch(setCartCount(0))
        dispatch(setCartInfo(response))
        dispatch(showNotification({
          message: "Product has been added successfully",
          category: 'success',
          icon: 'checkmark',
          position: 'bottom',
        }))
        analyticsAddToCart(sku)
        resolve(response)
      }).catch(error=>{
        dispatch(showNotification({
          message: "Something wrong",
          category: 'danger',
          icon: 'warning',
          position: 'bottom',
        }))
        resolve(error)
      })
    })
  }
}

export const removeFromCart = (sku) => {
  return dispatch => {
    return new Promise(resolve=>{
      API.del(
        'mpc',
        ApiUtils.removeProduct(),
        {body: {simple_sku: sku}}
      ).then(response=>{
        if(response.items)
          dispatch(setCartCount(getCartCount(response.items)))
        else
          dispatch(setCartCount(0))
        dispatch(setCartInfo(response))
        dispatch(showNotification({
          message: "Product has been removed successfully",
          category: 'success',
          icon: 'checkmark',
          position: 'bottom',
        }))
        analyticsRemoveFromCart(sku)
        resolve(response)
      }).catch(error=>{
        dispatch(showNotification({
          message: "Something wrong",
          category: 'danger',
          icon: 'warning',
          position: 'bottom',
        }))
        resolve(error)
      })
    })
  }
}

export const updateQty = (sku, qty) => {
  return dispatch => {
    return new Promise(resolve=>{
      API.put(
        'mpc',
        ApiUtils.setProductQty(),
        { body:{simple_sku: sku,qty} }
      ).then(response=>{
        if(response.items)
          dispatch(setCartCount(getCartCount(response.items)))
        else
          dispatch(setCartCount(0))
        dispatch(setCartInfo(response))
        dispatch(showNotification({
          message: "Quantity has been updated successfully",
          category: 'success',
          icon: 'checkmark',
          position: 'bottom',
        }))
        resolve(response)
      }).catch(error=>{
        dispatch(showNotification({
          message: "Something wrong",
          category: 'danger',
          icon: 'warning',
          position: 'bottom',
        }))
        resolve(error)
      })
    })
  }
}

/**
 * get total count
 * @param {array} items
 */
function getCartCount(items) {
  let cartCount = 0
  items.forEach(item => {
    cartCount += item.qty_added
  })
  return cartCount
}
