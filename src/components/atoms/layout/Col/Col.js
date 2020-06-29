import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './Col.scss'

class Col extends Component {
  render() {
    const {
      className,
      children,
      xs,
      isDebug,
      sm,
      md,
      lg,
      xsOffset,
      smOffset,
      mdOffset,
      lgOffset,
      first,
      last,
      center,
      hidden,
      tag,
      isAutoWidth
    } = this.props

    const Root = `${tag}`

    return (
      <Root
        className={clsx(
          'col',
          {
            debug: isDebug,
            [`col-xs-${xs}`]: xs,
            [`col-sm-${sm}`]: sm,
            [`col-md-${md}`]: md,
            [`col-lg-${lg}`]: lg,

            [`col-xs-offset-${xsOffset}`]: xsOffset,
            [`col-sm-offset-${smOffset}`]: smOffset,
            [`col-md-offset-${mdOffset}`]: mdOffset,
            [`col-lg-offset-${lgOffset}`]: lgOffset,

            [`first-${first}`]: first,
            [`last-${last}`]: last,
            [`center-${center}`]: center,
            [`hidden-${hidden}`]: hidden,

            'col--auto-width': isAutoWidth
          },
          className,
        )}
      >
        {children}
      </Root>
    )
  }
}

Col.defaultProps = {
  tag: 'div',
  children: '',
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xsOffset: null,
  smOffset: null,
  mdOffset: null,
  lgOffset: null,
  first: null,
  last: null,
  center: null,
  hidden: null,
  className: '',
  isDebug: false,
  isAutoWidth: false
}

Col.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  first: PropTypes.oneOf([null, 'xs', 'sm', 'md', 'lg']),
  last: PropTypes.oneOf([null, 'xs', 'sm', 'md', 'lg']),
  center: PropTypes.oneOf([null, 'xs', 'sm', 'md', 'lg']),
  hidden: PropTypes.oneOf([null, 'xs', 'sm', 'md', 'lg']),
  className: PropTypes.string,
  tag: PropTypes.string,
  isDebug: PropTypes.bool,
  isAutoWidth: PropTypes.bool,
  children: PropTypes.node,
}

export default Col
