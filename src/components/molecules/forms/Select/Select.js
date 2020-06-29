import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import './Select.scss'
import Icon from 'components/atoms/common/Icon'
import Text from 'components/atoms/common/Text'
import ThemeUtils from 'utils/ThemeUtils'

class Select extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      selected: null,
    }
    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const {selected} = this.props
    if (selected !== nextProps.selected)
      this.setState({selected: nextProps.selected})
  }

  onChange(selected) {
    const {onChange} = this.props
    this.setState({selected, isOpen:false})
    if (onChange) onChange(selected.value)
  }

  onClick() {
    const {isDisabled} = this.props
    const {isOpen} = this.state
    if (!isDisabled) this.setState({isOpen:!isOpen})
  }

  render () {
    const {
      onChange,
      className,
      tag,
      theme,
      category,
      options,
      placeholder,
      isDisabled,
      isError,
      ...other
    } = this.props

    const {
      isOpen,
      selected
    } = this.state
    const Root = `${tag}`
    
    return (
      <Root
        className={clsx(
          'select',
          {
            [`select--${theme}`]: theme,
            [`select--${category}`]: category,
            "select--show": isOpen,
            "select--hide": !isOpen,
            "select--disabled": isDisabled,
            "select--error": isError,
          },
          className,
        )}
        {...other}
      >
        <div
          className={clsx(
            'select__label',
            'pt-15 pr-15 pb-15 pl-15'
          )} 
          onClick={this.onClick}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              this.onClick()
            }
          }}
          role="button"
          tabIndex={0}
        >
          <Text
            color={ThemeUtils.themeToColor(theme)}
            size="normal"
          >
            {selected?selected.label:placeholder}
          </Text>
          <Icon 
            className={clsx(
              'select__icon'
            )}
            right={isOpen}
            size={10} 
            name="arrow"
          />
        </div>
        <ul className="select__dropmenu">
          { options && options.map((option,index)=>(
            <li key={index.toString()}>
              <div
                className={clsx(
                      'select__item pl-15 pr-15 pt-10 pb-15',
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
                >
                  {option.label}
                </Text>
              </div>
            </li>
            ))}
        </ul>
      </Root>
    )
  }
}

Select.defaultProps = {
  onChange: null,
  selected: null,
  className: null,
  category: null,
  isDisabled: false,
  isError: false,
  tag: 'div',
  options: null,
  placeholder: 'Select Option',
  theme: null,
}

Select.propTypes = {
  onChange:PropTypes.func,
  selected: PropTypes.object,
  className:PropTypes.string,
  category: PropTypes.oneOf([null, 'shadow']),
  isDisabled: PropTypes.bool,
  isError: PropTypes.bool,
  tag:PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
  placeholder:PropTypes.string,
  theme:PropTypes.oneOf([null, 'men', 'women']),
}

export default Select
