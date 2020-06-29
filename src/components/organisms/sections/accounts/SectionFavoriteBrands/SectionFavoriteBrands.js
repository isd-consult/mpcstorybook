import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionFavoriteBrands.scss'
import Title from 'components/molecules/texts/Title'
import Text from 'components/atoms/common/Text'
import StringUtils from 'utils/StringUtils'
import noimage from 'assets/images/noimage.png'

class SectionFavoriteBrands extends Component {
  render () {
    const {
      className,
      title,
      link,
      data,
      placeholder,
      theme,
    } = this.props

    return (
      <div
        className={clsx(
          'section-favorite-brands',
          className
        )}
      >
        <Title
          title={title}
          link={link}
          mode="account"
          theme={theme}
        />
        <div style={{display: 'flex'}}>
          {
            data && data.length>0
              ? data.map((item, index)=>(
                <img 
                  key={index.toString()}
                  className="section-favorite-brands__item mr-10"
                  src={StringUtils.getThumbnail(item.image.src)}
                  alt={item.image.title}
                  onError={
                    (e)=>{
                      e.target.onerror = null 
                      e.target.src = noimage
                    }
                  }
                />
              ))
              : <Text className="mt-20">{placeholder}</Text>
          }
        </div>
      </div>
    )
  }
}

SectionFavoriteBrands.defaultProps = {
  className: '',
  title: '',
  link: null,
  data: null,
  placeholder: null,
  theme: null
}

SectionFavoriteBrands.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.object,
  data: PropTypes.array,
  placeholder: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women'])
}

export default SectionFavoriteBrands
