import React, { Component } from 'react'
import { connect } from 'react-redux'
import { menuInfo } from 'constants/header'
import PropTypes from 'prop-types'
import Returns from 'components/templates/returns/Returns'
import {accountMenuInfo} from 'constants/accounts'
import Transition from 'containers/Transition'

import { getReturnList } 
  from 'redux/modules/returns/actions'

class ReturnsPage extends Component {

  componentDidMount() {
    const {getReturns} = this.props
    getReturns()
  }

  render() {
    const {
      theme,
      isLoading,
      returns,
      ...others
    } = this.props
    
    const sortedReturns = returns.sort((a, b)=>{
      if (a.requested_at < b.requested_at) 
        return 1
      return -1
    })

    return (
      <Transition>
        <Returns
          theme={theme}
          menuInfo={menuInfo}
          accountMenuInfo={accountMenuInfo}
          isLoading={isLoading}
          returns={sortedReturns}
          {...others}
        />
      </Transition>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.returns.isLoading,
    returns: state.returns.list
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getReturns: () => dispatch(getReturnList()),
  }
}


ReturnsPage.defaultProps = {
  theme: null,
  isLoading: false,
  returns: null,
  getReturns: null
}

ReturnsPage.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
  isLoading: PropTypes.bool,
  returns: PropTypes.array,
  getReturns: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReturnsPage)