import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import noUiSlider from 'nouislider'
import 'nouislider/distribute/nouislider.css'

import './QuestionsSlider.scss'

class QuestionsSlider extends Component {
  constructor(props) {
    super(props)
    this.$slider = React.createRef()
    this.onClickPip = this.onClickPip.bind(this)
  }

  componentDidMount() {
    this.initSlider()
  }

  componentDidUpdate(prevProps) {
    const { value: prevValue, isVertical: prevVertical } = prevProps
    const { value: nextValue, isVertical: nextVertical } = this.props

    if (JSON.stringify(prevValue) !== JSON.stringify(nextValue)) {
      this.$slider.current.noUiSlider.set(this.convertValue(nextValue))
    }

    if (prevVertical !== nextVertical) {
      this.initSlider()
    }
  }

  componentWillUnmount() {
    this.destroySlider()
  }

  onClickPip(e) {
    this.$slider.current.noUiSlider.set(
      this.convertValue(e.currentTarget.innerText),
    )
  }

  initSlider() {
    this.destroySlider()

    const slider = this.$slider.current
    const { items, isVertical, onChange, value } = this.props

    const options = {
      start: value ? this.convertValue(value) : 1,
      range: {
        min: 1,
        max: items.length,
      },
      step: 1,
      connect: true,
      orientation: isVertical ? 'vertical' : 'horizontal',
      pips: {
        density: 999,
        mode: 'values',
        values: items.map((k, i) => i + 1),
        format: {
          to: val => items[val - 1],
        },
        stepped: false,
      },
    }

    if (isVertical) {
      slider.style.height = `${items.length * 40}px`
    }
    noUiSlider.create(slider, options)

    slider.noUiSlider.on('update', values => {
      this.highlightPips(values)
    })

    slider.noUiSlider.on('set', values => {
      const from = parseInt(values[0], 10) - 1
      const to = parseInt(values[1], 10) - 1

      if (onChange) {
        if (to) {
          const data = items.filter((label, index) => {
            if (from <= index && to >= index) {
              return label
            }
            return false
          })
          onChange(data)
        } else {
          onChange(items[from])
        }
      }
    })
  }

  highlightPips(values) {
    const { value } = this.props
    const $values = this.$slider.current.querySelectorAll('.noUi-value')

    $values.forEach((node, key) => {
      node.classList.remove('active')

      const number = key + 1
      const from = parseInt(values[0], 10)
      const to = parseInt(values[1], 10)

      if (number >= from && number <= to) {
        node.classList.add('active')
      }

      if (!to && number === from) {
        node.classList.add('active')
      }

      if (!value || typeof value === 'string') {
        node.addEventListener('click', this.onClickPip)
      }
    })
  }

  convertValue(value) {
    const { items } = this.props

    if (typeof value === 'string') {
      return items.indexOf(value) + 1
    }
    const indexes = []
    value.forEach(item => {
      indexes.push(items.indexOf(item) + 1)
    })

    return [Math.min(...indexes), Math.max(...indexes)]
  }

  destroySlider() {
    const { value } = this.props
    const slider = this.$slider.current

    if (slider.noUiSlider) {
      const $values = slider.querySelectorAll('.noUi-value')

      $values.forEach(node => {
        if (!value || typeof value === 'string') {
          node.removeEventListener('click', this.onClickPip)
        }
      })

      slider.style = null
      slider.noUiSlider.destroy()
    }
  }

  render() {
    const { className } = this.props

    return (
      <div className={clsx('questions-slider', className)}>
        <div className="questions-slider__slider" ref={this.$slider} />
        <div className="questions-slider__items" />
      </div>
    )
  }
}

QuestionsSlider.defaultProps = {
  className: '',
  items: ['One', 'Two', 'Three'],
  isVertical: false,
  onChange: null,
  value: null,
}

QuestionsSlider.propTypes = {
  className: PropTypes.string,
  isVertical: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  value: PropTypes.any,
}

export default QuestionsSlider
