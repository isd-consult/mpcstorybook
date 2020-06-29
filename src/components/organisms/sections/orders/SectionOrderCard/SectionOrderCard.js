import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionOrderCard.scss'
import Text from 'components/atoms/common/Text'
import Button from 'components/molecules/buttons/Button'
import TextWithIcon from 'components/molecules/texts/TextWithIcon'
// eslint-disable-next-line max-len
import SectionOrderItems from 'components/organisms/sections/orders/SectionOrderItems'

class SectionOrderCard extends Component {
  render() {
    const { theme, className, item, history } = this.props
    return (
      <div className={clsx('section-order-card mt-15', className)}>
        <div className="section-order-card__info">
          <div
            className={clsx(
              'section-order-card__number',
              'section-order-card__info-item',
            )}
          >
            <Text className={clsx('section-order-card__label')}>
              Order number:
            </Text>
            <Text className={clsx('section-order-card__desc')} fw="bold">
              {item.order_number}
            </Text>
          </div>
          <div className={clsx('section-order-card__info-item')}>
            <Text className={clsx('section-order-card__label')}>
              Ordered on:
            </Text>
            <Text className={clsx('section-order-card__desc')}>
              {item.created_at}
            </Text>
          </div>
          <div className={clsx('section-order-card__info-item')}>
            <Text className={clsx('section-order-card__label')}>
              Status:
            </Text>
            <div className={clsx('section-order-card__desc')}>
              <Text theme={theme} isUnderline>
                {item.status ? item.status.label : null}
              </Text>
            </div>
          </div>
          <div className={clsx('section-order-card__info-item')}>
            <Text className={clsx('section-order-card__label')}>
              Estimated Delivery Date:
            </Text>
            <TextWithIcon
              className={clsx('section-order-card__desc')}
              theme={theme}
              iconName="delivery"
              title="1-3 Working Days"
              description="From payment received"
            />
          </div>
        </div>

        {/* Order items */}
        <div className="section-order-card__items">
          <SectionOrderItems
            className={className}
            orderItems={item.order_items}
          />
        </div>
        <div className="section-order-card__btn">
          <Button
            className="section-order-card__btn-view"
            backgroundColor="#f4f4f4"
            color="black"
            isSmall
            fw="bold"
            onClick={
              ()=>history.push(`/orders/details/${item.order_number}`)
            }
          >
            VIEW THIS ORDER
          </Button>
        </div>
      </div>
    )
  }
}

SectionOrderCard.defaultProps = {
  theme: null,
  className: '',
  item: {},
  history: null
}

SectionOrderCard.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
  className: PropTypes.string,
  item: PropTypes.object,
  history: PropTypes.object
}

export default SectionOrderCard
