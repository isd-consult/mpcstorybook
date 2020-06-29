import API from '@aws-amplify/api'
import { ApiUtils } from 'utils/ApiUtils'
import {
  setBannerList,
  setMessageList,
  setCategoryList,
  setNewInList
} from './reducer'

/**
 * fetch Banner List
 */
export const fetchBannerList = () => {
    return async dispatch => {
        return new Promise(async resolve => {
            API.get('mpc', ApiUtils.bannerList())
            .then(response=>{
                dispatch(setBannerList(response))
                resolve(response)
            })
            .catch((error)=>{
                resolve(error)
            })
        })
    }
}

export const fetchMessageList = () => {
    return async dispatch => {
        return new Promise(async resolve => {
            API.get('mpc', ApiUtils.newMessageList())
            .then(response=>{
                dispatch(setMessageList(response))
                resolve(response)
            })
            .catch(error=>{
                resolve(error)
            })
        })
    }
}
/**
 * fetch Category List
 */
export const fetchCategoryList = () => {
    return async (dispatch, getState) => {
        const {landing: {gender}} = getState()
        return new Promise(async resolve => {
            API.get('mpc', ApiUtils.shopByCategory(gender))
            .then(response=>{
                dispatch(setCategoryList(response))
                resolve(response)
            })
            .catch((error)=>{
                resolve(error)
            })
        })
    }
}

/**
 * fetch New In List
 */
export const fetchNewInList = () => {
    return async (dispatch) => {
        return new Promise(async resolve => {
            API.get('mpc', ApiUtils.newInList(20))
            .then(response=>{
                dispatch(setNewInList(response))
                resolve(response)
            })
            .catch((error)=>{
                resolve(error)
            })
        })
    }
}

export const dismissMessage = (messageId) => {
    return async dispatch => {
        return new Promise(async resolve => {
            API.del(
                'mpc',
                ApiUtils.dismissMessage(),
                {
                    body: {
                        message_id: messageId
                    }
                }
            )
            .then(response=>{
                dispatch(setMessageList(response))
                resolve(response)
            })
            .catch(error=>{
                resolve(error)
            })
        })
    }
}
