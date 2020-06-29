import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './MultiSelect.scss'
import Checkbox from 'components/molecules/forms/checkboxs/Checkbox'

class MultiSelect extends Component {
  constructor(){
    super()
    this.state = {checkedOptions:[]}
    this.onChange = this.onChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const {selected} = this.props
    if (selected !== nextProps.selected) {
      this.setState({checkedOptions: nextProps.selected})
    }
  }

  onChange(event) {
    const {onChange, mode, id} = this.props
    let {checkedOptions} = this.state
    const pos = checkedOptions.indexOf(event.target.value)

    if (mode==='single') {
      if (pos === -1 && event.target.checked) {
        checkedOptions=[event.target.value]
      } else {
        checkedOptions=[]
      }
    } else if (mode==='multiple') { // mode = 'multiple'
      if (pos === -1) {
        checkedOptions.push(event.target.value)
      } else {
        checkedOptions.splice(pos, 1)
      }
    }

    this.setState({checkedOptions})
    onChange({id, values: checkedOptions})
  }

  render () {
    const {
      className,
      itemClassName,
      options,
      theme,
    } = this.props
    const {
      checkedOptions
    } = this.state
    return (
      <div
        className={clsx(
          'multiselect',
          className
        )}
      >
        {options && options.map((option, index)=>(
          <Checkbox
            className={itemClassName}
            key={index.toString()}
            label={option}
            onChange={this.onChange}
            checked={checkedOptions.indexOf(option)>-1}
            value={option}
            theme={theme}
          />
        ))}
      </div>
    )
  }
}

MultiSelect.defaultProps = {
  className: '',
  itemClassName: '',
  id: null,
  options: null,
  onChange: null,
  selected: null,
  mode: 'multiple',
  theme: null
}

MultiSelect.propTypes = {
  className: PropTypes.string,
  itemClassName: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  selected: PropTypes.array,
  mode: PropTypes.oneOf(['multiple', 'single']),
  theme: PropTypes.oneOf([null, 'men', 'women'])
}

export default MultiSelect
