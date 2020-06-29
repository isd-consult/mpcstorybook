import createReducer from '../../helpers/createReducer'
import createAction from '../../helpers/createAction'

// =======================================
// Namespace
// =======================================
export const namespace = 'cart'

// =======================================
// Default state
// =======================================
const defaultState = {
  isLoading: false,
  cartCount: 0,
  items: [],
  original_subtotal: 0,
  current_subtotal: 0,
  current_subtotal_vat_amount: 0,
  available_fbucks_amount: 0,
  popularItems: null,
  error: null
}

// =======================================
// Action creators
// =======================================
export const setLoading = createAction(namespace, 'SET_LOADING')
export const setCartInfo = createAction(namespace, 'SET_CART_INFO')
export const setPopularItems = createAction(namespace, 'SET_POPULAR_ITEMS')
export const setCartCount = createAction(namespace, 'SET_CART_COUNT')
export const setError = createAction(namespace, 'SET_ERROR')
// =======================================
// Reducers
// =======================================
const reducer = createReducer(namespace, defaultState, {
  [setLoading.Type]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),
  [setCartCount.Type]: (state, action) => ({
    ...state,
    cartCount: action.payload,
  }),
  [setCartInfo.Type]: (state, action) => ({
    ...state,
    ...action.payload,
    error: null
  }),
  [setPopularItems.Type]: (state, action) => ({
    ...state,
    popularItems: action.payload,
    error: null
  }),
  [setError.Type]: (state, action) => ({
    ...state,
    items: null,
    cartCount: 0,
    error: action.payload,
  })
})

export default reducer
