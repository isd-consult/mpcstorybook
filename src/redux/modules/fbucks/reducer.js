import createReducer from '../../helpers/createReducer'
import createAction from '../../helpers/createAction'

// =======================================
// Namespace
// =======================================
export const namespace = 'fbucks'

// =======================================
// Default state
// =======================================
const defaultState = {
  isLoading: false,
  tierList: null,
  fbucksInfo: null,
  error: null
}

// =======================================
// Action creators
// =======================================
export const setLoading = createAction(namespace, 'SET_LOADING')
export const setTierList = createAction(namespace, 'SET_TIER_LIST')
export const setFbucksInfo = createAction(namespace, 'SET_FBUCKS_INFO')
export const setError = createAction(namespace, 'SET_ERROR')

// =======================================
// Reducers
// =======================================
const reducer = createReducer(namespace, defaultState, {
  [setLoading.Type]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),
  [setTierList.Type]: (state, action) => ({
    ...state,
    tierList: action.payload,
    error: null
  }),
  [setFbucksInfo.Type]: (state, action) => ({
    ...state,
    fbucksInfo: action.payload,
    error: null
  }),
  [setError.Type]: (state, action) => ({
    ...state,
    tierList: null,
    error: action.payload,
  })
})

export default reducer
