import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './ProductDetail.scss'

import BaseLayout from 'components/layouts/BaseLayout'
import SectionProductSlider 
  from 'components/organisms/sections/productdetail/SectionProductSlider'
import SectionAddToCart
  from 'components/organisms/sections/productdetail/SectionAddToCart'
import SectionItems
  from 'components/organisms/sections/productdetail/SectionItems'
import SectionRecentlyItems
  from 'components/organisms/sections/productdetail/SectionRecentlyItems'
import SectionSimilarStyles 
  from 'components/organisms/sections/productdetail/SectionSimilarStyles'
import SectionAvailableItems
  from 'components/organisms/sections/productdetail/SectionAvailableItems'
import SectionProductInfo
  from 'components/organisms/sections/productdetail/SectionProductInfo'
import ButtonBack from 'components/molecules/buttons/ButtonBack'

class ProductDetail extends Component {
  render () {
    const {
      product,
      getProductDtd,
      dtd,
      fitMeLink,
      availableItems,
      onAddCartClick,
      onAddToWishClick,
      lookLink,
      lookItems,
      onFavoriteChange,
      similarItems,
      recentlyViewedItems,
      theme,
      addedToWish,
      isAuthenticated,
      ...others
    } = this.props

    return (
      <BaseLayout
        theme={theme}
        isAuthenticated={isAuthenticated}
        {...others}
      >
        <ButtonBack className="product-detail__backbtn" />
        <SectionProductSlider
          theme={theme}
          items={product && product.images}
        />
        {product && (
        <SectionAddToCart
          theme={theme}
          product={product}
          getProductDtd={getProductDtd}
          fitMeLink={fitMeLink}
          onAddCartClick={onAddCartClick}
          onAddToWishClick={onAddToWishClick}
          addedToWish={addedToWish}
          isAuthenticated={isAuthenticated}
        />
)}
        <SectionAvailableItems 
          theme={theme}
          items={availableItems}
          title="Also available in"
        />
        <SectionProductInfo 
          theme={theme}
          product={product}
          dtd={dtd}
        />
        <SectionItems
          title='Complete your look'
          rowCount={1}
          link={lookLink}
          items={lookItems}
          onFavoriteChange={onFavoriteChange}
          theme={theme}
          isAuthenticated={isAuthenticated}
        />
        <SectionSimilarStyles
          theme={theme}
          items={similarItems}
          isAuthenticated={isAuthenticated}
        />
        <SectionRecentlyItems
          title='Recently Viewed'
          rowCount={1}
          theme={theme}
          items={recentlyViewedItems}
          isAuthenticated={isAuthenticated}
        />
      </BaseLayout>
    )
  }
}

ProductDetail.defaultProps = {
  product: null,
  dtd: null,
  fitMeLink: null,
  availableItems: null,
  getProductDtd: null,
  onAddCartClick: null,
  onAddToWishClick: null,
  lookLink: {
    href: '',
    text: '',
  },
  lookItems: null,
  similarItems: null,
  recentlyViewedItems: null,
  onFavoriteChange: null,
  theme: null,
  addedToWish: false,
  isAuthenticated: false,
}

ProductDetail.propTypes = {
  recentlyViewedItems: PropTypes.array,
  product: PropTypes.object,
  dtd: PropTypes.object,
  fitMeLink: PropTypes.string,
  getProductDtd: PropTypes.func,
  onAddCartClick: PropTypes.func,
  onAddToWishClick: PropTypes.func,
  availableItems: PropTypes.array,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  lookLink: PropTypes.shape({
    href: PropTypes.string,
    text: PropTypes.string,
  }),
  lookItems: PropTypes.array,
  onFavoriteChange: PropTypes.func,
  similarItems: PropTypes.array,
  addedToWish: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
}

export default ProductDetail
