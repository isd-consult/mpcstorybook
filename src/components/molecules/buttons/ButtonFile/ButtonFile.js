import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ButtonFile.scss'
import clsx from 'clsx'
import Text from 'components/atoms/common/Text'

class ButtonFile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fileName: 'No file chosen',
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const {onChange} = this.props
    if (e.target.files.length > 0){
      this.setState({
        fileName: e.target.files[0].name
      })
    }
    else {
      this.setState({
        fileName: 'No file chosen'
      })
    }
    if (onChange) onChange(e)
  }

  render() {
    const {
      className,
      id,
      extensions,
      isDisabled,
      category,
      type,
      theme,
      children,
      fw,
    } = this.props
    const {
      fileName
    } = this.state
    return (
      <div
        className={clsx(
          'button-file',
          {
            [`button-file--${type}`]: type,
            [`button-file--${category}`]: category,
            [`button-file--${theme}`]: theme,
            'button-file--disabled': isDisabled,
          },
          className
        )}
      >
        <label
          className={clsx(
            "button-file__label",
          )}
          htmlFor={id}
        >
          <Text 
            fw={fw}
          >
            {children}
          </Text>
          <input 
            id={id}
            className="button-file__input"
            type="file"
            onChange={this.onChange}
            accept={extensions}
            disabled={isDisabled}
          />
        </label>
        <Text
          color="grey"
          size="small"
          fw="medium"
          className="button-file__text"
        >
          {fileName}
        </Text>
      </div>
    )
  }
}

ButtonFile.defaultProps = {
  className: '',
  id: 'button-file',
  onChange: null,
  isDisabled: false,
  extensions: null,
  theme: null,
  type: 'row',
  category: null,
  children: '',
  fw: null,
}

ButtonFile.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
  extensions: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  category: PropTypes.oneOf([null, 'secondary', 'tertiary', 'grey']),
  type: PropTypes.oneOf([null, 'row', 'col']),
  children: PropTypes.node,
  fw: PropTypes.oneOf([null, 'bold', 'light', 'medium']),
}

export default ButtonFile
