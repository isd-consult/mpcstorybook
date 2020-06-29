import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import './SectionDeliveryFooter.scss'
import Logo from 'components/atoms/common/Logo'

class SectionDeliveryFooter extends Component {
  render () {
    const {
      className
    } = this.props

    return (
      <div
        className={clsx(
          'section-delivery-footer',
          className
        )}
      >
        <Link
          className="section-delivery-footer__logo"
          to="/"
        >
          <Logo type="icon" size="large" />
        </Link>
        <div>
          <Link
            className="section-delivery-footer__link"
            to="/contactus"
          >
            Contact us
          </Link>
          <Link
            className="section-delivery-footer__link"
            to="/returns/list"
          >
            Returns
          </Link>
        </div>
      </div>
    )
  }
}

SectionDeliveryFooter.defaultProps = {
  className: ''
}

SectionDeliveryFooter.propTypes = {
  className: PropTypes.string
}

export default SectionDeliveryFooter
