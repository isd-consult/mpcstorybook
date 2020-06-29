import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import Text from '../../common/Text'

import './QuestionsCheckbox.scss'

const QuetionsCheckbox = ({
  className,
  id,
  isChecked,
  name,
  isDisabled,
  onChange,
  label,
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
    <label className={clsx('questions-checkbox', className)} htmlFor={id}>
      <input
        className="questions-checkbox__input"
        disabled={isDisabled}
        id={id}
        name={name}
        onChange={e => handleCheckboxChange(e.target.checked)}
        type="checkbox"
        {...other}
      />

      <div
        className="questions-checkbox__content"
        role="checkbox"
        onKeyDown={e => e.key === 'Enter' && handleCheckboxChange(!checked)}
        aria-checked={checked}
        tabIndex={0}
        aria-labelledby={name}
        aria-label={name}
      >
        <div className="questions-checkbox__box">
          <div className="questions-checkbox__line" />
        </div>

        {label && (
          <Text
            fw="bold"
            size="xl"
            className="questions-checkbox__label ml-10"
          >
            {label}
          </Text>
        )}
      </div>
    </label>
  )
}

QuetionsCheckbox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  name: PropTypes.string,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
}

QuetionsCheckbox.defaultProps = {
  className: '',
  name: 'boxname',
  id: 'checkbox',
  onChange: null,
  isChecked: false,
  isDisabled: false,
  label: '',
}

export default QuetionsCheckbox
