import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionPopularItems.scss'
import Container from 'components/atoms/layout/Container'
import CardProduct from 'components/molecules/cards/CardProduct'
import Row from 'components/atoms/layout/Row'
import Col from 'components/atoms/layout/Col'
import Text from 'components/atoms/common/Text'
import { Link } from 'react-router-dom'
import Button from 'components/molecules/buttons/Button'

class SectionPopularItems extends Component {
  render () {
    const {
      className,
      theme,
      items,
      isHidden
    } = this.props

    return (
      !isHidden && items && items.length && (
      <div
        className={clsx(
          'section-popular-items',
          className
        )}
      >
        <Container>
          <Text className="mt-20" size="xl">
            Most Popular Items
          </Text>
          <Row>
            {items && items.map((item, index)=>{
              return (
                <Col key={index.toString()} xs={6} sm={4} md={3} lg={2}>
                  <CardProduct
                    theme={theme}
                    href={`/product_detail/${item.sku}`}
                    image={item.image}
                    badge={item.badge}
                    isInCart={item.isInCart}
                    title={item.brand}
                    sku={item.sku}
                    subTitle={item.title}
                    price={item.original_price}
                    discount={item.current_price}
                    trackingInfo={item.tracking_info}
                    credit={item.fbucks}
                  />
                </Col>
)
            })}
          </Row>
          <Link to="/product_list">
            <Button className="mb-20" theme={theme}>
              SEE MORE
            </Button>
          </Link>
        </Container>
      </div>
)
    )
  }
}

SectionPopularItems.defaultProps = {
  className: '',
  theme: null,
  items: null,
  isHidden: false
}

SectionPopularItems.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  items: PropTypes.array,
  isHidden: PropTypes.bool
}

export default SectionPopularItems
