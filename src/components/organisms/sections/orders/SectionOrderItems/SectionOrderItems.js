import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionOrderItems.scss'
import Text from 'components/atoms/common/Text'
import StringUtils from 'utils/StringUtils'
import noimage from 'assets/images/noimage.png'

class SectionOrderItems extends Component {
  render() {
    const {
      className,
      orderItems
    } = this.props

    return (
      <div
        className={clsx(
          'section-order-items',
          className
        )}
      >
        <Text
          className='section-order-items__title'
          fw='bold'
        >
          Order Items
        </Text>
        <div className='section-order-items__list'>
          <div className='section-order-items__head'>
            <Text
              className='section-order-items__head-product'
            >
              Product
            </Text>
            <Text
              className='section-order-items__head-price'
            >
              Price
            </Text>
            <Text
              className='section-order-items__head-gty'
            >
              Qty
            </Text>
          </div>
          <div className='section-order-items__body'>
            {orderItems && orderItems.map((item, index) => {
              return (
                <div
                  key={index.toString()} 
                  className='section-order-items__row'
                >
                  <div className='section-order-items__img-section'>
                    <img 
                      src={StringUtils.getThumbnail(item.image_url)}
                      alt='production'
                      onError={
                      (e)=>{
                        e.target.onerror = null 
                        e.target.src = noimage
                      }
                    }
                    />
                  </div>
                  <Text 
                    className='section-order-items__item-name'
                  >
                    {item.name}
                  </Text>
                  <Text 
                    className='section-order-items__item-price'
                  >
                    {StringUtils.formatPrice(item.product_current_price, 2)}
                  </Text>
                  <Text 
                    className='section-order-items__item-qty'
                  >
                    {item.qty}
                  </Text>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

SectionOrderItems.defaultProps = {
  className: '',
  orderItems: null,
}

SectionOrderItems.propTypes = {
  className: PropTypes.string,
  orderItems: PropTypes.array,
}

export default SectionOrderItems
