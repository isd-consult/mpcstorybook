import createReducer from '../../helpers/createReducer'
import createAction from '../../helpers/createAction'

// =======================================
// Namespace
// =======================================
export const namespace = 'questions'

// =======================================
// Default state
// =======================================
const defaultState = {
  isLoading: true,
  isLoadingQuiz: false,
  name: null,
  isLoaded: false,
  pagination: [],
  theme: 1,
  currentPageData: [],
  questionsList: null,
  initialValues: null
}

// =======================================
// Action creators
// =======================================
export const setTheme= createAction(namespace, 'SET_THEME')
export const setInitialValues= createAction(namespace, 'SET_INITIAL_VALUES')
export const setLoaded= createAction(namespace, 'SET_LOADED')
export const setPagination = createAction(namespace, 'SET_PAGINATION')
export const setCurrentPageData = createAction(
  namespace,
  'SET_CURRENT_PAGE_DATA',
)
export const setLoading = createAction(namespace, 'SET_LOADING')
export const setLoadingQuiz = createAction(namespace, 'SET_LOADING_QUIZ')
export const setQuestionList = createAction(namespace, 'SET_QUESTIONS_LIST')
export const setName = createAction(namespace, 'SET_NAME')

// =======================================
// Reducers
// =======================================
const reducer = createReducer(namespace, defaultState, {
  [setLoading.Type]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),
  [setLoaded.Type]: state => ({
    ...state,
    isLoaded: true,
  }),
  [setTheme.Type]: (state, action) => ({
    ...state,
    theme: action.payload,
  }),
  [setLoadingQuiz.Type]: (state, action) => ({
    ...state,
    isLoadingQuiz: action.payload,
  }),
  [setInitialValues.Type]: (state, action) => ({
    ...state,
    initialValues: action.payload,
  }),
  [setQuestionList.Type]: (state, action) => ({
    ...state,
    questionsList: action.payload,
    error: null,
  }),
  [setPagination.Type]: (state, action) => ({
    ...state,
    pagination: action.payload,
  }),
  [setCurrentPageData.Type]: (state, action) => ({
    ...state,
    currentPageData: action.payload,
  }),
  [setName.Type]: (state, action) => ({
    ...state,
    name: action.payload,
  }),
})

export default reducer
