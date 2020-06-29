import React, { Component } from 'react'
import { connect } from 'react-redux'
import { menuInfo } from 'constants/header'
import PropTypes from 'prop-types'
import OrderDetails from 'components/templates/orders/OrderDetails'
import Transition from 'containers/Transition'
import { getOrderDetail } 
  from 'redux/modules/order/actions'

class OrderDetailsPage extends Component {

  componentDidMount() {
    const { match, getOrdersView } = this.props
    const { orderNumber } = match.params
    if( orderNumber !== null && orderNumber !== '')
      getOrdersView(orderNumber)
  }

  render() {
    const {theme, order, ...others} = this.props

    return (
      <Transition>
        <OrderDetails
          theme={theme}
          order={order}
          menuInfo={menuInfo}
          {...others}
        />
      </Transition>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.order.isLoading,
    order: state.order.order
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getOrdersView: (orderNumber) => 
      dispatch(getOrderDetail(orderNumber)),
  }
}

OrderDetailsPage.defaultProps = {
  theme: null,
  match: null,
  isLoading: false,
  order: null,
  getOrdersView: null
}
OrderDetailsPage.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
  match: PropTypes.object,
  isLoading: PropTypes.bool,
  order: PropTypes.object,
  getOrdersView: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderDetailsPage)