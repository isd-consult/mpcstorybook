import API from '@aws-amplify/api'
import { ApiUtils } from 'utils/ApiUtils'
import {
  setLoading,
  setTierList,
  setFbucksInfo,
  setError
} from './reducer'

export const getTierList = () => {
  return dispatch => {
    return new Promise(async resolve => {
      dispatch(setLoading(true))
      API.get('mpc', ApiUtils.getTierList())
        .then((response) => {
          dispatch(setLoading(false))
          dispatch(setTierList(response))
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

export const getFbucksInfo = () => {
  return dispatch => {
    return new Promise(async resolve => {
      dispatch(setLoading(true))
      API.get('mpc', ApiUtils.getFbucksInfo())
        .then((response) => {
          dispatch(setLoading(false))
          dispatch(setFbucksInfo(response))
          resolve(response)
        })
        .catch(error => {
          dispatch(setLoading(false))
          dispatch(setError(error))
          resolve(error)
        })
    })
  }
}
