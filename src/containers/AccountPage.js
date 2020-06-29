import React, { Component } from 'react'
import { connect } from 'react-redux'
import { menuInfo } from 'constants/header'
import PropTypes from 'prop-types'
import Account from 'components/templates/accounts/Account'
import {accountMenuInfo} from 'constants/accounts'
import Transition from 'containers/Transition'

class AccountPage extends Component {
  render() {
    const {
      theme,
      userInfo,
      ...others
    } = this.props
    return (
      <Transition>
        <Account
          theme={theme}
          menuInfo={menuInfo}
          userInfo={userInfo}
          accountMenuInfo={accountMenuInfo}
          {...others}
        />
      </Transition>
    )
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.profile.userInfo
  }
}

AccountPage.defaultProps = {
  theme: null,
  userInfo: null,
}

AccountPage.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
  userInfo: PropTypes.object
}

export default connect(
  mapStateToProps,
  null,
)(AccountPage)