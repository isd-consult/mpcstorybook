import React, { Component } from 'react'
import { menuInfo } from 'constants/header'
import PropTypes from 'prop-types'
import CashOut from 'components/templates/credit/CashOut'
import Transition from 'containers/Transition'
import { getCreditInfo, creditCashOut } 
  from 'redux/modules/cashout/actions'
import { connect } from 'react-redux'

class CashOutPage extends Component {
  componentDidMount() {
    const { _getCreditInfo } = this.props
    _getCreditInfo()
  }

  render() {
    const {
      theme,
      isLoading,
      _creditCashOut,
      creditInfo,
      ...others
    } = this.props
    return (
      <Transition>
        <CashOut
          theme={theme}
          isLoading={isLoading}
          menuInfo={menuInfo}
          creditCashOut={_creditCashOut}
          creditInfo={creditInfo}
          {...others}
        />
      </Transition>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.cashout.isLoading,
    creditInfo: state.cashout.creditInfo,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    _getCreditInfo: () => dispatch(getCreditInfo()),
    _creditCashOut: (credit) => dispatch(creditCashOut(credit))
  }
}

CashOutPage.defaultProps = {
  theme: null,
  isLoading: false,
  creditInfo: null,
  _getCreditInfo: null,
  _creditCashOut: null
}

CashOutPage.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
  isLoading: PropTypes.bool,
  creditInfo: PropTypes.object,
  _getCreditInfo: PropTypes.func,
  _creditCashOut: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CashOutPage)