import createReducer from '../../helpers/createReducer'
import createAction from '../../helpers/createAction'

// =======================================
// Namespace
// =======================================
export const namespace = 'question'

// =======================================
// Default state
// =======================================
const defaultState = {
  isLoading: false,
  isAnswering: false,
  name: null,
  questionList: null,
  error: null,
}

// =======================================
// Action creators
// =======================================
export const setLoading = createAction(namespace, 'SET_LOADING')
export const setQuestionList = createAction(namespace, 'SET_QUESTION_LIST')
export const setAnswering = createAction(namespace, 'SET_ANSWERING')
export const setName = createAction(namespace, 'SET_NAME')
export const setError = createAction(namespace, 'SET_ERROR')

// =======================================
// Reducers
// =======================================
const reducer = createReducer(namespace, defaultState, {
  [setLoading.Type]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),
  [setQuestionList.Type]: (state, action) => ({
    ...state,
    questionList: action.payload,
    error: null
  }),
  [setAnswering.Type]: (state, action) => ({
    ...state,
    isAnswering: action.payload,
  }),
  [setName.Type]: (state, action) => ({
    ...state,
    name: action.payload,
  }),
  [setError.Type]: (state, action) => ({
    ...state,
    error: action.payload,
  })
})

export default reducer
