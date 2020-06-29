import API from '@aws-amplify/api'
import { ApiUtils } from 'utils/ApiUtils'
import { push } from 'connected-react-router'

import { uploadAPI } from 'utils'
import {
  setLoading,
  setReturnList,
  setReturnInfo,
  setReasonList,
  setDeliveryMethodList,
  setRefundMethodList,
  setDeliveredOrderList,
  setItemsToRefund,
  setDeliveryMethod,
  setRefundMethod,
  setError
} from './reducer'

import { showNotification } from '../mpc/reducer'

/**
 * get Return List
 */
export const getReturnList = () => {
  return async (dispatch, getState) => {
    return new Promise(async resolve => {
      const {returns: {list}} = getState()
      if (!list || !list.length) dispatch(setLoading(true))
      API.get('mpc', ApiUtils.getReturnList())
      .then(response=>{
        dispatch(setLoading(false))
        dispatch(setReturnList(response))
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

/**
 * GET - get return detail data
 * @param {string} returnId
 */
export const getReturnDetail = (returnId) => {
  return async (dispatch) => {
    return new Promise(async resolve => {
      dispatch(setLoading(true))
      API.get('mpc', ApiUtils.getReturnDetail(returnId))
      .then(response=>{
        dispatch(setLoading(false))
        dispatch(setReturnInfo(response))
        resolve(response)
      })
      .catch(error=>{
        dispatch(setLoading(false))
        dispatch(setReturnInfo(null))
        resolve(error)
      })
    })
  }
}

/**
 * GET - get inital data for making refund request
 */
export const getInitialReturnsData = () => {
  return async (dispatch) => {
    return new Promise(async resolve => {
      dispatch(setLoading(true))
      API.get('mpc', ApiUtils.getInitialReturnsData())
      .then(response=>{
        dispatch(setReasonList(response.reasons))
        dispatch(setDeliveryMethodList(response.delivery_methods))
        dispatch(setDeliveredOrderList(response.orders))
        dispatch(setLoading(false))
        dispatch(setError(null))
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

export const uploadReturnFile = (content) => {
  return async () => {
    return new Promise(async (resolve, reject) => {
      uploadAPI(ApiUtils.uploadReturnFile(), content)
      .then((response) => response.json())
      .then(response=>{
        resolve(response)
      })
      .catch(error=>{
        reject(error)
      })
    })
  }
}

/**
 * update item to refund, ex: reason, file, comments
 * @param {object} item
 */
export const onChangeItem = (item) => {
  return async (dispatch, getState) => {
    return new Promise(async resolve => {
      const {returns: {itemsToRefund}} = getState()
      const {length} = itemsToRefund
      for (let i = 0; i < length; i++) {
        if (item.order_number === itemsToRefund[i].order_number
          && item.simple_sku === itemsToRefund[i].simple_sku) {
            itemsToRefund[i] = item
            break
          }
      }
      dispatch(setItemsToRefund(itemsToRefund))
      resolve()
    })
  }
}

/**
 * change delivery method for refunding
 * @param {string} value
 */
export const onChangeDeliveryMethod = (value) => {
  return async (dispatch) => {
    dispatch(setDeliveryMethod(value))
  }
}

/**
 * change payment method for refunding
 * @param {object} value
 */
export const onChangeRefundMethod = (value) => {
  return async (dispatch) => {
    dispatch(setRefundMethod(value))
  }
}

/**
 * extract shared refunds methods through all items
 * @param {array} items
 */
function extractRefundMethods(items) {
  let result = []
  const len = items.length
  if (!items || len === 0) return result

  result = items[0].refund_methods
  if (len > 1) {
    for (let i = 1; i < len; i++) {
      const temp = []
      const refundMethods = items[i].refund_methods
      for (let j = 0; j < result.length; j++) {
        let exist = false
        for (let k = 0; k < refundMethods.length; k++) {
          if (result[j].key === refundMethods[k].key) {
            exist = true
            break
          }
        }
        if (exist) temp.push(result[j])
      }
      result = temp
    }
  }
  return result
}
/**
 * select items to refund
 * @param {array} items
 */
export const onChangeItemsToRefund = (items) => {
  return async (dispatch) => {
    return new Promise(async resolve => {
      if (items && items.length > 0) {
        dispatch(setItemsToRefund(items))
        dispatch(setRefundMethodList(extractRefundMethods(items)))
        dispatch(push('/returns/request/edit'))
      } else {
        dispatch(showNotification({
          message: "You should select at least a product to refund",
          category: 'danger',
          icon: 'warning',
          position: 'bottom',
        }))
      }
      resolve()
    })
  }
}

function filterItems(array) {
  const result = []
  array.forEach((item)=>{
    const newItem = item
    delete newItem.ordered_at
    delete newItem.can_be_returned_till
    delete newItem.product_name
    delete newItem.img_url
    delete newItem.costs
    delete newItem.qty_can_return
    delete newItem.refund_methods
    if (!newItem.file_ids) newItem.file_ids = []
    if (!newItem.additional_comment)
      newItem.additional_comment = null
    result.push(newItem)
  })
  return result
}

export const onSubmitRefundRequest = () => {
  return async (dispatch, getState) => {
    return new Promise(async resolve => {
      const {
        returns: {
        itemsToRefund,
        deliveryMethod,
        refundMethod
      }} = getState()
      const items = filterItems(itemsToRefund)
      // validation for request
      let message = null
      if (!items || items.length === 0) {
        message = "You should select at least a product to refund"
      }
      if (!deliveryMethod) {
        message = "You should select proper delivery methods"
      }
      if (!refundMethod) {
        message = "You should select proper refund methods"
      }
      if (refundMethod && refundMethod.type==="credit_card_eft") {
        if (!refundMethod.params)  {
          message = "You should fill out credit card details"
        } else if (!refundMethod.params.account_holder_name) {
          message = "You should fill out account holder name"
        } else if (!refundMethod.params.account_number) {
          message = "You should fill out account number"
        } else if (!refundMethod.params.branch_code) {
          message = "You should fill out branch code"
        }
      }
      if (message) {
        dispatch(showNotification({
          message,
          category: 'danger',
          icon: 'warning',
          position: 'bottom',
        }))
        resolve()
      } else {
        const request = {
          items,
          delivery_method: deliveryMethod,
          refund_method: refundMethod
        }
        API.post('mpc', ApiUtils.submitRefundRequest(), {body:request})
        .then(response=>{
          dispatch(setItemsToRefund(null))
          dispatch(showNotification({
            message: "Refund request was created successfully",
            category: 'success',
            icon: 'checkmark',
            position: 'bottom',
          }))
          dispatch(push(`/returns/detail/${response.request_number}`))
          resolve(response)
        })
        .catch(error=>{
          dispatch(showNotification({
            message: "Something wrong",
            category: 'danger',
            icon: 'warning',
            position: 'bottom',
          }))
          resolve(error)
        })
      }
    })
  }
}
