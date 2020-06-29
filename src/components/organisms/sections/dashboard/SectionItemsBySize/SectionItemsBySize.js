import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionItemsBySize.scss'

import { chunkArray } from 'utils'

import CardItem from 'components/molecules/cards/CardItem'
import Title from 'components/molecules/texts/Title'
import Container from 'components/atoms/layout/Container'
import Row from 'components/atoms/layout/Row'
import Col from 'components/atoms/layout/Col'

class SectionItemsBySize extends Component {
  renderItems() {
    const { data, onFavoriteChange, rowCount, theme } = this.props
    const items = data && data.products
    const Item = props => (
      <CardItem
        id={props.item.id}
        name={props.item.title}
        price={props.item.price}
        badge={props.item.badge}
        // isFavoriteShow
        isFavorite={props.item.favorite}
        href={`/product_detail/${props.item.sku}`}
        image={props.item.image}
        onFavoriteChange={onFavoriteChange}
        theme={theme}
      />
    )

    if (items) {
      const dividedItems = chunkArray(
        items, Math.ceil(items.length / Math.max(rowCount, 1)))
      return dividedItems.map((group, index) => (
        <Row
          isNoWrap
          key={index.toString()}
          className={index !== dividedItems.length - 1 ? 'mb-15' : null}
        >
          {group.map(item => (
            <Col isAutoWidth key={item.id}>
              <Item item={item} />
            </Col>
          ))}
        </Row>
      ))
    } 
      return null
    
  }

  render() {
    const { className, data, theme } = this.props

    const productSize = data && data.product_size
    const productType = data && data.product_type
    const title = 
      productSize && productType && `Shop ${productSize} ${productType}`
    
    const link = {
      href: productType && `/product_list/?product_type=${productType}`,
      text: 'See all'
    }

    return (
      data && (
      <div
        className={clsx(
          'section-items-by-size pt-40 pb-40',
          {
            [`section-items-by-size--${theme}`]: theme
          },
          className,
        )}
      >
        <Container>
          <Title
            className="mb-25"
            title={title}
            link={link}
            category="secondary"
            theme={theme}
          />
          {this.renderItems()}
        </Container>
      </div>
)
    )
  }
}

SectionItemsBySize.defaultProps = {
  className: '',
  onFavoriteChange: null,
  rowCount: 2,
  theme: null,
  data: null
}

SectionItemsBySize.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    product_type: PropTypes.string,
    product_size: PropTypes.string,
    products: PropTypes.array,
  }),
  onFavoriteChange: PropTypes.func,
  rowCount: PropTypes.number,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default SectionItemsBySize
