import React, { Component } from 'react'
import { connect } from 'react-redux'
import { menuInfo } from 'constants/header'
import PropTypes from 'prop-types'
import Orders from 'components/templates/orders/Orders'
import Transition from 'containers/Transition'
import { getOrderList } 
  from 'redux/modules/order/actions'

class OrdersPage extends Component {

  componentDidMount() {
    const {getOrders} = this.props
    getOrders()
  }

  render() {
    const {
      theme,
      orders, 
      isLoading,
      ...others
    } = this.props

    const soredOrders = orders.sort((a, b)=>{
      if (a.created_at < b.created_at) 
        return 1
      return -1
    })

    return (
      <Transition>
        <Orders
          theme={theme}
          ordersList={soredOrders}
          menuInfo={menuInfo}
          isLoading={isLoading}
          {...others}
        />
      </Transition>
    )
  }
}
const mapStateToProps = state => {
  return {
    isLoading: state.order.isLoading,
    orders: state.order.list
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getOrders: () => dispatch(getOrderList()),
  }
}

OrdersPage.defaultProps = {
  theme: null,
  isLoading: false,
  orders: null,
  getOrders: null,
}

OrdersPage.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
  isLoading: PropTypes.bool,
  orders: PropTypes.array,
  getOrders: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrdersPage)