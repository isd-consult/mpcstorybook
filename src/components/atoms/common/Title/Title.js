import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import './Title.scss'

class Title extends Component {
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

    const Root = `${tag}`
    return (
      <Root
        className={clsx(
          'a-title',
          {
            [`a-title--${color}`]: color&&color!==''&&color!=='null',
            [`a-title--size-${sizeProp}`]: sizeProp,
            [`a-title--${size}`]: size,
            'a-title--align-center': align === 'center',
            'a-title--align-right': align === 'right',
            'a-title--uppercase': isUppercase,
            'a-title--underline': isUnderline,
            'a-title--linethrough': isLineThrough,
            [`a-title--${fw}`]: fw,
            [`a-title--lh-${lh}`]: lh,
            [`a-title--link`]: tagProps.href,
            [`a-title--${theme}`]: theme,
          },
          className,
        )}
        {...tagProps}
      >
        {children}
      </Root>
    )
  }
}

Title.defaultProps = {
  tag: 'div',
  color: null,
  fw: 'bold',
  children: null,
  align: 'left',
  className: '',
  size: 'h1',
  lh: null,
  isUppercase: true,
  isUnderline: false,
  isLineThrough: false,
  theme: null,
}

Title.propTypes = {
  color: PropTypes.oneOf([
    null,
    '',
    'coral',
    'chico',
    'white',
    'silver',
    'cerulean',
    'ziggurat',
    'grey'
  ]),
  fw: PropTypes.oneOf([null, 'bold', 'light', 'medium', 'heavy']),
  children: PropTypes.node,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  className: PropTypes.string,
  size: PropTypes.oneOf([
    'xxs',
    'xs',
    'small',
    'h1',
    'h2',
    'h3',
    'xl',
    'xxl',
    'xxxl',
    'normal',
    'l'
  ]),
  lh: PropTypes.oneOf(['1-4', '1-5', '1-6']),
  tag: PropTypes.string,
  isUppercase: PropTypes.bool,
  isUnderline: PropTypes.bool,
  isLineThrough: PropTypes.bool,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default Title