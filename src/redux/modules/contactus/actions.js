import API from '@aws-amplify/api'
import { ApiUtils } from 'utils/ApiUtils'
import { uploadAPI } from 'utils'
import { showNotification } from '../mpc/reducer'

export const contact = (fileContent, contactInfo) => {
  const requestBody = contactInfo
  return dispatch => {
    return new Promise(resolve => {
      if (fileContent) {
        uploadAPI(ApiUtils.uploadContactFile(), fileContent)
        .then((response) => response.json())
        .then((result) => {
          if(result.key){
            requestBody.file_id = result.key
            API.post(
              'mpc',
              ApiUtils.contact(),
              {body:  requestBody}
            ).then(response=>{
              if(response.status){
                dispatch(showNotification({
                  message: "We will come back to you soon",
                  category: 'success',
                  icon: 'checkmark',
                  position: 'bottom',
                }))
              }
              else{
                dispatch(showNotification({
                  message: response.message,
                  category: 'danger',
                  icon: 'warning',
                  position: 'bottom',
                }))
              }
              resolve(response)
            }).catch(error=>{
              dispatch(showNotification({
                message: error.Message,
                category: 'danger',
                icon: 'warning',
                position: 'bottom',
              }))
              resolve(error)
            })
          }
          else{
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
          dispatch(showNotification({
            message: "Something wrong",
            category: 'danger',
            icon: 'warning',
            position: 'bottom',
          }))
          resolve(error)
        })
      }
      else {
        requestBody.file_id = ''
        API.post(
          'mpc',
          ApiUtils.contact(),
          {body:  requestBody}
        ).then(response=>{
          if(response.status){
            dispatch(showNotification({
              message: "We will come back to you soon",
              category: 'success',
              icon: 'checkmark',
              position: 'bottom',
            }))
          }
          else{
            dispatch(showNotification({
              message: response.message,
              category: 'danger',
              icon: 'warning',
              position: 'bottom',
            }))
          }
          resolve(response)
        }).catch(error=>{
          dispatch(showNotification({
            message: error.Message,
            category: 'danger',
            icon: 'warning',
            position: 'bottom',
          }))
          resolve(error)
        })
      }
    })
  }
}
