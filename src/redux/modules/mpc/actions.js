import UrlUtils from 'utils/UrlUtils'
import { LocalStorageUtils } from 'utils/LocalStorageUtils'
import { ApiUtils } from 'utils/ApiUtils'
import API from '@aws-amplify/api'
import {
  initialize,
  setLoading,
  setNextTierInfo,
  setTheme,
  setPreferences,
  showNotification
} from './reducer'
import {
  getCartInfo
} from '../cart/actions'

// =======================================
// Initialize (global MPC params)
// It is always called over the all pages
// =======================================
export const init = () => {
  return (dispatch, getState) => {
    return new Promise(resolve => {
      const {
        router: { location },
      } = getState()

      // basic
      dispatch(initialize({
          isSimpleSearch: UrlUtils.isSimpleSearch(location),
          isAuthPage: UrlUtils.isAuthPage(location),
          baseUrl: window.location.origin,
      }))

      // cart
      dispatch(getCartInfo())
      // theme
      dispatch(initTheme())
      resolve()
    })
  }
}

// ======================================
// Theme
// ======================================
const initTheme = () => {
  return dispatch => {
    return new Promise(resolve => {
      const theme = LocalStorageUtils.loadState('theme')
      dispatch(setTheme(theme))
      resolve(theme)
    })
  }
}

// =======================================
// Preferences
// =======================================

export const getPreferences = () => {
  return (dispatch, getState) => {
    return new Promise(resolve => {
      const {
        mpc: { preferences },
      } = getState()
      if (!preferences) dispatch(setLoading(true))
      API.get('mpc', ApiUtils.getPreferencesInfo())
      .then(response=>{
        dispatch(setPreferences(response))
        dispatch(setLoading(false))
        resolve(response)
      })
      .catch(error=>{
        dispatch(showNotification({
          message: error.message,
          category: 'danger',
          duration: 5000,
          icon: 'warning',
          position: 'bottom',
        }))
        dispatch(setLoading(false))
        resolve(error)
      })
    })
  }
}

export const savePreferences = (data) => {
  return dispatch => {
    return new Promise(resolve => {
      API.post('mpc', ApiUtils.getPreferencesInfo(), {
        header: {'Content-Type':'application/json'},
        body: data
      })
      .then(response=>{
        if (response.status) {
          dispatch(setPreferences(data))
          dispatch(showNotification({
            message: "Your preferences has been saved successfully",
            category: 'success',
            icon: 'checkmark',
            position: 'bottom',
          }))
        } else {
          dispatch(showNotification({
            message: "There was something wrong when saving preferences",
            category: 'danger',
            icon: 'warning',
            position: 'bottom',
          }))
        }
        resolve(response)
      })
      .catch(error=>{
        dispatch(showNotification({
          message: "There was something wrong when saving preferences",
          category: 'danger',
          icon: 'warning',
          position: 'bottom',
        }))
        resolve(error)
      })
    })
  }
}

export const fetchNextTierInfo = () => {
  return dispatch => {
    return new Promise(resolve => {
      API.get('mpc', ApiUtils.fetchNextTierInfo())
      .then(response=>{
        if (!response.Code) {
          dispatch(setNextTierInfo(response))
        } else {
          dispatch(setNextTierInfo(null))
        }
        resolve(response)
      })
      .catch(error=>{
        dispatch(setNextTierInfo(null))
        resolve(error)
      })
    })
  }
}
