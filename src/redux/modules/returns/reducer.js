import createReducer from '../../helpers/createReducer'
import createAction from '../../helpers/createAction'

// =======================================
// Namespace
// =======================================
export const namespace = 'returns'

// =======================================
// Default state
// =======================================
const defaultState = {
  isLoading: false,
  detail: null,
  list: [],
  reasons: [],
  deliveryMethods: [],
  refundMethods: [],
  deliveredOrders: [], // orders to be completed, you can select items to refund
  error: null,
  
  // these are will the request for refund submit
  itemsToRefund: [], // selected items for returning,
  deliveryMethod: null,
  refundMethod: null,
}

// =======================================
// Action creators
// =======================================
export const setLoading = createAction(namespace, 'SET_LOADING')
export const setError = createAction(namespace, 'SET_ERROR')
export const setReturnInfo = createAction(namespace, 'SET_RETURN_INFO')
export const setReturnList = createAction(namespace, 'SET_RETURN_LIST')
export const setReasonList = createAction(namespace, 'SET_REASON_LIST')
export const setDeliveryMethodList
  = createAction(namespace, 'SET_DELIVERED_METHOD_LIST')
export const setRefundMethodList
  = createAction(namespace, 'SET_REFUND_METHOD_LIST')
export const setDeliveredOrderList
  = createAction(namespace, 'SET_DELIVERED_ORDER_LIST')
export const setItemsToRefund
  = createAction(namespace, 'SET_ITEMS_TO_REFUND')
export const setDeliveryMethod
  = createAction(namespace, 'SET_DELIVERY_METHOD')
export const setRefundMethod
  = createAction(namespace, 'SET_REFUND_METHOD')

// =======================================
// Reducers
// =======================================
const reducer = createReducer(namespace, defaultState, {
  [setLoading.Type]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),
  [setReturnInfo.Type]: (state, action) => ({
    ...state,
    detail: action.payload,
    error: null
  }),
  [setReturnList.Type]: (state, action) => ({
    ...state,
    list: action.payload,
    error: null
  }),
  [setReasonList.Type]: (state, action) => ({
    ...state,
    reasons: action.payload,
    error: null
  }),
  [setDeliveryMethodList.Type]: (state, action) => ({
    ...state,
    deliveryMethods: action.payload,
    error: null
  }),
  [setRefundMethodList.Type]: (state, action) => ({
    ...state,
    refundMethods: action.payload,
    error: null
  }),
  [setDeliveredOrderList.Type]: (state, action) => ({
    ...state,
    deliveredOrders: action.payload,
    error: null
  }),
  [setItemsToRefund.Type]: (state, action) => ({
    ...state,
    itemsToRefund: action.payload,
    error: null
  }),
  [setDeliveryMethod.Type]: (state, action) => ({
    ...state,
    deliveryMethod: action.payload,
    error: null
  }),
  [setRefundMethod.Type]: (state, action) => ({
    ...state,
    refundMethod: action.payload,
    error: null
  }),
  [setError.Type]: (state, action) => ({
    ...state,
    error: action.payload,
  })
})

export default reducer
