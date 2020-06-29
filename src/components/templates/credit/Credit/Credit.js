import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Credit.scss'
import BaseLayout from 'components/layouts/BaseLayout'
import Container from 'components/atoms/layout/Container'
import SectionAccountTitle
  from 'components/organisms/sections/accounts/SectionAccountTitle'
import SectionCredit
  from 'components/organisms/sections/credit/SectionCredit'

  class Credit extends Component {
  render () {
    const {
      className,
      fbucksInfo,
      theme,
      ...others
    } = this.props
    return (
      <BaseLayout
        theme={theme}
        {...others}
      >
        <Container>
          <SectionAccountTitle title="My Credit" />
          <SectionCredit fbucksInfo={fbucksInfo} theme={theme} />
        </Container>
      </BaseLayout>
    )
  }
}

Credit.defaultProps = {
  className: '',
  theme: null,
  fbucksInfo: null
}

Credit.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  fbucksInfo: PropTypes.object
}

export default Credit
