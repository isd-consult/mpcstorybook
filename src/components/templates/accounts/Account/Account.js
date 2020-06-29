import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Account.scss'
import BaseLayout from 'components/layouts/BaseLayout'
import Text from 'components/atoms/common/Text'
import Container from 'components/atoms/layout/Container'
import SectionAccountMenu
  from 'components/organisms/sections/accounts/SectionAccountMenu'
import StringUtils from 'utils/StringUtils'

class Account extends Component {
  render () {
    const {
      theme,
      user,
      accountMenuInfo,
      menuInfo,
      userInfo,
      ...others
    } = this.props

    return (
      <BaseLayout 
        theme={theme}
        menuInfo={menuInfo}
        {...others}
      >
        <Container>
          <Text
            className="mb-10 mt-20" 
            size="xxl"
          >
            {`Hello ${StringUtils.toCamelCase(
              userInfo && userInfo.first_name)||''}`}
          </Text>
        </Container>
        <SectionAccountMenu
          items={accountMenuInfo}
          {...others}
        />
      </BaseLayout>
    )
  }
}

Account.defaultProps = {
  className: '',
  theme:null,
  user:null,
  userInfo: null,
  cartCount:null,
  menuInfo:null,
  accountMenuInfo: null
}

Account.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  user:PropTypes.object,
  userInfo: PropTypes.object,
  cartCount:PropTypes.number,
  menuInfo:PropTypes.object,
  accountMenuInfo: PropTypes.array
}

export default Account
