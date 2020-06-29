import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionRecommends.scss'

import { chunkArray } from 'utils'

import CardItem from 'components/molecules/cards/CardItem'
import Title from 'components/molecules/texts/Title'
import Container from 'components/atoms/layout/Container'
import Row from 'components/atoms/layout/Row'
import Col from 'components/atoms/layout/Col'
import StringUtils from 'utils/StringUtils'

class SectionRecommends extends Component {
  renderItems(rowCount, title, href, items) {
    const { itemsType, theme } = this.props
    const link = {
      href,
      text: 'See all'
    }
    const Item = props => (
      <CardItem
        id={props.item.id}
        name={props.item.title}
        price={props.item.price}
        href={`/product_detail/${props.item.sku}`}
        image={props.item.image}
        type={itemsType}
        theme={theme}
      />
    )

    if (items && items.length > 0) {
      const dividedItems = chunkArray(
        items, Math.ceil(items.length / Math.max(rowCount, 1)))
      return (
        <>
          <Title
            className="mb-25"
            title={title}
            link={link}
            category="secondary"
            theme={theme}
          />
          {dividedItems.map((group, index) => (
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
          ))}
        </>
      )
    }
      return null
  }

  render() {
    const { className, items, theme, searchTerm, recommendURL } = this.props
    const searchType = StringUtils.getSearchType(searchTerm)
    const ladiesItem = []
    const mensItem = []
    const kidsItem = []
    items.forEach(item =>{
      if(item.gender === "MENS")mensItem.push(item)
      if(item.gender === "LADIES")ladiesItem.push(item)
      if(item.gender === "KIDS")kidsItem.push(item)
    })
    return (
      items && items.length > 0 && (
      <div
        className={clsx(
          'section-recommends pt-40 pb-40',
          {[`section-recommends--${theme}`]: theme},
          className,
        )}
      >
        <Container>
          {!searchType 
            && this.renderItems(2, 'Recommended for you', 
            recommendURL, items)}
          {searchType 
            && this.renderItems(1, 'Ladies sneakers', 
            '/product_list?gender=LADIES&search_query=sneaker', ladiesItem)}
          {searchType 
            && this.renderItems(1, 'Mens sneakers', 
            '/product_list?gender=MENS&search_query=sneaker', mensItem)}
          {searchType
            && this.renderItems(1, 'Kids sneakers', 
            '/product_list?gender=KIDS&search_query=sneaker', kidsItem)}
        </Container>
      </div>
)
    )
  }
}
SectionRecommends.defaultProps = {
  className: '',
  items: null,
  itemsType: null,
  theme: null,
  searchTerm: null,
  recommendURL: null,
}

SectionRecommends.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
  itemsType: PropTypes.oneOf([null, 'rounded', 'small']),
  theme: PropTypes.oneOf([null, 'men', 'women']),
  searchTerm: PropTypes.string,
  recommendURL: PropTypes.string
}

export default SectionRecommends
