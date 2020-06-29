import createReducer from '../../helpers/createReducer'
import createAction from '../../helpers/createAction'

// =======================================
// Namespace
// =======================================
export const namespace = 'order'

// =======================================
// Default state
// =======================================
const defaultState = {
  isLoading: false,
  order: null,
  list: [],
  cancelInitData: null,
  error: null,
}

// =======================================
// Action creators
// =======================================
export const setLoading = createAction(namespace, 'SET_LOADING')
export const setOrderInfo = createAction(namespace, 'SET_ORDER_INFO')
export const setOrderList = createAction(namespace, 'SET_ORDER_LIST')
export const setCancelInitData
  = createAction(namespace, 'SET_CANCEL_INIT_DATA')
export const setError = createAction(namespace, 'SET_ERROR')

// =======================================
// Reducers
// =======================================
const reducer = createReducer(namespace, defaultState, {
  [setLoading.Type]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),
  [setOrderInfo.Type]: (state, action) => ({
    ...state,
    order: action.payload,
    error: null
  }),
  [setOrderList.Type]: (state, action) => ({
    ...state,
    list: action.payload,
    error: null
  }),
  [setCancelInitData.Type]: (state, action) => ({
    ...state,
    cancelInitData: action.payload,
    error: null
  }),
  [setError.Type]: (state, action) => ({
    ...state,
    error: action.payload,
  })
})

export default reducer
