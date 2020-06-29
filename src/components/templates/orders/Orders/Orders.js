import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Orders.scss'
import BaseLayout from 'components/layouts/BaseLayout'
import Container from 'components/atoms/layout/Container'
import SectionAccountTitle
  from 'components/organisms/sections/accounts/SectionAccountTitle'
import SectionOrderCard 
  from 'components/organisms/sections/orders/SectionOrderCard'
import Icon from 'components/atoms/common/Icon'
import Text from 'components/atoms/common/Text'
import { Link } from 'react-router-dom'

class Orders extends Component {
  render () {
    const {
      menuInfo,
      ordersList,
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
            title="My Orders"
            link="Back to My Account"
            href="/accounts/"
          />
          {ordersList && ordersList.map((item, index)=>(
            <SectionOrderCard
              key={index.toString()}
              theme={theme}
              item={item}
              history={history}
              className={className}
            />
          ))}
          <div className="orders__empty">
            {
            ordersList && ordersList.length===0 && (
            <>
              <Icon name="shopping-bag" size={60} theme={theme} />
              <Text lh="1-6">You have no orders</Text>
              <Link className="orders__empty-link" to="/">
                click here to start shopping
              </Link>
              <Text className="mt-20" lh="1-6">
                Note: if you have placed an order in the last 5 minutes 
                and it is not showing here yet, please 
                <a className="orders__empty-link" href="/orders/list">
                  {` refresh your page now `}
                </a>
                to see your order.
              </Text>
            </>              
          )}
          </div>          
        </Container>
      </BaseLayout>
    )
  }
}

Orders.defaultProps = {
  className: '',
  menuInfo: null,
  theme: null,
  ordersList: [],
  history: null,
}

Orders.propTypes = {
  className: PropTypes.string,
  menuInfo: PropTypes.object,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  ordersList: PropTypes.array,
  history: PropTypes.object
}

export default Orders
