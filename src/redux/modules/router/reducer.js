import createReducer from '../../helpers/createReducer'
import createAction from '../../helpers/createAction'

// =======================================
// Namespace
// =======================================
export const namespace = '@@router'

// =======================================
// Default state
// =======================================
const defaultState = {
    current: null
}

// =======================================
// Action creators
// =======================================
export const changeLocation = createAction(namespace, 'LOCATION_CHANGE')


// =======================================
// Reducers
// =======================================
const reducer = createReducer(namespace, defaultState, {
  [changeLocation.Type]: (state, action) => ({
    ...state,
    prev: state.current,
    current: action.payload,
  }),
})

export default reducer
