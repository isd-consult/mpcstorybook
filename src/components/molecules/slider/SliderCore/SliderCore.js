import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './SliderCore.scss'

class SliderCore extends Component {
  render() {
    const {
      className,
      settings: settingsProp,
      theme,
      children,
      innerRef,
    } = this.props

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      autoplay: true,
      autoplaySpeed: 4500,
      ...settingsProp,
    }

    return (
      <Slider
        className={clsx(
          'slider-core',
          {
            [`slider-core--${theme}`]: theme,
          },
          className,
        )}
        ref={innerRef}
        {...settings}
      >
        {React.Children.map(children, child => (
          <div className="slider-core__item">{React.cloneElement(child)}</div>
        ))}
      </Slider>
    )
  }
}

SliderCore.defaultProps = {
  className: '',
  height: null,
  settings: {},
  theme: null,
  children: null,
  innerRef: null,
}

SliderCore.propTypes = {
  className: PropTypes.string,
  settings: PropTypes.object,
  height: PropTypes.number,
  theme: PropTypes.oneOf(['men', 'women', 'secondary']),
  children: PropTypes.any,
  innerRef: PropTypes.any,
}

export default React.forwardRef((props, ref) => (
  <SliderCore innerRef={ref} {...props} />
))
