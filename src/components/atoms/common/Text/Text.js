import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

import './Text.scss'

class Text extends Component {
  render() {
    const {
      align,
      children,
      className,
      color,
      tag,
      isUppercase,
      isUnderline,
      isLineThrough,
      fw,
      lh,
      size: sizeProp,
      theme,
      ...tagProps
    } = this.props

    const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5']
    let size = null

    if (headingTags.some(headingTag => headingTag === tag)) {
      size = tag
    }

    const props = {
      className: clsx(
        'a-text',
        {
          [`a-text--${color}`]: color && color !== '' && color !== 'null',
          [`a-text--size-${sizeProp}`]: sizeProp,
          [`a-text--${size}`]: size,
          'a-text--align-center': align === 'center',
          'a-text--align-right': align === 'right',
          'a-text--uppercase': isUppercase,
          'a-text--underline': isUnderline,
          'a-text--linethrough': isLineThrough,
          [`a-text--${fw}`]: fw,
          [`a-text--lh-${lh}`]: lh,
          [`a-text--link`]: tagProps.href,
          [`a-text--${theme}`]: theme,
        },
        className,
      ),
      ...tagProps,
    }

    const Root = `${tag}`

    if (tagProps.to) {
      return (
        <Link to={tagProps.to} {...props}>
          {children}
        </Link>
      )
    }
    return <Root {...props}>{children}</Root>
  }
}

Text.defaultProps = {
  tag: 'div',
  color: null,
  fw: null,
  children: null,
  align: 'left',
  className: '',
  size: null,
  lh: null,
  isUppercase: false,
  isUnderline: false,
  isLineThrough: false,
  theme: null,
}

Text.propTypes = {
  color: PropTypes.oneOf([
    null,
    '',
    'danger',
    'coral',
    'chico',
    'white',
    'silver',
    'cerulean',
    'ziggurat',
    'grey',
    'green',
    'red',
    'silver-chalice',
    'bright-chico',
  ]),
  fw: PropTypes.oneOf([null, 'bold', 'light', 'medium', 'heavy']),
  children: PropTypes.node,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  className: PropTypes.string,
  size: PropTypes.oneOf([
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
  lh: PropTypes.oneOf(['1-4', '1-5', '1-6']),
  tag: PropTypes.string,
  isUppercase: PropTypes.bool,
  isUnderline: PropTypes.bool,
  isLineThrough: PropTypes.bool,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default Text
