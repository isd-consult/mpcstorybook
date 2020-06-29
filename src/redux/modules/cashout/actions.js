import API from '@aws-amplify/api'
import { ApiUtils } from 'utils/ApiUtils'
import {
  setLoading,
  setCreditInfo,
  setError
} from './reducer'
import { showNotification } from '../mpc/reducer'

export const getCreditInfo = () => {
  return dispatch => {
    return new Promise(async resolve => {
      dispatch(setLoading(true))
      API.get('mpc', ApiUtils.getCreditInfo())
        .then((response) => {
          dispatch(setLoading(false))
          dispatch(setCreditInfo(response))
          resolve(response)
        })
        .catch((error)=>{
          dispatch(setLoading(false))
          dispatch(setError(error))
          resolve(error)
        })
    })
  }
}

export const creditCashOut = (credit) => {
  return dispatch => {
    return new Promise(resolve => {
      API.post(
        'mpc',
        ApiUtils.creditCashOut(),
        {body:  {credit}}
      ).then(response=>{
        dispatch(showNotification({
          message: "It will take some days to process your request",
          category: 'success',
          icon: 'checkmark',
          position: 'bottom',
        }))
        resolve(response)
      }).catch(error=>{
        dispatch(showNotification({
          message: "Something wrong",
          category: 'danger',
          icon: 'warning',
          position: 'bottom',
        }))
        resolve(error)
      })
    })
  }
}
