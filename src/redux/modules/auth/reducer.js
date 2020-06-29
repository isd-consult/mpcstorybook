import createReducer from '../../helpers/createReducer'
import createAction from '../../helpers/createAction'

// =======================================
// Namespace
// =======================================
export const namespace = 'auth'

// =======================================
// Default state
// =======================================
const defaultState = {
  isLoading: false,
  isAuthenticating: true,
  isAuthenticated: false,
  isFederatedSignIn: false,
  user: null,
  error: null
}

// =======================================
// Action creators
// =======================================
export const setLoading
  = createAction(namespace, 'SET_LOADING')
export const checkSessionRequest 
  = createAction(namespace, 'CHECK_SESSION_REQUEST')
export const checkSessionSuccess
  = createAction(namespace, 'CHECK_SESSION_SUCCESS')
export const checkSessionFailure
  = createAction(namespace, 'CHECK_SESSION_FAILURE')
export const clearSession
  = createAction(namespace, 'CLEAR_SESSION')
export const setFederatedSignIn
  = createAction(namespace, 'SET_FEDERATED_SIGNIN')
// =======================================
// Reducers
// =======================================
const reducer = createReducer(namespace, defaultState, {
  [setLoading.Type]: (state, action) => ({
    ...state,
    isLoading: action.payload
  }),
  [checkSessionRequest.Type]: (state, action) => ({
    ...state,
    isAuthenticating: true,
    isAuthenticated: false,
    user: null,
    error: null,
    ...action.payload
  }),
  [checkSessionSuccess.Type]: (state, action) => ({
    ...state,
    isAuthenticating: false,
    isAuthenticated: true,
    user: action.payload
  }),
  [checkSessionFailure.Type]: (state, action) => ({
    ...state,
    isAuthenticating: false,
    isAuthenticated: false,
    error: action.payload
  }),
  [clearSession.Type]: (state, action) => ({
    ...state,
    isAuthenticating: false,
    isAuthenticated: false,
    isFederatedSignIn: false,
    error: null,
    user: null,
    ...action.payload
  }),
  [setFederatedSignIn.Type]: (state, action) => ({
    ...state,
    isFederatedSignIn: action.payload
  })
})

export default reducer
