import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Fbucks.scss'
import BaseLayout from 'components/layouts/BaseLayout'
import SectionAccountTitle
  from 'components/organisms/sections/accounts/SectionAccountTitle'
import SectionFbucks
  from 'components/organisms/sections/credit/SectionFbucks'
import Container from 'components/atoms/layout/Container'

class Fbucks extends Component {
  render () {
    const {
      className,
      theme,
      tierList,
      ...others
    } = this.props

    return (
      <BaseLayout
        theme={theme}
        {...others}
      >
        <Container>
          <SectionAccountTitle
            title="Fbucks Rewards"
          />
          <SectionFbucks
            theme={theme}
            tierList={tierList}
          />
        </Container>
      </BaseLayout>
    )
  }
}

Fbucks.defaultProps = {
  className: '',
  tierList: null,
  theme: null,
}

Fbucks.propTypes = {
  className: PropTypes.string,
  tierList: PropTypes.array,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default Fbucks
