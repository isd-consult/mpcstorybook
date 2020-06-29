import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ChangePassword.scss'
import BaseLayout from 'components/layouts/BaseLayout'
import SectionAccountTitle
  from 'components/organisms/sections/accounts/SectionAccountTitle'
import SectionChangePassword
  from 'components/organisms/sections/accounts/SectionChangePassword'
import Container from 'components/atoms/layout/Container'

class ChangePassword extends Component {
  render () {
    const {
      theme,
      cartCount,
      menuInfo,
      onSavePassword,
      ...others
    } = this.props

    return (
      <BaseLayout
        theme={theme}
        cartCount={cartCount}
        menuInfo={menuInfo}
        {...others}
      >
        <Container>
          <SectionAccountTitle
            title="Change Password"
            href="/accounts/info"
          />
          <SectionChangePassword
            onSavePassword={onSavePassword}
            theme={theme}
          />
        </Container>
      </BaseLayout>
    )
  }
}

ChangePassword.defaultProps = {
  className: '',
  cartCount: null,
  menuInfo: null,
  onSavePassword: null,
  theme: null
}

ChangePassword.propTypes = {
  className: PropTypes.string,
  cartCount: PropTypes.number,
  menuInfo: PropTypes.object,
  onSavePassword: PropTypes.func,
  theme: PropTypes.oneOf([null, 'men', 'women'])
}

export default ChangePassword
