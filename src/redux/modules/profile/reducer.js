import createReducer from '../../helpers/createReducer'
import createAction from '../../helpers/createAction'

// =======================================
// Namespace
// =======================================
export const namespace = 'profile'

// =======================================
// Default state
// =======================================
const defaultState = {
  isLoading: false,
  userInfo: null,
  address: null,
  error: null
}

// =======================================
// Action creators
// =======================================
export const setLoading = createAction(namespace, 'SET_LOADING')
export const setUserInfo = createAction(namespace, 'SET_USER_INFO')
export const setAddress = createAction(namespace, 'SET_ADDRESS')
export const setAddresses = createAction(namespace, 'SET_ADDRESSES')

// =======================================
// Reducers
// =======================================
const reducer = createReducer(namespace, defaultState, {
  [setLoading.Type]: (state, action) => ({
    ...state,
    isLoading: action.payload
  }),
  [setUserInfo.Type]: (state, action) => ({
    ...state,
    userInfo: action.payload
  }),
  [setAddress.Type]: (state, action) => ({
    ...state,
    address: action.payload
  }),
  [setAddresses.Type]: (state, action) => ({
    ...state,
    userInfo: {
      ...state.userInfo,
      addresses: action.payload
    }
  })
})

export default reducer
