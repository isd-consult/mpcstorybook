import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './CashOut.scss'
import BaseLayout from 'components/layouts/BaseLayout'
import Container from 'components/atoms/layout/Container'
import SectionAccountTitle
  from 'components/organisms/sections/accounts/SectionAccountTitle'
import SectionCashOut
  from 'components/organisms/sections/credit/SectionCashOut'

class CashOut extends Component {
  render () {
    const {
      className,
      theme,
      creditInfo,
      creditCashOut,
      isLoading,
      ...others
    } = this.props

    return (
      <BaseLayout
        theme={theme}
        {...others}
      >
        <Container>
          <SectionAccountTitle title="Credit Cash Out" />
          <SectionCashOut 
            theme={theme} 
            isLoading={isLoading}
            creditCashOut={creditCashOut}
            creditInfo={creditInfo}
          />
        </Container>
      </BaseLayout>
    )
  }
}

CashOut.defaultProps = {
  className: '',
  creditCashOut: null,
  creditInfo: null,
  theme: null,
  isLoading: false,
}

CashOut.propTypes = {
  className: PropTypes.string,
  creditCashOut: PropTypes.func,
  creditInfo: PropTypes.object,
  isLoading: PropTypes.bool,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default CashOut
