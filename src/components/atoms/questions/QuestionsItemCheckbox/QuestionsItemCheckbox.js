import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import Text from '../../common/Text'

import './QuestionsItemCheckbox.scss'

const QuetionsItemCheckbox = ({
  className,
  id,
  isChecked,
  name,
  isDisabled,
  onChange,
  label,
  image,
  theme,
  ...other
}) => {
  const isControlled = isChecked && onChange
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(isChecked)
  }, [isChecked])

  function handleCheckboxChange(chk) {
    if (!isControlled) setChecked(chk)
    if (onChange) onChange(chk)
  }

  return (
    <label
      className={clsx(
        'questions-item-checkbox',
        { [`questions-item-checkbox--${theme}`]: theme },
        className,
      )}
      htmlFor={id}
    >
      <input
        checked={checked}
        className="questions-item-checkbox__input"
        disabled={isDisabled}
        id={id}
        name={name}
        onChange={e => handleCheckboxChange(e.target.checked)}
        type="checkbox"
        {...other}
      />

      <div
        className="questions-item-checkbox__content"
        role="checkbox"
        onKeyDown={e => e.key === 'Enter' && handleCheckboxChange(!checked)}
        aria-checked={checked}
        tabIndex={0}
        aria-labelledby={name}
        aria-label={name}
      >
        <div className="questions-item-checkbox__image-wrapper">
          {image.startsWith('http') ? (
            <img
              className="questions-item-checkbox__image"
              src={image}
              alt={label}
            />
          ) : (
            <div
              className="questions-item-checkbox__image-svg"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: image }}
            />
          )}
        </div>

        {label && (
          <Text className="questions-item-checkbox__text" isUppercase>
            {label}
          </Text>
        )}
      </div>
    </label>
  )
}

QuetionsItemCheckbox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  image: PropTypes.string,
  theme: PropTypes.number,
}

QuetionsItemCheckbox.defaultProps = {
  className: '',
  image: null,
  name: 'boxname',
  id: 'checkbox',
  onChange: null,
  isChecked: false,
  isDisabled: false,
  label: '',
  theme: 1,
}

export default QuetionsItemCheckbox
