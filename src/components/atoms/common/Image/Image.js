import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StringUtils from 'utils/StringUtils'
import clsx from 'clsx'
import noimage from 'assets/images/noimage.png'
import './Image.scss'

class Image extends Component {
  render () {
    const {
      className,
      src,
      alt,
      isThumb
    } = this.props

    return (
      <img 
        className={clsx(
          'image',
          className
        )}
        src={isThumb?StringUtils.getThumbnail(src):src}
        alt={alt}
        onError={
          (e)=>{
            e.target.onerror = null 
            e.target.src = noimage
          }
        }
      />
    )
  }
}

Image.defaultProps = {
  className: '',
  src: null,
  alt: 'image',
  isThumb: false
}

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  isThumb: PropTypes.bool
}

export default Image
