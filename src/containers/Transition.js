import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withRouter } from 'react-router-dom'

// For example
// https://blog.etch.team/react-page
// -transitions-make-your-website-feel-native-bf2804b011dc
class Transition extends Component {
  render() {
    const {
      className,
      children,
      page,
    } = this.props

    return (
      <div 
        className={clsx(
          'page',
          {[`page--${page}`]: page},
          className
        )}
      >
        {children}
      </div>
    )
  }
}

Transition.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  page: PropTypes.string
}

Transition.defaultProps = {
  children: null,
  className: null,
  page: null
}

export default withRouter(Transition)