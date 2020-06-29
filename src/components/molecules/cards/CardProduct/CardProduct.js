import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './CardProduct.scss'
import Text from 'components/atoms/common/Text'
import Icon from 'components/atoms/common/Icon'
import ButtonFavorite from 'components/molecules/buttons/ButtonFavorite'

import ThemeUtils from 'utils/ThemeUtils'
import Price from 'components/molecules/texts/Price'
import TrackingInfo from 'components/molecules/overlays/TrackingInfo'
import ScoresInfo from 'components/molecules/overlays/ScoresInfo'
import Soldout from 'components/molecules/overlays/Soldout'
import { Link } from 'react-router-dom'
import StringUtils from 'utils/StringUtils'
import noimage from 'assets/images/noimage.png'

class CardProduct extends Component {
  render() {
    const {
      className,
      image,
      title,
      sku,
      subTitle,
      price,
      discount,
      credit,
      href,
      badge,
      isFavorite,
      id,
      onFavoriteChange,
      isUnseen,
      isFavoriteShow,
      isInCart,
      isSoldOut,
      theme,
      trackingInfo,
      isAdmin,
      scores,
      position,
    } = this.props

    return (
      <Link
        to={{ pathname: href, state: {
            prev: true,
            position,
            version: scores && scores.version,
            qs: scores && scores.qs,
            qw: scores && scores.qw,
            rs: scores && scores.rs,
            rw: scores && scores.rw,
            ts: scores && scores.ts,
            tw: scores && scores.tw,
            percentage_score: scores && scores.percentage_score,
          } }}
        className={clsx(
          'card-product',
          { [`card-product--${theme}`]: theme },
          { 'card-product--read': trackingInfo.is_read },
          className,
        )}
        data-sku={sku}
        data-position={position}
        data-label={subTitle}
        data-version={scores && scores.version}
        data-qs={scores && scores.qs}
        data-qw={scores && scores.qw}
        data-rs={scores && scores.rs}
        data-rw={scores && scores.rw}
        data-ts={scores && scores.ts}
        data-tw={scores && scores.tw}
        data-percentage_score={scores && scores.percentage_score}
      >
        <div className="card-product__head">
          {scores && isAdmin && (
            <ScoresInfo className="card-product__scoresinfo" data={scores} />
          )}
          {isSoldOut && <Soldout />}
          <div className="card-product__image-wrap">
            <img
              className="card-product__image"
              src={StringUtils.getThumbnail(image.src)}
              alt={image.title}
              onError={e => {
                e.target.onerror = null
                e.target.src = noimage
              }}
            />
          </div>
          {isAdmin && (
            <div className="card-product__trackinginfo">
              <TrackingInfo
                views={trackingInfo.views}
                clicks={trackingInfo.clicks}
              />
            </div>
          )}
          {badge && (
            <Text
              className="card-product__badge"
              isUppercase
              color={ThemeUtils.themeToColor(theme) || 'white'}
              align="center"
              lh="1-6"
            >
              {badge}
            </Text>
          )}
          {isUnseen && (
            <div className="card-product__unseen">
              <Icon size={20} name="eye" fill="#9d9d9d" />
              <Text
                className="card-product__new"
                isUppercase
                color="silver"
                align="center"
                size="xxs"
              >
                New
              </Text>
            </div>
          )}
          {credit && (
            <Text className="card-product__fbucks" size="xxs">
              {`EARN R${credit} FBUCKS`}
            </Text>
          )}
          {isFavoriteShow && (
            <ButtonFavorite
              className="card-product__favorite"
              id={id}
              theme={theme}
              isFavorite={isFavorite}
              onChange={onFavoriteChange}
            />
          )}
          {isInCart && (
            <div
              className="card-product__cart
                pt-10 pr-10 pb-10 pl-10"
            >
              <Icon name="cart" size={15} theme={theme} />
            </div>
          )}
        </div>
        <div className="card-product__content pt-15 pb-15">
          {title && (
            <Text
              color={ThemeUtils.themeToColor(theme)}
              isUppercase
              fw="medium"
              size="xs"
              lh="1-6"
            >
              {title}
            </Text>
          )}
          {subTitle && (
            <Text className="mt-5" size="s" lh="1-4">
              {subTitle}
            </Text>
          )}
          <Price price={price} discount={discount} isVertical />
        </div>
      </Link>
    )
  }
}

CardProduct.defaultProps = {
  id: null,
  className: '',
  image: {
    src: '',
    title: 'Image',
  },
  href: null,
  badge: '',
  isFavorite: false,
  isFavoriteShow: false,
  onFavoriteChange: null,
  isInCart: false,
  isSoldOut: false,
  title: null,
  sku: null,
  subTitle: null,
  price: null,
  discount: null,
  credit: null,
  theme: null,
  trackingInfo: {
    is_read: null,
    views: null,
    clicks: null,
  },
  isAdmin: false,
  isUnseen: false,
  scores: null,
  position: 1,
}

CardProduct.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string,
  }),
  href: PropTypes.string,
  badge: PropTypes.string,
  isFavorite: PropTypes.bool,
  isFavoriteShow: PropTypes.bool,
  onFavoriteChange: PropTypes.func,
  isInCart: PropTypes.bool,
  isSoldOut: PropTypes.bool,
  title: PropTypes.string,
  sku: PropTypes.string,
  subTitle: PropTypes.string,
  price: PropTypes.number,
  discount: PropTypes.number,
  credit: PropTypes.number,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  trackingInfo: PropTypes.shape({
    is_read: PropTypes.bool,
    views: PropTypes.number,
    clicks: PropTypes.number,
  }),
  isAdmin: PropTypes.bool,
  isUnseen: PropTypes.bool,
  scores: PropTypes.object,
  position: PropTypes.any,
}

export default CardProduct
