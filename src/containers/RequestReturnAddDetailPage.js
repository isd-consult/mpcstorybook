import React, { Component } from 'react'
import { connect } from 'react-redux'
import { menuInfo } from 'constants/header'
import PropTypes from 'prop-types'
import { accountMenuInfo } from 'constants/accounts'
import RequestReturnAddDetail 
  from 'components/templates/returns/RequestReturnAddDetail'
import {
  uploadReturnFile,
  onChangeItem,
  onChangeDeliveryMethod,
  onChangeRefundMethod,
  onSubmitRefundRequest
} from 'redux/modules/returns/actions'
import Transition from 'containers/Transition'
import { Redirect } from 'react-router-dom'
import ArrayUtils from 'utils/ArrayUtils'

const filters = [["key", "value"],["label", "label"]]

class RequestReturnAddDetailPage extends Component {
  render() {
    const {
      theme,
      reasons,
      deliveryMethods,
      refundMethods,
      itemsToRefund,
      onUploadReturnFile,
      onItemChange,
      onDeliveryMethodChange,
      onRefundMethodChange,
      onSubmit,
      ...others
    } = this.props

    if (itemsToRefund && itemsToRefund.length) {
      return (
        <Transition>
          <RequestReturnAddDetail
            theme={theme}
            menuInfo={menuInfo}
            accountMenuInfo={accountMenuInfo}
            items={itemsToRefund}
            reasons={
              ArrayUtils.convertFilteredArray(reasons, filters)
            }
            deliveryMethods={
              ArrayUtils.convertFilteredArray(deliveryMethods, filters)
            }
            refundMethods={
              ArrayUtils.convertFilteredArray(refundMethods, filters)
            }
            onUploadFile={onUploadReturnFile}
            onChange={onItemChange}
            onDMChange={onDeliveryMethodChange}
            onRMChange={onRefundMethodChange}
            onSubmit={onSubmit}
            {...others}
          />
        </Transition>
      )
    } 
    return (<Redirect to="/returns/request" />)
    
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.returns.isLoading,
    reasons: state.returns.reasons,
    deliveryMethods: state.returns.deliveryMethods,
    refundMethods: state.returns.refundMethods,
    itemsToRefund: state.returns.itemsToRefund
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUploadReturnFile: (content) => dispatch(uploadReturnFile(content)),
    onItemChange:(item) => dispatch(onChangeItem(item)),
    onDeliveryMethodChange:(value) => dispatch(onChangeDeliveryMethod(value)),
    onRefundMethodChange: (value) => dispatch(onChangeRefundMethod(value)),
    onSubmit: () => dispatch(onSubmitRefundRequest())
  }
}

RequestReturnAddDetailPage.defaultProps = {
  theme: null,
  isLoading: null,
  reasons: null,
  deliveryMethods: null,
  refundMethods: null,
  itemsToRefund: null,
  onUploadReturnFile: null,
  onItemChange: null,
  onDeliveryMethodChange: null,
  onRefundMethodChange: null,
  onSubmit: null
}

RequestReturnAddDetailPage.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
  isLoading: PropTypes.bool,
  reasons: PropTypes.array,
  deliveryMethods: PropTypes.array,
  refundMethods: PropTypes.array,
  itemsToRefund: PropTypes.array,
  onUploadReturnFile: PropTypes.func,
  onItemChange: PropTypes.func,
  onDeliveryMethodChange: PropTypes.func,
  onRefundMethodChange: PropTypes.func,
  onSubmit: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RequestReturnAddDetailPage)