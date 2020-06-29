import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './OrderCancel.scss'
import BaseLayout from 'components/layouts/BaseLayout'
import Container from 'components/atoms/layout/Container'
import SectionAccountTitle
  from 'components/organisms/sections/accounts/SectionAccountTitle'
import SectionOrderCancel
  from 'components/organisms/sections/orders/SectionOrderCancel'

class OrderCancel extends Component {
  render () {
    const {
      menuInfo,
      orderNumber,
      items,
      refundMethods,
      submit,
      className,
      theme,
      ...others
    } = this.props

    return (
      <BaseLayout
        theme={theme}
        menuInfo={menuInfo}
        {...others}
      >
        <Container>
          <SectionAccountTitle
            title="Request Cancellation"
          />
          <SectionOrderCancel
            orderNumber={orderNumber}
            items={items}
            refundMethods={refundMethods}
            submit={submit}
          />
        </Container>
      </BaseLayout>
    )
  }
}

OrderCancel.defaultProps = {
  className: '',
  menuInfo: null,
  orderNumber: null,
  items: null,
  refundMethods: null,
  submit: null,
  theme: null
}

OrderCancel.propTypes = {
  className: PropTypes.string,
  orderNumber: PropTypes.string,
  menuInfo: PropTypes.object,
  items: PropTypes.array,
  refundMethods: PropTypes.array,
  submit: PropTypes.func,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default OrderCancel
