import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import clsx from 'clsx'

import './Brands.scss'
import BaseLayout from 'components/layouts/BaseLayout'
import Container from 'components/atoms/layout/Container'
import Divider from 'components/atoms/common/Divider'
import SectionAccountTitle
  from 'components/organisms/sections/accounts/SectionAccountTitle'
import SectionSelectedOptions
  from 'components/organisms/sections/accounts/SectionSelectedOptions'
import SectionSearchBrands
  from 'components/organisms/sections/accounts/SectionSearchBrands'
import SectionBrandsList
  from 'components/organisms/sections/accounts/SectionBrandsList'
import SectionPopularBrands
  from 'components/organisms/sections/accounts/SectionPopularBrands'

class Brands extends Component {
  render () {
    const {
      cartCount,
      menuInfo,
      className,
      selectedBrands,
      popularBrands,
      brandCategories,
      selectedCategory,
      onChangeBrandCategory,
      brandsList,
      onAddBrand,
      onDeleteBrand,
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
            title="My Brands"
            link="Back to My Closet"
            href="/accounts/closet"
            description={'Products from your favourite '
            +'brands will rise to the top of your results'}
          />
          <div className="brands__chain">
            <SectionSelectedOptions
              title="My favorite brands"
              items={selectedBrands}
              onClose={onDeleteBrand}
            />
            <Divider />
            <SectionPopularBrands
              title="Popular brands"
              items={popularBrands}
              onAddBrand={onAddBrand}
            />
          </div>
          <SectionSearchBrands
            items={brandCategories}
            selected={selectedCategory}
            onClick={onChangeBrandCategory}
          />
          <SectionBrandsList
            items={brandsList}
            onAddBrand={onAddBrand}
          />
        </Container>
      </BaseLayout>
    )
  }
}

Brands.defaultProps = {
  className: '',
  currentUser: null,
  cartCount: 0,
  menuInfo: null,
  selectedBrands: null,
  popularBrands: null,
  brandCategories: null,
  selectedCategory: null,
  onChangeBrandCategory: null,
  brandsList: null,
  onAddBrand: null,
  onDeleteBrand: null,
  theme: null
}

Brands.propTypes = {
  className: PropTypes.string,
  currentUser: PropTypes.object,
  cartCount: PropTypes.number,
  menuInfo: PropTypes.object,
  selectedBrands: PropTypes.array,
  popularBrands: PropTypes.array,
  brandCategories: PropTypes.array,
  selectedCategory: PropTypes.object,
  onChangeBrandCategory: PropTypes.func,
  brandsList: PropTypes.array,
  onAddBrand: PropTypes.func,
  onDeleteBrand: PropTypes.func,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default Brands
