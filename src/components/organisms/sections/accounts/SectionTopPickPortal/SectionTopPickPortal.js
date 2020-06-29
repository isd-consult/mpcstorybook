import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionTopPickPortal.scss'
import Text from 'components/atoms/common/Text'
import Button from 'components/molecules/buttons/Button'

class SectionTopPickPortal extends Component {
  render () {
    const {
      className,
      title,
      backgroundImage,
    } = this.props

    return (
      <div
        className={clsx(
          'section-top-pick-portal',
          className
        )}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Text size='xxl' color='white'>{title}</Text>
        <Button
          className="mt-15 pl-30 pr-30"
          auto
          onClick={()=>window.location.href='/accounts/closet/recommendations'}
        >
          View My Top Picks
        </Button>
      </div>
    )
  }
}

SectionTopPickPortal.defaultProps = {
  className: '',
  title: null,
  backgroundImage: null
}

SectionTopPickPortal.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  backgroundImage: PropTypes.string
}

export default SectionTopPickPortal
