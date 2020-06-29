import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionAccountTitle.scss'
import Text from 'components/atoms/common/Text'
import ButtonBack from 'components/molecules/buttons/ButtonBack'

class SectionAccountTitle extends Component {
  render () {
    const {
      className,
      title,
      description
    } = this.props

    return (
      <div
        className={clsx(
          'section-account-title',
          className
        )}
      >
        <div style={{display: 'flex', alignItems: 'center'}}>
          <ButtonBack className="section-account-title__backbtn" size={15} />
          <Text className="ml-5" size="xxl" fw='medium'>{title}</Text>
        </div>
        <Text
          className="mt-15 mb-10 section-account-title__desc"
          fw="light"
        >
          {description}
        </Text>
      </div>
    )
  }
}

SectionAccountTitle.defaultProps = {
  className: '',
  title: '',
  description: ''
}

SectionAccountTitle.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}

export default SectionAccountTitle
