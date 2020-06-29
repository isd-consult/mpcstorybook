import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionItems.scss'

import { chunkArray } from 'utils'

import CardItem from 'components/molecules/cards/CardItem'
import Title from 'components/molecules/texts/Title'
import Container from 'components/atoms/layout/Container'
import Row from 'components/atoms/layout/Row'
import Col from 'components/atoms/layout/Col'

class SectionItems extends Component {
  renderItems() {
    const { items, 
      itemsType, 
      onFavoriteChange, 
      rowCount, 
      theme, 
      isAuthenticated 
    } = this.props
    const isRounded = itemsType === 'rounded'
    const Item = props => (
      <CardItem
        id={props.item.id}
        name={props.item.title}
        price={props.item.current_price}
        badge={props.item.badge}
        // isFavoriteShow={!isRounded}
        isFavorite={props.item.favorite}
        href={`/product_detail/${props.item.sku}`}
        image={props.item.image}
        type={itemsType}
        onFavoriteChange={onFavoriteChange}
        theme={theme}
        isUnseen={!props.item.is_seen && isAuthenticated}
      />
    )

    if (!isRounded && items) {
      const dividedItems = chunkArray(
        items, Math.ceil(items.length / Math.max(rowCount, 1)))
      return dividedItems.map((group, index) => (
        <Row
          isNoWrap
          key={index.toString()}
          className={index !== dividedItems.length - 1 ? 'mb-15' : null}
        >
          {group.map((item,jndex) => (
            <Col isAutoWidth key={jndex.toString()}>
              <Item item={item} />
            </Col>
          ))}
        </Row>
      ))
    }

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
    const { className, link, title, itemsType, items, theme } = this.props
    const isRounded = itemsType === 'rounded'
    const isSmall = itemsType === 'small'
    return (
      items && items.length > 0 && (
      <div
        className={clsx(
          'section-items pt-40 pb-40',
          {
            'section-items--rounded': isRounded,
            'section-items--small': isSmall,
            [`section-items--${theme}`]: theme
          },
          className,
        )}
      >
        <Container>
          <Title
            className="mb-25"
            title={title}
            link={link}
            category={!isRounded ? 'secondary' : 'quinary'}
            theme={theme}
          />
          {this.renderItems()}
        </Container>
      </div>
)
    )
  }
}

SectionItems.defaultProps = {
  className: '',
  link: {
    href: '',
    text: '',
  },
  items: null,
  title: '',
  itemsType: null,
  onFavoriteChange: null,
  rowCount: 2,
  theme: null,
  isAuthenticated: false,
}

SectionItems.propTypes = {
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
  itemsType: PropTypes.oneOf([null, 'rounded', 'small']),
  link: PropTypes.shape({
    href: PropTypes.string,
    text: PropTypes.string,
  }),
  title: PropTypes.string,
  onFavoriteChange: PropTypes.func,
  rowCount: PropTypes.number,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  isAuthenticated: PropTypes.bool,
}

export default SectionItems
