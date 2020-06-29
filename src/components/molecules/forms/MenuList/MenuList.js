import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './MenuList.scss'
import Text from 'components/atoms/common/Text'
import ThemeUtils from 'utils/ThemeUtils'

class MenuList extends Component {

  onChange(selected) {
    const {onChange} = this.props
    if (onChange) onChange(selected)
  }
  
  render () {
    const {
      className,
      options,
      selected,
      theme
    } = this.props
    
    return (
      <ul 
        className={clsx(
            "menulist",
            className
          )}
      >
        { options && options.map((option,index)=>(
          <li key={index.toString()}>
            <div
              className={clsx(
                  'menulist__item pl-15 pr-15 pt-10 pb-15',
                )}
              value={option.value} 
              onClick={()=>this.onChange(option)}
              onKeyDown={e => {
                  if (e.key === 'Enter') {
                    this.onChange(option)
                  }
                }}
              role="button"
              tabIndex={0}
            >
              <Text
                color={ThemeUtils.themeToColor(theme)}
                size="normal"
                fw={
                  selected && 
                  JSON.stringify(selected.value)===JSON.stringify(option.value)
                    ? 'bold' : null 
                }
                align="center"
              >
                {option.label}
              </Text>
            </div>
          </li>
        ))}
      </ul>
    )
  }
}

MenuList.defaultProps = {
  className: '',
  options: null,
  selected: null,
  onChange: null,
  theme: null,
}

MenuList.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  selected: PropTypes.object,
  onChange: PropTypes.func,
  theme: PropTypes.string
}

export default MenuList
