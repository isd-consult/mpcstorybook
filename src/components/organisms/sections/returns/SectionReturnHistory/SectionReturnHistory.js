import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import Text from 'components/atoms/common/Text'

import './SectionReturnHistory.scss'
import Block from 'components/molecules/wrapers/Block'

class SectionReturnHistory extends Component {
  render () {
    const {
      className,
      history,
      theme
    } = this.props

    return (
      <div
        className={clsx(
          'section-return-history',
          className
        )}
      >
        {
        history && (
        <>
          <Text className="mt-15" size="xxl">
            Return History
          </Text>
          <Block
            className="mt-10 pt-15 pr-10 pb-15 pl-10"
            theme={theme}
          >
            <Text fw="bold">
              Sep 17, 2019 7:50 AM
            </Text>
            <Text className="mt-5" lh="1-6">
              Your return request has been received. You will be
              notified when your request has been reviewed.
            </Text>
          </Block>
        </>
      )}
      </div>
    )
  }
}

SectionReturnHistory.defaultProps = {
  className: '',
  theme: null,
  history: null
}

SectionReturnHistory.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  history: PropTypes.array
}

export default SectionReturnHistory
