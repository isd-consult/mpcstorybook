import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionBrandsList.scss'
import Text from 'components/atoms/common/Text'
import ButtonIcon from 'components/molecules/buttons/ButtonIcon'

class SectionBrandsList extends Component {
  render() {
    const { className, items, onAddBrand } = this.props
    let preItem = null
    const Item = `div`
    return (
      <div className={clsx('section-brands-list mt-30', className)}>
        {items &&
          items.map((item, index) => {
            const title =
              preItem == null || preItem.charAt(0) !== item.charAt(0) ? (
                <Text className="ml-10 mb-5" fw="bold" size="xxl">
                  {item.charAt(0)}
                </Text>
              ) : null
            preItem = item
            return (
              <div key={index.toString()}>
                {title}
                <Item
                  className="mb-15"
                  onClick={() => onAddBrand(item)}
                  style={{ display: 'flex' }}
                >
                  <ButtonIcon
                    className="section-brands-list__plusbtn"
                    icon="plus"
                    iconSize={6}
                  />
                  <Text className="mt-10 ml-10">{item}</Text>
                </Item>
              </div>
            )
          })}
        {items && items.length % 2 ? (
          <div className="section-brands-list__empty" />
        ) : null}
      </div>
    )
  }
}

SectionBrandsList.defaultProps = {
  className: '',
  items: null,
  onAddBrand: null,
}

SectionBrandsList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
  onAddBrand: PropTypes.func,
}

export default SectionBrandsList
