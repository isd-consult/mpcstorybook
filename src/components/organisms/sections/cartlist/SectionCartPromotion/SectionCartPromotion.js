import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './SectionCartPromotion.scss'
import StringUtils from 'utils/StringUtils'
import Snackbar from 'components/molecules/notifications/SnackbarNew'
import Text from 'components/atoms/common/Text'
import clsx from 'clsx'

class SectionCartPromotion extends Component {
  render () {
    const {
      className,
      totalFbucks,
      availableFbucks,
      nextTierInfo,
      isHidden
    } = this.props

    const nextTier = nextTierInfo 
      && nextTierInfo.next_tier 
      && nextTierInfo.next_tier.name

    const currentSpent = nextTierInfo 
      && nextTierInfo.currently_spent

    const willMore = nextTierInfo 
      && nextTierInfo.next_tier 
      && nextTierInfo.next_tier.amount_min
        ? (nextTierInfo.next_tier.amount_min - currentSpent)
        : 0

    return (
      !isHidden && !!totalFbucks && nextTier && (
      <Snackbar
        className={clsx(
          'section-cart-promotion',
          {
            [`section-cart-promotion--availablefbucks`]: availableFbucks,
            [`section-cart-promotion--earnedfbucks`]: !availableFbucks
          },
          className
        )}
        open
        position='top'
        disabledPortal
      >
        <Text color="white">
          { 
          availableFbucks
            ? `You have ${StringUtils.formatPrice(availableFbucks)}
               fbucks to spend now!`
            : `Total Fbucks earned on this order: 
              ${StringUtils.formatPrice(totalFbucks)}`
        }
        </Text>
        <Text className="ml-5" size="xxs" color="white">
          {`Spend another R${willMore} to move up to ${nextTier} Tier`}
        </Text>
      </Snackbar>
)
    )
  }
}

SectionCartPromotion.defaultProps = {
  className: '',
  totalFbucks: null,
  availableFbucks: null,
  nextTierInfo: null,
  isHidden: false,
}

SectionCartPromotion.propTypes = {
  className: PropTypes.string,
  totalFbucks: PropTypes.number,
  availableFbucks: PropTypes.number,
  nextTierInfo: PropTypes.object,
  isHidden: PropTypes.bool,
}

export default SectionCartPromotion
