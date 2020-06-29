import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './ButtonFavorite.scss'

import Icon from 'components/atoms/common/Icon'

class ButtonFavorite extends Component {
  handleFavoriteChange (e) {
    const { onChange, id, isFavorite } = this.props

    e.stopPropagation()
    e.preventDefault()

    if (onChange) onChange({
      id,
      favorite: !isFavorite
    })
  }

  render () {
    const {
      className,
      isFavorite,
      theme
    } = this.props

    return (
      <div
        className={clsx(
          'button-favorite',
          {
            'button-favorite--favorite': isFavorite,
            [`button-favorite--${theme}`]: theme,
          },
          className
        )}
        onClick={(e) => this.handleFavoriteChange(e)}
        role='button'
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            this.handleFavoriteChange(e)
          }
        }}
      >
        <Icon className='button-favorite__icon' size={15} name='heart' />
      </div>
    )
  }
}

ButtonFavorite.defaultProps = {
  className: '',
  onChange: null,
  isFavorite: false,
  id: null,
  theme: null,
}

ButtonFavorite.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  isFavorite: PropTypes.bool,
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default ButtonFavorite
