import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './TrackingInfo.scss'
import TextWithIcon from 'components/molecules/texts/TextWithIcon'

class TrackingInfo extends Component {
  render() {
    const { className, views, clicks } = this.props

    return (
      <div className={clsx('tracking-info', className)}>
        <div className="tracking-info__bound">
          <div className="tracking-info__block">
            <TextWithIcon
              iconName="view"
              iconSize={20}
              description={`${views} Views`}
              isSecondary
            />
          </div>
          <div className="tracking-info__block">
            <TextWithIcon
              iconName="click"
              iconSize={20}
              description={`${clicks} Clicks`}
              isSecondary
            />
          </div>
        </div>
      </div>
    )
  }
}

TrackingInfo.defaultProps = {
  className: '',
  views: 0,
  clicks: 0,
}

TrackingInfo.propTypes = {
  className: PropTypes.string,
  views: PropTypes.number,
  clicks: PropTypes.number,
}

export default TrackingInfo
