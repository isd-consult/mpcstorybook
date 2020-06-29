import Auth from '@aws-amplify/auth'
import API from '@aws-amplify/api'

import { ApiUtils } from 'utils/ApiUtils'
import { LocalStorageUtils } from 'utils/LocalStorageUtils'
import { push } from 'connected-react-router'
import { analyticsSignUp } from 'analytics'
import {getProfile} from '../profile/actions'
import {
  setLoading,
  clearSession,
  checkSessionRequest,
  checkSessionSuccess,
  checkSessionFailure,
  setFederatedSignIn
} from './reducer'
import { initialize, showNotification } from '../mpc/reducer'

/**
 * init
 */
export const waitForInit = () => {
  return async dispatch => {
    return new Promise(async resolve => {
      dispatch(setLoading(false))
      const hasFbLoaded = () => {
        if (window.FB) {
          resolve()
        } else {
          setTimeout(hasFbLoaded, 300)
        }
      }
      hasFbLoaded()
      const hasGAPILoaded = () => {
        if (window.gapi && window.gapi.auth2) {
          resolve()
        } else {
          setTimeout(hasGAPILoaded, 300)
        }
      }
      hasGAPILoaded()
    })
  }
}

/**
 * checkSession
 */
export const checkSession = () => {
  return async dispatch => {
    return new Promise(resolve => {
      dispatch(checkSessionRequest())
      Auth.currentAuthenticatedUser()
        .then(response => {
          let user = null
          let token = null
          if (response.username !== null
            && response.username !== undefined) {
            dispatch(setFederatedSignIn(false))
            const idToken = response.signInUserSession.idToken.payload
            user = {
              email: idToken.email,
              email_verified: idToken.email_verified,
              gender: idToken.gender,
              name: idToken.name,
              username: idToken.username,
              groups: idToken['cognito:groups']
            }
            dispatch(getProfile())
            token = idToken.sub
          } else {
            dispatch(setFederatedSignIn(true))
            user = {
              name: response.first_name,
              groups: [],
              email: response.email
            }
            dispatch(getProfile())
            token = response.id
          }
          dispatch(checkSessionSuccess(user))
          LocalStorageUtils.saveState("user", user)
          LocalStorageUtils.saveState("token", token)
          resolve(user)
        })
        .catch(error=>{
          dispatch(checkSessionFailure(error))
          resolve(null)
        })
    })
  }
}

/**
 * signIn
 * @param {string} email
 * @param {string} password
 */
export const signIn = (email, password) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      dispatch(setLoading(true))

      const handleSuccess = () => {
          dispatch(checkSession()).then(()=>{
            const { router: { location } } = getState()
            const {query} = location
            if (query && query.redirect) {
              dispatch(push(`/${query.redirect}`))
            } else {
              dispatch(push(`/`))
            }

            resolve()
          })
        }

      const handleFailure = (message) => {
          dispatch(setLoading(false))
          dispatch(showNotification({
            message,
            category: 'danger',
            duration: 5000,
            icon: 'warning',
            position: 'bottom',
          }))
          reject()
        }

      const init = {
        body: {},
        headers: {'content-type':'application/json'}
      }

      Auth.signIn(email, password)
        .then(() => {
          API.post('mpc', ApiUtils.login(), init)
          .then(()=>{
            handleSuccess()
          })
        })
        .catch(error => {
          API.post(
              'mpc',
              ApiUtils.validateRWSCustomer(),
              { body: { email, password } }
            )
            .then((response) => {
              if(response.found && response.created) {
                // Just after create a new user in cognito
                // we check Auth again
                Auth.signIn(email, password)
                  .then(() => {
                    API.post('mpc', ApiUtils.login(), init)
                    .then(()=>{
                      handleSuccess()
                    })
                  })
                  .catch(e => {
                    handleFailure(e.message)
                  })
              } else {
                handleFailure(error.message)
              }
            })
        })
    })
  }
}

/**
 * signOut
 */
export const signOut = () => {
  return async (dispatch, getState) => {
    return new Promise(resolve => {
      const { auth: { isFederatedSignIn }} = getState()
      if ( isFederatedSignIn ) {
        window.FB.getLoginStatus((res)=>{
          if (res.status === 'connected')
            window.FB.logout()
        })
        const auth2 = window.gapi.auth2.getAuthInstance()
        if(auth2.isSignedIn.get())
          auth2.signOut()
      }

      const init = {
        body: {},
        headers: {'content-type':'application/json'}
      }

      Auth.signOut()
        .then(() => {
          API.del('mpc', ApiUtils.logout(), init)
          .then(()=>{
            dispatch(clearSession())
            dispatch(initialize())
            LocalStorageUtils.clearState()
          })
        })
        .catch(()=>{
          resolve()
        })
    })
  }
}

/**
 * facebook SignIn
 */
