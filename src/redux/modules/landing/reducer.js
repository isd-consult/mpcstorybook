import createReducer from '../../helpers/createReducer'
import createAction from '../../helpers/createAction'

// =======================================
// Namespace
// =======================================
export const namespace = 'landing'

// =======================================
// Default state
// =======================================
const defaultState = {
  isLoading: false,
  gender: null,
  bannerList: null,
  messageList: null,
  categoryList: null,
  newInList: null,
  error: null,
}

// =======================================
// Action creators
// =======================================
export const setLoading = createAction(namespace, 'SET_LOADING')
export const setBannerList = createAction(namespace, 'SET_BANNER_LIST')
export const setMessageList = createAction(namespace, 'SET_MESSAGE_LIST')
export const setCategoryList = createAction(namespace, 'SET_CATEGORY_LIST')
export const setNewInList = createAction(namespace, 'SET_NEWIN_LIST')
export const setError = createAction(namespace, 'SET_ERROR')

// =======================================
// Reducers
// =======================================
const reducer = createReducer(namespace, defaultState, {
  [setLoading.Type]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),
  [setBannerList.Type]: (state, action) => ({
    ...state,
    bannerList: action.payload,
    error: null
  }),
  [setMessageList.Type]: (state, action) => ({
    ...state,
    messageList: action.payload,
    error: null
  }),
  [setCategoryList.Type]: (state, action) => ({
    ...state,
    categoryList: action.payload,
    error: null
  }),
  [setNewInList.Type]: (state, action) => ({
    ...state,
    newInList: action.payload,
    error: null
  }),
  [setError.Type]: (state, action) => ({
    ...state,
    error: action.payload,
  })
})

export default reducer
