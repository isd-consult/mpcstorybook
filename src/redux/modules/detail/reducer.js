import createReducer from '../../helpers/createReducer'
import createAction from '../../helpers/createAction'

// =======================================
// Namespace
// =======================================
export const namespace = 'detail'

// =======================================
// Default state
// =======================================
const defaultState = {
  isLoading: false,
  product: null,
  dtd: null,
  availableItems: null,
  similarItems: null,
  recentlyViewedItems: null,
  lookItems: null,
  error: null,
}

// =======================================
// Action creators
// =======================================
export const setLoading = createAction(namespace, 'SET_LOADING')
export const setProductDetail = createAction(namespace, 'SET_PRODUCT_DETAIL')
export const setProductDtd = createAction(namespace, 'SET_PRODUCT_DTD')
export const setAvailableItems = createAction(namespace, 'SET_AVAILABLE_ITEMS')
export const setSimilarItems = createAction(namespace, 'SET_SIMILAR_ITEMS')
export const setRecentlyViewedItems = 
    createAction(namespace, 'SET_RECENTLY_VIEWED_ITEMS')
export const setCompleteLookItems = 
    createAction(namespace, 'SET_COMPLETE_LOOK_ITEMS')
export const setError = createAction(namespace, 'SET_ERROR')

// =======================================
// Reducers
// =======================================
const reducer = createReducer(namespace, defaultState, {
  [setLoading.Type]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),
  [setProductDetail.Type]: (state, action) => ({
    ...state,
    product: action.payload,
    error: null
  }),
  [setProductDtd.Type]:(state, action) => ({
    ...state,
    dtd: action.payload,
    error: null
  }),
  [setAvailableItems.Type]:(state, action) => ({
    ...state,
    availableItems: action.payload,
    error: null
  }),
  [setSimilarItems.Type]:(state, action) => ({
    ...state,
    similarItems: action.payload,
    error: null
  }),
  [setRecentlyViewedItems.Type]:(state, action) => ({
    ...state,
    recentlyViewedItems: action.payload,
    error: null
  }),
  [setCompleteLookItems.Type]:(state, action) => ({
    ...state,
    lookItems: action.payload,
    error: null
  }),
  [setError.Type]: (state, action) => ({
    ...state,
    error: action.payload,
  })
})

export default reducer
