import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionBrandsItems.scss'
import CardItem from 'components/molecules/cards/CardItem'
import Title from 'components/molecules/texts/Title'
import Container from 'components/atoms/layout/Container'
import Row from 'components/atoms/layout/Row'
import Col from 'components/atoms/layout/Col'

class SectionBrandsItems extends Component {
  renderItems() {
    const { items, onFavoriteChange, theme } = this.props
    const isRounded = true
    const Item = props => (
      <CardItem
        id={props.item.id}
        name={props.item.new_items_count?
          `${props.item.new_items_count} new items`:null}
        price={props.item.price}
        badge={props.item.new?'New':null}
        isFavoriteShow={!isRounded}
        isFavorite={props.item.favorite}
        href={`/product_list?brands=${props.item.brand_name}`}
        image={props.item.image}
        type="rounded"
        onFavoriteChange={onFavoriteChange}
        theme={theme}
      />
    )

    return (
      <Row isNoWrap>
        {items && items.map(item => (
          <Col isAutoWidth key={item.id}>
            <Item item={item} />
          </Col>
        ))}
      </Row>
    )
  }

  render() {
    const { className, link, title, items, theme } = this.props
    const isRounded = true
    return (
      items && (
      <div
        className={clsx(
          'section-brands-items pt-40 pb-40',
          {
            'section-brands-items--rounded': isRounded,
            [`section-brands-items--${theme}`]: theme
          },
          className,
        )}
      >
        <Container>
          <Title
            className="mb-25"
            title={title}
            link={link}
            category="quinary"
            theme={theme}
          />
          {this.renderItems()}
        </Container>
      </div>
)
    )
  }
}

SectionBrandsItems.defaultProps = {
  className: '',
  link: {
    href: '',
    text: '',
  },
  items: null,
  title: '',
  onFavoriteChange: null,
  theme: null,
}

SectionBrandsItems.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({
        src: PropTypes.string,
        title: PropTypes.string,
      }),
      name: PropTypes.string,
      href: PropTypes.string,
      id: PropTypes.string,
      price: PropTypes.number,
      favorite: PropTypes.bool,
    }),
  ),
  link: PropTypes.shape({
    href: PropTypes.string,
    text: PropTypes.string,
  }),
  title: PropTypes.string,
  onFavoriteChange: PropTypes.func,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default SectionBrandsItems
