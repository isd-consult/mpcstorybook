import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './CardCategory.scss'

import Text from 'components/atoms/common/Text'
import ThemeUtils from 'utils/ThemeUtils'
import {Link} from 'react-router-dom'
import Image from 'components/atoms/common/Image'

class CardCategory extends Component {
  render() {
    const {
      className,
      image,
      name,
      type,
      fontSize,
      href,
      theme,
      onClick
    } = this.props

    const isRounded = type === 'rounded'
    const isSmall = type === 'small'
    const isFlexed = type === 'flexed'

    return (
      <Link
        to={href}
        className={clsx(
          'card-category',
          {
            'card-category--small': isSmall,
            'card-category--rounded': isRounded,
            'card-category--flexed': isFlexed,
            [`card-category--${theme}`]: theme,
          },
          className,
        )}
        onClick={onClick}
      >
        <div
          className={clsx('card-category__image-wrap', {
            'mb-10': isRounded,
          })}
        >
          <Image
            className="card-category__image"
            src={image.src}
            alt={image.title}
          />
        </div>
        <div className="card-category__content">
          <Text
            className="card-category__name"
            align="center"
            size={fontSize}
            color={isRounded ? ThemeUtils.themeToColor(theme) : 'white'}
            fw={type ? 'medium' : 'bold'}
          >
            {name}
          </Text>
        </div>
      </Link>
    )
  }
}

CardCategory.defaultProps = {
  className: '',
  image: {
    src: '',
    title: 'Image',
  },
  name: '',
  type: null,
  fontSize: null,
  href: '/',
  theme: null,
  onClick: null
}

CardCategory.propTypes = {
  className: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string,
  }),
  name: PropTypes.string,
  href: PropTypes.string,
  type: PropTypes.oneOf([null, 'small', 'rounded', 'flexed']),
  fontSize: PropTypes.oneOf([
    'xxs',
    'xs',
    's',
    'small',
    'h1',
    'h2',
    'h3',
    'xl',
    'xxl',
    'xxxl',
    'normal',
    'l',
  ]),
  theme: PropTypes.oneOf([null, 'men', 'women']),
  onClick: PropTypes.func
}

export default CardCategory
