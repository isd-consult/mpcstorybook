import API from '@aws-amplify/api'
import { ApiUtils } from 'utils/ApiUtils'
import {
  setLoading,
  setWishInfo,
  setError
} from './reducer'
import { showNotification } from '../mpc/reducer'
/**
 * get Wish Info
 */
export const getWishInfo = () => {
  return async (dispatch, getState) => {
    return new Promise(async resolve => {
      const {wish: {totalCount}} = getState()
      if (!totalCount) dispatch(setLoading(true))
      API.get('mpc', ApiUtils.getWishInfo())
        .then((response) => {
          dispatch(setLoading(false))
          dispatch(setWishInfo(response))
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

export const addToWish = (sku) => {
  return dispatch => {
    return new Promise(resolve => {
      API.post(
        'mpc',
        ApiUtils.addToWish(),
        {body:  {sku}}
      ).then(response=>{
        dispatch(setWishInfo(response))
        dispatch(showNotification({
          message: "Product has been added successfully",
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

export const removeFromWish = (sku) => {
  return (dispatch, getState) => {
    return new Promise(resolve=>{
      API.del(
        'mpc',
        ApiUtils.removeFromWish(),
        {body: {sku}}
      ).then(response=>{
        // dispatch(setWishInfo(response))
        let {wish: {items}} = getState()
        items = items.filter((item)=>{
          return item.sku !== sku
        })
        dispatch(setWishInfo({items}))
        dispatch(showNotification({
          message: "Product has been removed successfully",
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
