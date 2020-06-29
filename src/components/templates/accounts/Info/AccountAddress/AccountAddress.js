import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './AccountAddress.scss'
import BaseLayout from 'components/layouts/BaseLayout'
import Container from 'components/atoms/layout/Container'
import SectionAccountTitle 
  from 'components/organisms/sections/accounts/SectionAccountTitle'
import SectionAccountAddress 
  from 'components/organisms/sections/accounts/SectionAccountAddress'

class AccountAddress extends Component {
  render () {
    const {
      theme,
      saveAddress,
      address,
      ...others
    } = this.props
    return (
      <BaseLayout
        theme={theme}
        {...others}
      >
        <Container>
          <SectionAccountTitle
            title="Add New Address"
            link="Back to Account Info"
            href="/accounts/info"
          />
          <SectionAccountAddress
            theme={theme}
            saveAddress={saveAddress}
            address={address}
          />
        </Container>
      </BaseLayout>
    )
  }
}

AccountAddress.defaultProps = {
  theme: null,
  address: null,
  saveAddress: null,
}

AccountAddress.propTypes = {
  address: PropTypes.object,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  saveAddress: PropTypes.func
}

export default AccountAddress
