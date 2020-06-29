import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Categories.scss'
import BaseLayout from 'components/layouts/BaseLayout'
import Container from 'components/atoms/layout/Container'

import SectionCategoriesList
  from 'components/organisms/sections/accounts/SectionCategoriesList'
import SectionFavoriteCategories
  from 'components/organisms/sections/accounts/SectionFavoriteCategories'
import SectionAccountTitle
  from 'components/organisms/sections/accounts/SectionAccountTitle'
import SectionGenderSelection
  from 'components/organisms/sections/accounts/SectionGenderSelection'

class Categories extends Component {
  render () {
    const {
      className,
      cartCount,
      menuInfo,
      gender,
      categoriesList,
      favouriteCategoriesList,
      onGenderChange,
      onAddCategory,
      onDeleteCategory,
      theme,
      ...others
    } = this.props

    return (
      <BaseLayout
        theme={theme}
        cartCount={cartCount}
        menuInfo={menuInfo}
        {...others}
      >
        <Container>
          <SectionAccountTitle
            title="My Categories"
            link="Back to My Closet"
            href="/accounts/closet"
            description={'You will see more products from '
            +'your preferred categories in your recommendations'}
          />
          <SectionGenderSelection
            className="mt-20 mb-15 ml-10"
            title="I would like to see products for:"
            gender={gender}
            onGenderChange={onGenderChange}
          />
          <SectionFavoriteCategories
            title="My preferred categories"
            items={favouriteCategoriesList}
            onClose={onDeleteCategory}
          />
          <SectionCategoriesList
            title="Ladies Categories"
            items={categoriesList}
            onAddCategory={onAddCategory}
          />
        </Container>
      </BaseLayout>
    )
  }
}

Categories.defaultProps = {
  className: '',
  cartCount: null,
  menuInfo: null,
  gender: null,
  categoriesList: null,
  favouriteCategoriesList: null,
  onGenderChange: null,
  onAddCategory: null,
  onDeleteCategory: null,
  theme: null
}

Categories.propTypes = {
  className: PropTypes.string,
  cartCount: PropTypes.number,
  menuInfo: PropTypes.object,
  gender: PropTypes.string,
  categoriesList: PropTypes.array,
  favouriteCategoriesList: PropTypes.array,
  onGenderChange: PropTypes.func,
  onAddCategory: PropTypes.func,
  onDeleteCategory: PropTypes.func,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default Categories
