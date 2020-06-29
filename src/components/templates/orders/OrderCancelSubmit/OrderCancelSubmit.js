import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './OrderCancelSubmit.scss'
import BaseLayout from 'components/layouts/BaseLayout'
import Container from 'components/atoms/layout/Container'
import SectionAccountTitle
  from 'components/organisms/sections/accounts/SectionAccountTitle'
import SectionOrderCancelSubmit
  from 'components/organisms/sections/orders/SectionOrderCancelSubmit'
import SectionOrderCancelConfirm
  from 'components/organisms/sections/orders/SectionOrderCancelConfirm'

class OrderCancelSubmit extends Component {
  render () {
    const {
      className,
      theme,
      menuInfo,
      order,
      status,
      submit,
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
            title="Request New Cancellation"
          />
          {status === 'submit' && (
          <SectionOrderCancelSubmit
            order={order}
            submit={submit}
          />
)}
          {status === 'confirm' && (
          <SectionOrderCancelConfirm
            order={order}
          />
)}
        </Container>
      </BaseLayout>
    )
  }
}

OrderCancelSubmit.defaultProps = {
  className: '',
  theme: null,
  menuInfo: null,
  order: null,
  status: null,
  submit: null
}

OrderCancelSubmit.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  menuInfo: PropTypes.object,
  order: PropTypes.object,
  status: PropTypes.oneOf([null, 'submit', 'confirm']),
  submit: PropTypes.func
}

export default OrderCancelSubmit
