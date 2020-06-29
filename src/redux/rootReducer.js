import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

/**
 * All reducers must be imported here
 */
import * as auth from './modules/auth/reducer'
import * as landing from './modules/landing/reducer'
import * as profile from './modules/profile/reducer'
import * as mpc from './modules/mpc/reducer'
import * as cart from './modules/cart/reducer'
import * as checkout from './modules/checkout/reducer'
import * as order from './modules/order/reducer'
import * as search from './modules/search/reducer'
import * as product from './modules/product/reducer'
import * as wish from './modules/wish/reducer'
import * as question from './modules/question/reducer'
import * as questions from './modules/questions/reducer'
import * as cashout from './modules/cashout/reducer'
import * as uploadpop from './modules/uploadpop/reducer'
import * as fbucks from './modules/fbucks/reducer'
import * as returns from './modules/returns/reducer'
import * as router from './modules/router/reducer'
import * as detail from './modules/detail/reducer'
/**
 * current.name is the name defined in the reducer.js
 * current.default is the default export from the reducer file
 */
const allReducers = [
  auth,
  landing,
  profile,
  mpc,
  cart,
  checkout,
  order,
  search,
  product,
  wish,
  question,
  questions,
  cashout,
  uploadpop,
  fbucks,
  returns,
  router,
  detail
].reduce((all, current) => {
  return Object.assign({}, all, { [current.namespace]: current.default })
}, {})

export default history =>
  combineReducers({
    ...allReducers,
    router: connectRouter(history),
  })
