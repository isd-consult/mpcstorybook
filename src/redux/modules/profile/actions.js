import API from '@aws-amplify/api'
import { ApiUtils } from 'utils/ApiUtils'
import ThemeUtils from 'utils/ThemeUtils'
import { LocalStorageUtils } from 'utils/LocalStorageUtils'
import { push } from 'connected-react-router'
import {
  setLoading,
  setUserInfo,
  setAddress,
  setAddresses,
} from './reducer'
import { showNotification, setTheme } from '../mpc/reducer'

/**
 * get Profile Info
 */
export const getProfile = () => {
  return async dispatch => {
    return new Promise(async resolve => {
      dispatch(setLoading(true))
      API.get('mpc', ApiUtils.getAccountInfo())
        .then((response) => {
          const theme = ThemeUtils.getTheme(response.gender)
          dispatch(setLoading(false))
          dispatch(setTheme(theme))
          dispatch(setUserInfo(response))
          LocalStorageUtils.saveState('theme', theme)
          resolve(response)
        })
        .catch((error)=>{
          dispatch(setLoading(false))
          dispatch(showNotification({
            message: error.message,
            category: 'danger',
            duration: 5000,
            icon: 'warning',
            position: 'bottom',
          }))
          resolve(error)
        })
    })
  }
}

export const saveProfile = (data) => {
  return dispatch => {
    return new Promise(resolve => {
      API.post('mpc', ApiUtils.saveAccountInfo(), {body:data})
      .then((response) => {
        if(response.status){
          const theme = ThemeUtils.getTheme(data.gender)
          dispatch(setTheme(theme))
          dispatch(setUserInfo(data))
          dispatch(showNotification({
            message: response.msg,
            category: 'success',
            duration: 5000,
            icon: 'checkmark',
            position: 'bottom',
          }))
          LocalStorageUtils.saveState('theme', theme)
        } else {
          dispatch(showNotification({
            message: response.msg,
            category: 'danger',
            duration: 5000,
            icon: 'warning',
            position: 'bottom',
          }))
        }
        resolve(response)
      })
    })
  }
}

export const getAddress = (addressHash) => {
  return dispatch => {
    return new Promise(async resolve => {
      dispatch(setLoading(true))
      if (addressHash) {
        API.get('mpc', ApiUtils.getAccountAddress(addressHash))
        .then((response) => {
          dispatch(setLoading(false))
          if(response && response.status) {
            dispatch(setAddress(response.data))
          } else {
            dispatch(setAddress(null))
            dispatch(showNotification({
              message: "Something wrong",
              category: 'danger',
              duration: 5000,
              icon: 'warning',
              position: 'bottom',
            }))
          }
          resolve(response)
        })
        .catch(error=>{
          dispatch(setLoading(false))
          dispatch(showNotification({
            message: "Something wrong",
            category: 'danger',
            duration: 5000,
            icon: 'warning',
            position: 'bottom',
          }))
          resolve(error)
        })
      } else {
        dispatch(setLoading(false))
        dispatch(setAddress(null))
        resolve()
      }
    })
  }
}

export const saveAddress = (address) => {
  return (dispatch) => {
    return new Promise(async resolve => {
      API.post(
        'mpc',
        ApiUtils.addAccountAddress(),
        { body: address }
      ).then(response=>{
        if (response && response.status) {
          dispatch(showNotification({
            message: "Address info was updated successfully",
            category: 'success',
            duration: 5000,
            icon: 'checkmark',
            position: 'bottom',
          }))
          dispatch(setAddresses(response.data))
          dispatch(setAddress(null))
          dispatch(push('/accounts/info'))
          resolve()
        } else {
          dispatch(showNotification({
            message: "Something wrong",
            category: 'danger',
            duration: 5000,
            icon: 'warning',
            position: 'bottom',
          }))
          dispatch(setAddress(null))
          resolve()
        }
      }).catch(()=>{
        dispatch(showNotification({
          message: "Something wrong",
          category: 'danger',
          duration: 5000,
          icon: 'warning',
          position: 'bottom',
        }))
        resolve()
      })
    })
  }
}

export const deleteAddress = (addressHash) => {
  return (dispatch) => {
    return new Promise(async resolve => {
      API.del('mpc', ApiUtils.deleteAddress(addressHash))
      .then((response)=> {
        if(response.status){
          dispatch(setAddresses(response.data))
          dispatch(showNotification({
            message: "Removed successfully",
            category: 'success',
            duration: 5000,
            icon: 'checkmark',
            position: 'bottom',
          }))
        } else {
          dispatch(showNotification({
            message: response.msg,
            category: 'danger',
            duration: 5000,
            icon: 'warning',
            position: 'bottom',
          }))
        }
        resolve(response)
      })
    })
  }
}
