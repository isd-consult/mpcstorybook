/* eslint-disable max-len */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import SliderCore from 'components/molecules/slider/SliderCore'
import Text from 'components/atoms/common/Text'
import Button from 'components/molecules/buttons/Button'
import Spinner from 'components/molecules/spinners/Spinner'
import anime from 'animejs'

import './MainBanner.scss'

class MainBanner extends Component {
  constructor() {
    super()
    this.$slider = React.createRef()
    this.animations = []
  }

  componentDidUpdate(prevProps) {
    const { items: itemsNext } = this.props
    const { items: itemsPrev } = prevProps

    if (itemsNext !== itemsPrev && this.slider) {
      const { children } = this.slider.props

      if (children) {
        this.setAnimations(children)
      }
    }
  }

  componentWillUnmount() {
    this.removeAnimations()
  }

  setAnimations(children = []) {
    const { current: $slider } = this.$slider

    if ($slider) {
      const items = $slider.querySelectorAll('.main-banner__item')

      children.forEach((child, index) => {
        const texts = items[index].querySelectorAll('.main-banner__text')
        const buttons = items[index].querySelectorAll('.main-banner__button')
        const line = items[index].querySelector('.main-banner__line')

        const timeline = anime.timeline({
          easing: 'easeOutExpo',
          duration: 1000,
        })

        timeline.set(texts, {
          translateX: 0,
          opacity: 1,
        })

        timeline
          .add(
            {
              targets: texts,
              translateX: -50,
              opacity: 0,
              easing: 'easeInOutExpo',
              delay: anime.stagger(100),
            },
            0,
          )
          .add(
            {
              targets: buttons,
              translateX: 50,
              opacity: 0,
              easing: 'easeInOutExpo',
              delay: anime.stagger(100),
            },
            0,
          )
          .add(
            {
              targets: line,
              width: 0,
              easing: 'easeInOutExpo',
            },
            0,
          )

        timeline.pause()

        this.animations[index] = {
          nodes: [...texts, ...buttons, line],
          animation: timeline,
        }
      })
    }
  }

  removeAnimations () {
    this.animations.forEach(instance => {
      anime.remove(instance.nodes)
    })
    this.animations = []
  }

  beforeChange(prevIndex, nextIndex) {
    const { animation } = this.animations[prevIndex]
    const { animation: animationNext } = this.animations[nextIndex]

    if (animation.reversed) {
      animation.reverse()
    }

    animation.play()

    if (!animationNext.reversed) {
      animationNext.seek(animationNext.duration)
      animationNext.completed = false
      animationNext.reverse()
    }

    animationNext.play()
  }

  render() {
    const { className, items, theme } = this.props

    if (!items || !items.length)
      return <Spinner isLogo isCentered size="large" />

    return (
      <div ref={this.$slider}>
        <SliderCore
          theme='secondary'
          settings={{
            autoplay: true,
            speed: 1500,
            autoplaySpeed: 8000,
            dots: true,
            fade: true,
            beforeChange: (prev, next) => this.beforeChange(prev, next),
          }}
          ref={slider => (this.slider = slider)}
          className={clsx('main-banner', className)}
        >
          {items &&
            items.map((item, index) => (
              <div key={index.toString()} className="main-banner__item">
                <div
                  className="main-banner__content"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <Text
                    color="white"
                    isUppercase
                    className="main-banner__text main-banner__title"
                  >
                    {item.title}
                  </Text>
                  <div className="main-banner__line mb-10 mt-10" />
                  <Text
                    className="main-banner__text mb-10"
                    color="white"
                    tag="h1"
                    fw="heavy"
                  >
                    {item.heading}
                  </Text>
                  <Text
                    className="main-banner__text mb-30"
                    color="white"
                    size="xxl"
                    fw="medium"
                  >
                    {item.subheading}
                  </Text>
                  {item.buttons &&
                    item.buttons.map((button, key) => (
                      <div
                        className={
                          key + 1 !== item.buttons.length ? 'mb-15' : null
                        }
                        key={key.toString()}
                      >
                        <Button
                          tag="a"
                          auto
                          className="main-banner__button"
                          href={button.url}
                          icon="arrow"
                          fw="bold"
                          category={key === 1 ? 'tertiary' : null}
                          theme={theme}
                          backgroundColor={button.colour}
                        >
                          {button.text}
                        </Button>
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </SliderCore>
      </div>
    )
  }
}

MainBanner.defaultProps = {
  className: '',
  items: [],
  theme: null,
}

MainBanner.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
  theme: PropTypes.oneOf(['men', 'women', 'secondary']),
}

export default MainBanner
