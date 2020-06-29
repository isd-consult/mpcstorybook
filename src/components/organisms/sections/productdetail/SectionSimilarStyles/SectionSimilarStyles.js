import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionSimilarStyles.scss'
import Title from 'components/molecules/texts/Title'
import Row from 'components/atoms/layout/Row'
import Col from 'components/atoms/layout/Col'
import Container from 'components/atoms/layout/Container'
import CardProduct from 'components/molecules/cards/CardProduct'

class SectionSimilarStyles extends Component {
  render () {
    const {
      className,
      theme,
      items,
      isAuthenticated,
    } = this.props
    if (!items || items.length < 1) return null
    return (
      <div
        className={clsx(
          'section-similar-styles pt-40 pb-40',
          className
        )}
      >
        <Container>
          <Title
            className="mb-25"
            title="Similar Styles"
            // category={!isRounded ? 'secondary' : 'quinary'}
            theme={theme}
          />
          <Row>
            {
                items && items.map((item, index)=>(
                  <Col key={index.toString()} xs={6} sm={4} md={3} lg={2}>
                    <CardProduct
                      theme={theme}
                      href={`/product_detail/${item && item.sku}`}
                      image={item.image}
                      badge={item.badge}
                      isInCart={item.isInCart}
                      title={item.brand}
                      subTitle={item.title}
                      price={item.price}
                      discount={item.discount}
                      isUnseen={!item.is_seen && isAuthenticated}
                    />
                  </Col>
                ))
              }
          </Row>
        </Container>
      </div>
    )
  }
}

SectionSimilarStyles.defaultProps = {
  className: '',
  items: null,
  theme: null,
  isAuthenticated: false,
}

SectionSimilarStyles.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  isAuthenticated: PropTypes.bool,
}

export default SectionSimilarStyles
