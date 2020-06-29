import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './MultiSizesSelect.scss'
import SizeCheckBox from 'components/molecules/forms/checkboxs/SizeCheckBox'

class MultiSizesSelect extends Component {
  constructor(){
    super()
    this.state = {selected:[]}
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    const {selected} = this.props
    this.setState({selected})
  }

  componentWillReceiveProps(nextProps) {
    const {selected} = this.props
    if (selected !== nextProps.selected) {
      this.setState({selected: nextProps.selected})
    }
  }

  onChange(event) {
    const {onChange, mode, name} = this.props
    let {selected} = this.state
    selected = selected || []
    const pos = selected.indexOf(event.target.value)

    if (mode==='single') {
      if (pos < 0 && event.target.checked) {
        selected=[event.target.value]
      } else {
        selected=[]
      }
    } else if (mode==='multiple') { // mode = 'multiple'
      if (pos < 0 && event.target.checked) {
        selected.push(event.target.value)
      } else {
        selected.splice(pos, 1)
      }
    }
    this.setState({selected})
    onChange({name, selected})
  }

  render () {
    const {
      className,
      name,
      options,
    } = this.props

    const {
      selected
    } = this.state

    return (
      <div
        className={clsx(
          'multi-sizes-select',
          className
        )}
      >
        {options && options.map((option, index)=>(
          <SizeCheckBox
            key={index.toString()}
            className="multi-sizes-select__item"
            name={name}
            label={option.label}
            value={option.value}
            image={option.image}
            onChange={this.onChange}
            checked={selected && selected.indexOf(option.value)>-1}
          />
        ))}
      </div>
    )
  }
}

MultiSizesSelect.defaultProps = {
  className: '',
  name: null,
  options: null,
  onChange: null,
  selected: null,
  mode: 'multiple'
}

MultiSizesSelect.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  selected: PropTypes.array,
  mode: PropTypes.oneOf(['multiple', 'single'])
}

export default MultiSizesSelect
