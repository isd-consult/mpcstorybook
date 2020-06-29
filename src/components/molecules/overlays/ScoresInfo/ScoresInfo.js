import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StringUtils from 'utils/StringUtils'
import clsx from 'clsx'

import './ScoresInfo.scss'
import Text from 'components/atoms/common/Text'

class ScoresInfo extends Component {
  render () {
    const {
      className,
      data
    } = this.props

    /**
     * This code would be refactored later
     */
    let greenClass; let scoreValue
    if (data.percentage_score > -1) {
      scoreValue = `${data.percentage_score}%`
      if (data.percentage_score > 50) {
        greenClass = true
      } else {
        greenClass = false
      }
    } else {
      scoreValue = StringUtils.currencyFormat(parseInt(data.total, 10))
      if(data.total > 0) {
        greenClass = true
      } else {
        greenClass = false
      }
    }

    return (
      <div
        className={clsx(
          'scores-info',
          className
        )}
      >
        <Text
          className={clsx(
            'scores-info__text',
            'mt-30 mb-10',
            {
              'scores-info--text-green': greenClass
            }
          )}
          align="center"
          size="h2"
          fw="bold"
        >
          {scoreValue}
        </Text>
        <div className="scores-info__item">
          <Text
            className="scores-info__item-text mt-5"
            size="xxs"
          >
            User Questions
          </Text>
          <Text
            className="scores-info__item-text mt-5"
            size="xxs"
          >
            {`${parseInt(data.qs, 10)} X ${data.qw}`}
          </Text>
        </div>
        <div className="scores-info__item">
          <Text
            className="scores-info__item-text mt-5"
            size="xxs"
          >
            Order History
          </Text>
          <Text
            className="scores-info__item-text mt-5"
            size="xxs"
          >
            {`${parseInt(data.rs, 10)} X ${data.rw}`}
          </Text>
        </div>
        <div className="scores-info__item">
          <Text
            className="scores-info__item-text mt-5"
            size="xxs"
          >
            User Tracking
          </Text>
          <Text
            className="scores-info__item-text mt-5"
            size="xxs"
          >
            {`${parseInt(data.ts, 10)} X ${data.tw}`}
          </Text>
        </div>
      </div>
    )
  }
}

ScoresInfo.defaultProps = {
  className: '',
  data: null
}

ScoresInfo.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object
}

export default ScoresInfo
