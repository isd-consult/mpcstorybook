import React, { Component } from 'react'
import { connect } from 'react-redux'
import { menuInfo } from 'constants/header'
import PropTypes from 'prop-types'
import OrderCancelSubmit from 'components/templates/orders/OrderCancelSubmit'
import Transition from 'containers/Transition'
import { getOrderDetail } 
  from 'redux/modules/order/actions'

class OrderCancelSubmitPage extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      status: 'submit' // status can be 'submit' 'confirm'
    }
    this.submit = this.submit.bind(this)
  }

  submit() {
    this.setState({status: 'confirm'})
  }

  render() {
    const {theme, order, ...others} = this.props
    const {status} = this.state
    return (
      <Transition>
        <OrderCancelSubmit
          theme={theme}
          order={order}
          menuInfo={menuInfo}
          status={status}
          submit={this.submit}
          {...others}
        />
      </Transition>
    )
  }
}

const mapStateToProps = state => {
  return {
    order: state.order.order
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getOrdersView: (orderNumber) => 
      dispatch(getOrderDetail(orderNumber)),
  }
}

OrderCancelSubmitPage.defaultProps = {
  theme: null,
  match: null,
  order: null,
  getOrdersView: null
}
OrderCancelSubmitPage.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
  match: PropTypes.object,
  order: PropTypes.object,
  getOrdersView: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderCancelSubmitPage)