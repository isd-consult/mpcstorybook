import API from '@aws-amplify/api'
import { ApiUtils } from 'utils/ApiUtils'
import { push } from 'connected-react-router'
import {
  setLoading,
  setCheckoutInfo,
  setDeliveryAddresses,
  setCards,
  setAddCardApproval,
  setCheckOutApproval,
  setError
} from './reducer'
import { showNotification } from '../mpc/reducer'

/**
 * get Profile Info
 */
export const initCheckout = () => {
  return (dispatch, getState) => {
    return new Promise( resolve => {
        const { auth: { isAuthenticated } } = getState()
        if (isAuthenticated) {
          const init = {
            body: {},
            headers: {'content-type':'application/json'}
          }
          API.post(
            'mpc',
            ApiUtils.initCheckout(),
            init
          )
          .then((response) => {
            dispatch(setCheckoutInfo(response))
            dispatch(push('/checkout/delivery'))
            resolve(response)
          })
          .catch((error)=>{
            dispatch(showNotification({
                message: "Something wrong",
                category: 'danger',
                icon: 'warning',
                position: 'bottom',
            }))
            dispatch(setError(error))
            resolve(error)
          })
        } else {
          dispatch(push('/login?redirect=cart_list'))
          resolve()
        }
    })
  }
}

/**
 * GET - get checkout info
 */
export const getCheckoutInfo = () => {
  return dispatch => {
    return new Promise( resolve => {
      API.get('mpc', ApiUtils.getCheckoutItems())
      .then(response => {
        dispatch(setCheckoutInfo(response))
        resolve(response)
      })
      .catch(error=>{
        dispatch(setError(error))
        resolve(error)
      })
    })
  }
}

export const handleCredit = () => {
  return (dispatch, getState) => {
    return new Promise(resolve=>{
      const {checkout} = getState()
      const request = {
        headers: { 'content-type':'application/json' }
      }

      if (checkout.credits_in_use) {
        API.del('mpc', ApiUtils.useCredit(), request)
        .then(response=>{
          dispatch(setCheckoutInfo(response))
          resolve(response)
        })
        .catch(error=>{
          resolve(error)
        })
      } else {
        API.post('mpc', ApiUtils.useCredit(), request)
        .then(response=>{
          dispatch(setCheckoutInfo(response))
          resolve(response)
        })
        .catch(error=>{
          resolve(error)
        })
      }
    })
  }
}
/**
 * handle payment
 */
export const handlePayment = (method, params) => {
  return (dispatch, getState) => {
    return new Promise( resolve => {

      const {checkout} = getState()

      let paymentMethod = method
      if (checkout.total_due===0 && checkout.credits_in_use>0) {
        paymentMethod = "customer-credits"
      }

      if (!paymentMethod) {
        dispatch(showNotification({
          message: "Please select payment method",
          category: 'danger',
          icon: 'warning',
          position: 'bottom',
        }))
        resolve()
        return
      } if (paymentMethod==='credit-cards' && params.card_id === null) {
        if (checkout.credit_cards.length) {
          dispatch(showNotification({
            message: "Please select credit card",
            category: 'danger',
            icon: 'warning',
            position: 'bottom',
          }))
        } else {
          dispatch(showNotification({
            message: "Please add credit card",
            category: 'danger',
            icon: 'warning',
            position: 'bottom',
          }))
        }
        resolve()
        return
      }

      const request = {
        headers: { 'content-type':'application/json' },
        body: params,
      }
      API.post('mpc', ApiUtils.paymentCheckout(paymentMethod), request)
      .then(response => {
        if (response.Code){
          dispatch(showNotification({
            message: response.Message,
            category: 'danger',
            icon: 'warning',
            position: 'bottom',
          }))
        }else if (paymentMethod === 'credit-cards') {
            dispatch(setCheckOutApproval(response))
          } else {
            dispatch(push(`/order/confirmation/${response.order_number}`))
          }
        resolve(response)
      })
      .catch((error)=>{
        dispatch(showNotification({
          message: "Please fill in all required fields",
          category: 'danger',
          icon: 'warning',
          position: 'bottom',
        }))
        resolve(error)
      })
    })
  }
}

/**
 * Delivery
 */
export const getDeliveryAddresses = () => {
  return dispatch => {
    return new Promise( resolve => {
      dispatch(setLoading(true))
      API.get(
        'mpc',
        ApiUtils.getDeliveryAddressList()
      ).then(response => {
        dispatch(setLoading(false))
        dispatch(setDeliveryAddresses(response))
        resolve(response)
      }).catch(error => {
        dispatch(setLoading(false))
        dispatch(setDeliveryAddresses({delivery_addresses: []}))
        resolve(error)
      })
    })
  }
}

