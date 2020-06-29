import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionCategoriesList.scss'
import Text from 'components/atoms/common/Text'
import ButtonIcon from 'components/molecules/buttons/ButtonIcon'

class SectionCategoriesList extends Component {
  render() {
    const { className, title, items, onAddCategory } = this.props
    const Item = `div`
    return (
      <div className={clsx('section-categories-list mt-30', className)}>
        <Text className="mb-20" size="xxl" align="center">
          {title}
        </Text>
        <div className={clsx('section-categories-list__list')}>
          {items &&
            items.map((item, index) => (
              <Item
                key={index.toString()}
                className="mb-15"
                style={{ display: 'flex' }}
                onClick={() => onAddCategory(item.category_id)}
              >
                <ButtonIcon
                  className="section-categories-list__plusbtn"
                  icon="plus"
                  iconSize={6}
                  onClick={() => onAddCategory(item.category_id)}
                />
                <Text className="mt-10 ml-10">{item.product_type_name}</Text>
              </Item>
            ))}
          {items && items.length % 2 ? (
            <div className="section-categories-list__empty" />
          ) : null}
        </div>
      </div>
    )
  }
}

SectionCategoriesList.defaultProps = {
  className: '',
  title: null,
  items: null,
  onAddCategory: null,
}

SectionCategoriesList.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.array,
  onAddCategory: PropTypes.func,
}

export default SectionCategoriesList
