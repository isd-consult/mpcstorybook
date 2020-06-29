import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './MultiColorPicker.scss'
import Text from 'components/atoms/common/Text'

class MultiColorPicker extends Component {
  constructor(){
    super()
    this.state = {selectedOptions:[]}
    this.onClick = this.onClick.bind(this)
  }
  
  componentWillReceiveProps(nextProps) {
    const {selected} = this.props
    if (selected !== nextProps.selected) {
      this.setState({selectedOptions: nextProps.selected})
    }
  }

  onClick (option) {
    const {onChange, id} = this.props
    const {selectedOptions} = this.state
    const pos = selectedOptions.indexOf(option)
    if (pos === -1) {
      selectedOptions.push(option)
    } else {
      selectedOptions.splice(pos, 1)
    }
    this.setState({selectedOptions})
    onChange({id, values:selectedOptions})
  }

  render () {
    const {
      className,
      options,
    } = this.props
    const {
      selectedOptions
    } = this.state
    return (
      <div
        className={clsx(
          'multi-color-picker',
          className
        )}
      >
        {options && options.map((option, index)=>{
          const active=(selectedOptions.indexOf(option)>-1)
          return (
            <div
              className={clsx(
              "multi-color-picker__item",
              {[`multi-color-picker__item--active`]:active}
            )}
              key={index.toString()}
              onClick={()=>this.onClick(option)}
              onKeyDown={e => {
              if (e.key === 'Enter') {
                this.onClick(e, option)
              }
            }}
              role="button"
              tabIndex="0"
            >
              <div 
                className={clsx(
                "multi-color-picker__color",
                {[`multi-color-picker__color--${option.toLowerCase()}`]:option}
              )}
              />
              <Text
                className={clsx('multi-color-picker__label ml-10')}
                size="small"
                fw="light"
              >
                {option}
              </Text>
            </div>
)
        })}
      </div>
    )
  }
}

MultiColorPicker.defaultProps = {
  className: '',
  id: null,
  options: null,
  selected: null,
  onChange: null,
}

MultiColorPicker.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  selected: PropTypes.array,
  onChange: PropTypes.func
}

export default MultiColorPicker