export const setDeliveryAddress = (hash) => {
  return dispatch => {
    return new Promise( resolve => {
      if (hash) {
        API.put(
          'mpc',
          ApiUtils.setDeliveryAddress(),
          {body: {address_hash: hash}}
        ).then((response) => {
          if (response.Code){
            dispatch(showNotification({
              message: response.Message,
              category: 'danger',
              icon: 'warning',
              position: 'bottom',
            }))
          }else{
            dispatch(showNotification({
              message: "Delivery address was updated successfully",
              category: 'success',
              icon: 'checkmark',
              position: 'bottom',
            }))
            dispatch(setCheckoutInfo(response))
            dispatch(push('/checkout/delivery/payment'))
          }
          resolve(response)
        }).catch(error => {
          dispatch(showNotification({
            message: "Something wrong!",
            category: 'danger',
            icon: 'warning',
            position: 'bottom',
          }))
          resolve(error)
        })
      } else {
        dispatch(showNotification({
          message: "Add shipping address",
          category: 'danger',
          icon: 'warning',
          position: 'bottom',
        }))
        resolve()
      }
    })
  }
}

export const addDeliveryAddress = (address) => {
  return dispatch => {
    return new Promise( async (resolve) => {
      API.post(
        'mpc',
        ApiUtils.addDeliveryAddress(),
        { body:  address }
      ).then((response)=>{
        dispatch(setDeliveryAddresses(response))
        dispatch(showNotification({
          message: "Delivery address was added successfully",
          category: 'success',
          icon: 'checkmark',
          position: 'bottom',
        }))
        dispatch(push('/checkout/delivery'))
        resolve(response)
      }).catch((error)=> {
        dispatch(showNotification({
          message: "Adding address failed",
          category: 'danger',
          icon: 'warning',
          position: 'bottom',
        }))
        resolve(error)
      })
    })
  }
}

export const editDeliveryAddress = (address) => {
  return dispatch => {
    return new Promise(async (resolve) => {
      API.put(
        'mpc',
        ApiUtils.editDeliveryAddress(),
        { body:  address }
      ).then((response)=>{
        dispatch(setDeliveryAddresses(response.delivery_addresses))
        dispatch(showNotification({
          message: "Delivery address was updated successfully",
          category: 'success',
          icon: 'checkmark',
          position: 'bottom',
        }))
        dispatch(push('/checkout/delivery'))
        resolve(response)
      }).catch((error)=> {
        dispatch(showNotification({
          message: "Editing address was failed",
          category: 'danger',
          icon: 'warning',
          position: 'bottom',
        }))
        resolve(error)
      })
    })
  }
}

export const fetchCardList = () => {
  return dispatch => {
    return new Promise(async (resolve) => {
      API.get('mpc', ApiUtils.getCardList())
      .then(response=>{
        dispatch(setCards(response))
        resolve(response)
      })
    })
  }
}


function validateCardNumber(number) {
  const validCardsReg = [
    {
      brand: "visa",
      patt: /^4[0-9]{12}(?:[0-9]{3})?$/
    },
    {
      brand: "electron",
      patt: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/
    },
    {
      brand: "master",
      patt: /^5[1-5][0-9]{14}$/
    },
    {
      brand: "amex",
      patt: /^3[47][0-9]{13}$/
    }
  ]
  for (let i=0; i<validCardsReg.length;i++) {
    const {patt} = validCardsReg[i]
    if (patt.test(number)) return true
  }
  return false
}

export const addNewCard = (data) => {
  return dispatch => {
    return new Promise(resolve => {
      dispatch(setAddCardApproval(null))
      if (validateCardNumber(data.number)) {
        API.post(
          'mpc',
          ApiUtils.addCard(),
          { body: {
              form: data,
              redirect_back_path: '/accounts/info/add/card'
            }
        }).then((response)=>{
          if (response.url) {
           dispatch(setAddCardApproval(response))
          } else {
            dispatch(showNotification({
              message: "Something wrong",
              category: 'danger',
              icon: 'warning',
              position: 'bottom',
            }))
          }
          resolve(response)
        }).catch((error)=> {
          dispatch(showNotification({
            message: "Something wrong",
            category: 'danger',
            icon: 'warning',
            position: 'bottom',
          }))
          resolve(error)
        })
      } else {
        dispatch(showNotification({
          message: "This card number is not valid. please try another",
          category: 'danger',
          icon: 'warning',
          position: 'bottom',
        }))
        resolve()
      }
    })
  }
}

export const deleteCard = (id) => {
  return (dispatch, getState) => {
    return new Promise(async (resolve) => {
      API.del(
        'mpc',
        ApiUtils.deleteCard(),
        { body: { card_id: id }}
      ).then(response=>{
        const {checkout} = getState()
        let creditCards = checkout.credit_cards
        creditCards = creditCards.filter((card)=>{
          return card.id !== id
        })
        dispatch(setCards(creditCards))
        dispatch(showNotification({
          message: "removed successfully",
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
