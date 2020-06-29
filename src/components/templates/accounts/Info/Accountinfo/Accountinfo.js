import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Accountinfo.scss'
import BaseLayout from 'components/layouts/BaseLayout'
import Container from 'components/atoms/layout/Container'
import SectionAccountTitle 
  from 'components/organisms/sections/accounts/SectionAccountTitle'
import SectionAccountName 
  from 'components/organisms/sections/accounts/SectionAccountName'
import SectionAccountAddressBook
  from 'components/organisms/sections/accounts/SectionAccountAddressBook'

class Accountinfo extends Component {
  render () {
    const {
      theme,
      saveInfo,
      userInfo,
      deleteAddress,
      history,
      ...others
    } = this.props

    return (
      <BaseLayout
        theme={theme}
        history={history}
        {...others}
      >
        <Container>
          <SectionAccountTitle
            title="Account Info"
            link="Back to My Account"
            href="/accounts/"
          />
          <SectionAccountName
            theme={theme}
            userInfo={userInfo}
            saveInfo={saveInfo}
            history={history}
          />
          <SectionAccountAddressBook
            theme={theme}
            addresses={userInfo && userInfo.addresses}
            deleteAddress={deleteAddress}
          />
        </Container>
      </BaseLayout>
    )
  }
}

Accountinfo.defaultProps = {
  userInfo: null,
  history: null,
  theme: null,
  saveInfo: null,
  deleteAddress: null,
}

Accountinfo.propTypes = {
  userInfo: PropTypes.object,
  history: PropTypes.object,
  saveInfo: PropTypes.func,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  deleteAddress: PropTypes.func
}

export default Accountinfo
