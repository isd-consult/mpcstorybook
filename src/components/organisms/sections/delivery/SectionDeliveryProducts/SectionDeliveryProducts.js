import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionDeliveryProducts.scss'

import CardCategory from 'components/molecules/cards/CardCategory'
import Container from 'components/atoms/layout/Container'
import Row from 'components/atoms/layout/Row'
import Col from 'components/atoms/layout/Col'
import Text from 'components/atoms/common/Text'

class SectionDeliveryProducts extends Component {
  render () {
    const {
      className,
      items,
      theme,
    } = this.props

    return (
      <div
        className={clsx(
          'section-delivery-products pb-20 pt-20',
          className
        )}
      >
        <Container>
          <Text size="xs" fw="bold">
            YOUR CART:
          </Text>
          {items && (
          <Row isNoWrap className="mt-15">
            {items.map((item, i) => (
              <Col isAutoWidth key={i.toString()}>
                <CardCategory
                  image={{src:item.image_url, title:'none'}}
                  href={`/product_list?product_type=${item.name}`}
                  theme={theme}
                  type="small"
                />
              </Col>
              ))}
          </Row>
          )}
        </Container>
      </div>
    )
  }
}

SectionDeliveryProducts.defaultProps = {
  className: '',
  items: null,
  theme: null,
}

SectionDeliveryProducts.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image_url: PropTypes.string,
      name: PropTypes.string,
      href: PropTypes.string,
    }),
  ),
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default SectionDeliveryProducts
