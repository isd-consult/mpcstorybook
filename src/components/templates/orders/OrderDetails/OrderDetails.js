import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './OrderDetails.scss'
import BaseLayout from 'components/layouts/BaseLayout'
import Container from 'components/atoms/layout/Container'
import Button from 'components/molecules/buttons/Button'
import SectionAccountTitle
  from 'components/organisms/sections/accounts/SectionAccountTitle'
import SectionOrderDetailsCard
  from 'components/organisms/sections/orders/SectionOrderDetailsCard'
import { Link } from 'react-router-dom'

class OrderDetails extends Component {
  render () {
    const {
      menuInfo,
      order,
      className,
      theme,
      history,
      ...others
    } = this.props
    
    return (
      <BaseLayout
        theme={theme}
        menuInfo={menuInfo}
        history={history}
        {...others}
      >
        <Container>
          <SectionAccountTitle
            title={`Order ${order !== null?order.order_number:''}`}
            link="Back to My Account"
            href="/accounts/"
            history={history}
          />
          <SectionOrderDetailsCard 
            className={className}
            order={order}
            theme={theme}
            history={history}
          />
          <Link to="/orders/list">
            <Button
              className='mt-10 mb-10'
              category="grey"
              fw='bold'
            >
              Back to My Orders
            </Button>
          </Link>
        </Container>
      </BaseLayout>
    )
  }
}

OrderDetails.defaultProps = {
  className: '',
  menuInfo: null,
  history: null,
  theme: null,
  order: null,
}

OrderDetails.propTypes = {
  className: PropTypes.string,
  menuInfo: PropTypes.object,
  history: PropTypes.object,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  order: PropTypes.object,
}

export default OrderDetails
