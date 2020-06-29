import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './CardItem.scss'

import Text from 'components/atoms/common/Text'
import ButtonFavorite from 'components/molecules/buttons/ButtonFavorite'
import Icon from 'components/atoms/common/Icon'

import ThemeUtils from 'utils/ThemeUtils'
import StringUtils from 'utils/StringUtils'
import {Link} from 'react-router-dom'
import noimage from 'assets/images/noimage.png'

class CardItem extends Component {
  render() {
    const {
      className,
      image,
      name,
      price,
      href,
      type,
      badge,
      isUnseen,
      isFavorite,
      id,
      onFavoriteChange,
      isFavoriteShow,
      theme,
    } = this.props

    const isRounded = type === 'rounded'

    return (
      <Link
        to={href}
        className={clsx(
          'card-item',
          { [`card-item--${type}`]: type, [`card-item--${theme}`]: theme },
          className,
        )}
      >
        <div className="card-item__head">
          <img
            className="card-item__image" 
            src={StringUtils.getThumbnail(image.src)}
            onError={
            (e)=>{
              e.target.onerror = null 
              e.target.src = noimage
            }
          }
            alt={image.title}
          />
          {badge && (
            <Text
              className="card-item__badge"
              isUppercase
              color={ThemeUtils.themeToColor(theme) || 'white'}
              align="center"
              lh="1-6"
              fw={isRounded ? null : 'bold'}
            >
              {badge}
            </Text>
          )}
          {isUnseen && (
            <div className="card-item__unseen">
              <Icon
                size={20}
                name='eye'
                fill='#9d9d9d'
              />
              <Text
                isUppercase
                color='silver'
                align="center"
                size="xs"
                fw={isRounded ? null : 'bold'}
              >
                New
              </Text>
            </div>
          )}
          {isFavoriteShow && (
            <ButtonFavorite
              className="card-item__favorite"
              id={id}
              theme={theme}
              isFavorite={isFavorite}
              onChange={onFavoriteChange}
            />
          )}
        </div>
        {name && (
          <Text
            className="mt-5"
            color={!isRounded ? 'white' : null}
            fw={isRounded ? 'light' : 'medium'}
            align={isRounded ? 'center' : null}
            size="normal"
            lh='1-6'
          >
            {name}
          </Text>
        )}

        {!isRounded && (
          <Text className='card-item__price' lh='1-6'>
            {StringUtils.formatPrice(price)}
          </Text>
        )}
      </Link>
    )
  }
}

CardItem.defaultProps = {
  className: '',
  image: {
    src: '',
    title: 'Image',
  },
  name: '',
  type: null,
  href: '/',
  price: 0,
  badge: '',
  isUnseen: false,
  isFavorite: false,
  isFavoriteShow: false,
  onFavoriteChange: null,
  id: null,
  theme: null,
}

CardItem.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string,
  }),
  name: PropTypes.string,
  price: PropTypes.number,
  href: PropTypes.string,
  type: PropTypes.oneOf([null, 'rounded', 'small']),
  badge: PropTypes.string,
  isUnseen: PropTypes.bool,
  isFavorite: PropTypes.bool,
  isFavoriteShow: PropTypes.bool,
  onFavoriteChange: PropTypes.func,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default CardItem
