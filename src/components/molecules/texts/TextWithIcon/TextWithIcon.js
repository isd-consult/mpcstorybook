import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './TextWithIcon.scss'

import Text from 'components/atoms/common/Text'
import Icon from 'components/atoms/common/Icon'

class TextWithIcon extends Component {
  render() {
    const {
      className,
      iconName,
      iconSize,
      title,
      titleSize,
      titleWeight,
      description,
      descriptionSize,
      linkText,
      href,
      isCentered,
      isHorizontal,
      theme,
      isSecondary,
    } = this.props

    const titleFontWeight = titleWeight != null? titleWeight: 'bold'

    return (
      <div
        className={clsx(
          'text-with-icon',
          {
            'text-with-icon--center': isCentered,
            'text-with-icon--secondary': isSecondary
            },
          className,
        )}
      >
        <div className="text-with-icon__img-section">
          <Icon
            size={iconSize}
            name={iconName}
            theme={theme}
            fill={isSecondary ? 'white' : null}
          />
        </div>
        <div className={clsx(
            'text-with-icon__text_section',
            {'text-with-icon--text-direction': isHorizontal}
          )}
        >
          <Text
            color={isSecondary ? 'white' : null}
            size={titleSize}
            theme={theme}
            fw={titleFontWeight}
          >
            {title}
          </Text>
          <Text color={isSecondary ? 'white' : null} size={descriptionSize}>
            {description}
          </Text>
          {href && linkText && (
            <Text
              color={isSecondary ? 'white' : null}
              tag="a"
              href={href}
              isUnderline
            >
              {linkText}
            </Text>
          )}
        </div>
      </div>
    )
  }
}

TextWithIcon.defaultProps = {
  className: '',
  theme: null,
  iconName: null,
  iconSize: 50,
  title: null,
  titleSize: null,
  description: null,
  descriptionSize: null,
  linkText: null,
  href: null,
  isCentered: false,
  titleWeight: null,
  isHorizontal: false,
  isSecondary: false
}

TextWithIcon.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  title: PropTypes.string,
  titleSize: PropTypes.string,
  description: PropTypes.string,
  descriptionSize: PropTypes.string,
  linkText: PropTypes.string,
  href: PropTypes.string,
  isCentered: PropTypes.bool,
  isHorizontal: PropTypes.bool,
  titleWeight: PropTypes.string,
  isSecondary: PropTypes.bool
}

export default TextWithIcon
