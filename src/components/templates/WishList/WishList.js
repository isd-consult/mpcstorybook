import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BaseLayout from 'components/layouts/BaseLayout'
import './WishList.scss'
import SectionWishList 
  from 'components/organisms/sections/wishlist/SectionWishList'

class WishList extends Component {
  render () {
    const {
      cartCount,
      className,
      menuInfo,
      wishList,
      theme,
      removeProductFromWish,
      onMoreClick,
      totalCount,
      addProductToCart,
      isLoading,
      ...others
    } = this.props
    return (
      <BaseLayout
        theme={theme}
        cartCount={cartCount}
        menuInfo={menuInfo}
        {...others}
      >
        <SectionWishList 
          theme={theme}
          wishList={wishList}
          isLoading={isLoading}
          removeProductFromWish={removeProductFromWish}
          onMoreClick={onMoreClick}
          addProductToCart={addProductToCart}
          totalCount={totalCount}
        />
      </BaseLayout>
    )
  }
}

WishList.defaultProps = {
  cartCount: 0,
  className: '',
  menuInfo: null,
  wishList: null,
  theme: null,
  removeProductFromWish: null,
  onMoreClick: null,
  addProductToCart: null,
  totalCount: 0,
  isLoading: false,
}

WishList.propTypes = {
  cartCount: PropTypes.number,
  className: PropTypes.string,
  menuInfo: PropTypes.object,
  wishList: PropTypes.array,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  removeProductFromWish: PropTypes.func,
  onMoreClick: PropTypes.func,
  addProductToCart: PropTypes.func,
  totalCount: PropTypes.number,
  isLoading: PropTypes.bool,
}

export default WishList
