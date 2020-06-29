import createReducer from '../../helpers/createReducer'
import createAction from '../../helpers/createAction'

// =======================================
// Namespace
// =======================================
export const namespace = 'product'

// =======================================
// Default state
// =======================================
const defaultState = {
  isLoading: true,
  params: null,
  filters: null,
  sortOption: null,
  pageSize: 20,
  pageNumber: 1,
  totalCount: 0,
  products: [],
  title: '',
  subtitle: '',
  recommendItems: [],
  recommendURL: null,
  error: null
}

// =======================================
// Action creators
// =======================================
export const setTitle = createAction(namespace, 'SET_TITLE')
export const setSubtitle = createAction(namespace, 'SET_SUBTITLE')
export const setLoading = createAction(namespace, 'SET_LOADING')
export const setPageSize = createAction(namespace, 'SET_PAGE_SIZE')
export const setPageNumber = createAction(namespace, 'SET_PAGE_NUMBER')
export const setTotalCount = createAction(namespace, 'SET_TOTAL_COUNT')
export const setFilters = createAction(namespace, 'SET_FILTER_OPTIONS')
export const setSort = createAction(namespace, 'SET_SORT_OPTION')
export const setProducts = createAction(namespace, 'SET_PRODUCTS')
export const setRecommendItems = createAction(namespace, 'SET_RECOMMENDITEMS')
export const setRecommendURL = createAction(namespace, 'SET_RECOMMENDURL')
export const setError = createAction(namespace, 'SET_ERROR')
export const clearState = createAction(namespace, 'CLEAR_STATE')

// =======================================
// Reducers
// =======================================
const reducer = createReducer(namespace, defaultState, {
  [clearState.Type]: () => ({
    isLoading: true,
    filters: null,
    sortOption: null,
    pageSize: 20,
    pageNumber: 1,
    totalCount: 0,
    products: [],
    recommendItems: [],
    error: null,
  }),
  [setLoading.Type]: (state, action) => ({
    ...state,
    isLoading: action.payload,
    error: null
  }),
  [setTitle.Type]: (state, action) => ({
    ...state,
    title: action.payload
  }),
  [setSubtitle.Type]: (state, action) => ({
    ...state,
    subtitle: action.payload
  }),
  [setPageSize.Type]: (state, action) => ({
    ...state,
    pageSize: action.payload,
  }),
  [setPageNumber.Type]: (state, action) => ({
    ...state,
    pageNumber: action.payload,
  }),
  [setTotalCount.Type]: (state, action) => ({
    ...state,
    totalCount: action.payload,
  }),
  [setFilters.Type]: (state, action) => ({
    ...state,
    filters: action.payload,
    error: null
  }),
  [setSort.Type]: (state, action) => ({
    ...state,
    sortOption: action.payload,
    error: null
  }),
  [setProducts.Type]: (state, action) => ({
    ...state,
    products: action.payload,
    error: null
  }),
  [setRecommendItems.Type]: (state, action) => ({
    ...state,
    recommendItems: action.payload,
    error: null
  }),
  [setRecommendURL.Type]: (state, action) => ({
    ...state,
    recommendURL: action.payload,
    error: null
  }),
  [setError.Type]: (state, action) => ({
    ...state,
    error: action.payload,
  }),
})

export default reducer

