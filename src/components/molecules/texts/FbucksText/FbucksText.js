import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './FbucksText.scss'

class FbucksText extends Component {
  render () {
    const {
      className,
      credit,
      tag,
      theme
    } = this.props

    const Root = `${tag}`
    return (
      <Root className={clsx(
        'fbucks-text',
        {[`fbucks-text--${theme}`]: theme},
        className
      )}
      >
        <svg className="fbucks-text__svg">
          <polyline
            points="60,0 74,10 60,20"
            className="fbucks-text__polyline1"
          />
          <polyline
            points="60,0 0,0 0,20 60,20"
            className="fbucks-text__polyline2"
          />
          <text x="4" y="13" className="fbucks-text__text">
            {`+${credit.toString()}  Fbucks`}
          </text>
        </svg>
      </Root>
    )
  }
}

FbucksText.defaultProps = {
  theme: null,
  className: '',
  credit: '',
  tag:'div'
}

FbucksText.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
  className: PropTypes.string,
  credit: PropTypes.number,
  tag: PropTypes.string
}

export default FbucksText
