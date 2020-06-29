import React from 'react'
import PropTypes from 'prop-types'
import { Switch } from 'react-router-dom'
import AppliedRoute from 'components/molecules/routes/AppliedRoute'
import PrivateRoute from 'components/molecules/routes/PrivateRoute'

import NotFoundPage from 'containers/NotFoundPage'
import LandingPage from 'containers/LandingPage'
import ProductListPage from 'containers/ProductListPage'
import ProductDemoListPage from 'containers/ProductDemoListPage'
import ProductDetailPage from 'containers/ProductDetailPage'
import SettingPage from 'containers/SettingPage'
import QuestionsPage from 'containers/QuestionsPage'
import Questions from 'containers/Questions'
import CartListPage from 'containers/CartListPage'
import DeliveryPage from 'containers/DeliveryPage'
import DeliveryAddAddressPage from 'containers/DeliveryAddAddressPage'
import DeliveryEditAddressPage from 'containers/DeliveryEditAddressPage'
import DeliveryCheckoutPage from 'containers/DeliveryCheckoutPage'
import OrderConfirmationPage from 'containers/OrderConfirmationPage'
import BrandsPage from 'containers/BrandsPage'
import AccountInfoPage from 'containers/AccountInfoPage'
import ChangePasswordPage from 'containers/ChangePasswordPage'
import AddressPage from 'containers/AddressPage'
import AccountPage from 'containers/AccountPage'
import OrdersPage from 'containers/OrdersPage'
import OrderDetailsPage from 'containers/OrderDetailsPage'
import OrderCancelPage from 'containers/OrderCancelPage'
import OrderCancelSubmitPage from 'containers/OrderCancelSubmitPage'
import ClosetPage from 'containers/ClosetPage'
import CategoriesPage from 'containers/CategoriesPage'
import ReturnsPage from 'containers/ReturnsPage'
import ReturnDetailPage from 'containers/ReturnDetailPage'
import PreferencesPage from 'containers/PreferencesPage'
import RequestReturnOrderPage from 'containers/RequestReturnOrderPage'
import RequestReturnAddDetailPage from 'containers/RequestReturnAddDetailPage'
import CashOutPage from 'containers/CashOutPage'
import SizesPage from 'containers/SizesPage'
import ForgotPasswordPage from 'containers/ForgotPasswordPage'
// import InviteFriendsPage from 'containers/InviteFriendsPage'
import LoginPage from 'containers/LoginPage'
import RegisterPage from 'containers/RegisterPage'
import PolicyPage from 'containers/PolicyPage'
import ContactUsPage from 'containers/ContactUsPage'
import WeightsPage from 'containers/WeightsPage'
import FbucksPage from 'containers/FbucksPage'
import CreditPage from 'containers/CreditPage'
// import WishListPage from 'containers/WishListPage'
import UploadPoPPage from 'containers/UploadPoPPage'
import AddCardPage from 'containers/AddCardPage'

function Routes({ childProps }) {
  return (
    <Switch>
      <AppliedRoute
        exact
        path="/login"
        component={LoginPage}
        props={childProps}
      />
      <AppliedRoute
        exact
        path="/register"
        component={RegisterPage}
        props={childProps}
      />
      <AppliedRoute
        exact
        path="/auth/forgotpassword"
        component={ForgotPasswordPage}
        props={childProps}
      />
      <AppliedRoute
        exact
        path="/auth/resetpassword/:token/:code"
        component={ForgotPasswordPage}
        props={{ ...childProps, isConfirmed: true }}
      />
      <AppliedRoute exact path="/" component={LandingPage} props={childProps} />
      <AppliedRoute
        exact
        path="/settings"
        component={SettingPage}
        props={childProps}
      />
      <AppliedRoute
        exact
        path="/product_list"
        component={ProductListPage}
        props={childProps}
      />
      <AppliedRoute
        exact
        path="/product_list/search"
        component={ProductListPage}
        props={{ ...childProps, isSearch: true }}
      />
      <PrivateRoute
        exact
        path="/product_demo_list"
        component={ProductDemoListPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/product_demo_list/:secretkey/:email"
        component={ProductDemoListPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/admin/settings/scoring_weights"
        component={WeightsPage}
        props={childProps}
      />
      <AppliedRoute
        exact
        path="/product_detail/:sku"
        component={ProductDetailPage}
        props={childProps}
      />
      <AppliedRoute
        exact
        path="/questions"
        component={Questions}
        props={childProps}
      />
      <AppliedRoute
        exact
        path="/questions-old"
        component={QuestionsPage}
        props={childProps}
      />
      <AppliedRoute
        exact
        path="/cart_list"
        component={CartListPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/accounts"
        component={AccountPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/accounts/closet"
        component={ClosetPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/accounts/closet/brands"
        component={BrandsPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/accounts/closet/categories"
        component={CategoriesPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/accounts/closet/sizes"
        component={SizesPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/accounts/preferences"
        component={PreferencesPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/checkout/delivery"
        component={DeliveryPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/checkout/delivery/payment"
        component={DeliveryCheckoutPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/checkout/delivery/add"
        component={DeliveryAddAddressPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/checkout/delivery/edit/:hash"
        component={DeliveryEditAddressPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/order/confirmation/:orderNumber"
        component={OrderConfirmationPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/order/confirmation/uploadpop/:orderNumber"
        component={UploadPoPPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/accounts/info"
        component={AccountInfoPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/accounts/info/addaddress/:addressHash"
        component={AddressPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/accounts/info/addaddress"
        component={AddressPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/accounts/info/add/card"
        component={AddCardPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/accounts/changepassword"
        component={ChangePasswordPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/orders/list"
        component={OrdersPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/orders/details/:orderNumber"
        component={OrderDetailsPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/orders/cancel/submit"
        component={OrderCancelSubmitPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/orders/cancel/:orderNumber"
        component={OrderCancelPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/returns/list"
        component={ReturnsPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/returns/detail/:returnId"
        component={ReturnDetailPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/returns/request"
        component={RequestReturnOrderPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/returns/request/edit"
        component={RequestReturnAddDetailPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/credit"
        component={CreditPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/credit/fbucks"
        component={FbucksPage}
        props={childProps}
      />
      <PrivateRoute
        exact
        path="/credit/cashout"
        component={CashOutPage}
        props={childProps}
      />
      {/* <PrivateRoute
        exact
        path="/accounts/wishlist"
        component={WishListPage}
        props={childProps}
      /> */}
      {/* <PrivateRoute
          exact
          path="/invite_friends"
          component={InviteFriendsPage}
          props={childProps}
        /> */}
      <AppliedRoute
        exact
        path="/policy/:descriptor"
        component={PolicyPage}
        props={childProps}
      />
      <AppliedRoute
        exact
        path="/contactus"
        component={ContactUsPage}
        props={childProps}
      />
      <AppliedRoute exact component={NotFoundPage} props={childProps} />
    </Switch>
  )
}

Routes.propTypes = {
  childProps: PropTypes.object,
}

Routes.defaultProps = {
  childProps: null,
}

export default Routes
