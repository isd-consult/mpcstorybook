import React, { Component } from 'react'
import { connect } from 'react-redux'
import { menuInfo } from 'constants/header'
import PropTypes from 'prop-types'
import AccountAddress from 'components/templates/accounts/Info/AccountAddress'
import Transition from 'containers/Transition'

import { 
  getAddress,
  saveAddress,
} from 'redux/modules/profile/actions'

class AddressPage extends Component {

  componentDidMount() {
    const { match, _getAddress } = this.props
    const { addressHash } = match.params
      _getAddress(addressHash)
  }

  render() {
    const {
      address,
      _saveAddress, 
      ...others
    } = this.props
    return (
      <Transition>
        <AccountAddress
          menuInfo={menuInfo}
          address={address}
          saveAddress={_saveAddress}
          {...others}
        />
      </Transition>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.profile.isLoading,
    address: state.profile.address
  }
}

const mapDispatchToProps = dispatch => {
  return {
    _getAddress:(addressHash) => dispatch(getAddress(addressHash)),
    _saveAddress:(address) => dispatch(saveAddress(address))
  }
}

AddressPage.defaultProps = {
  match: null,
  isLoading: false,
  address: null,
  _getAddress: null,
  _saveAddress: null
}

AddressPage.propTypes = {
  match: PropTypes.object,
  isLoading: PropTypes.bool,
  address: PropTypes.object,
  _getAddress: PropTypes.func,
  _saveAddress: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressPage)