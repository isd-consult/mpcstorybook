import React, { Component } from 'react'
import { connect } from 'react-redux'
import { menuInfo } from 'constants/header'
import PropTypes from 'prop-types'
import {accountMenuInfo} from 'constants/accounts'
import RequestReturnOrder 
  from 'components/templates/returns/RequestReturnOrder'

import {
    getInitialReturnsData,
    onChangeItemsToRefund 
} from 'redux/modules/returns/actions'
import Transition from 'containers/Transition'

class RequestReturnOrderPage extends Component {

  componentDidMount() {
    const {getInitialData} = this.props
    getInitialData()
  }

  render() {
    const {
      theme,
      isLoading,
      reasons,
      deliveryMethods,
      refundMethods,
      deliveredOrders,
      onChangeItems,
      ...others
    } = this.props

    const soredOrders = deliveredOrders.sort((a, b)=>{
      if (a.ordered_at < b.ordered_at) 
        return 1
      return -1
    })
    
    return (
      <Transition>
        <RequestReturnOrder
          theme={theme}
          menuInfo={menuInfo}
          accountMenuInfo={accountMenuInfo}
          ordersList={soredOrders}
          isLoading={isLoading}
          next={onChangeItems}
          {...others}
        />
      </Transition>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.returns.isLoading,
    reasons: state.returns.reasons,
    deliveryMethods: state.returns.deliveryMethods,
    refundMethods: state.returns.refundMethods,
    deliveredOrders: state.returns.deliveredOrders
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInitialData: () => dispatch(getInitialReturnsData()),
    onChangeItems:(items) => dispatch(onChangeItemsToRefund(items))
  }
}

RequestReturnOrderPage.defaultProps = {
  theme: null,
  isLoading: false,
  reasons: null,
  deliveryMethods: null,
  refundMethods: null,
  deliveredOrders: null,
  getInitialData: null,
  onChangeItems: null
}

RequestReturnOrderPage.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
  isLoading: PropTypes.bool,
  reasons: PropTypes.array,
  deliveryMethods: PropTypes.array,
  refundMethods: PropTypes.array,
  deliveredOrders: PropTypes.array,
  getInitialData: PropTypes.func,
  onChangeItems: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RequestReturnOrderPage)