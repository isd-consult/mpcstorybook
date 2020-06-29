import API from '@aws-amplify/api'
import { ApiUtils } from 'utils/ApiUtils'
import {
    setLoading,
    setProductDetail,
    setProductDtd,
    setAvailableItems,
    setSimilarItems,
    setRecentlyViewedItems,
    setCompleteLookItems
} from './reducer'


export const initialize = (sku) => {
    return async dispatch => {
        return new Promise(async resolve => {
            dispatch(fetchProductDetail(sku))
            dispatch(calculateProductDtd())
            dispatch(fetchAvailableItems(sku))
            dispatch(fetchSimilarStyles(sku))
            dispatch(fetchRecentlyViewedItems(sku))
            dispatch(fetchCompleteLookItems(sku))
            dispatch(setProductToSeen(sku))
            resolve()
        })
    }
}
/**
 * fetch Product Detail Info
 */
export const fetchProductDetail = (sku) => {
    return async dispatch => {
        return new Promise(async resolve => {
            dispatch(setLoading(true))
            dispatch(setProductDetail(null))
            API.get('mpc', ApiUtils.productDetail(sku))
            .then(response=>{
                dispatch(setLoading(false))
                dispatch(setProductDetail(response))
                resolve(response)
            })
            .catch((error)=>{
                dispatch(setLoading(false))
                dispatch(setProductDetail(null))
                resolve(error)
            })
        })
    }
}

export const calculateProductDtd = (sku, qty) => {
    return async dispatch => {
        return new Promise(async resolve => {
            API.get('mpc', ApiUtils.calculateProductDtd(sku, qty))
            .then(response=>{
                dispatch(setProductDtd(response))
                resolve(response)
            })
            .catch((error)=>{
                dispatch(setProductDtd(null))
                resolve(error)
            })
        })
    }
}

export const fetchAvailableItems = (sku) => {
    return async dispatch => {
        return new Promise(async resolve => {
            API.get('mpc', ApiUtils.availableItems(sku))
            .then(response=>{
                dispatch(setAvailableItems(response))
                resolve(response)
            })
            .catch(error=>{
                dispatch(setAvailableItems(null))
                resolve(error)
            })
        })
    }
}

export const fetchSimilarStyles = (sku) => {
    return async dispatch => {
        return new Promise(async resolve => {
            API.get('mpc', ApiUtils.similarStyles(sku, 2))
            .then(response=>{
                dispatch(setSimilarItems(response))
                resolve(response)
            })
            .catch(error=>{
                dispatch(setSimilarItems(null))
                resolve(error)
            })
        })
    }
}

export const fetchRecentlyViewedItems = (sku) => {
    return async dispatch => {
        return new Promise(async resolve => {
            API.get('mpc', ApiUtils.recentlyViewedItems(sku, 10))
            .then(response=>{
                dispatch(setRecentlyViewedItems(response))
                resolve(response)
            })
            .catch(error=>{
                dispatch(setRecentlyViewedItems(null))
                resolve(error)
            })
        })
    }
}

export const fetchCompleteLookItems = (sku) => {
    return async dispatch => {
        return new Promise(async resolve => {
            API.get('mpc', ApiUtils.compelteLookItems(sku, 6))
            .then(response=>{
                dispatch(setCompleteLookItems(response))
                resolve(response)
            })
            .catch(error=>{
                dispatch(setCompleteLookItems(null))
                resolve(error)
            })
        })
    }
}

export const setProductToSeen = (sku) => {
    return async (dispatch, getState) => {
        return new Promise(async resolve => {
            const {auth: {isAuthenticated}} = getState()
            if (isAuthenticated) {
                API.post('mpc', ApiUtils.addProductToSeen(), {body: {sku}})
                .then(response=>{
                    dispatch(setLoading(false))
                    resolve(response)
                })
            }
        })
    }
}
