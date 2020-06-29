import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionNewItems.scss'

import { chunkArray } from 'utils'

import CardItem from 'components/molecules/cards/CardItem'
import Title from 'components/molecules/texts/Title'
import Container from 'components/atoms/layout/Container'
import Row from 'components/atoms/layout/Row'
import Col from 'components/atoms/layout/Col'
import NewItemDialog from 'components/organisms/dialogs/NewItemDialog'

class SectionNewItems extends Component {
  constructor(props) {
    super(props)
    this.state = {openedDialog: false}
    this.closeDialog = this.closeDialog.bind(this)
  }

  closeDialog() {
    this.setState({openedDialog: false})
  }

  renderItems() {
    const { items, itemsType, onFavoriteChange, rowCount, theme } = this.props
    const Item = props => (
      <CardItem
        id={props.item.id}
        name={props.item.title}
        price={props.item.price}
        isFavorite={props.item.favorite}
        href={`/product_detail/${props.item.sku}`}
        image={props.item.image}
        type={itemsType}
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
    const { className, title, items, theme } = this.props
    const {openedDialog} = this.state
    const link = {
      href: '/product_list?sort_by=newin&order=desc',
      text: 'See all'
    }
    return (
      items && !!items.length && (
      <div
        className={clsx(
          'section-new-items pt-40 pb-40',
          {[`section-new-items--${theme}`]: theme},
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
          <NewItemDialog
            opened={openedDialog}
            onClose={this.closeDialog}
            theme={theme}
          />
        </Container>
      </div>
)
    )
  }
}
SectionNewItems.defaultProps = {
  className: '',
  items: null,
  title: '',
  itemsType: null,
  onFavoriteChange: null,
  rowCount: 2,
  theme: null,
}

SectionNewItems.propTypes = {
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
  title: PropTypes.string,
  onFavoriteChange: PropTypes.func,
  rowCount: PropTypes.number,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default SectionNewItems
