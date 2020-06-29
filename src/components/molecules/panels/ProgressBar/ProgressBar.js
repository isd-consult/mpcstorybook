import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './ProgressBar.scss'

class ProgressBar extends Component {
  render () {
    const {
      className,
      stepItems,
      current,
    } = this.props

    return (
      <div
        className={clsx(
          'progress-bar',
          className
        )}
      >
        <ul className="list-unstyled multi-steps">
          {
          stepItems && stepItems.map((item, i)=>(
            <li
              key={i.toString()} 
              className={clsx({'is-active':current===i})}
            >
              {item.name}
            </li>
          ))
        }
        </ul>
      </div>
    )
  }
}

ProgressBar.defaultProps = {
  className: '',
  stepItems: null,
  current: 0,
}

ProgressBar.propTypes = {
  className: PropTypes.any,
  stepItems: PropTypes.array,
  current: PropTypes.number,
}

export default ProgressBar
