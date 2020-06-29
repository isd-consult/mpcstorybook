import createReducer from '../../helpers/createReducer'
import createAction from '../../helpers/createAction'

// =======================================
// Namespace
// =======================================
export const namespace = 'cashout'

// =======================================
// Default state
// =======================================
const defaultState = {
  isLoading: false,
  creditInfo: null,
  error: null
}

// =======================================
// Action creators
// =======================================
export const setLoading = createAction(namespace, 'SET_LOADING')
export const setCreditInfo = createAction(namespace, 'SET_CREDIT_INFO')
export const setError = createAction(namespace, 'SET_ERROR')
// =======================================
// Reducers
// =======================================
const reducer = createReducer(namespace, defaultState, {
  [setLoading.Type]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),
  [setCreditInfo.Type]: (state, action) => ({
    ...state,
    creditInfo: action.payload,
    error: null
  }),
  [setError.Type]: (state, action) => ({
    ...state,
    creditInfo: null,
    error: action.payload,
  })
})

export default reducer
