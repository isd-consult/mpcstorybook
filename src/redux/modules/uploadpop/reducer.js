import createReducer from '../../helpers/createReducer'
import createAction from '../../helpers/createAction'

// =======================================
// Namespace
// =======================================
export const namespace = 'uploadpop'

// =======================================
// Default state
// =======================================
const defaultState = {
  step: 0
}

// =======================================
// Action creators
// =======================================
export const setStep = createAction(namespace, 'SET_STEP')
// =======================================
// Reducers
// =======================================
const reducer = createReducer(namespace, defaultState, {
  [setStep.Type]: (state, action) => ({
    ...state,
    step: action.payload
  })
})

export default reducer
