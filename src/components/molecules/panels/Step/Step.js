import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './Step.scss'

class Step extends Component {
  render () {
    const {
      className,
      active,
      children
    } = this.props

    return (
      <div
        className={clsx(
          'step',
          {'step--active':active},
          className
        )}
      >
        {children}
      </div>
    )
  }
}

Step.defaultProps = {
  className: '',
  active: null,
  children: null,
}

Step.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.node
}

export default Step
