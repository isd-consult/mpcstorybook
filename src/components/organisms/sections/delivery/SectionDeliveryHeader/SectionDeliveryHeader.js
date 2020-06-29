import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionDeliveryHeader.scss'
import ButtonBack 
  from 'components/molecules/buttons/ButtonBack'
import Logo from 'components/atoms/common/Logo'
import {Link} from 'react-router-dom'

class SectionDeliveryHeader extends Component {
  render () {
    const {
      className,
    } = this.props

    return (
      <div
        className={clsx(
          'section-delivery-header',
          className
        )}
      > 
        <ButtonBack
          className="section-delivery-header__back mt-5"
        />
        <Link to="/">
          <Logo className="ml-20" />
        </Link>
      </div>
    )
  }
}

SectionDeliveryHeader.defaultProps = {
  className: '',
}

SectionDeliveryHeader.propTypes = {
  className: PropTypes.string,
}

export default SectionDeliveryHeader
