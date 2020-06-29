import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionWishList.scss'
import Text from 'components/atoms/common/Text'
import StringUtils from 'utils/StringUtils'
import Button from 'components/molecules/buttons/Button'
import WishItem from 'components/molecules/wish/WishItem'
import Spinner from 'components/molecules/spinners/Spinner'
import Icon from 'components/atoms/common/Icon'

class SectionWishList extends Component {

  render() {
    const {
      className,
      wishList,
      totalCount,
      onMoreClick,
      addProductToCart,
      removeProductFromWish,
      isLoading,
      theme
    } = this.props
    const disabledMoreBtn = wishList && (wishList.length >= totalCount)
    const viewedcount = wishList && wishList.length?wishList.length:0
    return (
      <div
        className={clsx(
          'section-wish-list',
          className
        )}
      >
        <Text
          className='pt-15 pb-15 section-wish-list__title'
          fw='bold'
          align='center'
          size='xxl'
        >
          Wish List
        </Text>
        {wishList && wishList.map((item, index) => (
          <WishItem
            className="section-wish-list__item"
            key={index.toString()}
            theme={theme}
            item={item}
            sku={item.simple_sku}
            removeProductFromWish={removeProductFromWish}
            addProductToCart={addProductToCart}
          />
))}
        {
          isLoading
          ? <Spinner className="mt-20" isCentered theme={theme} />
          : (
            <Text
              className='pt-20 pd-20'
              align='center'
            >
              {!viewedcount && (
                <>
                  <Icon name="shopping-bag" size={50} theme={theme} />
                  <p className="no-result-text">
                    There is no product in your wish list.
                  </p>
                </>
              )}
              {`${StringUtils.numberWithCommas(viewedcount)} of `
              + `${StringUtils.numberWithCommas(totalCount)} products viewed`}
            </Text>
          )
        }
        <Button
          className="section-wish-list__morebtn mt-20 mb-20"
          theme={theme}
          onClick={onMoreClick}
          isCentered
          isDisabled={disabledMoreBtn}
        >
          View more
        </Button>
      </div>
    )
  }
}

SectionWishList.defaultProps = {
  className: '',
  theme: null,
  wishList: null,
  removeProductFromWish: null,
  onMoreClick: null,
  addProductToCart: null,
  totalCount: 0,
  isLoading: false,
}

SectionWishList.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  wishList: PropTypes.array,
  removeProductFromWish: PropTypes.func,
  onMoreClick: PropTypes.func,
  addProductToCart: PropTypes.func,
  totalCount: PropTypes.number,
  isLoading: PropTypes.bool,
}

export default SectionWishList
