import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './BasicChart.scss'

class BasicChart extends Component {
  render () {
    const {
      className,
      height,
      items,
      render,
      attr,
    } = this.props

    let max = 0
    if (items) {
      items.forEach(item=>{
        if (max < item[attr]) max = item[attr]
      })
    }
    
    return (
      <div
        className={clsx(
          'basic-chart',
          className
        )}
        style={{height}}
      >
        {max>0 && items && items.map((item, index)=>(
          <div
            key={index.toString()}
            className="basic-chart__bar"
            style={{
            height: `${item[attr] / max * height}px`,
          }}
          >
            {render && render(item)}
          </div>
))}
      </div>
    )
  }
}

BasicChart.defaultProps = {
  className: '',
  height: 200,
  items: null,
  render: null,
  attr: 'value',
}

BasicChart.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  items: PropTypes.array,
  render: PropTypes.func,
  attr: PropTypes.string,
}

export default BasicChart
