import API from '@aws-amplify/api'
import { ApiUtils } from 'utils/ApiUtils'
import { uploadAPI } from 'utils'
import { setStep } from './reducer'
import { showNotification } from '../mpc/reducer'
/**
 * upload PoP File
 */
export const uploadPoPFile = (fileContent, orderNumber) => {
  return dispatch => {
    return new Promise(resolve => {
      uploadAPI(ApiUtils.uploadPoPFile(), fileContent)
      .then((response) => response.json())
      .then((result) => {
        if(result.key){
          API.put(
            'mpc',
            ApiUtils.sendPoPPayment(),
            {
              body:  {
                'order_number': orderNumber,
                'file_id': result.key
              }
            }
          ).then(res=>{
            if(res.Message === 'Success'){
              dispatch(setStep(1))
            }
            else{
              dispatch(setStep(0))
              dispatch(showNotification({
                message: res.Message,
                category: 'danger',
                icon: 'warning',
                position: 'bottom',
              }))
            }
            resolve(res)
          }).catch(error=>{
            dispatch(setStep(0))
            dispatch(showNotification({
              message: "Something wrong",
              category: 'danger',
              icon: 'warning',
              position: 'bottom',
            }))
            resolve(error)
          })
        }
        else{
          dispatch(setStep(0))
          dispatch(showNotification({
            message: result.Message,
            category: 'danger',
            icon: 'warning',
            position: 'bottom',
          }))
          resolve(result)
        }
      })
      .catch((error)=>{
        dispatch(setStep(0))
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

