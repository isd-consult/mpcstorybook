import createReducer from '../../helpers/createReducer'
import createAction from '../../helpers/createAction'

// =======================================
// Namespace
// =======================================
export const namespace = 'mpc'

// =======================================
// Default state
// =======================================
const defaultState = {
  isLoading: false,
  nextTierInfo: null,
  isSimpleSearch: false,
  isAuthPage: false,
  baseUrl: '',
  notification: {
    message: '',
    category: null,
    duration: 5000,
    icon: '',
    position: 'bottom',
  },
  theme: null,
  preferences: null,
}

// =======================================
// Action creators
// =======================================
export const initialize = createAction(namespace, 'INITIALIZE')
export const setLoading = createAction(namespace, 'SET_LOADING')
export const setNextTierInfo = createAction(namespace, 'SET_NEXT_TIRE_INFO')
export const showNotification = createAction(namespace, 'SHOW_NOTIFICATION')
export const setTheme = createAction(namespace, 'SET_THEME')
export const setPreferences = createAction(namespace, 'SET_PREFERENCES')
// =======================================
// Reducers
// =======================================
const reducer = createReducer(namespace, defaultState, {
  [initialize.Type]: (state, action) => ({
    ...state,
    ...defaultState,
    ...action.payload,
  }),
  [setLoading.Type]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),
  [setNextTierInfo.Type]: (state, action) => ({
    ...state,
    nextTierInfo: action.payload,
  }),
  [showNotification.Type]: (state, action) => ({
    ...state,
    notification: action.payload,
  }),
  [setTheme.Type]: (state, action) => ({
    ...state,
    theme: action.payload,
  }),
  [setPreferences.Type]: (state, action) => ({
    ...state,
    preferences: action.payload,
  })
})

export default reducer
