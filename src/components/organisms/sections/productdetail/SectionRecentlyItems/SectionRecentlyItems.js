import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionRecentlyItems.scss'

import { chunkArray } from 'utils'

import CardItem from 'components/molecules/cards/CardItem'
import Title from 'components/molecules/texts/Title'
import Container from 'components/atoms/layout/Container'
import Row from 'components/atoms/layout/Row'
import Col from 'components/atoms/layout/Col'

class SectionRecentlyItems extends Component {
  renderItems() {
    const { items, itemsType, rowCount, theme } = this.props
    const isRounded = itemsType === 'rounded'
    const Item = props => {
      return (
        <CardItem
          id={props.item.id}
          name={props.item.title}
          price={props.item.current_price}
          href={`/product_detail/${props.item.sku}`}
          image={props.item.image}
          type={itemsType}
          theme={theme}
          isUnseen={false}
        />
)
    }

    if (!isRounded && items) {
      const dividedItems = chunkArray(
        items, Math.ceil(items.length / Math.max(rowCount, 1)))
      return dividedItems.map((group, index) => (
        <Row
          isNoWrap
          key={index.toString()}
          className={index !== dividedItems.length - 1 ? 'mb-15' : null}
        >
          {group.map((item, jndex) => (
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
          'section-recently-items pt-40 pb-40',
          {
            'section-recently-items--rounded': isRounded,
            'section-recently-items--small': isSmall,
            [`section-recently-items--${theme}`]: theme
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

SectionRecentlyItems.defaultProps = {
  className: '',
  link: {
    href: '',
    text: '',
  },
  items: null,
  title: '',
  itemsType: null,
  rowCount: 2,
  theme: null,
}

SectionRecentlyItems.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
  itemsType: PropTypes.oneOf([null, 'rounded', 'small']),
  link: PropTypes.shape({
    href: PropTypes.string,
    text: PropTypes.string,
  }),
  title: PropTypes.string,
  rowCount: PropTypes.number,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default SectionRecentlyItems
