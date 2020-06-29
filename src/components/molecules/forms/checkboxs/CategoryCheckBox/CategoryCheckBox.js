import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './CategoryCheckBox.scss'
import Text from 'components/atoms/common/Text'
import StringUtils from 'utils/StringUtils'
import Icon from 'components/atoms/common/Icon'
import noimage from 'assets/images/noimage.png'

class CategoryCheckBox extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.state = {
      checked: false
    }
  }
  
  componentWillReceiveProps(nextProps) {
    const {checked} = this.props
    if (checked !== nextProps.checked) {
      this.setState({checked: nextProps.checked})
    }
  }

  onChange(e) {
    const {onChange} = this.props
    this.setState({checked: e.target.checked})
    if (typeof onChange === "function") onChange(e)
  }

  render () {
    const {
      className,
      image,
      label,
      name,
      value,
    } = this.props
    const { checked } = this.state

    return (
      <div
        className={clsx(
          'category-check-box',
          {'category-check-box--active': checked},
          className
        )}
      >
        <label className="category-check-box__card" htmlFor={name}>
          <div>
            <input
              type="checkbox"
              name={name}
              onChange={this.onChange}
              hidden
              id={name}
              value={value}
              checked={checked}
            />
            <img
              className="category-check-box__image mt-30"
              src={(image && image!=='None')?image:`${noimage}`}
              alt={value}
            />
            <div className="category-check-box__icon">
              <Icon
                className='category-check-box__icon-detail'
                size={12}
                name='heart'
              />
            </div>
            <Text
              className="category-check-box__title"
              size="xxl"
              fw="light"
            >
              {StringUtils.toCamelCase(label)}
            </Text>
          </div>
        </label>
      </div>
    )
  }
}

CategoryCheckBox.defaultProps = {
  className: '',
  image: null,
  label: null,
  name: null,
  value: null,
  checked: false,
  onChange: null
}

CategoryCheckBox.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
}

export default CategoryCheckBox
