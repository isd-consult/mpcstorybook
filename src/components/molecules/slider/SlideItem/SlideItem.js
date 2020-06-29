import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SlideItem.scss'
import ButtonIcon from 'components/molecules/buttons/ButtonIcon'
import noimage from 'assets/images/noimage.png'

class SlideItem extends Component {
  render () {
    const {
      backgroundImage,
      title,
      link,
      active,
      theme,
      className
    } = this.props

    return (
      <div
        className={clsx(
          'slide-item',
          {'slide-item--active': active},
          {[`slide-item--${theme}`]: theme},
          className
        )}
        style={{ backgroundImage: 
            backgroundImage?`url(${backgroundImage})`:`url(${noimage})` }}
      >
        {
            title && (
            <p className={clsx(
              'slide-item__title',
            )}
            >
              {title}
            </p>
)
          }
        {
            link && (
            <ButtonIcon
              className="slide-item__infoicon"
              href={link}
              icon="info"
              theme={theme}
            />
)
          }
      </div>

    )
  }
}

SlideItem.defaultProps = {
  backgroundImage: '',
  title: '',
  link: '',
  className: '',
  active: false,
  theme: null
}

SlideItem.propTypes = {
  className: PropTypes.string,
  backgroundImage: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  active: PropTypes.bool,
  theme: PropTypes.oneOf([null, 'men', 'women'])
}

export default SlideItem
