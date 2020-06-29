import createReducer from '../../helpers/createReducer'
import createAction from '../../helpers/createAction'

// =======================================
// Namespace
// =======================================
export const namespace = 'search'

// =======================================
// Default state
// =======================================
const defaultState = {
  suggestions: null,
  recommendations: null,
  newItems: null,
  loading: false,
  recommendationRemovingIds: [],
  loaded: false,
  limitProductSuggestion: 5,
  limitBrandSuggestion: 5,
}

// =======================================
// Action creators
// =======================================
export const setLoading = createAction(namespace, 'SET_LOADING')
export const setSuggestions = createAction(namespace, 'SET_SUGGESTIONS')
export const setRecommendations = createAction(namespace, 'SET_RECOMMENDATIONS')
export const setNewItems = createAction(namespace, 'SET_NEW_ITEMS')
export const setLoaded = createAction(namespace, 'SET_LOADED')
export const setRecommendationRemovingIds = createAction(
  namespace,
  'SET_RECOMMENDATION_REMOVING_IDS',
)

// =======================================
// Reducers
// =======================================
const reducer = createReducer(namespace, defaultState, {
  [setLoading.Type]: (state, action) => ({ ...state, loading: action.payload }),
  [setSuggestions.Type]: (state, action) => ({
    ...state,
    suggestions: action.payload,
  }),
  [setRecommendations.Type]: (state, action) => ({
    ...state,
    recommendations: action.payload,
  }),
  [setNewItems.Type]: (state, action) => ({
    ...state,
    newItems: action.payload,
  }),
  [setRecommendationRemovingIds.Type]: (state, action) => ({
    ...state,
    recommendationRemovingIds: action.payload,
  }),
  [setLoaded.Type]: state => ({
    ...state,
    loaded: true,
  }),
})

export default reducer
