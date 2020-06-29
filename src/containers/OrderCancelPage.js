import React, { Component } from 'react'
import { connect } from 'react-redux'
import { menuInfo } from 'constants/header'
import PropTypes from 'prop-types'
import OrderCancel from 'components/templates/orders/OrderCancel'
import Transition from 'containers/Transition'
import { getOrderCancelInitData, cancelOrder } 
  from 'redux/modules/order/actions'
import ArrayUtils from 'utils/ArrayUtils'

class OrderCancelPage extends Component {

  componentDidMount() {
    const { match, _getOrderCancelInitData } = this.props
    const { orderNumber } = match.params
    if( orderNumber !== null && orderNumber !== '')
      _getOrderCancelInitData(orderNumber)
  }

  render() {
    const {
      match,
      initData,
      _cancelOrder,
      ...others
    } = this.props
    const { orderNumber } = match.params
    return (
      <Transition>
        <OrderCancel
          orderNumber={orderNumber}
          items={initData && initData.items}
          refundMethods={
            ArrayUtils.convertFilteredArray(
              initData && initData.refund_methods, 
              [["key", "value"],["label", "label"]]
            )
          }
          menuInfo={menuInfo}
          submit={_cancelOrder}
          {...others}
        />
      </Transition>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.order.isLoading,
    initData: state.order.cancelInitData
  }
}
const mapDispatchToProps = dispatch => {
  return {
    _getOrderCancelInitData: (orderNumber) => 
      dispatch(getOrderCancelInitData(orderNumber)),
    _cancelOrder: (params) => dispatch(cancelOrder(params))
  }
}

OrderCancelPage.defaultProps = {
  isLoading: false,
  match: null,
  initData: null,
  _getOrderCancelInitData: null,
  _cancelOrder: null
}
OrderCancelPage.propTypes = {
  isLoading: PropTypes.bool,
  match: PropTypes.object,
  initData: PropTypes.object,
  _getOrderCancelInitData: PropTypes.func,
  _cancelOrder: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderCancelPage)