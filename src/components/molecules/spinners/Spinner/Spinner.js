/* eslint-disable max-len */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './Spinner.scss'

class Spinner extends Component {
  render() {
    const { className, tag, size, isCentered, theme, isLogo } = this.props

    const Root = `${tag}`

    if (isLogo)
      return (
        <svg
          className={clsx('spinner-logo', {
            'spinner-logo--center': isCentered,
            [`spinner-logo--${theme}`]: theme,
            [`spinner-logo--${size}`]: size,
          })}
          viewBox="0 0 400 400"
        >
          <g className="spinner-logo__content">
            <circle
              className="spinner-logo__ellipse"
              cx="199.9"
              cy="200.7"
              r="154.9"
            />
            <path
              className="spinner-logo__text"
              d="M135.4,190.2c13.6-12.2,18.6-27.8,24.7-42.8c4.1-9.9,8.3-19.8,16.5-27.2c14.4-13.1,42.1-13.1,54.3,0
    c7.1,7.6,8.2,19.2,2.5,25.9c-4.3,5-11,6.4-17.3,3.6c-5.8-2.5-8.5-7.7-7.7-14.5c0.4-3.1,1-6.1,1.3-9.2c0.5-6.2-2.1-9.2-8.4-9.7
    c-10.1-0.8-17.4,4.7-20.4,15.7c-1,3.5-1.6,7.2-1.7,10.8c-0.3,11.2-0.1,22.3-0.3,33.5c0,2.2,0.5,2.9,2.8,2.9
    c21.6-0.4,43.2,1,64.8-1.7c3.1-0.4,3.8,0.6,3.8,3.6c-0.1,26.7-0.1,53.4-0.1,80.1c0,2.3,0,4.5,0.2,6.8c0.4,5.7,3.3,9.1,8.9,10.3
    c1,0.2,2,0.2,2.9,0.4c1.8,0.5,4.4,0.4,3.9,3.3c-0.4,2.5-2.5,2.2-4.4,2.2c-11.2-0.2-22.3-0.5-33.5-0.5c-6.1,0-12.1,0.4-18.2,0.5
    c-1.9,0-4.3,0.7-4.7-2.2c-0.4-3,2.1-2.9,3.9-3.3c9.7-2,11.7-3.9,11.8-13.8c0.2-21.6,0.2-53.1,0-74.7c0,0,8,0,0,0
    c-9.5,0-34.3,0-42.2,0c0,0,0-2.7,0,0c0.1,23.9,0,51,0.1,74.9c0,9.4,2.2,11.8,11.5,13.5c1.8,0.4,4.5,0.3,4.3,3
    c-0.2,3-2.8,2.7-4.9,2.6c-17.1-0.8-34.2-0.8-51.3,0c-1.9,0.1-4.3,0.6-4.7-2.2c-0.4-3.2,2.5-3,4.3-3.4c8.7-1.7,11.3-3.9,11.4-12.4
    c0.3-24.4,0.1-51.6,0.2-76l0,0C146.2,190.3,140.1,190.2,135.4,190.2z"
            />
          </g>
          <g className="spinner-logo__group">
            <circle
              className="spinner-logo__dot"
              cx="332.2"
              cy="324.1"
              r="15.6"
            />
            <rect
              className="spinner-logo__rect"
              y="0"
              fill="none"
              width="400"
              height="400"
            />
          </g>
        </svg>
      )

    return (
      <Root
        className={clsx(
          'spinner',
          { [`spinner--${size}`]: size },
          { 'spinner--center': isCentered },
          { [`spinner--${theme}`]: theme },
          className,
        )}
      />
    )
  }
}

Spinner.defaultProps = {
  className: '',
  tag: 'div',
  size: null,
  isCentered: false,
  isLogo: false,
  theme: null,
}

Spinner.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string,
  size: PropTypes.oneOf([null, 'tiny', 'small', 'normal', 'big', 'large']),
  isCentered: PropTypes.bool,
  isLogo: PropTypes.bool,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default Spinner
