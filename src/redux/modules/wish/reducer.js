import createReducer from '../../helpers/createReducer'
import createAction from '../../helpers/createAction'

// =======================================
// Namespace
// =======================================
export const namespace = 'wish'

// =======================================
// Default state
// =======================================
const defaultState = {
  isLoading: false,
  items: [],
  totalCount: 0,
  error: null
}

// =======================================
// Action creators
// =======================================
export const setLoading = createAction(namespace, 'SET_LOADING')
export const setWishInfo = createAction(namespace, 'SET_WISH_INFO')
export const setError = createAction(namespace, 'SET_ERROR')
// =======================================
// Reducers
// =======================================
const reducer = createReducer(namespace, defaultState, {
  [setLoading.Type]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),
  [setWishInfo.Type]: (state, action) => ({
    ...state,
    ...action.payload,
    totalCount: action.payload.items ? action.payload.items.length : 0,
    error: null
  }),
  [setError.Type]: (state, action) => ({
    ...state,
    items: [],
    totalCount: 0,
    error: action.payload,
  })
})

export default reducer
