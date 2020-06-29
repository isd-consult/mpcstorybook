import React, { Component } from 'react'
import { connect } from 'react-redux'
import { menuInfo } from 'constants/header'
import PropTypes from 'prop-types'
import {accountMenuInfo} from 'constants/accounts'
import ReturnDetail from 'components/templates/returns/ReturnDetail'
import Transition from 'containers/Transition'
import { getReturnDetail } 
  from 'redux/modules/returns/actions'

class ReturnDetailPage extends Component {
  
  componentDidMount() {
    const { match, getReturn } = this.props
    const {returnId} = match.params
    getReturn(returnId)
  }

  render() {
    const {
      theme,
      detail,
      ...others
    } = this.props

    return (
      <Transition>
        <ReturnDetail
          theme={theme}
          menuInfo={menuInfo}
          accountMenuInfo={accountMenuInfo}
          detail={detail}
          {...others}
        />
      </Transition>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.returns.isLoading,
    detail: state.returns.detail
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getReturn: (returnId) => dispatch(getReturnDetail(returnId)),
  }
}

ReturnDetailPage.defaultProps = {
  theme: null,
  isLoading: null,
  detail: null,
  match: null,
  getReturn: null
}

ReturnDetailPage.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
  isLoading: PropTypes.bool,
  detail: PropTypes.object,
  match: PropTypes.object,
  getReturn: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReturnDetailPage)