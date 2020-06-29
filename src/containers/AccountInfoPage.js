import React, { Component } from 'react'
import { connect } from 'react-redux'
import { menuInfo } from 'constants/header'
import PropTypes from 'prop-types'
import AccountInfo from 'components/templates/accounts/Info/Accountinfo'
import Transition from 'containers/Transition'
import { 
  saveProfile,
  deleteAddress
} from 'redux/modules/profile/actions'

class AccountInfoPage extends Component {

  render() {
    const {
      theme,
      isLoading,
      userInfo,
      onSaveInfo,
      onDeleteAddress,
      ...others
    } = this.props

    return (
      <Transition>
        <AccountInfo
          theme={theme}
          isLoading={isLoading}
          menuInfo={menuInfo}
          userInfo={userInfo}
          saveInfo={onSaveInfo}
          deleteAddress={onDeleteAddress}
          {...others}
        />
      </Transition>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.profile.isLoading,
    userInfo: state.profile.userInfo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSaveInfo:(data) => dispatch(saveProfile(data)),
    onDeleteAddress:(addressHash) => dispatch(deleteAddress(addressHash))
  }
}

AccountInfoPage.defaultProps = {
  theme: null,
  isLoading: false,
  userInfo: null,
  onSaveInfo: null,
  onDeleteAddress: null
}

AccountInfoPage.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
  isLoading: PropTypes.bool,
  userInfo: PropTypes.object,
  onSaveInfo: PropTypes.func,
  onDeleteAddress: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountInfoPage)