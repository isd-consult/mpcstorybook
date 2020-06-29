import createReducer from '../../helpers/createReducer'
import createAction from '../../helpers/createAction'

// =======================================
// Namespace
// =======================================
export const namespace = 'checkout'

// =======================================
// Default state
// =======================================
const defaultState = {
  isLoading: false,
  isFetchedAddresses: false,
  checkout_items: [],
  original_subtotal: 0,
  current_subtotal: 0,
  current_subtotal_vat_amount: 0,
  delivery_cost: 0,
  credits_available: 0,
  credits_in_use: 0,
  total_due: 0,
  delivery_address: null,
  delivery_addresses: null,
  credit_cards: null,
  credit_cards_add_approval: null,
  credit_cards_checkout_approval: null,
  error: null,
}

// =======================================
// Action creators
// =======================================
export const setLoading = createAction(namespace, 'SET_LOADING')
export const setCheckoutInfo = createAction(namespace, 'SET_CHECKOUT_INFO')
export const setCards = createAction(namespace, 'SET_CARDS')
export const setError = createAction(namespace, 'SET_ERROR')
export const setDeliveryAddresses 
  = createAction(namespace, 'SET_DELIVERY_ADDRESSES')
export const setAddCardApproval
  = createAction(namespace, 'SET_CARD_APPROVAL_PARAM')
export const setCheckOutApproval
  = createAction(namespace, 'SET_CHECKOUT_APPROVAL_PARAM')
// =======================================
// Reducers
// =======================================
const reducer = createReducer(namespace, defaultState, {
  [setLoading.Type]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),
  [setCheckoutInfo.Type]: (state, action) => ({
    ...state,
    ...action.payload,
    error: null
  }),
  [setDeliveryAddresses.Type]: (state, action) => ({
    ...state,
    isFetchedAddresses: true,
    ...action.payload,
  }),
  [setCards.Type]:(state, action) => ({
    ...state,
    credit_cards: action.payload
  }),
  [setAddCardApproval.Type]:(state, action) => ({
    ...state,
    credit_cards_add_approval: action.payload
  }),
  [setCheckOutApproval.Type]:(state, action) => ({
    ...state,
    credit_cards_checkout_approval: action.payload
  }),
  [setError.Type]: (state, action) => ({
    ...state,
    error: action.payload,
  })
})

export default reducer
