import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './CardAddress.scss'
import Icon from 'components/atoms/common/Icon'
import Text from 'components/atoms/common/Text'
import { Link } from 'react-router-dom'

class CardAddress extends Component {
  render() {
    const { 
      className, 
      iconName,
      title,
      description, 
      href,
      deleteAddress,
      isCentered,
      theme
    } = this.props

    return (
      <div
        className={clsx(
          'card-address',
          {[`card-address--center`]: isCentered},
          className,
        )}
      >
        <div className='card-address__img_section'>
          <Icon
            size={40}
            name={iconName}
            theme={theme}
          />
        </div>
        <div className='card-address__text_section'>
          <Text size="xl" fw="bold">
            {title}
          </Text>
          <Text size="small">
            {description}
          </Text>
          <div style={{display: 'flex'}}>
            {
            href && (
            <Link to={href}>
              <Text className="mr-5" isUnderline> Edit Address </Text>
            </Link>
)}
            {deleteAddress && href && "|"}
            {
            deleteAddress 
            && (
            <Text className="ml-5" isUnderline onClick={deleteAddress}>
              Delete Address
            </Text>
)
          }
          </div>
        </div>
      </div>
    )
  }
}

CardAddress.defaultProps = {
  className: '',
  iconName: 'invoice',
  title: '',
  description: '', 
  href: null,
  deleteAddress: null,
  isCentered: true,
  theme: null
}

CardAddress.propTypes = {
  className: PropTypes.string,
  iconName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string, 
  href: PropTypes.string,
  deleteAddress: PropTypes.func,
  isCentered: PropTypes.bool,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default CardAddress
