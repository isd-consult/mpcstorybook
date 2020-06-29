import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionSearchBrands.scss'
import Text from 'components/atoms/common/Text'

class SectionSearchBrands extends Component {
  render () {
    const {
      className,
      items,
      selected,
      onClick
    } = this.props

    return (
      <div
        className={clsx(
          'section-search-brands mt-25',
          className
        )}
      >
        <Text
          className="mb-20" 
          align='center'
          size="xxl"
        >
          Brands A - Z
        </Text>
        <div style={{display: "flex", justifyContent: 'space-between'}}>
          {items && items.map((item, index)=>(
            <Text
              key={index.toString()}
              fw={selected && item.value===selected.value?'bold':null}
              isUnderline
              onClick={()=>onClick(item)}
            >
              {item.label}
            </Text>
        ))}
        </div>
      </div>
    )
  }
}

SectionSearchBrands.defaultProps = {
  className: '',
  items: null,
  selected: null,
  onClick: null
}

SectionSearchBrands.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
  selected: PropTypes.object,
  onClick: PropTypes.func
}

export default SectionSearchBrands
