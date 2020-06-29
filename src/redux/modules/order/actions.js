import API from '@aws-amplify/api'
import { ApiUtils } from 'utils/ApiUtils'
import {
  setLoading,
  setOrderInfo,
  setOrderList,
  setCancelInitData,
  setError
} from './reducer'
import { showNotification } from '../mpc/reducer'
/**
 * get Order Detail
 */
export const getOrderDetail = (orderNumber) => {
  return async dispatch => {
    dispatch(setLoading(true))
    return new Promise(async resolve => {
        API.get(
          'mpc',
          ApiUtils.getOrdersView(orderNumber)
        ).then(response=>{
          dispatch(setLoading(false))
          dispatch(setOrderInfo(response))
          resolve(response)
        }).catch(error=>{
          dispatch(setLoading(false))
          dispatch(setError(error))
          resolve(error)
        })
    })
  }
}

/**
 * get Order List
 */
export const getOrderList = () => {
  return async (dispatch, getState) => {
    return new Promise(async resolve => {
      const {order: {list}} = getState()
      if (!list || !list.length) dispatch(setLoading(true))
      API.get('mpc', ApiUtils.getOrdersList())
      .then(response=>{
        dispatch(setLoading(false))
        dispatch(setOrderList(response))
        resolve(response)
      })
      .catch((error)=>{
        dispatch(setLoading(false))
        resolve(error)
      })
    })
  }
}

/**
 * get Order Cancel Init Data
 */

export const getOrderCancelInitData = (orderNumber) => {
  return async dispatch => {
    return new Promise(async resolve => {
      dispatch(setLoading(true))
      API.get('mpc', ApiUtils.getOrderCancelInitData(orderNumber))
      .then(response=>{
        dispatch(setLoading(false))
        dispatch(setCancelInitData(response))
        resolve(response)
      })
      .catch((error)=>{
        dispatch(setLoading(false))
        resolve(error)
      })
    })
  }
}

export const cancelOrder = (params) => {
  return dispatch => {
    return new Promise(resolve => {
      API.post('mpc', ApiUtils.cancelOrder(), {body:params})
      .then(response=>{
        dispatch(showNotification({
          message: "Sent request",
          category: 'success',
          icon: 'checkmark',
          position: 'bottom',
        }))
        resolve(response)
      })
      .catch(()=>{
        dispatch(showNotification({
          message: "Something wrong",
          category: 'danger',
          icon: 'warning',
          position: 'bottom',
        }))
        resolve()
      })
    })
  }
}
