import React, { Component } from 'react'
import { connect } from 'react-redux'
import { menuInfo } from 'constants/header'
import PropTypes from 'prop-types'
import ChangePassword from 'components/templates/accounts/ChangePassword'
import { changePassword } from 'redux/modules/auth/actions'
import Transition from 'containers/Transition'

class ChangePasswordPage extends Component {
  render() {
    const {
      theme,
      changeUserPassword,
      ...others
    } = this.props

    return (
      <Transition>
        <ChangePassword
          theme={theme}
          menuInfo={menuInfo}
          onSavePassword={changeUserPassword}
          {...others}
        />
      </Transition>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeUserPassword: (email, password) =>
      dispatch(changePassword(email, password)),
  }
}

ChangePasswordPage.defaultProps = {
  theme: null,
  changeUserPassword: null
}

ChangePasswordPage.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
  changeUserPassword: PropTypes.func
}

export default connect(
  null,
  mapDispatchToProps,
)(ChangePasswordPage)