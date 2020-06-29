import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './Banner.scss'
import BannerItem from 'components/molecules/banners/OldBanner/BannerItem'

class Banner extends Component {
  constructor() {
    super()
    this.state = {
      curIndex: 0,
    }
    this.moveSlide = this.moveSlide.bind(this)
  }

  componentDidMount() {
    const {duration} = this.props 
    this.timer = setInterval(this.moveSlide, duration)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  moveSlide() {
    const {curIndex} = this.state
    const {items} = this.props
    if (items && items.length) {
      const nextIndex = (curIndex + 1) % items.length
      this.setState({curIndex: nextIndex})
    }
  }

  render () {
    const {
      className,
      items,
      theme,
    } = this.props
    
    const {
      curIndex
    } = this.state

    return (
      <div
        className={clsx(
          'banner',
          className
        )}
      >
        {
          items && items.map((item, index)=>{
            const len = items.length
            const mod = (curIndex - index + len) % len
            let status
            if (mod === 0)
              status = 'active'
            else if (mod === 1)
              status = 'after'
            else if (mod === (len - 1))
              status = 'previous'
            else
              status = null

            return (
              <BannerItem
                key={index.toString()}
                theme={theme}
                status={status}
                title={item.title}
                heading={item.heading}
                subheading={item.subheading}
                backgroundImage={item.image}
                buttons={item.buttons}
                className={className}
                url={item.url}
              />
)
          })
        }
      </div>
    )
  }
}

Banner.defaultProps = {
  className: '',
  duration: 7000,
  items: null,
  theme: null
}

Banner.propTypes = {
  className: PropTypes.string,
  duration: PropTypes.number,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      banner_id: PropTypes.number,
      title: PropTypes.string,
      gender: PropTypes.array,
      position: PropTypes.number,
      active: PropTypes.number,
      start_date: PropTypes.string,
      end_date: PropTypes.string,
      image: PropTypes.string,
      url: PropTypes.string,
      heading: PropTypes.string,
      subheading: PropTypes.string,
      buttons: PropTypes.arrayOf(
        PropTypes.shape({
          colour: PropTypes.string,
          text: PropTypes.string,
          url: PropTypes.string
        })
      )
    })
  ),
  theme: PropTypes.oneOf([null, 'men', 'women'])
}

export default Banner
