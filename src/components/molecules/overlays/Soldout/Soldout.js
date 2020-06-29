import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './Soldout.scss'
import Text from 'components/atoms/common/Text'

class Soldout extends Component {
  render () {
    const {
      className
    } = this.props

    return (
      <div
        className={clsx(
          'soldout',
          className
        )}
      >
        <div className='soldout__bound'>
          <Text
            className="soldout__text"
            color="white"
            size="xxl"
            align="center"
          >
            SOLD 
            {' '}
            <br />
            {' '}
            OUT
          </Text>
        </div>
      </div>
    )
  }
}

Soldout.defaultProps = {
  className: ''
}

Soldout.propTypes = {
  className: PropTypes.string
}

export default Soldout
