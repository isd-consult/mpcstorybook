import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './CardUpdates.scss'

import Text from 'components/atoms/common/Text'
import ThemeUtils from 'utils/ThemeUtils'
import ButtonIcon from 'components/molecules/buttons/ButtonIcon'

class CardUpdates extends Component {
  render() {
    const { className, heading, message, theme, onButtonClick } = this.props
    return (
      <div
        className={clsx(
          'card-updates',
          { [`card-updates--${theme}`]: theme },
          className,
        )}
      >
        <Text fw="bold" color={ThemeUtils.themeToColor(theme)} className="mb-5">
          {heading}
        </Text>
        <ButtonIcon 
          className="card-updates__button" 
          isAutoFit
          isNoBg
          icon="close"
          iconSize={15}
          onClick={onButtonClick}
        />
        <Text fw="light" color="silver">
          {message}
        </Text>
      </div>
    )
  }
}

CardUpdates.defaultProps = {
  className: '',
  heading: null,
  message: null,
  theme: null,
  onButtonClick: null,
}

CardUpdates.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  message: PropTypes.string,
  onButtonClick: PropTypes.func,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default CardUpdates
