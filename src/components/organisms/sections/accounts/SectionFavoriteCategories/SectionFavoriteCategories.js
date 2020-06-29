import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionFavoriteCategories.scss'
import CardOption from 'components/molecules/cards/CardOption'
import Text from 'components/atoms/common/Text'
import Title from 'components/molecules/texts/Title'

class SectionFavoriteCategories extends Component {
  render () {
    const {
      className,
      title,
      items,
      onClose
    } = this.props

    return (
      <div
        className={clsx(
          'section-favorite-categoies',
          className
        )}
      >
        <Title
          title={title}
          mode="account"
        />
        {
          items && items.length>0
            ? items.map((item, index)=>(
              <CardOption
                key={index.toString()}
                className="mt-5 mr-5"
                label={item.product_type_name}
                value={item.category_id}
                onClose={()=>onClose(item.category_id)}
              />
              ))
            : (
              <Text className="mt-20">
                Select categories below
              </Text>
)
        }
      </div>
    )
  }
}

SectionFavoriteCategories.defaultProps = {
  className: '',
  title: null,
  items: null,
  onClose: null,
}

SectionFavoriteCategories.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.array,
  onClose: PropTypes.func
}

export default SectionFavoriteCategories
