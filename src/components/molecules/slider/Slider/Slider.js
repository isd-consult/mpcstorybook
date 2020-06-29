import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './Slider.scss'
import SlideItem from 'components/molecules/slider/SlideItem'
import SlideNavigatorItem from 'components/molecules/slider/SlideNavigatorItem'
import noimage from 'assets/images/noimage.png'

class Slider extends Component {
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
          'slider',
          className
        )}
      >
        {
          items && items.map((item, index)=>(
            <SlideItem
              key={index.toString()} 
              title={item.name}
              link={item.link}
              backgroundImage={item.s3_filepath}
              theme={theme}
              active={curIndex===index}
            />
          ))
        }
        {
          items && items.length < 1 && (
          <SlideItem
            backgroundImage={noimage}
            theme={theme}
            active
          />
)
        }
        <div className="slider__nativigator">
          {
          items && items.map((item, index)=>(
            <SlideNavigatorItem 
              key={index.toString()}
              onClick={()=>{this.setState({curIndex: index})}}
              theme={theme}
              active={curIndex===index}
            />
          )) 
        }
        </div>
      </div>
    )
  }
}

Slider.defaultProps = {
  className: '',
  duration: 500,
  items: null,
  theme: null
}

Slider.propTypes = {
  className: PropTypes.string,
  duration: PropTypes.number,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  theme: PropTypes.oneOf([null, 'men', 'women'])
}

export default Slider
