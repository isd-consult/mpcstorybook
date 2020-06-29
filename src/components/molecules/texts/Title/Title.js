import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './Title.scss'

import Text from 'components/atoms/common/Text'
import ThemeUtils from 'utils/ThemeUtils'
import Icon from 'components/atoms/common/Icon'

class Title extends Component {
  render() {
    const {
      className,
      category,
      link,
      title,
      subtitle,
      mode,
      theme 
    } = this.props

    const isSecondary = category === 'secondary'
    const isTertiary = category === 'tertiary'
    const isAccountMode = mode === 'account'
    const isLink = link && link.href && link.text

    return (
      <div
        className={clsx(
          'title',
          className,
        )}
      >
        <div className="title__head">
          <Text
            size={clsx(
              {
                'xxl': !mode,
                'xs': isAccountMode
              }
            )}
            fw="bold"
            color={clsx(
              {
                [`${ThemeUtils.themeToColor(theme)}`]: 
                  (!category || isTertiary) && theme,
                'white': isSecondary
              }
            )}
          >
            {title}
          </Text>
          {isLink && !isTertiary && (
            <Text
              tag="a"
              href={link.href}
              color={clsx(
              {
                [`${ThemeUtils.themeToColor(theme)}`]: !category&&theme,
                'white': isSecondary,
              }
            )}
              fw={isAccountMode?'bold':'medium'}
              isUnderline
            >
              {isAccountMode && <Icon name="plus" size={6} theme={theme} />}
              {link.text}
            </Text>
          )}
        </div>
        {subtitle && !isTertiary && (
          <Text
            className="mt-5"
            fw="light"
            color={clsx(
              {
                'white': isSecondary,
              }
            )}
          >
            {subtitle}
          </Text>
        )}
      </div>
    )
  }
}

Title.defaultProps = {
  className: '',
  category: null,
  link: {
    href: '',
    text: '',
  },
  subtitle: '',
  mode: null,
  theme: null,
}

Title.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  category: PropTypes.oneOf([null, 'secondary', 'tertiary', 'quinary']),
  link: PropTypes.shape({
    href: PropTypes.string,
    text: PropTypes.string,
  }),
  mode: PropTypes.oneOf([null, 'account']),
  theme: PropTypes.oneOf([null, 'men', 'women']),
}

export default Title
