import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionProductSlider.scss'
import SliderCore from 'components/molecules/slider/SliderCore'
import Image from 'components/atoms/common/Image'

class SectionProductSlider extends Component {
  render () {
    const {
      className,
      items,
      theme,
    } = this.props

    return (
      <div
        className={clsx(
          'section-product-slider',
          className
        )}
      >
        <SliderCore theme={theme}>
          {
            items && items.map((item, idx) => (
              <Image
                key={idx.toString()}
                src={item.s3_filepath}
                alt={item.position}
                isThumb
              />
            ))
          }
        </SliderCore>
      </div>
    )
  }
}

SectionProductSlider.defaultProps = {
  className: '',
  items: null,
  theme: null,
}

SectionProductSlider.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  theme: PropTypes.oneOf([null, 'men', 'women'])
}

export default SectionProductSlider