export const facebookSignIn = () => {
  return async (dispatch, getState) => {
    return new Promise(resolve => {
      window.FB.login((res)=>{
        if (res.status === "connected") {
          const { accessToken: token, expiresIn } = res.authResponse
          const expiresAt = expiresIn * 1000 + new Date().getTime()

          window.FB.api(
            '/me',
            {fields: 'first_name, last_name,email'},
            async (response) => {
              const user = {
                first_name: response.first_name,
                last_name: response.last_name,
                email: response.email
              }
              if (user == null) {
                dispatch(showNotification({
                  message: "can not get email",
                  category: 'danger',
                  duration: 5000,
                  icon: 'warning',
                  position: 'bottom',
                }))
                resolve(false)
                return
              }
              try {
                await Auth.federatedSignIn(
                  "facebook",
                  { token, expiresAt },
                  user
                )
                dispatch(checkSession()).then(()=>{
                  const { router: { location } } = getState()
                  const {query} = location
                  if (query && query.redirect) {
                    dispatch(push(`/${query.redirect}`))
                  } else {
                    dispatch(push(`/`))
                  }
                  resolve()
                })
              } catch (e) {
                dispatch(showNotification({
                  message: "can not signin.",
                  category: 'danger',
                  duration: 5000,
                  icon: 'warning',
                  position: 'bottom',
                }))
                resolve(false)
              }
            })
          } else {
            dispatch(showNotification({
              message: "can not connect.",
              category: 'danger',
              duration: 5000,
              icon: 'warning',
              position: 'bottom',
            }))
            resolve(false)
          }
        }, {
        scope: "public_profile, email"
      })
    })
  }
}

/**
 * google signin
 */
export const googleSignIn = () => {
  return async (dispatch, getState) => {
    return new Promise(resolve => {
      const auth2 = window.gapi.auth2.getAuthInstance()
      auth2.signIn().then(async (response) => {
        if (response == null){
          dispatch(showNotification({
            message: "can not get email.",
            category: 'danger',
            duration: 5000,
            icon: 'warning',
            position: 'bottom',
          }))
          resolve(false)
          return
        }
        const basicProfile = response.getBasicProfile()
        const user = {
          first_name: basicProfile.getGivenName(),
          last_name: basicProfile.getFamilyName(),
          email: basicProfile.getEmail()
        }
        const token = response.getAuthResponse().id_token
        const expiresAt = response.getAuthResponse().expires_at
        try {
          await Auth.federatedSignIn(
            "google",
            { token, expiresAt },
            user
          )
          dispatch(checkSession()).then(()=>{
            const { router: { location } } = getState()
            const {query} = location
            if (query && query.redirect) {
              dispatch(push(`/${query.redirect}`))
            } else {
              dispatch(push(`/`))
            }
            resolve()
          })
        } catch (e) {
          dispatch(showNotification({
            message: "can not signin.",
            category: 'danger',
            duration: 5000,
            icon: 'warning',
            position: 'bottom',
          }))
          resolve(false)
        }
      })
    })
  }
}

/**
 * change password
 * @param {string} oldPassword
 * @param {string} newPassword
 */
export const changePassword = (oldPassword, newPassword) => {
  return dispatch => {
    return new Promise(async resolve => {
      dispatch(setLoading(true))
      try {
        const user = await Auth.currentAuthenticatedUser()
        await Auth.changePassword(user, oldPassword, newPassword)
        dispatch(showNotification({
          message: "Your password was changed successfully",
          category: 'success',
          duration: 5000,
          icon: 'checkmark',
          position: 'bottom',
        }))
        resolve(false)
      } catch (error) {
        dispatch(showNotification({
          message: error.message,
          category: 'danger',
          duration: 5000,
          icon: 'warning',
          position: 'bottom',
        }))
        resolve(false)
      }
      dispatch(setLoading(false))
    })
  }
}

export const checkUserIfExist = (email) => {
  return async dispatch => {
    return new Promise(async resolve => {
      dispatch(setLoading(true))
      Auth.signIn(email, '123')
        .catch(error=>{
          const {code} = error

          switch (code) {
            case 'UserNotFoundException':
              resolve()
              break
            default:
              resolve({
                status: true,
                message: 'This user has been already registered'
              })
          }
          dispatch(setLoading(false))
        })
    })
  }
}

export const signUp = (email, password) => {
  return async dispatch => {
    return new Promise(async resolve=>{
      dispatch(setLoading(true))

      try {
        await Auth.signUp(email, password)
        await dispatch(signIn(email, password))
        await analyticsSignUp()
        resolve()
      } catch (error) {
        dispatch(showNotification({
          message: error.message,
          category: 'danger',
          duration: 5000,
          icon: 'warning',
          position: 'bottom',
        }))
        resolve()
        dispatch(setLoading(false))
      }
    })
  }
}

export const confirmCode = (email, code, password) => {
  return dispatch => {
    return new Promise(async resolve=>{
      dispatch(setLoading(true))
      try {
        await Auth.confirmSignUp(email, code)
        await Auth.signIn(email, password)
        resolve()
      } catch (error) {
        dispatch(showNotification({
          message: error.message,
          category: 'danger',
          duration: 5000,
          icon: 'warning',
          position: 'bottom',
        }))
        resolve()
      }
      dispatch(setLoading(false))
    })
  }
}

export const setIdentificationNumber = (email, idNumber) => {
  return async dispatch => {
    return new Promise(async resolve => {
      dispatch(setLoading(true))
      API.put(
        'mpc',
        ApiUtils.setIdentificationNumber(),
        {
          body: {
            email,
            identification_number: idNumber
          }
        }
      ).then(()=>{
        dispatch(checkSession())
      })
      resolve()
      dispatch(setLoading(false))
    })
  }
}
